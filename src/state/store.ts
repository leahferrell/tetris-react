import {configureStore} from '@reduxjs/toolkit'
import {gridSlice} from './grid/grid-slice'
import {shapesSlice} from './shapes/shapes-slice'
import {gameSlice} from './game/game-slice'

export const store = configureStore({
	reducer: {
		grid: gridSlice.reducer,
		shapes: shapesSlice.reducer,
		game: gameSlice.reducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
