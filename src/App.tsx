import React from 'react'
import './App.css'
import GameView from './views/game-view/game-view'
import {useSelector} from 'react-redux'
import {RootState} from './state/store'
import PauseMenu from './views/pause-menu/pause-menu'

function App() {
	const isPaused = useSelector((state: RootState) => state.game.paused)
  return (
    <div className='app'>
			{isPaused ? <PauseMenu/> : <GameView/>}
    </div>
  );
}

export default App;
