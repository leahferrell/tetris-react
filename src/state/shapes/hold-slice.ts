import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {NullableShapeState, ShapeProps} from './shape-types'

const initialState: NullableShapeState = null as NullableShapeState

export const holdSlice = createSlice({
	name: 'hold',
	initialState,
	reducers: {
		update: (state: NullableShapeState, action: PayloadAction<ShapeProps>) => {
			if (action.payload != null) {
				return action.payload
			} else {
				return state
			}
		}
	}
})

export const holdActions = holdSlice.actions
