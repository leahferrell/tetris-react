import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ShapeType, totalNumShapes} from '../../data/shapes'

export interface Coordinate {
	x: number,
	y: number
}

export interface ShapeProps {
	type: ShapeType,
	orientation: number,
	position?: Coordinate
}

export interface ShapesState {
	next: ShapeProps,
	hold?: ShapeProps,
	current?: ShapeProps
}

export const generateNextShape = () => {
	const shapeTypeId = Math.floor(Math.random() * totalNumShapes)
	const shape: ShapeProps = {
		type: shapeTypeId,
		orientation: 0
	}

	return shape
}

const initialState: ShapesState = {
	next: generateNextShape()
}

export const shapesSlice = createSlice({
	name: 'shapes',
	initialState,
	reducers: {
		swapHold: (state: ShapesState) => {
			if (state.current == null) {
				return state
			}

			if (state.hold == null) {
				return {
					...state,
					hold: state.current,
					current: state.next,
					next: generateNextShape() // TODO: i need to not do this since it's non deterministic, but not sure of a cleaner approach
				}
			}

			return {
				...state,
				hold: state.current,
				current: state.hold
			}
		},
		useNext: (state: ShapesState) => {
			return {
				...state,
				current: state.next,
				next: generateNextShape() // TODO: i need to not do this since it's non deterministic, but not sure of a cleaner approach
			}
		},
		rotateShape: (state: ShapesState) => {
			if (state.current == null) {
				return state
			}

			return {
				...state,
				current: {
					...state.current,
					orientation: (state.current.orientation + 1) % 4
				}
			}
		},
		move: (state: ShapesState, action: PayloadAction<Coordinate>) => {
			if (state.current == null) {
				return state
			}

			return {
				...state,
				current: {
					...state.current,
					position: action.payload
				}
			}
		}
	}
})

export const {swapHold, useNext, rotateShape, move} = shapesSlice.actions

