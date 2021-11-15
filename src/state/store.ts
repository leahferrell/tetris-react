import {configureStore} from '@reduxjs/toolkit'

import {gameSlice} from './game/game-slice'
import {gridSlice} from './grid/grid-slice'
import {currentSlice} from './shapes/current-slice'
import {holdSlice} from './shapes/hold-slice'
import {nextSlice} from './shapes/next-slice'

export const store = configureStore({
  reducer: {
    current: currentSlice.reducer,
    game: gameSlice.reducer,
    grid: gridSlice.reducer,
    hold: holdSlice.reducer,
    next: nextSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
