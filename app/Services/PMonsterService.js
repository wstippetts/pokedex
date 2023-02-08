import { appState } from "../AppState.js"
import { pMonster } from "../Models/pMonster.js"
import { pokeApi } from "./AxiosService.js"
class PMonsterService {
  async getPmonsList() {
    let res = await pokeApi.get()
    console.log('this is what we get from pokeAPI', res.data.results)
    res = res.data.results
    appState.wildPmons = res.map(m => new pMonster(m))
    console.log('appstate: ', appState.wildPmons)
    appState.emit('wildPmons')
  }

}

export const pMonsterService = new PMonsterService()