import './shape-window.scss'
import Shape from "../shape/shape";
import {TouchEventHandler} from 'react'
import {NullableShapeState} from '../../state/shapes/shape-types'
import {handleOnTouchHoldContainer} from '../../controller/input-controller/input-controller'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../state/store'

export interface ShapeWindowProps {
	onTouchStart?: TouchEventHandler | undefined,
	title: string,
	shape: NullableShapeState
}

const ShapeWindow = ({ title, shape, onTouchStart }: ShapeWindowProps) => {
	return (
		<div onTouchStart={onTouchStart} className='shape-window'>
			<p>{title}</p>
			{shape && <Shape {...shape} /> }
		</div>
	)
}

export const NextShapeWindow = () => {
	const next = useSelector((state: RootState) => state.next)

	return (
		<ShapeWindow title='Next' shape={next} />
	)
}

export const HoldShapeWindow = () => {
	const hold = useSelector((state: RootState) => state.hold)
	const dispatch = useDispatch()

	return (
		<ShapeWindow
			title='Hold'
			shape={hold}
			onTouchStart={(event) => dispatch(handleOnTouchHoldContainer(event))}
		/>
	)
}

export default ShapeWindow
