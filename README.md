# Introduction to jQuery

## Installation
###### `npm install jquery`
###### `npm install bootstrap@3`

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
