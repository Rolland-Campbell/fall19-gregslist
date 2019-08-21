import CarController from "./controllers/CarController.js";
import HouseController from "./controllers/HouseController.js";
import JobsController from "./controllers/JobsController.js";


class App {
  constructor() {
    this.controllers = {
      carController: new CarController(),
      houseController: new HouseController(),
      jobsController: new JobsController()
    }
  }
}

window["app"] = new App()