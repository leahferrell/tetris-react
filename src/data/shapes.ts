export enum BlockColor {
  Empty,
  Red,
  Green,
  Blue,
  Purple,
  Yellow,
  Teal,
  Orange
}

export enum ShapeType {
  I,
  O,
  T,
  S,
  Z,
  J,
  L
}

export interface ShapeData {
  bitmap: number[][][],
  color: BlockColor
}

export interface ShapesData {
  [index: number]: ShapeData
}

export const availableShapes: ShapesData = {
  [ShapeType.L]: {
    bitmap: [
      [
        [0,0,1,0],
        [1,1,1,0]
      ],
      [
        [1,0,0,0],
        [1,0,0,0],
        [1,1,0,0]
      ],
      [
        [1,1,1,0],
        [1,0,0,0]
      ],
      [
        [0,1,1,0],
        [0,0,1,0],
        [0,0,1,0]
      ]
    ],
    color: BlockColor.Orange
  },
  [ShapeType.O]: {
    bitmap: [
      [
        [0,1,1,0],
        [0,1,1,0]
      ]
    ],
    color: BlockColor.Yellow
  },
  [ShapeType.T]: {
    bitmap: [
      [
        [0,1,0,0],
        [1,1,1,0]
      ],
      [
        [0,1,0,0],
        [0,1,1,0],
        [0,1,0,0]
      ],
      [
        [1,1,1,0],
        [0,1,0,0]
      ],
      [
        [0,1,0,0],
        [1,1,0,0],
        [0,1,0,0]
      ]
    ],
    color: BlockColor.Purple
  },
  [ShapeType.S]: {
    bitmap: [
      [
        [0,1,1,0],
        [1,1,0,0]
      ],
      [
        [0,1,0,0],
        [0,1,1,0],
        [0,0,1,0]
      ],
      [
        [0,1,1,0],
        [1,1,0,0]
      ],
      [
        [1,0,0,0],
        [1,1,0,0],
        [0,1,0,0]
      ]
    ],
    color: BlockColor.Green
  },
  [ShapeType.Z]: {
    bitmap: [
      [
        [1,1,0,0],
        [0,1,1,0]
      ],
      [
        [0,0,1,0],
        [0,1,1,0],
        [0,1,0,0]
      ],
      [
        [1,1,0,0],
        [0,1,1,0]
      ],
      [
        [0,1,0,0],
        [1,1,0,0],
        [1,0,0,0]
      ]
    ],
    color: BlockColor.Red
  },
  [ShapeType.J]: {
    bitmap: [
      [
        [1,0,0,0],
        [1,1,1,0]
      ],
      [
        [1,1,0,0],
        [1,0,0,0],
        [1,0,0,0]
      ],
      [
        [1,1,1,0],
        [0,0,1,0]
      ],
      [
        [0,0,1,0],
        [0,0,1,0],
        [0,1,1,0]
      ]
    ],
    color: BlockColor.Blue
  },
  [ShapeType.I]: {
    bitmap: [
      [
        [1,1,1,1],
        [0,0,0,0]
      ],
      [
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0]
      ],
      [
        [1,1,1,1],
        [0,0,0,0]
      ],
      [
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0]
      ]
    ],
    color: BlockColor.Teal
  },
}

export const totalNumShapes = Object.keys(availableShapes).length
