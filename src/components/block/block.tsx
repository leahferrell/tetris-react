import './block.scss'
import {BlockColor} from '../../data/shapes'

export interface BlockProps {
	isGhosted: boolean,
	color: BlockColor
}

const Block = ({ isGhosted, color }: BlockProps) => {
	const classNames = [
		'block',
		BlockColor.Empty !== color && `block--${BlockColor[color].toLowerCase()}`,
		isGhosted && 'block--ghosted'
	].filter( Boolean ).join(' ')

	return (
		<div className={classNames}/>
	)
}

export default Block
