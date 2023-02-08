import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /** @type {import('./Models/pMonster').pMonster[]} */
  myPmons = []


  /** @type {Object[]} */
  wildPmons = []

  /** @type {import('./Models/pMonster').pMonster[] | null} */
  pmon = null


}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
