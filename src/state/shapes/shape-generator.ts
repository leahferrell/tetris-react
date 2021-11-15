import {totalNumShapes} from '../../data/shapes'
import {ShapeState} from './shape-types'

export const generateNextShape = (): ShapeState => {
  const shapeTypeId = Math.floor(Math.random() * totalNumShapes)
  const shape: ShapeState = {
    type: shapeTypeId,
    orientation: 0
  }

  return shape
}
