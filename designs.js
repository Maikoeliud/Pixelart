/* color input */

var height, size, color;
/*  size input */
/* Declare variables */
$('#sizePicker').submit( function(event){
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid(height , width);
})
/* The user inputs the size of the grid */ 


function makeGrid(a,b) {
	$('tr').remove();

for (var m = 1; m <= a; m++) {
	$('#pixelCanvas').append('<tr id = table' + m + '></tr>');

for (var n = 1; n <= b; n++) {
	$('#table' + m ).append('<td></td>');
	}}

	$('td').click(function colorIn(){
		color = $('#colorPicker').val()
	

	if($(this).attr('style')){
		$(this).removeAttr('style')
	}
	else{
		$(this).attr('style', 'background-color:' + color);
	}
	})
}
 /* End of the code */

