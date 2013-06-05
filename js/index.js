$(function(){
  var hollyDiv = $("#hollyProfile");
  var bobDiv = $("#bobProfile");
  var hollyArrow = $("#hollyArrow");
  var bobArrow = $("#bobArrow");

  $("#profiles .profileToggle").click(function(){
    hollyDiv.slideToggle();
    bobDiv.slideToggle();

    if (hollyArrow.html() === "d") {
      // letter d is a down arrow icon.
      // letter c is a right arrow icon.
      hollyArrow.html("c");
      bobArrow.html("d");
    } else {
      hollyArrow.html("d");
      bobArrow.html("c");
    }
  });
});