$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var fullNameInput = $("input#fullName").val();
    var addressInput = $("input#address").val();

    $(".fullName").text(fullNameInput);
    $(".address").text(addressInput);
    $("p").show();
    event.preventDefault();
  });
});
