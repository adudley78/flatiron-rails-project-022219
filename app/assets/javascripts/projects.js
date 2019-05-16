// $.ajax(url: "http://localhost:3000/projects.json").done (html) ->
//   $("#projects").append html

  Rails.ajax({
    url: "http://localhost:3000/projects.json",
    type: "get",
    data: "",
    success: function(data) {
      console.log(data)
    },
    error: function(data) {
      console.log("Error!")
    }
  })
