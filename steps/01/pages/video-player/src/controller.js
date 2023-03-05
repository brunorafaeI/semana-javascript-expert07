export default class Controller {
  #view
  #service
  
  constructor({ view, service }) {
    this.#view = view
    this.#service = service
  }

  async init() {    
    const text = "Not yet detecting eye blink! Click in the button to start!"

    this.#view.log(text)
    this.#view.enableButton()
    this.#view.onBtnClick(this.onBtnStart.bind(this))
  }

  static async initialize(deps) {
    return new Controller(deps).init()
  }

  onBtnStart() {
    this.#view.log(`Initializing detection...`)
  }

}