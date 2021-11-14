import {useSelector} from 'react-redux'

import Grid from '../../components/grid/grid'
import {RootState} from '../../state/store'

const GridContainer = () => {
	const grid = useSelector((state: RootState) => state.grid)

	return (
		<Grid rows={grid.rows}/>
	)
}

export default GridContainer
