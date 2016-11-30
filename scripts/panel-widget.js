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

	// $('.tab-panels .tabs li').on('click', function() {
	// 	var panel = $(this).closest('.tab-panels');
	// 	panel.find('.tabs li.active').removeClass('active');
	// 	$(this).addClass('active');

	// 	// Figure out which panel to show
	// 	var panelToShow = $(this).attr('data-panelId');

	// 	// Hide current panel
	// 	panel.find('.panel.active').slideUp(300, showNextPanel);

	// 	// Show next panel
	// 	function showNextPanel() {
	// 		$(this).removeClass('active');
	// 		$('#' + panelToShow).slideDown(300, function() {
	// 			$(this.addClass('active'));
	// 		});
	// 	}
	// });

});	