import JobsService from "../services/JobsService.js";


let _jobsService = new JobsService()

function _draw() {
  let template = ''
  let jobs = _jobsService.Jobs

  jobs.forEach((jobs, index) => {
    template += jobs.Template
  })
  document.querySelector("#jobs").innerHTML = template
}

export default class JobsController {
  constructor() {
    console.log("hello from job controller")
    _draw()
  }

  deleteJobs(id) {
    _jobsService.deleteJobs(id)
    _draw()
  }

  addJobs(event) {
    event.preventDefault()
    let form = event.target

    let newJobs = {
      jobName: form.jobName.value,
      salary: form.salary.value,
      sickDays: form.sickDays.value,
      imgUrl: form.imgUrl.value,
      description: form.description.value,
    }

    _jobsService.addJobs(newJobs)
    _draw()

  }

}
