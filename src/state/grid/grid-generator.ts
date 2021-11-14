import {BlockColor} from '../../data/shapes'

export const generateInitialGrid = (numOfRows: number, numOfColumns: number) => {
	return new Array(numOfRows).fill(generateEmptyRow(numOfColumns))
}

export const generateEmptyRow = (numOfColumns: number) => {
	return new Array(numOfColumns).fill({
		isGhosted: false,
		color: BlockColor.Empty
	})
}
