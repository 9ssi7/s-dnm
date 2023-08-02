import React from 'react'

type Props = {
  onDragStart: (event: React.DragEvent<HTMLDivElement>) => void
  onDragEnd: (event: React.DragEvent<HTMLDivElement>) => void
  onDragEnter: (event: React.DragEvent<HTMLDivElement>) => void
}

export default function Draggable({ onDragStart, onDragEnter, onDragEnd, children }: React.PropsWithChildren<Props>) {
  return (
    <div draggable onDragStart={onDragStart} onDragEnter={onDragEnter} onDragEnd={onDragEnd} className='sdraggable'>
      {children}
    </div>
  )
}
