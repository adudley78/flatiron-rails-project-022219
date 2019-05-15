// Class responsible for creating new projects
class CreateProjects

  function Project(attributes){
    this.description = attributes.description;
    this.id = attributes.id;
  }

  CreateProjects.success = function(json){
    var project = new CreateProjects(json);
    var projectLi = project.renderLI()
    // debugger
    $("ul.todo-list").append(projectLi)
    // render project
  }

  CreateProjects.error = function(response){
    console.log("Yu broke it?", response)
  }

  CreateProjects.formSubmit = function(e){
    e.preventDefault()
    var $form = $(this);
    var action = $form.attr("action");
    var params = $form.serialize();

    $.ajax({
      url: action,
      data: params,
      dataType: "json",
      method: "POST"
    })
    .success(CreateProjects.success)
    .error(CreateProjects.error)
  }
}

CreateProjects.prototype.$li = function(){
  return $("li#project_"+this.id)
}

CreateProjects.formSubmitListener = function(){
  $('form#new_project').on("submit", CreateProjects.formSubmit)
}


// Class responsible for getting and operating on a list of projects from internal API
class ProjectsAPI {
  constructor() {
    this.endpoint = 'http://localhost:3000/projects.json'
  }

getProjects() {
  // Make request to API endpoint for list of projects
  fetch(this.endpoint)
    // Translate response to JSON
    .then(response => response.json())
    // Iterated through the returned JSON items
    .then(data => {
      data.forEach(project => {
        // Create a new project for each JSON item
        new Project(project.name)
      })
      // Render all items to the ol element in the DOM
        Project.renderAll()
      }).catch(err => console.error(err))
    }
  }

// Class responsible for represent projects
class Project {
  static all = []

  constructor(name) {
    this.name = name
    if (this.name != "") {
      Project.all.push(this)
    }
  }

  // Render each <tr> (a project) to the ol in the DOM
  render(i) {
    let ol = document.querySelector('ol')
    let html = `
      <li>${this.name}</li>
    `
    ol.innerHTML += html
  }

  // Clear array before showing a new list of retrieved projects
  static clearAll() {
      Project.all = [];
  }

  // Render all the projects
  static renderAll() {
    let ol = document.querySelector('ol')
    ol.innerHTML = ''
    Project.all.forEach((project, i) => {
      project.render(i)
    })
  }
}

// Instantiate a new instance of ProjectsAPI upon page load
window.addEventListener("load", function() {
  new ProjectsAPI().getProjects()
})

// OLD

// function Project(attributes){
//   this.description = attributes.description;
//   this.id = attributes.id;
// }
//
// Project.success = function(json){
//   var project = new Project(json);
//   var projectLi = project.renderLI()
//   // debugger
//   $("ul.todo-list").append(projectLi)
//   // render project
// }
//
// Project.error = function(response){
//   console.log("Yu broke it?", response)
// }
//
// Project.formSubmit = function(e){
//   e.preventDefault()
//   var $form = $(this);
//   var action = $form.attr("action");
//   var params = $form.serialize();
//
//   $.ajax({
//     url: action,
//     data: params,
//     dataType: "json",
//     method: "POST"
//   })
//   .success(Project.success)
//   .error(Project.error)
// }
//
// Project.destroy = function(json){
//   var project = new Project(json);
//   project.destroy()
// }
//
// Project.prototype.$li = function(){
//   return $("li#project_"+this.id)
// }
// Project.prototype.destroy = function(){
//   this.$li().remove();
// }
//
// Project.destroyListener = function(){
//   $("ul.todo-list").on("click", "input.destroy", function(e){
//     e.preventDefault();
//     // submit this form via ajax and then remove the project
//     var $form = $(this).parent("form");
//     var action = $form.attr("action");
//     var params = $form.serialize();
//
//     $.ajax({
//       url: action,
//       data: params,
//       dataType: "json",
//       method: "DELETE"
//     })
//     .success(Project.destroy)
//   })
// }
// Project.formSubmitListener = function(){
//   $('form#new_project').on("submit", Project.formSubmit)
// }
//
// // Project.ready = function(){
// //   Project.templateSource = $("#project-template").html()
// //   // debugger
// //   Project.template = Project.templateSource ? Handlebars.compile(Project.templateSource) : null
// //   Project.formSubmitListener()
// //   Project.destroyListener()
// //   // debugger
// // }
//
// Project.prototype.renderLI = function(){
//   return Project.template(this)
// }
//
// $(function(){
//   Project.ready()
// })
