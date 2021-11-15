import React, {ReactElement} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import GameView from '../../containers/game-view/game-view'
import PauseView from '../../containers/pause-view/pause-view'
import {handleKeyPress} from '../../controllers/input-controller/key-press-controller'
import {RootState} from '../../state/store'

import './tetris-page.scss'
import GameOverView from '../../containers/game-over-view/game-over-view'
import StartView from '../../containers/start-view/start-view'

const TetrisPage = (): ReactElement => {
  const gameOver = useSelector((state: RootState) => state.game.gameOver)
  const hasStarted = useSelector((state: RootState) => state.game.hasStarted)
  const isPaused = useSelector((state: RootState) => state.game.paused)
  const tickInterval = useSelector((state: RootState) => state.game.tickInterval)

  const dispatch = useDispatch()

  return (
    <div className="tetris-page" onKeyDown={(event) => dispatch(handleKeyPress(event))} tabIndex={-1}>
      <div className="tetris-page__title">Tetris</div>
      <div className="tetris-page__content">
        {getContent(gameOver, hasStarted, isPaused, tickInterval)}
      </div>
    </div>
  )
}

const getContent = (
  gameOver: boolean,
  hasStarted: boolean,
  isPaused: boolean,
  tickInterval: number
): ReactElement => {
  if (gameOver) {
    return <GameOverView/>
  }

  if (!hasStarted) {
    return <StartView/>
  }

  if (isPaused) {
    return <PauseView/>
  }

  return <GameView
    isPaused={isPaused}
    tickInterval={tickInterval}
  />
}

export default TetrisPage
