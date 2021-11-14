import React from 'react'
import {moveToTheSide, rotate, tick} from '../game-controller/game-controller'
import {AppDispatch, RootState} from '../../state/store'
import {swapHold} from '../../state/shapes/shapes-slice'
import {pause} from '../../state/game/game-slice'

interface KeyPressHandlerType {
	[index: string]: () => any
}

const keyPressHandler: KeyPressHandlerType = {
	ArrowDown: tick, // drop soft
	ArrowLeft: () => moveToTheSide(-1), // move left
	ArrowRight: () => moveToTheSide(1), // move right
	ArrowUp: () => rotate(1), // rotate
	' ': () => {
		console.log('drop: hard')
	}, // hard drop
	p: pause,
	P: pause,
	Shift: swapHold // hold
}

export const handleKeyPress = (event: React.KeyboardEvent) => (dispatch: AppDispatch, getState: () => RootState) => {
	const handler = keyPressHandler[event.key]
	handler && dispatch(handler())
}