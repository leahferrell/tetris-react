import {ShapeType} from '../../data/shapes'

export interface Coordinate {
	x: number,
	y: number
}

export interface ShapeState {
	type: ShapeType,
	orientation: number,
	position?: Coordinate
}

export type NullableShapeState = ShapeState | null | undefined
