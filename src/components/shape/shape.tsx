import {ShapeProps} from '../../state/shapes/shapes-slice'
import Block from '../block/block'
import {availableShapes, BlockColor} from '../../data/shapes'
import './shape.scss'

const Shape = ({type, orientation, position}: ShapeProps) => {
	if (type == null) {
		return <div/>
	}

	const renderedShape = availableShapes[type].bitmap[orientation].map((row, rowIx) => {
		const renderedRow = row.map((isFilled, columnIx) => {
			return (
				<Block
					key={`shape-block-${rowIx}-${columnIx}`}
					isGhosted={false}
					color={isFilled? availableShapes[type].color : BlockColor.Empty}
				/>
			)
		})

		return (
			<div className='shape__row' key={`shape-row-${rowIx}`}>
				{renderedRow}
			</div>
		)
	})

	return (
		<div className='shape'>{renderedShape}</div>
	)
}

export default Shape
