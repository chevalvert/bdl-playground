# bdl-playground [<img src="https://github.com/chevalvert.png?size=100" align="right">](http://chevalvert.fr/)
*Basic playground to test [`bdl`](https://github.com/chevalvert/bassins-de-lumiere/) hardware*

<br>

## Installation
```sh
git clone https://github.com/chevalvert/bdl-playground.git bdl-playground
cd bdl-playground
npm install
```
<sup>_Assuming you have [`node` >= 8](https://nodejs.org/en/download/)_</sup>

## Usage

```sh
npm run start # run playground
npm run test  # run serialed native demo
```

###### `playground.js` exposed parameters
```js
module.exports.raf = ({
  frameCount,  // How many frames from the start of bdl
  fps,         // Current frame per seconds (sampled on one second)
  clear,       // clear(): function which clears the stripled when called
  width,       // Width of the LED matrix
  height,      // Height of the LED matrix
  pixel        // pixel([x, y], [r,g,b]) lights up pixel [x;y] with the color rgb
}) => {
  …
}
```
###### `playground.js` options
```js
module.exports.options = {
  title: 'bdl-playground',  // Title of the node process
  autoClear: true           // If set to false, you'll have to manually call clear()
}
```

## License
[MIT.](https://tldrlegal.com/license/mit-license)
