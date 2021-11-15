import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {BlockProps} from '../../components/block/block'
import {TOTAL_COLUMNS, TOTAL_ROWS} from '../../data/grid'
import {generateInitialGrid} from './grid-generator'

export interface GridState {
  rows: BlockProps[][],
  gutterRows: BlockProps[][]
}

const initialState: GridState = {
  rows: generateInitialGrid(TOTAL_ROWS, TOTAL_COLUMNS),
  gutterRows: generateInitialGrid(TOTAL_ROWS, TOTAL_COLUMNS)
}

export const gridSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
    update: (state: GridState, action: PayloadAction<GridState>) => {
      return action.payload
    },
    clear: () => {
      return initialState
    }
  }
})

export const gridActions = gridSlice.actions
