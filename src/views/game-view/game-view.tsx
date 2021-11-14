import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'

import {GridContainer} from '../../components/grid/grid'
import {HoldShapeWindow, NextShapeWindow} from '../../components/shape-window/shape-window'
import {tick} from '../../controller/game-controller/game-controller'
import StatsView from '../stats-view/stats-view'

import './game-view.scss'

interface GameViewProps {
	isPaused: boolean,
	tickInterval: number
}

const GameView = ({ isPaused, tickInterval }: GameViewProps) => {
	const [currentInterval, setCurrentInterval] = useState<NodeJS.Timeout | null>(null)

	const dispatch = useDispatch()

	useEffect(() => {
		if (currentInterval != null) {
			clearInterval(currentInterval)
		}

		if (isPaused) {
			setCurrentInterval(null)
		} else {
			const interval = setInterval(() => {
				dispatch(tick())
			}, tickInterval)

			setCurrentInterval(interval)
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
