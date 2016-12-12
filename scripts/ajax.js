$(function() {

	var $orders = $('#orders');

	$.ajax({
		type: 'GET',
		url: 'api/orders.json',
		success: function(data) {
			console.log('success', data);

			// each goes through each item in an array and lets you run a function over them
			$.each(data, function(index, item) {
				$orders.append('<li class="order-item">name: ' + item.name + ', drink: ' + item.drink + '</li>');
			});
		}
	});

});