import {ReactElement} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import ShapeWindow from '../../components/shape-window/shape-window'
import {handleOnTouchHoldContainer} from '../../controllers/input-controller/touch-controller'
import {RootState} from '../../state/store'

export const NextShapeWindow = (): ReactElement => {
  const next = useSelector((state: RootState) => state.next)

  return (
    <ShapeWindow title="Next" shape={next}/>
  )
}

export const HoldShapeWindow = (): ReactElement => {
  const hold = useSelector((state: RootState) => state.hold)
  const dispatch = useDispatch()

  return (
    <ShapeWindow
      title="Hold"
      shape={hold}
      onTouchStart={() => dispatch(handleOnTouchHoldContainer())}
    />
  )
}
