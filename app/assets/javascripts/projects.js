// Submit issues via Ajax ... to be replaced with remote true as well
$(function(){
  $("#new_todo").on("submit", function(e){
    alert("You clicked submit!")

    e.preventDefault()
  })
})

// Load comments with AJAX and replaced by Remote Ture
// $(function(){

//   $("input.toggle").on("change", function(){
//     $(this).parents("form").trigger("submit")
//   })
// })

    // Requesting JSON
// $.get(this.href).success(function(json){
//       // clear the OL html (in case there were stale comments)
//   var $ol = $("div.issues ol")
//   $ol.html("") // emptied the OL
//
//       // iterate over each comment within json
//   json.forEach(function(issue){
//         // with each comment data, append an LI to the OL with the comment content
//     $ol.append("<li>" + issue.description + "</li>")
//     })
//   })
//
// })

// server-side ajax
// $("a.load_issues").on("click", function(e) {
//   $.ajax ({
//     url: this.href,
//     dataType: 'script'
//   })
//
//   e.preventDefault()
//   })
// })

    // load that response into the HTML of the page.


    // debugger
    // $(`div.issues-$(json.items[0].project.id)`)

    // Requesting HTML
    // $.get(this.href).success(function(response) {
    //   console.log(response)
    //   $("div.issues").append(response)
    // })

    // Requesting JSON

      // clear the OL html in case there were stale comments

      // iterate over each issue in json

        // with each issue data, append an LI to the OL with the issue content
        // $ol.append("<li>" + issue.description + "</li>")

    // Fire some Ajax
    // $.ajax({
    //   method: "GET",
    //   url: this.href,
    //   // http://localhost:3000/projects/24/issues
    // }).success(function(response) {
    //   // Get a response (the variable response)
    //   $("div").append(response)
    //   // console.log(response)
    //   // debugger
    //   // Then load data into the DOM (i.e. add it to the current page)
    // }).error(function() {
    //   alert("Something broke!")
    // })
    // alert("You just clicked on the Load Issues Link!")

    // We'd love to use the HREF attribute of that link as the URL for the request
    //
    // Fire some ajax.
  //   $.ajax({
  //     method: "GET",
  //     url: this.href
  //   }).success(function(response){
  //     // Get the response (it's the variable data)
  //     $("div.issues").html(response)
  //     // We'd really want to load that data into the DOM (add it to the current page)
  //   }).error(function(notNeeded){
  //     alert("we broke!!!!")
  // })
  // load that response into the HTML of the page.
