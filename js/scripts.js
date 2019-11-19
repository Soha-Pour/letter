$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var recipientInput = $("input#recipient").val();

    $(".recipient").text(recipientInput);
    $("p").show();
    event.preventDefault();  
  });
});
