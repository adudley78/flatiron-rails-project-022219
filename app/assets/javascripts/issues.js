class IssuesAPI {
  constructor() {
    this.endpoint = "http://localhost:3000/"
  }

  getIssues() {

    const projectID = document.getElementById("project-id").innerHTML

    fetch(this.endpoint + `/projects/${projectID}/issues.json`)
    .then(response => (response.json())
    .then(data => {
      // console.log(data)
      data.forEach(issue => {
        new Issues(issue.description)
      })
      Issues.renderAll()
    }).catch(err => console.error(err)))
  }
}

class Issues {
  static all = []

  constructor(description) {
    this.description = description
    if (this.description != "") {
      Issues.all.push(this)
    }
  }

  render(i) {
    let li = document.querySelector('li')
    let html = `
    <ul>
      <li>${this.description}</li>
    </ul>
    `
    li.innerHTML += html
  }

  static clearAll() {
      Issues.all = [];
  }

  static renderAll() {
    let li = document.querySelector('li')
    li.innerHTML = ''
    Issues.all.forEach((issue, i) => {
      issue.render(i)
    })
  }
}

// "http://localhost:3000/projects/234/issues.json"
// hidden field with project ID
// string format => HTML for lis
// load a list of things in DOM

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

window.addEventListener("load", function() {
  new IssuesAPI().getIssues()
  // console.log("This worked!")
})
