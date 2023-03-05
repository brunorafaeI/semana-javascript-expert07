export default class View {
  #btnStart = document.querySelector("button#btn-start")
  #infoStatus = document.querySelector("output#info-status")

  enableButton() {
    this.#btnStart.disabled = false
  }

  onBtnClick(fn) {
    this.#btnStart.addEventListener('click', fn)
  }

  log(text) {
    this.#infoStatus.innerHTML = `Logger: ${text}`
  }

}
