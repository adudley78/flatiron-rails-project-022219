$(function(){
  $("input.toggle").on("change", function(){
    $(this).parents("form").trigger("submit")
  })
})

function Project(project) {
  this.name = project.name
  this.status = project.status
}

Project.prototype.formatPrototype = function() {
  projectHTML = `<li>${this.project}</li>`
  return projectHTML
}

$(".new_project").on("submit", function(e) {
  $.post(this.action, $(this).serialize(), function(project) {
    const $ol = $("div.projects")
    const newProject = new Project(project)
    const projectHTML = newProject.formatProject()
  })
})
