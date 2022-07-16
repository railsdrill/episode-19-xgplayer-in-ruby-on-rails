import { Controller } from "@hotwired/stimulus"
import Player from "xgplayer"
export default class extends Controller {
  connect() {
const player = new Player({
    id: 'vs',
    url: document.getElementById("link").textContent,
    width: 1000,
    height: 337.5,
    volume: 0.6,
    autoplay: true
})
  }
}