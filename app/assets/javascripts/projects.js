// $(function(){
//   $("input.toggle").on("change", function(){
//     $(this).parents("form").trigger("submit")
//   })
// })

// Loading Comments via AJAX - Replaced by Remote True
$(function() {
  $("a.load_issues").on("click", function(e){
    // Fire some Ajax
    $.ajax({
      method: "GET",
      url: this.href,
      // http://localhost:3000/projects/24/issues
    }).done(function(data) {
      // Get a response (the variable data)
      console.log(data)
      debugger
      // Then load data into the DOM (i.e. add it to the current page)
    })
    // alert("You just clicked on the Load Issues Link!")
    e.preventDefault()
  })
})
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
