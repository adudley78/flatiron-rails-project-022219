// new for class/constructor model
function Issue(attributes) {
  this.description = description
  this.id = attributes.id
}

Issue.prototype.renderLi = function() {
  
}


$(function(){
  // hijack normal Rails form behavior
  $("#new_issue").on("submit", function(e){
    // debugger
    $.ajax({
      type: ($("input[name='_method']").val() || this.method),
      url: this.action,
      data: $(this).serialize(),
      success: function(response) {
        $('#issue_description').val("")

        // new for class/constructor model
        var issue = new Issue(json)
        var issueLi = issue.renderLi()

        var $ol = $(".issues ol")
        $ol.append(response)
      }
    })
    e.preventDefault()
  })
  var id = $("#project-id").text()
    // console.log("Hello world!")
  $.get(`http://localhost:3000/projects/${id}.json`).done( function(project) {
    // console.log(project)
    var $div = $("div.issues")
    $div.append("<ol>")
    var $ol = $(".issues ol")
      project.issues.forEach( function (issue) {
        // create a new instance of issue, class/constructor pattern
        // console.log(issue)
        function Issue(description) {
            this.description = description
        }

        // Issue.prototype.toString = function () {
        //   return
        // }

        // build a big HTML string and ...
        $ol.append(`<li>${issue.description} ${issue.id ? `<a href="/projects/${project.id}/issues/${issue.id}", data-method="delete">Delete</a>` : null}</li>`)
      })
      // ... inject it into the DOM
    $div.append("</ol>")
  })
})

// create Issue class, li on line 24, create a new issue on iteration, issue.template
// })
