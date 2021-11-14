import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {handleKeyPress} from '../../controller/input-controller/input-controller'
import {RootState} from '../../state/store'

import './tetris-page.scss'
import GameView from '../../views/game-view/game-view'

const TetrisPage = () => {
	const isPaused = useSelector((state: RootState) => state.game.paused)
	const tickInterval = useSelector((state: RootState) => state.game.tickInterval)

	const dispatch = useDispatch()

	return (
		<div className="tetris-page" onKeyDown={(event) => dispatch(handleKeyPress(event))} tabIndex={-1}>
			<div className="tetris-page__title">Tetris</div>
			<div className="tetris-page__content">
				<GameView
					isPaused={isPaused}
					tickInterval={tickInterval}
				/>
			</div>
		</div>
	)
}

export default TetrisPage
