export default class Jobs {
  constructor(data) {
    this._id = data._id || Math.floor(Math.random() * 400000)
    this.jobName = data.jobName
    this.salary = data.salary
    this.sickDays = data.sickDays
    this.imgUrl = data.imgUrl
    this.description = data.description || "No description provided"
  }

  get Template() {
    return `
      <div class="col-4 border">
        <h1>${this.jobName}</h1>
        <h3>${this.salary}</h3>
        <h3>${this.sickDays}</h3>
        <img src="${this.imgUrl}" alt="" height="auto" width="auto">
        <p>${this.description}</p>
        <button class="btn btn-danger" onclick="app.controllers.jobsController.deleteJobs(${this._id})">Delete Job</button>
      </div>
    `
  }
}