import * as math from './math.js'
// import { sum } from './math.js'

import './app.css'
import nyancat from './nyancat.jpg';

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = `
    <img src="${nyancat}" />
  `
})

console.log(math.sum(1, 2));

console.log(process.env.NODE_ENV)
console.log(TWO);
