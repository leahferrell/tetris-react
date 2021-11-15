import React, {ReactElement} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import GameView from '../../containers/game-view/game-view'
import PauseView from '../../containers/pause-view/pause-view'
import {handleKeyPress} from '../../controllers/input-controller/key-press-controller'
import {RootState} from '../../state/store'

import './tetris-page.scss'

const TetrisPage = (): ReactElement => {
  const isPaused = useSelector((state: RootState) => state.game.paused)
  const tickInterval = useSelector((state: RootState) => state.game.tickInterval)

  const dispatch = useDispatch()

  return (
    <div className='tetris-page' onKeyDown={(event) => dispatch(handleKeyPress(event))} tabIndex={-1}>
      <div className='tetris-page__title'>Tetris</div>
      <div className='tetris-page__content'>
        {
          isPaused ?
            <PauseView/>
            : <GameView
              isPaused={isPaused}
              tickInterval={tickInterval}
            />
        }
      </div>
    </div>
  )
}

export default TetrisPage
