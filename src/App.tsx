import React from 'react'
import './App.scss'
import {HashRouter, Route, Routes} from 'react-router-dom'
import TetrisPage from './pages/tetris/tetris-page'

function App() {
	return (
		<div className="app">
			<HashRouter basename="/">
				<Routes>
					<Route path="/" element={<TetrisPage />} />
				</Routes>
			</HashRouter>
			<footer className='app__footer'>
				made with &hearts; by <a href='https://github.com/leahferrell/tetris-react' target='_blank' rel="noreferrer">leahferrell</a>
			</footer>
		</div>
	)
}

export default App
