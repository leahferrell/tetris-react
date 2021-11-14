import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Grid from '../../components/grid/grid'
import ShapeWindow from '../../components/shape-window/shape-window'
import {tick} from '../../controller/game-controller/game-controller'
import {handleKeyPress} from '../../controller/input-controller/input-controller'
import {RootState} from '../../state/store'
import StatsView from '../stats-view/stats-view'

import './game-view.scss'

const GameView = () => {
	const grid = useSelector((state: RootState) => state.grid)
	const game = useSelector((state: RootState) => state.game)
	const shapes = useSelector((state: RootState) => state.shapes)

	const [initializedInterval, setInitializedInterval] = useState(false)

	const dispatch = useDispatch()

	useEffect(() => {
		if (!initializedInterval && dispatch != null) {
			setInterval(() => {
				dispatch(tick())
			}, game.tickInterval)
			setInitializedInterval(true)
		}
	}, [dispatch, game.tickInterval, initializedInterval])

	return (
		<div className="game-view-container" onKeyDown={(event) => dispatch(handleKeyPress(event))} tabIndex={-1}>
			<div className="game-view-container__title">Tetris</div>
			<div className="game-view-container__content">
				<div className="game-view-container__content__grid">
					<Grid rows={grid.rows}/>
				</div>
				<div className="game-view-container__content__side-bar">
					<ShapeWindow title="Next" shape={shapes.next}/>
					<ShapeWindow title="Hold" shape={shapes.hold}/>
					<StatsView level={game.level} lines={game.lines} score={game.score}/>
				</div>
			</div>
		</div>
	)
}

export default GameView
