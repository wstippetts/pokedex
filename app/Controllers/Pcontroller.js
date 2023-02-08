import { appState } from "../AppState.js"
import { pMonsterService } from "../Services/pMonsterService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPmon() {
  let template = ''
  let wildPmons = appState.wildPmons
  wildPmons.forEach(m => template += m.WildTemplate)
  setHTML('[FOUNDMONSTERS]', template)
}
export class Pcontroller {
  constructor() {
    this.getPmons()
    appState.on('wildPmons', _drawPmon)
    appState.on('myPmons', _drawPmon)

  }

  async getPmons() {
    try {
      await pMonsterService.getPmonsList()
      console.log("running getPmons in controller");
    } catch (error) {
      Pop.error(error.message)

    }
  }
}
