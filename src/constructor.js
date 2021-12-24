import HTMLElement from './HTMLElement'

// export class HTMLImageElement extends HTMLElement {
//   constructor() {
//     super('img')
//   }
// }

export const HTMLImageElement = wx.createImage().constructor;



export class HTMLCanvasElement extends HTMLElement {
  constructor() {
    super('canvas')
  }
}
