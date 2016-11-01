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

	$('#fadeInButton').on('click', function() {
		$('#panel1').fadeIn(750);
		$('#panel2').fadeIn(750);
		$('#panel3').fadeIn(750);
	});

	$('#fadeOutButton').on('click', function() {
		$('#panel1').fadeOut(750);
		$('#panel2').fadeOut(750);
		$('#panel3').fadeOut(750);
	});

	$('#fadeToggleButton').on('click', function() {
		$('#panel1').fadeToggle(750);
		$('#panel2').fadeToggle(750);
		$('#panel3').fadeToggle(750);
	});

	$('#toggleButton').on('click', function() {
		$('#panel1').toggle(750);
		$('#panel2').toggle(750);
		$('#panel3').toggle(750);
	});

	$('#turnRedButton').on('click', function() {
		$('.headers').css({
			backgroundColor: 'red',
		});
	});

});