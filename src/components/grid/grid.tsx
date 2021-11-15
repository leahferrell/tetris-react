import {ReactElement} from 'react'

import Block, {BlockProps} from '../block/block'

import './grid.scss'

interface GridProps {
  rows: BlockProps[][]
}

const Grid = ({rows}: GridProps): ReactElement => {
  const gridContents = rows.map((row, rowIx) => {
    const renderedRow = row.map((block, columnIx) => {
      return (
        <Block
          key={`block-${rowIx}-${columnIx}`}
          isGhosted={block.isGhosted}
          color={block.color}
        />
      )
    })

    return (
      <div className="grid__row" key={`grid-row-${rowIx}`}>
        {renderedRow}
      </div>
    )
  })

  return (
    <div className="grid">
      {gridContents}
    </div>
  )
}

export default Grid
