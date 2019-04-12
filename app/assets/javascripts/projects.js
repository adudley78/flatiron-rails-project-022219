$(function(){
  $("#new_project").on("submit", function(e){
$.ajax({
  type: ($("input[name='_method']").val() || this.method),
  url: this.action,
  data: $(this).serialize(),
  success: function(response) {
    $('#project_name').val("")
    var $ol = $("div.projects ol")
    $ol.append(response)
  }
})
e.preventDefault()
})
})


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
