import {ShapeType} from '../../data/shapes'

export interface Coordinate {
	x: number,
	y: number
}

export interface ShapeProps {
	type: ShapeType,
	orientation: number,
	position?: Coordinate
}

export type NullableShapeState = ShapeProps | null | undefined
