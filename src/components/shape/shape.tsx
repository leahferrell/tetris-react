import {ShapeProps} from '../../state/shapes/shapes-slice'
import Block from '../block/block'
import {availableShapes, BlockColor} from '../../data/shapes'
import './shape.scss'

const Shape = ({type, orientation, position}: ShapeProps) => {
	if (type == null) {
		return <div/>
	}

	const bitmap = trimBitmap(availableShapes[type].bitmap[orientation])

	const renderedShape = bitmap.map((row, rowIx) => {
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

const trimBitmap = (bitmap: number[][]) => {
	const trimmedBitmap: number[][] = []
	const removeFirst = bitmap[0][0] === 0 && bitmap[1][0] === 0
	const removeLast = bitmap[0][bitmap[0].length-1] === 0 && bitmap[1][bitmap[0].length-1] === 0

	bitmap.forEach((row) => {
		const trimmedBitmapRow: number[] = []
		row.forEach((block, index) => {
			if ((index !== 0 || !removeFirst) && (index !== row.length-1 || !removeLast)) {
				trimmedBitmapRow.push(block)
			}
		})
		trimmedBitmap.push(trimmedBitmapRow)
	})



	return trimmedBitmap
}

export default Shape
