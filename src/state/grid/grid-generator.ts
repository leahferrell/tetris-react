import {BlockColor} from '../../data/shapes'
import {BlockProps} from '../../components/block/block'

export const generateInitialGrid = (numOfRows: number, numOfColumns: number): BlockProps[][] => {
  return new Array<BlockProps[]>(numOfRows).fill(generateEmptyRow(numOfColumns))
}

export const generateEmptyRow = (numOfColumns: number): BlockProps[] => {
  return new Array<BlockProps>(numOfColumns).fill({
    isGhosted: false,
    color: BlockColor.Empty
  })
}
