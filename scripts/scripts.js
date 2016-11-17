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

	var count = 0;
	$('#turnRedButton').on('click', function() {
		if (count % 2 == 0) {
			$('.headers').css({
				backgroundColor: 'red',
			});
			document.querySelector('#turnRedButton').classList.add('btn-danger');
			document.querySelector('#turnRedButton').classList.remove('btn-info');
			$('#turnRedButton').html('Turn Off Red');
		} else {
			$('.headers').css({
				backgroundColor: '#D8F0DF', // this is the color is bg-success
			});
			document.querySelector('#turnRedButton').classList.remove('btn-danger');
			document.querySelector('#turnRedButton').classList.add('btn-info');
			$('#turnRedButton').html('Turn Red');
		}
		count++;
	});

	// $('#btn1').html('mouse here!');

	// $('#btn1').on('mouseenter', function() {
	// 	$('#panel2').hide(750);
	// 	$('#btn1').html('mouse enter!');
	// });

	// $('#btn1').on('mouseleave', function() {
	// 	$('#panel2').show(750);
	// 	$('#btn1').html('mouse leave!');
	// });

	// $('#btn2').on('click', function() {
	// 	$('#panel2').find('h3').html('You chaned the text of this header!')
	// });

	// $('#btn3').html('hover over me!');

	// $('#btn3').on('mouseover', function() {
	// 	$('#panel1').toggle(750);
	// });

	// Refactors the code so DRY principle is notviolated

	// Selects all elements with the class 'center-absolute'
	// this keyword gets whatever is selected
	// Grabs the attribute data-panelid
	// Sets chosen panel id (from attr) as the selector
	$('.center-absolute').on('click', function() {
		var panelid = $(this).attr('data-panelid');
		$('#'+panelid).slideToggle(1500);
		$('#'+panelid+' .headers').html('See ya'); // equivalent to CSS selector (#panel1 .headers)
	});

});