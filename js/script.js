console.log('js');


$(document).ready(function(){
  $('body').click(function(){
    $(this).css('background', 'maroon');
  });

  $('#all').click(function(){
    $('.all').show();
  });

  $('#beer').click(function(){
    $('.all').hide();
    $('.beer').show();
  });

  $('#wine').click(function(){
    $('.all').hide();
    $('.wine').show();
  });

  $('#vegan').click(function(){
    $('.all').hide();
    $('.vegan').show();
  });

  $('#dessert').click(function(){
    $('.all').hide();
    $('.dessert').show();
  });

  $('#drinks').click(function(){
    $('.all').hide();
    $('.drinks').show();
  });

  $('#food').click(function(){
    $('.all').hide();
    $('.food').show();
  });

  $('#nonveg').click(function(){
    $('.all').hide();
    $('.nonveg').show();
  });

});
