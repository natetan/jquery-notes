$(function() {

	// Fields
	var $orders = $('#orders');
	var $name = $('#name');
	var $drink = $('#drink');
	var $orderButton = $('#add-order');

	function addOrder(order) {
		$orders.append('<li class="order-item">name: ' + order.name + ', drink: ' + order.drink + '</li>');
	}

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