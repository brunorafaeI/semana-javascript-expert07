import dataJson from '../../../../assets/database.js'

export default class CardService {
  #database = []
  #cardListWorker = {}

  constructor({ cardListWorker }) {
    this.#cardListWorker = cardListWorker
  }

  loadCards() {
    this.#database = dataJson
  }

  filterTitles(keyword) {
    const titles = this.#database.filter(
      ({ title }) => !!keyword
        ? title.toLowerCase().includes(keyword.toLowerCase()) 
        : true
      )

    if (keyword) {
      this.#cardListWorker.postMessage({ maxItems: 1e5 })
    }

    const cards = titles.map(
      ({ imageUrl, title, description, show_id, duration }) => ({
        background: imageUrl,
        display_background: "//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhdqwalls.com%2Fdownload%2Finterstellar-gargantua-u4-1920x1080.jpg&f=1&nofb=1",
        title: title,
        description: description,
        show_id: show_id,
        duration: duration
      })
    )

    return cards
  }
}