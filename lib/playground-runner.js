const defaultOpts = {
  autoClear: false,
  title: 'bdl-playground',
  width: 32,
  height: 80
}

module.exports = (opts = {}, playground = function () {}) => {
  opts = Object.assign({}, defaultOpts, opts)
  process.title = opts.title

  const SerialedController = require('serialed')
  const controller = new SerialedController()

  process.on('SIGINT', controller.close.bind(controller))

  let running = true
  let frameCount = 0
  controller.on('next', () => {
    if (!running) return

    frameCount++
    if (opts.autoClear) controller.clear()

    try {
      playground({
        frameCount,
        width: opts.width,
        height: opts.height,
        pixel,
        fps: controller.fps(),
        clear: controller.clear
      })
    } catch (error) {
      console.error(error)
      running = false
    }
  })

  function pixel ([x, y], rgb = [255, 255, 255]) {
    controller.pixel(x, y, ...rgb)
  }

  return {
    resume: () => { running = true },
    pause: () => { running = false }
  }
}
