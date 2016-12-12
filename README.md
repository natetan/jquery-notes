# Introduction to jQuery

## Currently deployed on [UW Student Servers](http://students.washington.edu/swifties/jquery-notes/)

## Installation

1. `git clone https://github.com/yulongtan/jquery-notes.git`
2. `cd jquery-notes`
3. `npm install jquery`  
4. `npm install bootstrap@3`

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

### Lesson 4: DOM Traversal
- Targeting a certain element
- Siblings
- Parents
- find, filter, is
- addClass, removeClass

```HTML
<ul class="list">
	<li>one</li>
	<li class="special">two</li>
	<li>three</li>
	<li>four
		<ul class="sublist">
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
	</li>
</ul>
```

```JavaScript
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
$('.list').find('li').filter(':first').addClass('special');
// Finds all the lis in the element with the class of list with the special class and removes them
$('.list').find('li').filter('.special').remove();
// Exact same thing without the use of filter
// However, it removes ALL elements with class special, rather than just lis with special
$('.list').find('.special').remove();
// This looks through the entire page to look for special, rather than a certain spot
// Not very efficient JavaScript
$('.special').remove();

// Checks if the li has the special class and alerts user if it does
$('li').on('click', function() {
	$(this).hide();
	if ( $(this).is('.special') ) {
		alert('special!');
	}
});
```

### Lesson 5: Callbacks (Panel Widgets)
- this
- callback

```HTML
<div id="main-content">
	<div class="tab-panels">
		<ul class="tabs">
			<li data-panelId="panel1" class="active">panel1</li>
			<li data-panelId="panel2">panel2</li>
			<li data-panelId="panel3">panel3</li>
			<li data-panelId="panel4">panel4</li>
		</ul>
		<div id="panel1" class="panel active">
			<li>content1</li>
			<li>content1</li>
			<li>content1</li>
			<li>content1</li>
			<li>content1</li>
		</div>
		<div id="panel2" class="panel">
			<li>content2</li>
			<li>content2</li>
			<li>content2</li>
			<li>content2</li>
			<li>content2</li>
		</div>
		<div id="panel3" class="panel">
			<li>content3</li>
			<li>content3</li>
			<li>content3</li>
			<li>content3</li>
			<li>content3</li>
		</div>
		<div id="panel4" class="panel">
			<li>content4</li>
			<li>content4</li>
			<li>content4</li>
			<li>content4</li>
			<li>content4</li>
		</div>
	</div>
</div>
```

```CSS
#main-content {
	width: 80%;
	margin: auto;
	margin-top: 20px;
}

.tab-panels ul {
	margin: 0;
	padding: 0;
}

.tab-panels ul li {
	display: inline-block;
	background: #999;
	margin: 0;
	padding: 3px 10px;
	border-radius: 10px 10px 0 0;
	color: #fff;
	font-weight: 200;
	cursor: pointer;
}

.tab-panels ul li, .panel li {
	list-style-type: none;
}

.panel li {
	padding: 10px;
}

.tab-panels ul li:hover, .tab-panels ul li.active {
	color: #fff;
	background: #666;
}

.tab-panels .panel {
	display: none;
	background: #c9c9c9;
	padding 30px;
	border-radius: 0 0 10px 10px;
}

.tab-panels .panel.active {
	display: block;
}
```

```JavaScript
$(document).ready(function() {

	$('.tab-panels .tabs li').on('click', function() {
		// Gets the list of the closest tabs (in the case that there are multiple)
		var tabs = $(this).closest('.tab-panels');
		tabs.find('.tabs li.active').removeClass('active');
		$(this).addClass('active');

		// Uses the attribute to get the panel's id
		var panelId = $(this).attr('data-panelId');

		// Grabs the element with that id
		var content = $('#' + panelId);

		// Gets siblings of the panel with the class of panel to avoid ul.tabs
		// This is a callback function: executes after slideup
		content.siblings().filter('.panel').slideUp(300, function() {
			content.slideDown(300);
		});
	});

	// Another way

	$('.tab-panels .tabs li').on('click', function() {
		var panel = $(this).closest('.tab-panels');
		panel.find('.tabs li.active').removeClass('active');
		$(this).addClass('active');

		// Figure out which panel to show
		var panelToShow = $(this).attr('data-panelId');

		// Hide current panel
		panel.find('.panel.active').slideUp(300, showNextPanel);

		// Show next panel
		function showNextPanel() {
			$(this).removeClass('active');
			$('#' + panelToShow).slideDown(300, function() {
				$(this.addClass('active'));
			});
		}
	});

});	
```

### Lesson 6: Slider Widget
- Caching the DOM
- Animation
- Intervals

```HTML
<div class="container">
  <div class="header">
    <h1 class="text-muted">jQuery Slider - Spidey!</h1>
    <h2 class="text-muted">Hover over slider to pause</h2>
  </div>
  <div id="slider">
    <ul class="slides">
      <li class="slide slide1">slide1</li>
      <li class="slide slide2">slide2</li>
      <li class="slide slide3">slide3</li>
      <li class="slide slide4">slide4</li>
      <li class="slide slide5">slide5</li>
      <li class="slide slide1">slide1</li>
    </ul>
  </div>
</div>
```

```CSS
#slider {
  width: 720px;
  height: 400px;
  overflow: hidden;
}

#slider .slides {
  display: block;
  width: 6000px;
  height: 400px;
  margin: 0;
  padding: 0;
}

#slider .slide {
  float: left;
  list-style-type: none;
  width: 720px;
  height: 400px;
}

.slide1 {background: url('../images/tasm2-building.jpg');}
.slide2 {background: url('../images/spider-highrise.jpg');}
.slide3 {background: url('../images/spider-triple-threat.jpeg');}
.slide4 {background: url('../images/spider-venom.jpg');}
.slide5 {background: url('../images/tasm2-end.jpg');}

.slide1, .slide2, .slide3, .slide4, .slide5 {
  background-size: 100%;
  background-repeat: no-repeat;
}
```

```JavaScript
$(function() {

	// Configurations for the slider
	var width = 720; // default width of the slider images
	var animationSpeed = 1000; // how fast the slider changes images
	var pause = 2500; // the interval before the slider slides again
	var currentSlide = 1; // Keeps track of the slide we're on

	// Caching the DOM so it does not have to search entire DOM again
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');

	var interval;

	function startSlider() {
		interval = setInterval(function() {
			$slideContainer.animate({'margin-left': '-=' + width + 'px'}, animationSpeed, function() {
				currentSlide++;
				if (currentSlide == $slides.length) {
					currentSlide = 1;
					$slideContainer.css('margin-left', 0);
				}
			});
		}, pause);
	}

	function pauseSlider() {
		clearInterval(interval);
	}

	$slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

	startSlider();
})
```

### Lesson 7: Ajax and RESTful API's
- GET, POST, PUT, DELETE
- .delegate()
- Mustachejs (rendering)
- `<template>` tags
- [Learncode.academy RESTful API example](http://rest.learncode.academy/)

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Learning jQuery</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <!-- Optional theme -->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="styles/ajax.css">
  </head>
  <body>
  <div id="main-content" class="bg-success">
      <h1 class="headers">jQuery Ajax Example</h1>
      <h2 class="headers">Coffee Orders</h2>
      <ul id="orders"></ul>
        <!-- This gets filled in with jQuery

        <li class="order-item">Name: Percy, Drink: Anything Blue</li>
        <li class="order-item">Name: Annabeth, Drink: Hot Latte</li> 

        -->
      <template id="order-template">
        <li data-id={{id}}" class="order-item">
          <p>
            <span class="no-edit name">name: {{name}}</span>
            <input class="edit name">
          </p>
          <p>
            <span class="no-edit drink">drink: {{drink}}</span>
            <input class="edit drink">
          </p>
          <button data-id={{id}} class="remove">X</button>
          <button class="editOrder no-edit">Edit</button>
          <button class="saveEdit edit">Save</button>
          <button class="cancelEdit edit">Cancel</button>
        </li>
      </template>
      <h3 class="headers">Add a Coffee Order</h3>
      <p>name: <input type="text" id="name"></p>
      <p>drink: <input type="text" id="drink"></p>
      <button id="add-order">Add!</button>
    </div>  
    <!-- Latest compiled and minified JavaScript -->
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- jQuery -->
    <script src="node_modules/jquery/dist/jquery.js"></script>
    <script src="node_modules/mustache/mustache.js"></script>
    <script src="scripts/ajax.js"></script>  
  </body>
</html>
```

```CSS
#main-content {
	width: 90%;
	margin: auto;
	border: 5px solid black;
	margin-top: 50px;
	padding: 3%;
}

#main-content, #add-order, .order-item {
	border-radius: 5px;
}

.headers {
	font-family: Monaco, Menlo;
	font-weight: bold;
	margin-bottom: 15px;
}

#orders li {
	list-style-type: none;
}

.order-item {
	margin-top: 10px;
	margin-bottom: 10px;
	background: #fff;
	width: 50%;
	padding: 1%;
}

.remove {
	margin: 3px;
	color: red;
}

ul li .edit {
	display: none;
}

ul li.edit .edit {
	display: initial;
}

el li.edit .no-edit {
	display: none;
}
```

```JavaScript

$(function() {
	// Fields
	var $orders = $('#orders');
	var $name = $('#name');
	var $drink = $('#drink');
	var $orderButton = $('#add-order');

	// Mustachejs
	var orderTemplate = $('#order-template').html();

	function addOrder(order) {
		// $orders.append('<li class="order-item">name: ' + order.name + ', drink: ' + order.drink + '</li>');
		// Renders template over order object, so {{name}} is order.name and {{drink}} is order.drink
		$orders.append(Mustache.render(orderTemplate, order));
	}

	// url should be /api/orders when working with localhost
	// using a hard-coded json file is buggy

```

#### GET

```JavaScript

	$.ajax({
		type: 'GET',
		url: 'api/orders.json',
		success: function(data) {
			console.log('success', data);

			// each goes through each item in an array and lets you run a function over them
			// requires index, and name of each item
			$.each(JSON.parse(data), function(index, item) {
				addOrder(item);
			});
		}, 
		error: function() {
			alert('error loading server');
		}
	});

```

#### POST

```JavaScript

	$orderButton.on('click', function() {
		// JavaScript Object
		var order = {
			name: $name.val(),
			drink: $drink.val(), 
		};
		$.ajax({
			type: 'POST',
			url: 'api/orders.json',
			// must pass in data for post (our order object)
			data: order,
			success: function(newItem) {
				addOrder(newItem);
			},
			error: function() {
				alert('error posting data to server');
			}
		});
	});

```

#### DELETE

```JavaScript

	// .delegate() listens to any click events on $orders and only fires if it is part of the remove class
	// gets past the issue of having a click on something that has not loaded yet 
	$orders.delegate('.remove', 'click', function() {
		// Grabs the parent li so it can remove it
		var $li = $(this).closest('li');
		$.ajax({
			type: 'DELETE',
			url: '/api/orders' + $(this).attr('data-id');
			success: function() {
				$li.fadeOut(300, function() {
					$(this).remove();
				});
			}, error: function() {
				alert('error deleting item');
			}
		});
	});

```
#### PUT

```JavaScript

	$orders.delegate('.editOrder', 'click', function() {
		var $li = $(this).closest('li'); 
		// Fills the fields with the input that is already in
		$li.find('input.name').val($li.find('span.name').html());
		$li.find('input.drink').val($li.find('span.drink').html());
		$li.addClass('edit');
	});

	$orders.delegate('.cancelEdit', 'click', function() {
		$(this).closest('li').removeClass('edit');
	});

	$orders.delegate('.saveEdit', 'click', function() {
		var $li = $(this).closest('li');
		var order = {
			name: $li.find('input.name').val(),
			drink: $li.find('input.drink').val(),
		};

		$.ajax({
			type: 'PUT',
			url: '/api/orders/' + $li.attr('data-id'),
			data: order,
			success: function(newOrder) {
				$li.find('span.name').html(order.name);
				$li.find('span.drink').html(order.drink);
				$list.removeClass('edit');
			},
			error: function() {
				alert('error updating data');
			}
		})
	});
});

```
