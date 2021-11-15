import {ReactElement} from 'react'
import {useSelector} from 'react-redux'

import {RootState} from '../../state/store'

import './stats-view.scss'

interface StatProps {
  label: string,
  value: number
}

const Stat = ({ label, value }: StatProps): ReactElement => {
  return (
    <div className='stat'>
      <label>{label}: </label>
      <span>{value}</span>
    </div>
  )
}

const StatsView = (): ReactElement => {
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
