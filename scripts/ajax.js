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

	// DELETE

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

	// PUT
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