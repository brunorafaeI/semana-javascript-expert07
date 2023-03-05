export default class Camera {

  constructor() {
    this.video = document.createElement('video')
  }
  
  static async init() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error("Browser API getUserMedia not avaible.")
    }

    const videoConfig = {
      audio: false,
      video: {
        width: globalThis.screen.availWidth,
        height: globalThis.screen.availHeight,
        frameRate: {
          ideal: 60
        }
      }
    }

    const stream = await navigator.mediaDevices.getUserMedia(videoConfig)
    const camera = new Camera()

    camera.video.srcObject = stream
    camera.video.height = 240
    camera.video.width = 320

    document.body.append(camera.video)

    await Promise.resolve(camera.video.onloadedmetadata = () => camera.video)

    camera.video.play()

  }
}