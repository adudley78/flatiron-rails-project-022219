// alert("Hello from Rails!")

// function Project(name) {
//   this.name = name
//   Project.all.push(this)
// }

class Project {
  static all = []

  constructor(name) {
    this.name = name
    Project.all.push(this)
  }

  render() {
    return `
      <ol>
        <li>${this.name}<li>
      </ol>
    `
  }
  static listProjects() {
    let list = document.getElementById{'list'}
    list.innerHTML = " "
    Project.all.forEach(project => list.innerHTML += project.render())
}
}

function createProjects() {
  // send fetch to index and iterate
  let name = document.getElementById('#project_name').val()

  let project = new Project(name)

  document.getElementById("name").value = ""

Project.listProjects()

}

// Project.protoype.render = function () {
//   return `
//   <ol>
//     <li>${this.name}<li>
//   </ol>
//   `
// }

// Project.listProjects = function() {
//   let list = document.getElementByID{'list'}
//   list.innerHTML = " "
//   Project.all.forEach(project => list.innerHTML += project.render())
// }

// Project.all = []
