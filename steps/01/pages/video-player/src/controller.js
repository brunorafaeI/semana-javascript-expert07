export default class Controller {
  #view
  #service
  #worker
  
  constructor({ view, service, worker }) {
    this.#view = view
    this.#service = service
    this.#worker = worker
  }

  async init() {    
    const text = "Not yet detecting eye blink! Click in the button to start!"
    this.#view.log(text)

    this.#configureWorker()
  }

  #configureWorker() {
    this.#worker.onmessage = (msg) => {      
      if ("READY" === msg.data) {
        this.#view.enableButton()
        this.#view.onBtnClick(this.onBtnStart.bind(this))
      }
    }
  }

  static async initialize(deps) {
    return new Controller(deps).init()
  }

  onBtnStart() {
    this.#view.log(`Initializing detection...`)
  }

}