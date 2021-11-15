import {ReactElement} from 'react'
import {useDispatch} from 'react-redux'

import {newGame} from '../../controllers/game-controller/game-controller'
import {handleKeyPress} from '../../controllers/input-controller/key-press-controller'
import {gameSlice} from '../../state/game/game-slice'

import './pause-view.scss'

const PauseView = (): ReactElement => {
  const dispatch = useDispatch()

  return (
    <div className='pause-view' onKeyDown={(event) => dispatch(handleKeyPress(event))} tabIndex={-1}>
      <p>Pause</p>
      <button onClick={() => dispatch(gameSlice.actions.pause())}>Resume</button>
      <button onClick={() => dispatch(newGame())}>Restart</button>
    </div>
  )
}

export default PauseView
