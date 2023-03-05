import CardsController from "./../controllers/cardsController.js"
import CardsView from "./../views/cardsView.js"
import CardsService from "./../services/cardsService.js"

const cardListWorker = new Worker(
  "./src/workers/cardListWorker.js",
  { type: "module" }
)

const factory = {
  async initialize() {
    return CardsController.initialize({
      worker: cardListWorker,
      view: new CardsView(),
      service: new CardsService({ cardListWorker })
    })
  }
}

export default factory