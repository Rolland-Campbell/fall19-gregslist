import HouseService from "../services/HouseService.js";


let _houseService = new HouseService()

function _draw() {
  let template = ''
  let house = _houseService.House

  house.forEach((house, index) => {
    template += house.Template
  })
  document.querySelector("#house").innerHTML = template
}

export default class HouseController {
  constructor() {
    console.log("hello from house controller")
    _draw()
  }

  deleteHouse(id) {
    _houseService.deleteHouse(id)
    _draw()
  }

  addHouse(event) {
    event.preventDefault()
    let form = event.target

    let newHouse = {
      squareFootage: form.squareFootage.value,
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      year: form.year.value,
      price: form.price.value,
      imgUrl: form.imgUrl.value,
      description: form.description.value,
    }

    _houseService.addHouse(newHouse)
    _draw()

  }

}
