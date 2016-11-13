# Introduction to jQuery

## Currently deployed on [UW Student Servers](http://students.washington.edu/swifties/jquery-notes/)

## Installation
- `npm install jquery`
- `npm install bootstrap@3`

## Relative links and scripts for `node_modules`
```HTML
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
<!-- Optional theme -->
<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap-theme.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
<!-- jQuery according to node modules -->
<script src="node_modules/jquery/dist/jquery.js"></script>
```

### JavaScript should start with this code snippet
```JavaScript
// This lets all the html and css load before using jQuery on the elements
$(document).ready(function() {
	
	// Code goes here

});
```

## What I've learned

### Lesson 1
- Show and hide
- Fade in and out
- Toggle
- Calling element css

### Examples
```JavaScript
// Hiding an element
$('element').hide();

// Hiding an element with millisecond timer
$('element').hide(500);

// Fade in and fade out
$('element').fadeIn();
$('element').fadeOut(100);

// CSS
$('element').css({
	backgroundColor: 'red',
	fontWeight: 'bold',
});

// Button click + toggle

$('element').on('click', function() {
	$('element').toggle(500);
	$('element').fadeToggle(750);
});
```

### Lesson 2
- Change innerHTML
- More mouse events

```JavaScript
$('#element1').html('mouse here!');

$('#element1').on('mouseenter', function() {
	$('#panel2').hide(750);
	$('#element1').html('mouse enter!');
});

$('#element1').on('mouseleave', function() {
	$('#panel2').show(750);
	$('#element1').html('mouse leave!');
});

$('#btn2').on('click', function() {
	$('#panel2').find('h3').html('You chaned the text of this header!')
});

$('#btn3').html('hover over me!');

$('#btn3').on('mouseover', function() {
	$('#panel1').toggle(750);
});
```
