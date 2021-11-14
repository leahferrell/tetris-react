import './shape-window.scss'
import {ShapeProps} from "../../state/shapes/shapes-slice";
import Shape from "../shape/shape";
import {TouchEventHandler} from 'react'

export interface ShapeWindowProps {
	onTouchStart?: TouchEventHandler | undefined,
	title: string,
	shape?: ShapeProps
}

const ShapeWindow = ({ title, shape, onTouchStart }: ShapeWindowProps) => {
	return (
		<div onTouchStart={onTouchStart} className='shape-window'>
			<p>{title}</p>
			{shape && <Shape {...shape} /> }
		</div>
	)
}

export default ShapeWindow
