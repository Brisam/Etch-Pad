$(document).ready(function(){

  for(var x = 0; x < 16; x++){
    $('#container').append('<div class="row"></div>');

    for(var y = 0; y < 16; y++){
      $('#container').append('<div class="square"></div>');
    }
  };

  //hover effect
  $('.square').hover(function(){
    $(this).addClass("change");
  });

  //button functionality
    //button clears board
  $('#clear').click(function(){
    $('.square').removeClass('change');
    });

  $('#new').click(function(){
    var num = prompt("How many squares?");

    $('#container').empty();

    for(var x = 0; x < num; x++){
      $('#container').append('<div class="row"></div>');

      for(var y = 0; y < num; y++){
        $('#container').append('<div class="square"></div>');
      }
    }

    $('.square').hover(function(){
      $(this).addClass("change");
    });
  });
});
