import React from 'react'
import Draggable from './Draggable'
import ManagedDraggable from './Managed'

type Props = {
  className?: string
  onOrderChange: (oldIndex: number, newIndex: number) => void
}

function DraggableContainer({ onOrderChange, children, className }: React.PropsWithChildren<Props>) {
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
      onOrderChange(_currentIdx!, _toIdx!)
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
            className={className}
          >
            {child}
          </Draggable>
        )
      })}
    </>
  )
}

DraggableContainer.Managed = ManagedDraggable

export default DraggableContainer
