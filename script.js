$(document).ready(function(){

  for(var x = 0; x < 16; x++){
    for(var y = 0; y < 16; y++){
      var block = $("<div class='block'></div>");
      block.appendTo('#container');
    }
  }
});
