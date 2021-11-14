import './stats-view.scss'
import {useSelector} from 'react-redux'
import {RootState} from '../../state/store'

const Stat = ({ label, value }: { label: string, value: number }) => {
	return (
		<div className='stat'>
			<label>{label}: </label>
			<span>{value}</span>
		</div>
	)
}

const StatsView = () => {
	const game = useSelector((state: RootState) => state.game)
	return (
		<div className='stats-view-container'>
			<Stat label='Level' value={game.level} />
			<Stat label='Score' value={game.score} />
			<Stat label='Lines' value={game.lines} />
		</div>
	)
}

export default StatsView
