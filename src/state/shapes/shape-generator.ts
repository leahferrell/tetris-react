import {totalNumShapes} from '../../data/shapes'
import {ShapeProps} from './shape-types'

export const generateNextShape = () => {
	const shapeTypeId = Math.floor(Math.random() * totalNumShapes)
	const shape: ShapeProps = {
		type: shapeTypeId,
		orientation: 0
	}

	return shape
}
