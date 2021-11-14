import './stats-view.scss'

const Stat = ({ label, value }: { label: string, value: number }) => {
	return (
		<div className='stat'>
			<label>{label}: </label>
			<span>{value}</span>
		</div>
	)
}

export interface StatsViewProps {
	level: number,
	score: number,
	lines: number
}

const StatsView = ({ level, score, lines }: StatsViewProps) => {
	return (
		<div className='stats-view-container'>
			<Stat label='Level' value={level} />
			<Stat label='Score' value={score} />
			<Stat label='Lines' value={lines} />
		</div>
	)
}

export default StatsView
