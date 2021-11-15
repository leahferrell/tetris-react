import {ReactElement} from 'react'
import {useDispatch} from 'react-redux'

import {newGame} from '../../controllers/game-controller/game-controller'

import './start-view.scss'

const StartView = (): ReactElement => {
  const dispatch = useDispatch()

  return (
    <div className='start-view'>
      <p>Start a game!</p>
      <button onClick={() => dispatch(newGame())}>Start</button>
    </div>
  )
}

export default StartView
