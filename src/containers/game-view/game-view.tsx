import React, {ReactElement, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {HoldShapeWindow, NextShapeWindow} from '../shape-window/shape-window'
import GridContainer from '../grid-container/grid-container'
import {tick} from '../../controllers/game-controller/game-controller'
import {gameActions} from '../../state/game/game-slice'
import {RootState} from '../../state/store'
import StatsView from '../stats-view/stats-view'

import './game-view.scss'

interface GameViewProps {
  isPaused: boolean,
  tickInterval: number
}

const GameView = ({ isPaused, tickInterval }: GameViewProps): ReactElement => {
  const currentInterval = useSelector((state: RootState) => state.game.interval)

  const dispatch = useDispatch()

  useEffect(() => {
    if (currentInterval == null) {
      const interval = setInterval(() => {
        dispatch(tick())
      }, tickInterval)

      dispatch(gameActions.createdInterval(interval))
    }
    // eslint-disable-next-line
	}, [dispatch, tickInterval, isPaused])

  return (
    <React.Fragment>
      <div className="game-view__grid">
        <GridContainer />
      </div>
      <div className="game-view__side-bar">
        <NextShapeWindow />
        <HoldShapeWindow />
        <StatsView />
      </div>
    </React.Fragment>
  )
}

export default GameView
