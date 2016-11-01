$(document).ready(function() {
	$('#hideButton').on('click', function() {
		$('#panel1').hide(500);
		$('#panel2').hide(750);
		$('#panel3').hide(1000);
	});

	$('#showButton').on('click', function() {
		$('#panel1').show(500);
		$('#panel2').show(750);
		$('#panel3').show(1000);
	});

	$('#slideUpButton').on('click', function() {
		$('#panel1').slideUp(750);
		$('#panel2').slideUp(750);
		$('#panel3').slideUp(750);
	});

	$('#slideDownButton').on('click', function() {
		$('#panel1').slideDown(750);
		$('#panel2').slideDown(750);
		$('#panel3').slideDown(750);
	});
});