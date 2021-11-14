import {createSlice} from '@reduxjs/toolkit'
import {ShapeProps} from './shape-types'
import {generateNextShape} from './shape-generator'

const initialState: ShapeProps = generateNextShape()

export const nextSlice = createSlice({
	name: 'next',
	initialState,
	reducers: {
		update: () => {
			return generateNextShape() // TODO: fix this
		}
	}
})

export const nextActions = nextSlice.actions
