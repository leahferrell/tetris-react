import {ReactElement} from 'react'
import {useDispatch} from 'react-redux'

import {newGame} from '../../controllers/game-controller/game-controller'

import './game-over-view.scss'

const GameOverView = (): ReactElement => {
  const dispatch = useDispatch()

  return (
    <div className='game-over-view'>
      <p>Game Over</p>
      <button onClick={() => dispatch(newGame())}>Start a new game</button>
    </div>
  )
}

export default GameOverView
