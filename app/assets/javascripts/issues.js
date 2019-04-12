$(function(){
  $("#new_issue").on("submit", function(e){
$.ajax({
  type: ($("input[name='_method']").val() || this.method),
  url: this.action,
  data: $(this).serialize(),
  success: function(response) {
    $('#issue_description').val("")
    var $ol = $(".issues ol")
    $ol.append(response)
  }
})
e.preventDefault()
})
})
