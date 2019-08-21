import House from "../models/House.js"

let _state = {
  house: [new House({
    squareFootage: 3000,
    bedrooms: 4,
    bathrooms: 2.5,
    year: 2010,
    price: 300000,
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRicxVQW3IdVcTwFawTuj2phYyB-l-mkEhRrxXtPG7KK1qJXumI",
    description: "Nice place for kids"
  })]
}

export default class HouseService {
  constructor() {
    console.log("hello from house service")
    console.log(_state.house)
  }

  deleteHouse(id) {
    _state.house.forEach((house, i) => {
      if (house._id == id) {
        _state.house.splice(i, 1)
      }
    })
  }

  addHouse(newHouse) {
    _state.house.push(new House(newHouse))
    console.log(_state.house)
  }

  get House() {
    return _state.house.map(house => new House(house))
  }
}