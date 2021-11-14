import {handleKeyPress} from '../../controller/input-controller/input-controller'
import {useDispatch} from 'react-redux'
import {gameSlice} from '../../state/game/game-slice'

const PauseView = () => {
	const dispatch = useDispatch()

	return (
		<div onKeyDown={(event) => dispatch(handleKeyPress(event))} tabIndex={-1}>
			Pause
			<button onClick={() => dispatch(gameSlice.actions.pause())}>Start</button>
		</div>
	)
}

export default PauseView
