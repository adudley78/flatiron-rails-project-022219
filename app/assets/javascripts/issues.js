// Define prototype and class that takes in attributes as an argument
function Issue(attributes){
  this.description = attributes.description;
  this.id = attributes.id;
}

// Render the li of the new issue upon successful form submission
Issue.success = function(json){
  // Create/instantiate new JS object from json of the issue that was just created
  var issue = new Issue(json);
  // Build function on prototype that when called will return equivalent of Rails partial
  var issueLi = issue.renderLI()

  // Inject li into ul
  $("ul.todo-list").append(issueLi)
}

Issue.error = function(response){
  console.log("Yu broke it?", response)
}

Issue.formSubmit = function(e){
  e.preventDefault()
  // Get data needed to submit form via AJAX
  var $form = $(this);
  var action = $form.attr("action");
  var params = $form.serialize();

  // Fire post request and request json
  $.ajax({
    url: action,
    data: params,
    dataType: "json",
    method: "POST"
  })
  // Delegate behavior to prototype
  .success(Issue.success)
  .error(Issue.error)
}

Issue.destroy = function(json){
  var issue = new Issue(json);
  issue.destroy()
}

// Build li component using handlebars
Issue.prototype.$li = function(){
  return $("li#issue_"+this.id)
}

Issue.prototype.destroy = function(){
  this.$li().remove();
}

Issue.destroyListener = function(){
  $("ul.todo-list").on("click", "input.destroy", function(e){
    e.preventDefault();
    // submit this form via ajax and then remove the issue
    var $form = $(this).parent("form");
    var action = $form.attr("action");
    var params = $form.serialize();

    // submit the ajax request
    $.ajax({
      url: action,
      data: params,
      dataType: "json",
      method: "DELETE"
    })
    .success(Issue.destroy)
  })
}

// Hijack form submit event for all forms with id of new_issue (automatic rails id assignment)
Issue.formSubmitListener = function(){
  $('form#new_issue').on("submit", Issue.formSubmit)
}

// On doc ready build component from json object and inject into DOM as HTML using handlebars template
Issue.ready = function(){
  // Read HTML from template

  Issue.templateSource = $("#issue-template").html()
  // Convert into a function that can render the HTML template
  // debugger
  Issue.template = Issue.templateSource ? Handlebars.compile(Issue.templateSource) : null
  Issue.formSubmitListener()
  Issue.destroyListener()
}

// Give template to prototype so it knows how to compile versions of itself and give it instance methods that return HTML we inject
// Properties of this has properties that correspond to handlebars template
Issue.prototype.renderLI = function(){
  return Issue.template(this)
}

$(function(){
  // debugger
  Issue.ready()
})

// // new for class/constructor model
// function Issue(attributes) {
//   this.description = description
//   this.id = attributes.id
// }
//
// $(function() {
//   Issue.templateSource = $("#issue-template").html()
//   Issue.template = Handlebars.compile(Issue.templateSource)
// })
//
// // Issue.template({description: "New Issue Issue"})
//
// Issue.prototype.renderLi = function() {
//   return Issue.template(this)
// }
//
//
// $(function(){
//   // hijack normal Rails form behavior
//   $("#new_issue").on("submit", function(e){
//     // debugger
//     $.ajax({
//       type: ($("input[name='_method']").val() || this.method),
//       url: this.action,
//       data: $(this).serialize(),
//       success: function(response) {
//         $('#issue_description').val("")
//
//         // new for class/constructor model
//         var issue = new Issue(json)
//         var issueLi = issue.renderLi()
//
//         var $ol = $(".issues ol")
//         $ol.append(response)
//       }
//     })
//     e.preventDefault()
//   })
//   var id = $("#project-id").text()
//     // console.log("Hello world!")
//   $.get(`http://localhost:3000/projects/${id}.json`).done( function(project) {
//     // console.log(project)
//     var $div = $("div.issues")
//     $div.append("<ol>")
//     var $ol = $(".issues ol")
//       project.issues.forEach( function (issue) {
//         // create a new instance of issue, class/constructor pattern
//         // console.log(issue)
//         function Issue(description) {
//             this.description = description
//         }
//
//         // Issue.prototype.toString = function () {
//         //   return
//         // }
//
//         // build a big HTML string and ...
//         $ol.append(`<li>${issue.description} ${issue.id ? `<a href="/projects/${project.id}/issues/${issue.id}", data-method="delete">Delete</a>` : null}</li>`)
//       })
//       // ... inject it into the DOM
//     $div.append("</ol>")
//   })
// })
//
// // create Issue class, li on line 24, create a new issue on iteration, issue.template
// // })
