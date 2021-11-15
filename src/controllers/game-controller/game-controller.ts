import {PayloadAction} from '@reduxjs/toolkit'

import {BlockProps} from '../../components/block/block'
import {TOTAL_COLUMNS, TOTAL_ROWS} from '../../data/grid'
import {availableShapes, BlockColor} from '../../data/shapes'
import {gameActions} from '../../state/game/game-slice'
import {gridActions, GridState} from '../../state/grid/grid-slice'
import {currentActions} from '../../state/shapes/current-slice'
import {holdActions} from '../../state/shapes/hold-slice'
import {nextActions} from '../../state/shapes/next-slice'
import {Coordinate, ShapeState} from '../../state/shapes/shape-types'
import {AppDispatch, RootState} from '../../state/store'

export const newGame = () => (dispatch: AppDispatch): void => {
  dispatch(currentActions.clear())
  dispatch(nextActions.clear())
  dispatch(holdActions.clear())
  dispatch(gridActions.clear())
  dispatch(gameActions.start())
}

export const tick = () => (dispatch: AppDispatch, getState: () => RootState): void | PayloadAction<Coordinate> | PayloadAction => {
  const { grid, current, next } = getState()

  const gutter = grid.gutterRows

  // check if shape exists?
  if (current == null) {
    return useNext(dispatch, next)
  }

  // check if shape can be rendered
  const canShapeMove = checkCanShapeMove(gutter, current)

  if (!canShapeMove) {
    const {rowsRemovedCount, newGrid} = removeCompleteRows(grid.rows)

    if (rowsRemovedCount > 0) {
      dispatch(gameActions.removedLines(rowsRemovedCount))
    }

    if (isGameOver()) {
      return dispatch(gameActions.gameOver())
    }

    const gridState: GridState = {
      rows: newGrid,
      gutterRows: newGrid
    }
    dispatch(gridActions.update(gridState))
    return useNext(dispatch, next)
  }

  // render new grid
  const gridState: GridState = {
    rows: renderNewGrid(gutter, current),
    gutterRows: gutter
  }
  dispatch(gridActions.update(gridState))

  // move down one
  const currentPosition = current.position || {x: 3, y: 0} // x = (10 - 4) / 2
  const incrementedPosition = { x: currentPosition.x, y: currentPosition.y + 1 }
  return dispatch(currentActions.move(incrementedPosition))
}

export const moveToTheSide = (movement: number) => (dispatch: AppDispatch, getState: () => RootState): void | PayloadAction => {
  const { grid, current, next } = getState()

  const gutter = grid.gutterRows

  // check if shape exists?
  if (current == null) {
    return useNext(dispatch, next)
  }

  // move left/right
  const currentPosition = current.position || {x: 3, y: 0} // x = (10 - 4) / 2
  const incrementedPosition = { x: currentPosition.x + movement, y: currentPosition.y }

  // check if shape can be rendered
  const canShapeMove = checkCanShapeMove(gutter, {
    type: current.type,
    orientation: current.orientation,
    position: incrementedPosition
  })

  if (!canShapeMove) {
    return
  }

  dispatch(currentActions.move(incrementedPosition))

  // render new grid
  const gridState: GridState = {
    rows: !canShapeMove ? grid.rows : renderNewGrid(gutter, current),
    gutterRows: !canShapeMove ? grid.rows : gutter
  }
  dispatch(gridActions.update(gridState))
}

export const rotate = (increment: number) => (dispatch: AppDispatch, getState: () => RootState): void | PayloadAction => {
  const { grid, current, next } = getState()

  const gutter = grid.gutterRows

  // check if shape exists?
  if (current == null) {
    return useNext(dispatch, next)
  }

  // move left/right
  const currentPosition = current.position || {x: 3, y: 0} // x = (10 - 4) / 2

  // check if shape can be rendered
  const canShapeMove = checkCanShapeMove(gutter, {
    type: current.type,
    orientation: (current.orientation + increment) % 4,
    position: currentPosition
  })

  if (!canShapeMove) {
    return
  }

  dispatch(currentActions.rotate())

  // render new grid
  const gridState: GridState = {
    rows: !canShapeMove ? grid.rows : renderNewGrid(gutter, current),
    gutterRows: !canShapeMove ? grid.rows : gutter
  }
  dispatch(gridActions.update(gridState))
}

export const useNext = (dispatch: AppDispatch, next: ShapeState): void | PayloadAction => {
  dispatch(currentActions.update(next))
  return dispatch(nextActions.update())
}

export const swapHold = () => (dispatch: AppDispatch, getState: () => RootState): void | PayloadAction => {
  const { current, hold, next } = getState()

  if (hold != null) {
    dispatch(currentActions.update(hold))
  } else {
    dispatch(currentActions.update(next))
    dispatch(nextActions.update())
  }

  if (current != null) {
    dispatch(holdActions.update(current))
  }
}

const isGameOver = (): boolean => {
  return false
}

const removeCompleteRows = (grid: BlockProps[][]) => {
  const newGrid = grid.filter((row) =>
  // row is not complete
    row.findIndex((block) => block.color === BlockColor.Empty) !== -1
  )

  const completedRowsCount = TOTAL_ROWS - newGrid.length

  for (let i = 0; i < completedRowsCount; i++) {
    newGrid.unshift(new Array<BlockProps>(TOTAL_COLUMNS)
      .fill({
        isGhosted: false,
        color: BlockColor.Empty
      }))
  }

  return {
    rowsRemovedCount: completedRowsCount,
    newGrid: newGrid
  }
}

const computeShapeCoordinates = (shape: ShapeState) => {
  const shapeData = availableShapes[shape.type]
  const bitmap = shapeData.bitmap[shape.orientation]
  const position = shape.position || {x: 3, y: 0} // x = (10 - 4) / 2
  const coordinates: Coordinate[] = []

  bitmap.forEach((row, yIx) => {
    row.forEach((bit, xIx) => {
      if (bit === 1) {
        coordinates.push({
          x: position.x + xIx,
          y: position.y + yIx
        })
      }
    })
  })

  return coordinates
}

const checkCanShapeMove = (gutter: BlockProps[][], shape: ShapeState) => {
  const shapeCoordinates = computeShapeCoordinates(shape)

  for (const coordinate of shapeCoordinates) {
    // check if in bounds
    if (coordinate.x >= TOTAL_COLUMNS || coordinate.x < 0) return false
    if (coordinate.y >= TOTAL_ROWS || coordinate.y < 0) return false

    // check if block exists
    const existingBlock = gutter[coordinate.y][coordinate.x]

    if (existingBlock.color !== BlockColor.Empty) {
      return false
    }
  }

  return true
}

const renderNewGrid = (gutter: BlockProps[][], shape: ShapeState) => {
  // copy existing gutter
  const newGrid: BlockProps[][] = []

  gutter.forEach((row) => {
    const newGridRow: BlockProps[] = []
    row.forEach((block) => {
      newGridRow.push(block)
    })
    newGrid.push(newGridRow)
  })

  const shapeCoordinates = computeShapeCoordinates(shape)

  shapeCoordinates.forEach((coordinate) => {
    newGrid[coordinate.y][coordinate.x] = {
      isGhosted: false,
      color: availableShapes[shape.type].color
    }
  })

  return newGrid
}
