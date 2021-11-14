import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {GridContainer} from '../../components/grid/grid'
import {HoldShapeWindow, NextShapeWindow} from '../../components/shape-window/shape-window'
import {tick} from '../../controller/game-controller/game-controller'
import StatsView from '../stats-view/stats-view'

import './game-view.scss'
import {createdInterval} from '../../state/game/game-slice'
import {RootState} from '../../state/store'

interface GameViewProps {
	isPaused: boolean,
	tickInterval: number
}

const GameView = ({ isPaused, tickInterval }: GameViewProps) => {
	const currentInterval = useSelector((state: RootState) => state.game.interval)

	const dispatch = useDispatch()

	useEffect(() => {
		if (currentInterval == null) {
			const interval = setInterval(() => {
				dispatch(tick())
			}, tickInterval)

			dispatch(createdInterval(interval))
		}
		// eslint-disable-next-line
	}, [dispatch, tickInterval, isPaused])

	return (
		<React.Fragment>
			<div className="game-view__grid">
				<GridContainer />
			</div>
			<div className="game-view__side-bar">
				<NextShapeWindow />
				<HoldShapeWindow />
				<StatsView />
			</div>
		</React.Fragment>
	)
}

export default GameView
