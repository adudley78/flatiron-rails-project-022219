$(function () {
  $('form').submit(function(event) {
    //prevent form from submitting the default way
    event.preventDefault();
    // alert("we r hack3rz");
    var values = $(this).serialize()

    var posting = $.post('/projects', values)
    // debugger
    posting.done(function(data) {
      // TODO: handle response
      // console.log(data)
      var project = data
      $("projectName").text(project["name"]).val("")
    })
  });
});
