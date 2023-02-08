import { Bcontroller } from "./Controllers/Bcontroller.js";
import { Pcontroller } from "./Controllers/Pcontroller.js";

class App {

  bController = new Bcontroller();

  pController = new Pcontroller();
}

window["app"] = new App();
