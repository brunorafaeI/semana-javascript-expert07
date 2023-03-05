import Camera from "../../shared/camera.js"
import { supportsWorkerType } from "../../shared/util.js"
import Controller from "./controller.js"
import Service from "./service.js"
import View from "./view.js"

async function getWorker() {
  if (supportsWorkerType()) {
    console.log("It is supported by your browser!")
    return new Worker("./src/worker.js", { type: "module" })
  }

  console.log("It is not supported by your browser!")
  return {
    async postMessage() {},
    onmessage(msg) {}
  }
}

const worker = await getWorker()
worker.postMessage("hey from factory!")

const camera = await Camera.init()

const factory = {
  async initialize() {
    return Controller.initialize({
      view: new View(),
      service: new Service({}),
      worker
    })
  }
}

export default factory