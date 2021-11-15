import {totalNumShapes} from '../../data/shapes'
import {ShapeState} from './shape-types'

export const generateNextShape = (): ShapeState => {
  const shapeTypeId = Math.floor(Math.random() * totalNumShapes)
  return {
    type: shapeTypeId,
    orientation: 0
  }
}
