import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TICK_INTERVAL} from '../../data/game'

export interface GameState {
	gameOver: boolean,
	level: number,
	lines: number,
	paused: boolean,
	remainingLines: number,
	score: number,
	tickInterval: number
}

const initialState: GameState = {
	gameOver: false,
	level: 1,
	lines: 0,
	paused: false,
	remainingLines: 10,
	score: 0,
	tickInterval: TICK_INTERVAL
}

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		removedLines: (state: GameState, action: PayloadAction<number>) => {
			const countRemovedLines = action.payload

			return {
				...state,
				lines: state.lines + countRemovedLines,
				remainingLines: state.remainingLines - countRemovedLines,
				score: state.score + (100 * countRemovedLines)
			}
		},
		pause: (state: GameState) => {
			return {
				...state,
				paused: !state.paused
			}
		}
	}
})

export const { pause, removedLines } = gameSlice.actions
