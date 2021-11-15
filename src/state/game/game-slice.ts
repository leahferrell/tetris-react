import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TICK_INTERVAL} from '../../data/game'

export interface GameState {
  gameOver: boolean,
  interval?: NodeJS.Timeout,
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
  paused: true,
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
      if (state.interval != null) {
        clearInterval(state.interval) // TODO: figure out where to put this since this is a side effect
      }

      return {
        ...state,
        interval: undefined,
        paused: !state.paused
      }
    },
    createdInterval: (state: GameState, action: PayloadAction<NodeJS.Timeout>) => {
      if (state.interval != null) {
        clearInterval(state.interval) // TODO: figure out where to put this since this is a side effect
      }

      return {
        ...state,
        interval: action.payload
      }
    }
  }
})

export const { pause, removedLines, createdInterval } = gameSlice.actions
