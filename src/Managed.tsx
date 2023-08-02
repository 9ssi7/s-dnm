import React from 'react'
import Draggable from './Draggable'
import { move } from './utils'

type ManagedProps<T = any> = {
  list: T[]
  setList: React.Dispatch<React.SetStateAction<T[]>>
}

export default function ManagedDraggable({ list, setList, children }: React.PropsWithChildren<ManagedProps>) {
  const [currentIdx, setCurrentIdx] = React.useState<number | null>(null)
  const [toIdx, setToIdx] = React.useState<number | null>(null)

  const onDragStart = (idx: number) => {
    setCurrentIdx(idx)
  }

  const onDragEnter = (idx: number) => {
    setToIdx(idx)
  }

  const onDragEnd = () => {
    const _currentIdx = currentIdx
    const _toIdx = toIdx
    if (currentIdx !== toIdx) {
      setCurrentIdx(null)
      setToIdx(null)
      setList(move(list, _currentIdx!, _toIdx!))
    }
  }

  return (
    <>
      {React.Children.map(children, (child, idx) => {
        return (
          <Draggable
            key={idx}
            onDragStart={() => onDragStart(idx)}
            onDragEnter={() => onDragEnter(idx)}
            onDragEnd={() => onDragEnd()}
          >
            {child}
          </Draggable>
        )
      })}
    </>
  )
}
