import './shape-window.scss'
import {ShapeProps} from "../../state/shapes/shapes-slice";
import Shape from "../shape/shape";

export interface ShapeWindowProps {
	title: string,
	shape?: ShapeProps
}

const ShapeWindow = ({ title, shape }: ShapeWindowProps) => {
	return (
		<div className='shape-window'>
			<p>{title}</p>
			{shape && <Shape {...shape} /> }
		</div>
	)
}

export default ShapeWindow
