import {ReactElement} from 'react'

import {BlockColor} from '../../data/shapes'

import './block.scss'

export interface BlockProps {
  isGhosted: boolean,
  color: BlockColor
}

const Block = ({ isGhosted, color }: BlockProps): ReactElement => {
  const classNames = [
    'block',
    BlockColor.Empty !== color && `block--${BlockColor[color].toLowerCase()}`,
    isGhosted && 'block--ghosted'
  ].filter( Boolean ).join(' ')

  return (
    <div className={classNames}/>
  )
}

export default Block
