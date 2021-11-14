import React from 'react'
import './App.css'
import GameView from './views/game-view/game-view'
import {useSelector} from 'react-redux'
import {RootState} from './state/store'
import PauseMenu from './views/pause-menu/pause-menu'
import {HashRouter, Route, Routes} from 'react-router-dom'

function App() {
	const isPaused = useSelector((state: RootState) => state.game.paused)
	return (
		<div className="app">
			<HashRouter basename="/">
				<Routes>
					<Route path="/" element={<GameView />} />
				</Routes>
			</HashRouter>
		</div>
	)
}

export default App
