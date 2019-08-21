import Jobs from "../models/Jobs.js"

let _state = {
  jobs: [new Jobs({
    jobName: "Waitress",
    salary: 1500,
    sickDays: 3,
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqs1w6OssMWJW5IHQFN4rlqDJLZTNL8ScF5iFoYV6LMGWhYpzwqw",
    description: "Nice starter job"
  })]
}

export default class JobsService {
  constructor() {
    console.log("hello from jobs service")
    console.log(_state.jobs)
  }

  deleteJobs(id) {
    _state.jobs.forEach((jobs, i) => {
      if (jobs._id == id) {
        _state.jobs.splice(i, 1)
      }
    })
  }

  addJobs(newJobs) {
    _state.jobs.push(new Jobs(newJobs))
    console.log(_state.jobs)
  }

  get Jobs() {
    return _state.jobs.map(jobs => new Jobs(jobs))
  }
}