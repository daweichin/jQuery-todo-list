// checking off completed tasks
// use of on as 'li' created after page loaded
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation(); //stop bubbling events
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    // grabbing new todo text from input
    var todoText = $(this).val();
    // create a new li and add to list
    $("ul").append(
      "<li><span><i class='fas fa-times'></i></span> " + todoText + "</li>"
    );
    $(this).val("");
  }
});

$(".fa-plus").click(function() {
  $("input[type='text'").fadeToggle();
});
