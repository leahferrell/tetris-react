import {AppDispatch, RootState} from '../../state/store'
import {Coordinate, move, rotateShape, ShapeProps, useNext} from '../../state/shapes/shapes-slice'
import {BlockProps} from '../../components/block/block'
import {availableShapes, BlockColor} from '../../data/shapes'
import {GridState, update} from '../../state/grid/grid-slice'
import {TOTAL_COLUMNS, TOTAL_ROWS} from '../../data/grid'
import {removedLines} from '../../state/game/game-slice'

export const tick = () => (dispatch: AppDispatch, getState: () => RootState) => {
	const { grid, shapes } = getState()

	const gutter = grid.gutterRows
	const currentShape = shapes.current

	// check if shape exists?
	if (currentShape == null) {
		return dispatch(useNext())
	}

	// check if shape can be rendered
	const canShapeMove = checkCanShapeMove(gutter, currentShape)

	if (!canShapeMove) {
		const {rowsRemovedCount, newGrid} = removeCompleteRows(grid.rows)
		dispatch(removedLines(rowsRemovedCount))

		const gridState: GridState = {
			rows: newGrid,
			gutterRows: newGrid
		}
		dispatch(update(gridState))
		return dispatch(useNext())
	}

	// render new grid
	const gridState: GridState = {
		rows: renderNewGrid(gutter, currentShape),
		gutterRows: gutter
	}
	dispatch(update(gridState))

	// move down one
	const currentPosition = currentShape.position || {x: 3, y: 0} // x = (10 - 4) / 2
	const incrementedPosition = { x: currentPosition.x, y: currentPosition.y + 1 }
	return dispatch(move(incrementedPosition))
}

export const moveToTheSide = (movement: number) => (dispatch: AppDispatch, getState: () => RootState) => {
	const { grid, shapes } = getState()

	const gutter = grid.gutterRows
	const currentShape = shapes.current

	// check if shape exists?
	if (currentShape == null) {
		return dispatch(useNext())
	}

	// move left/right
	const currentPosition = currentShape.position || {x: 3, y: 0} // x = (10 - 4) / 2
	const incrementedPosition = { x: currentPosition.x + movement, y: currentPosition.y }

	// check if shape can be rendered
	const canShapeMove = checkCanShapeMove(gutter, {
		type: currentShape.type,
		orientation: currentShape.orientation,
		position: incrementedPosition
	})

	if (!canShapeMove) {
		return
	}

	dispatch(move(incrementedPosition))

	// render new grid
	const gridState: GridState = {
		rows: !canShapeMove ? grid.rows : renderNewGrid(gutter, currentShape),
		gutterRows: !canShapeMove ? grid.rows : gutter
	}
	dispatch(update(gridState))
}

export const rotate = (increment: number) => (dispatch: AppDispatch, getState: () => RootState) => {
	const { grid, shapes } = getState()

	const gutter = grid.gutterRows
	const currentShape = shapes.current

	// check if shape exists?
	if (currentShape == null) {
		return dispatch(useNext())
	}

	// move left/right
	const currentPosition = currentShape.position || {x: 3, y: 0} // x = (10 - 4) / 2

	// check if shape can be rendered
	const canShapeMove = checkCanShapeMove(gutter, {
		type: currentShape.type,
		orientation: (currentShape.orientation + increment) % 4,
		position: currentPosition
	})

	if (!canShapeMove) {
		return
	}

	dispatch(rotateShape())

	// render new grid
	const gridState: GridState = {
		rows: !canShapeMove ? grid.rows : renderNewGrid(gutter, currentShape),
		gutterRows: !canShapeMove ? grid.rows : gutter
	}
	dispatch(update(gridState))
}

const removeCompleteRows = (grid: BlockProps[][]) => {
	const newGrid = grid.filter((row) =>
		// row is not complete
		row.findIndex((block) => block.color === BlockColor.Empty) !== -1
	)

	const completedRowsCount = TOTAL_ROWS - newGrid.length

	for (let i = 0; i < completedRowsCount; i++) {
		newGrid.unshift(new Array(TOTAL_COLUMNS)
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

const computeShapeCoordinates = (shape: ShapeProps) => {
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

const checkCanShapeMove = (gutter: BlockProps[][], shape: ShapeProps) => {
	const shapeCoordinates = computeShapeCoordinates(shape)

	for (let coordinate of shapeCoordinates) {
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

const renderNewGrid = (gutter: BlockProps[][], shape: ShapeProps) => {
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
