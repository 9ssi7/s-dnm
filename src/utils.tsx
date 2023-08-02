export const move = <T = any,>(list: Array<T>, current: number, to: number): Array<T> => {
  const _list = [...list]
  const movedItem = _list.splice(current, 1)[0]
  _list.splice(to, 0, movedItem)
  return _list
}
