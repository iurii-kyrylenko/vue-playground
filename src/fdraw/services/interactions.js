class Interactions {
  setup (elem, actions) {
    this.elem = elem
    this.actions = actions
  }

  // to do: touch events

  onMouseDown = (event) => {
    this.cStart = { x: event.clientX, y: event.clientY }
  }

  onMouseUp = (event) => {
    const cEnd = { x: event.clientX, y: event.clientY }
    this.actions.move(cEnd.x - this.cStart.x, cEnd.y - this.cStart.y)
  }

  onKeyDown = (event) => {
    switch (event.keyCode) {
      case 107: case 187: this.actions.zoomIn(); break
      case 109: case 189: this.actions.zoomOut(); break
      default: return
    }
  }

  bind () {
    this.elem.addEventListener('mousedown', this.onMouseDown)
    this.elem.addEventListener('mouseup', this.onMouseUp)
    this.elem.addEventListener('keydown', this.onKeyDown)
  }

  unbind () {
    this.elem.removeEventListener('mousedown', this.onMouseDown)
    this.elem.removeEventListener('mouseup', this.onMouseUp)
    this.elem.removeEventListener('keydown', this.onKeyDown)
  }
}

export default new Interactions()
