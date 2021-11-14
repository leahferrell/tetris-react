import './grid.scss'
import Block, {BlockProps} from '../block/block'
import {useSelector} from 'react-redux'
import {RootState} from '../../state/store'

interface GridProps {
	rows: BlockProps[][]
}

const Grid = ({rows}: GridProps) => {
	const gridContents = rows.map((row, rowIx) => {
		const renderedRow = row.map((block, columnIx) => {
			return (
				<Block
					key={`block-${rowIx}-${columnIx}`}
					isGhosted={block.isGhosted}
					color={block.color}
				/>
			)
		})

		return (
			<div className="grid__row" key={`grid-row-${rowIx}`}>
				{renderedRow}
			</div>
		)
	})

	return (
		<div className="grid">
			{gridContents}
		</div>
	)
}

export const GridContainer = () => {
	const grid = useSelector((state: RootState) => state.grid)

	return (
		<Grid rows={grid.rows}/>
	)
}

export default Grid
