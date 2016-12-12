$(function() {

	// Fields
	var $orders = $('#orders');
	var $name = $('#name');
	var $drink = $('#drink');
	var $orderButton = $('#add-order');

	// Mustachejs
	var orderTemplate = '<li class="order-item">name: {{name}}, drink: {{drink}} <button class="remove-button">X</button></li>';

	function addOrder(order) {
		// $orders.append('<li class="order-item">name: ' + order.name + ', drink: ' + order.drink + '</li>');
		// Renders template over order object, so {{name}} is order.name and {{drink}} is order.drink
		$orders.append(Mustache.render(orderTemplate, order));
	}

	// url should be /api/orders when working with localhost
	// using a hard-coded json file is buggy

	// GET 
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

	// POST
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


});