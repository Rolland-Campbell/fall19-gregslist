

export default class House {
  constructor(data) {
    this._id = data._id || Math.floor(Math.random() * 400000)
    this.squareFootage = data.squareFootage
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.price = data.price
    this.year = data.year
    this.imgUrl = data.imgUrl
    this.description = data.description || "No description provided"
  }

  get Template() {
    return `
      <div class="col-4 border">
        <h1>${this.squareFootage}</h1>
        <h3>${this.bedrooms}</h3>
        <h3>${this.bathrooms}</h3>
        <h3>${this.price}</h3>
        <p>${this.year}</p>
        <img src="${this.imgUrl}" alt="" height="200" width="200">
        <p>${this.description}</p>
        <button class="btn btn-danger" onclick="app.controllers.houseController.deleteHouse(${this._id})">Delete House</button>
      </div>
    `
  }
}