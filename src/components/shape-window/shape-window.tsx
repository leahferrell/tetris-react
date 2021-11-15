import {ReactElement, TouchEventHandler} from 'react'

import {NullableShapeState} from '../../state/shapes/shape-types'
import Shape from '../shape/shape'

import './shape-window.scss'

export interface ShapeWindowProps {
  onTouchStart?: TouchEventHandler | undefined,
  title: string,
  shape: NullableShapeState
}

const ShapeWindow = ({title, shape, onTouchStart}: ShapeWindowProps): ReactElement => {
  return (
    <div onTouchStart={onTouchStart} className="shape-window">
      <p>{title}</p>
      {shape && <Shape {...shape} />}
    </div>
  )
}

export default ShapeWindow
