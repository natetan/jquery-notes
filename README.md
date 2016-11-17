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

### Lesson 1: Selectors
- Show and hide
- Fade in and out
- Toggle
- Calling element css

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

### Lesson 2: Event Listeners
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
### Lesson 3: The DRY Principle
- Multiple selections with one function
- data-x attributes

```HTML
<div class="col-xs-4 columns" id="panel1">
	<div class="bg-success headers" id="header1">Panel 1</div>
	<div class="header-content">
		<h3 class="header-content-heading">This will have a button</h3>
		<button class="btn btn-primary center-absolute" id="btn1" data-panelid="panel1" data-headerid="header1">Button 1</button>
	</div>
</div>
<div class="col-xs-4 columns" id="panel2">
	<div class="bg-success headers" id="header2">Panel 2</div>
	<div class="header-content">
		<h3 class="header-content-heading">This will have a button</h3>
		<button class="btn btn-primary center-absolute" id="btn2" data-panelid="panel2" data-headerid="header2">Button 2</button>
	</div>
</div>
<div class="col-xs-4 columns" id="panel3">
	<div class="bg-success headers" id="header3">Panel 3</div>
	<div class="header-content">
		<h3 class="header-content-heading">This will have a button</h3>
		<button class="btn btn-primary center-absolute" id="btn3" data-panelid="panel3" data-headerid="header3">Button 3</button>
	</div>
</div>
```

```JavaScript
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
```
