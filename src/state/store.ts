import { configureStore } from '@reduxjs/toolkit'
import { gridSlice } from './grid/grid-slice'
import {shapesSlice} from "./shapes/shapes-slice";
import {gameSlice} from "./game/game-slice";
import logger from 'redux-logger'

export const store = configureStore({
	reducer: {
		grid: gridSlice.reducer,
		shapes: shapesSlice.reducer,
		game: gameSlice.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
