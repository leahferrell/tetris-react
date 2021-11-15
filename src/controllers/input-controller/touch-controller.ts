import {AppDispatch} from '../../state/store'
import {swapHold} from '../game-controller/game-controller'

export const handleOnTouchHoldContainer = () => (dispatch: AppDispatch): void => {
  dispatch(swapHold())
}
