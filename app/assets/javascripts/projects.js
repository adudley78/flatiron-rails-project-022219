function Project(attributes){
  this.description = attributes.description;
  this.id = attributes.id;
}


fetch('http://localhost:3000/projects.json')
  .then(response => response.json())
  // .then(json => console.log(JSON.stringify(json)))
  .then(json => showResults(json))

function showResults(json) {
  document.getElementById('li').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;
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

// $(function(){
//   $("#new_project").on("submit", function(e){
// $.ajax({
//   type: ($("input[name='_method']").val() || this.method),
//   url: this.action,
//   data: $(this).serialize(),
//   success: function(response) {
//     $('#project_name').val("")
//     var $ol = $("div.projects ol")
//     $ol.append(response)
//   }
// })
// e.preventDefault()
// })
// })


// $(function () {
//   $('form').submit(function(event) {
//     //prevent form from submitting the default way
//     event.preventDefault();
//     // alert("we r hack3rz");
//     var values = $(this).serialize()
//
//     var posting = $.post('/projects', values)
//     // debugger
//     posting.done(function(data) {
//       // TODO: handle response
//       // console.log(data)
//       var project = data
//       $("projectName").text(project["name"]).val("")
//     })
//   });
// });
