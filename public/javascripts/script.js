$(function(){
  $('.tooltipped').tooltip({delay: 50});

  $('h2').click(function(){
    var $id = $(this).parent()[0].id;
    window.location = "/vacation/"+ $id;
  });
});
