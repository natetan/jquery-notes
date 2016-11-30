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
	// $('#turnRedButton').on('click', function() {
	// 	if (count % 2 == 0) {
	// 		$('.headers').css({
	// 			backgroundColor: 'red',
	// 		});
	// 		document.querySelector('#turnRedButton').classList.add('btn-danger');
	// 		document.querySelector('#turnRedButton').classList.remove('btn-info');
	// 		$('#turnRedButton').html('Turn Off Red');
	// 	} else {
	// 		$('.headers').css({
	// 			backgroundColor: '#D8F0DF', // this is the color is bg-success
	// 		});
	// 		document.querySelector('#turnRedButton').classList.remove('btn-danger');
	// 		document.querySelector('#turnRedButton').classList.add('btn-info');
	// 		$('#turnRedButton').html('Turn Red');
	// 	}
	// 	count++;
	// });

	$('button').first().siblings().last().on('click', function() {
		if (count % 2 == 0) {
			$('.headers').removeClass('bg-success');
			$('.headers').addClass('bg-danger');
	 		$(this).addClass('btn-danger');
	 		$(this).removeClass('btn-info');
		} else {
			$('.headers').removeClass('bg-danger')
			$('.headers').addClass('bg-success');
			$(this).addClass('btn-info');
			$(this).removeClass('btn-danger');
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

	$('li').first().html('first li in DOM');
	$('li').last().html('last li in DOM');

	// Grabs li of index 2
	$('li').eq(2).html('this is the second index li');

	// Grabs first ui's direct children, so it grabs <li> one-three
	$('ui:first').children(); 

	// Grabs first li's siblings (in the same level hierarchy), so it grabs <li> two-four
	$('li:first').siblings(); 

	// Gets index 4 li's direct parent, which is the sublist ul
	$('li').eq(4).parent();

	// Gets the parent of the sublist, which is the fourth li (index 3 li)
	$('li').eq(4).parent().parent();

	// Get's the fourth li's previous sibling, which is thrid li (index 2)
	$('li').eq(4).parent().parent().prev();

	// Gets the first li's next sibling, which is 2nd li
	$('li').first().next();
	
	// Gets the 5th li index's closest element with the class of listi
	$('li').eq(5).closest('.list');

	// Adding and removing classes
	$('li').on('click', function() {
		$(this).removeClass('special');
		$(this).siblings().addClass('special');
	});

	// Finds all the lis in the element with class of list and adds the special class to only the first
	// $('.list').find('li').filter(':first').addClass('special');
	// Finds all the lis in the element with the class of list with the special class and removes them
	// $('.list').find('li').filter('.special').remove();
	// Exact same thing without the use of filter
	// However, it removes ALL elements with class special, rather than just lis with special
	// $('.list').find('.special').remove();
	// This looks through the entire page to look for special, rather than a certain spot
	// Not very efficient JavaScript
	// $('.special').remove();

	// Checks if the li has the special class and alerts user if it does
	// $('li').on('click', function() {
	// 	$(this).hide();
	// 	if ( $(this).is('.special') ) {
	// 		alert('special!');
	// 	}
	// });


});