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
// // Issue.template({description: "New Project Issue"})
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

function Issue(attributes){
  this.description = attributes.description;
  this.id = attributes.id;
}

Issue.success = function(json){
  var issue = new Issue(json);
  var issueLi = issue.renderLI()

  $("ul.todo-list").append(issueLi)
}

Issue.error = function(response){
  console.log("Yu broke it?", response)
}

Issue.formSubmit = function(e){
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
  .success(Issue.success)
  .error(Issue.error)
}

Issue.destroy = function(json){
  var issue = new Issue(json);
  issue.destroy()
}

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

    $.ajax({
      url: action,
      data: params,
      dataType: "json",
      method: "DELETE"
    })
    .success(Issue.destroy)
  })
}
Issue.formSubmitListener = function(){
  $('form#new_issue').on("submit", Issue.formSubmit)
}

Issue.ready = function(){
  Issue.templateSource = $("#issue-template").html()
  Issue.template = Handlebars.compile(Issue.templateSource);
  Issue.formSubmitListener()
  Issue.destroyListener()
}

Issue.prototype.renderLI = function(){
  return Issue.template(this)
}

$(function(){
  Issue.ready()
})
