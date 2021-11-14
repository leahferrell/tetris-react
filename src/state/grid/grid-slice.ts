import {BlockProps} from '../../components/block/block'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {BlockColor} from '../../data/shapes'
import {TOTAL_COLUMNS, TOTAL_ROWS} from '../../data/grid'

export const generateInitialGrid = (numOfRows: number, numOfColumns: number) => {
	return new Array(numOfRows)
		.fill(
			new Array(numOfColumns)
				.fill({
					isGhosted: false,
					color: BlockColor.Empty
				})
		)
}

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
		}
	}
})

export const { update } = gridSlice.actions
