module.exports.options = {
  title: 'bdl-playground',
  autoClear: true
}

module.exports.raf = ({ frameCount, fps, width, height, clear, pixel }) => {
  const white = [10, 10, 10]
  for (let x = 0; x < width; x++) {
    pixel([x, Math.floor(((Math.sin(frameCount * 0.1) + 1) / 2) * height)], white)
  }
}
