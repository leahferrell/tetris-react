import React from 'react'

import {moveToTheSide, rotate, swapHold, tick} from '../game-controller/game-controller'
import {pause} from '../../state/game/game-slice'
import {AppDispatch, RootState} from '../../state/store'
import {ActionCreatorWithoutPayload, PayloadAction} from '@reduxjs/toolkit'
import {Coordinate} from '../../state/shapes/shape-types'

type ThunkType = () => (dispatch: AppDispatch, getState: () => RootState) => (void | PayloadAction<Coordinate> | PayloadAction)

interface KeyPressHandlerType {
 [index: string]: ThunkType | ActionCreatorWithoutPayload
}

const keyPressHandler: KeyPressHandlerType = {
  ArrowDown: tick, // drop soft
  ArrowLeft: () => moveToTheSide(-1), // move left
  ArrowRight: () => moveToTheSide(1), // move right
  ArrowUp: () => rotate(1), // rotate
  ' ': () => () => {
    console.log('drop: hard')
  }, // hard drop
  p: pause,
  P: pause,
  Shift: swapHold // hold
}

export const handleKeyPress = (event: React.KeyboardEvent) => (dispatch: AppDispatch): void | PayloadAction => {
  const handler = keyPressHandler[event.key]
  handler && dispatch(handler())
}
