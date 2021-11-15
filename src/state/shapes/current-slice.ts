import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {Coordinate, NullableShapeState, ShapeState} from './shape-types'

const initialState: NullableShapeState = null as NullableShapeState

export const currentSlice = createSlice({
  name: 'current',
  initialState,
  reducers: {
    move: (state: NullableShapeState, action: PayloadAction<Coordinate>) => {
      if (state == null) {
        return state
      }

      return {
        ...state,
        position: action.payload
      }
    },
    rotate: (state: NullableShapeState) => {
      if (state == null) {
        return state
      }

      return {
        ...state,
        orientation: (state.orientation + 1) % 4
      }
    },
    update: (state: NullableShapeState, action: PayloadAction<ShapeState>) => {
      if (action.payload != null) {
        return action.payload
      } else {
        return state
      }
    }
  }
})

export const currentActions = currentSlice.actions
