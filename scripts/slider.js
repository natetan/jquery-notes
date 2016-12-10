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