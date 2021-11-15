import {createSlice} from '@reduxjs/toolkit'

import {ShapeState} from './shape-types'
import {generateNextShape} from './shape-generator'

const initialState: ShapeState = generateNextShape()

export const nextSlice = createSlice({
  name: 'next',
  initialState,
  reducers: {
    update: () => {
      return generateNextShape() // TODO: fix this
    },
    clear: () => {
      return generateNextShape()
    }
  }
})

export const nextActions = nextSlice.actions
