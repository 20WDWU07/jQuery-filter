console.log('js');


$(document).ready(function(){
  $('body').click(function(){
    $(this).css('background', 'maroon');
  });

// ---------------------------------------------------
// Example 1a
// ---------------------------------------------------

//   $('#all').click(function(){
//     $('.all').show();
//   });
//
//
//
//   $('#wine').click(function(){
//     $('.all').hide();
//     $('.wine').show();
//   });
//
//   // $('#vegan').click(function(){
//   //   $('.all').hide();
//   //   $('.vegan').show();
//   // });
//
//   $('#dessert').click(function(){
//     $('.all').hide();
//     $('.dessert').show();
//   });
//
//   $('#drinks').click(function(){
//     $('.all').hide();
//     $('.drinks').show();
//   });
//
//   $('#food').click(function(){
//     $('.all').hide();
//     $('.food').show();
//   });
//
//   $('#nonveg').click(function(){
//     $('.all').hide();
//     $('.nonveg').show();
//   });

// ---------------------------------------------------
// Example 1b
// ---------------------------------------------------

// // using jquery filter
//   $('#beer').click(function(){
//     $('.all').hide();
//     $('img').filter('.beer').show(); //see the change in code
//   });

// ---------------------------------------------------
// Example 2
// ---------------------------------------------------

  $('#meals').change(function(){
    // alert(document.getElementById('meals').value);
      $('.all').hide();
    switch (document.getElementById('meals').value) {
      case 'Vegan':
        $('.vegan').show();
        break;
      case 'Non-veg':
        $('.nonveg').show();
        break;

      default:
          $('.food').show();
    }
  });

  $('#drinks').change(function(){
    // alert(document.getElementById('meals').value);
      $('.all').hide();
    switch (document.getElementById('drinks').value) {
      case 'Beer':
        $('.beer').show();
        break;
      case 'Wine':
        $('.wine').show();
        break;
      case 'Others':
        $('.others').show();
        break;
      default:
          $('.drinks').show();
    }
  });
  // $( function() {
  //  $( "#meal" ).selectmenu();
  // });
});
