import {configureStore} from '@reduxjs/toolkit'
import {gridSlice} from './grid/grid-slice'
import {gameSlice} from './game/game-slice'
import {currentSlice} from './shapes/current-slice'
import {holdSlice} from './shapes/hold-slice'
import {nextSlice} from './shapes/next-slice'

export const store = configureStore({
	reducer: {
		grid: gridSlice.reducer,
		game: gameSlice.reducer,
		current: currentSlice.reducer,
		hold: holdSlice.reducer,
		next: nextSlice.reducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
