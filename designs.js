
// Select size input
// When size is submitted by the user, call makeGrid()
//function makeGrid() 
$(document).ready(function(){
  $('#sizePicker').submit(function makeGrid(grid){
    $('table tr').remove();// Reset previous grid

    var rows = $('#inputHeight').val();
    var cols = $('#inputWidth').val();
    for (var i = 0; i < rows; i++){
      $('table').append('<tr></tr>');
      for (var j = 0; j < cols; j++){
        $('tr:last').append('<td></td>');
        $('td').attr("class", 'cells');
      }
    }
    grid.preventDefault();
// Select color input
    $('.cells').click(function(event){
      var paint = $('#colorPicker').val();
      $(event.target).css('background-color', paint);
    })
  });
});

// Your code goes here!
