import {handleKeyPress} from '../../controller/input-controller/input-controller'
import {useDispatch} from 'react-redux'

const PauseView = () => {
	const dispatch = useDispatch()

	return (
		<div onKeyDown={(event) => dispatch(handleKeyPress(event))} tabIndex={-1}>Pause</div>
	)
}

export default PauseView
