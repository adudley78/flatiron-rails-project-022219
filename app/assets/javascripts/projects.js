function Project(attributes){
  this.name = attributes.name;
  this.id = attributes.id;
}

Project.success = function(json){
  var project = new Project(json);
  var projectLi = project.renderLI()
  // debugger
  $("ul.todo-list").append(projectLi)
  // render project
}

Project.error = function(response){
  console.log("Yu broke it?", response)
}

Project.formSubmit = function(e){
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
  .success(Project.success)
  .error(Project.error)
}

Project.destroy = function(json){
  var project = new Project(json);
  project.destroy()
}

Project.prototype.$li = function(){
  return $("li#project_"+this.id)
}
Project.prototype.destroy = function(){
  this.$li().remove();
}

Project.destroyListener = function(){
  $("ul.todo-list").on("click", "input.destroy", function(e){
    e.preventDefault();
    // submit this form via ajax and then remove the project
    var $form = $(this).parent("form");
    var action = $form.attr("action");
    var params = $form.serialize();

    $.ajax({
      url: action,
      data: params,
      dataType: "json",
      method: "DELETE"
    })
    .success(Project.destroy)
  })
}
Project.formSubmitListener = function(){
  $('form#new_project').on("submit", Project.formSubmit)
}

Project.ready = function(){
  Project.templateSource = $("#project-template").html()
  // debugger
  Project.template = Project.templateSource ? Handlebars.compile(Project.templateSource) : null
  Project.formSubmitListener()
  Project.destroyListener()
  // debugger
}

Project.prototype.renderLI = function(){
  return Project.template(this)
}

$(function(){
  Project.ready()
})
