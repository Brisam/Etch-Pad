$(document).ready(function(){

  for(var x = 0; x < 16; x++){
    $('#container').append("<div class = 'row'></div>");//16 rows in container

    for(var y = 0; y < 16; y++){
      $('#container').append("<div class = 'square'></div>");//16 squares, per row
    }
  }


});
