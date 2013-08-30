$(function() {
  var kaiserModal = picoModal({
    content: $("#kaiserModal")[0],
    autoOpen: false,
    closeButton: false
  });
  var assurantModal = picoModal({
    content: $("#assurantModal")[0],
    autoOpen: false,
    closeButton: false
  });
  var callModal = picoModal({
    content: $("#callModal")[0],
    autoOpen: false,
    closeButton: false
  });
  $("#kaiserPerm a").click(function(e){
    kaiserModal.open();
    e.preventDefault();
  });
  $("#assurantHealth a").click(function(e){
    assurantModal.open();
    e.preventDefault();
  });
  $("#healthNet a").click(function(e){
    callModal.open();
    e.preventDefault();
  });
  $("#united a").click(function(e){
    callModal.open();
    e.preventDefault();
  });
});
