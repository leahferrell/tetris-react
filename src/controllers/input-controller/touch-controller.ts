import React from 'react'

import {AppDispatch, RootState} from '../../state/store'
import {swapHold} from '../game-controller/game-controller'

export const handleOnTouchHoldContainer = (onTouchEvent: React.TouchEvent) => (dispatch: AppDispatch, getState: () => RootState) => {
	dispatch(swapHold())
}
