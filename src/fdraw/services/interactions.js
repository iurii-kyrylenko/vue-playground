const bind = (elem, actions) => {
  let cStart

  elem.addEventListener('mousedown', (event) => {
    cStart = { x: event.clientX, y: event.clientY }
  })
  elem.addEventListener('mouseup', (event) => {
    const cEnd = { x: event.clientX, y: event.clientY }
    actions.move(cEnd.x - cStart.x, cEnd.y - cStart.y)
  })
  elem.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
      case 107: case 187: actions.zoomIn(); break
      case 109: case 189: actions.zoomOut(); break
      default: return
    }
  })

  // to do: touch events
}

export default {
  bind
}
