import {useDispatch} from 'react-redux'

import {handleKeyPress} from '../../controllers/input-controller/key-press-controller'
import {gameSlice} from '../../state/game/game-slice'

import './pause-view.scss'

const PauseView = () => {
	const dispatch = useDispatch()

	return (
		<div onKeyDown={(event) => dispatch(handleKeyPress(event))} tabIndex={-1}>
			<p>Pause</p>
			<button onClick={() => dispatch(gameSlice.actions.pause())}>Start</button>
		</div>
	)
}

export default PauseView
