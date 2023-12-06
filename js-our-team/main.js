/*
Main js file
main.js v1.0
*/

( function( $ ) {
	'use strict';
	$( document ).ready( function() {

		/*
		owlCarousel
		*/

		var $carousel = $( '.mw-main-carousel' );

		$carousel.owlCarousel( {
			items: 3,
			margin: 40,
			loop: false,
			nav: true,
			rewind: true,
			navText: [ '<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>' ],
			dots: true,
			autoplay: false,
			autoplayTimeout: 20000,
			autoplayHoverPause: true,
			autoplaySpeed: 400,
			navSpeed: 400,
			dotsSpeed: 300,
			dragEndSpeed: 200,
			responsive: {
				0: {
					items: 1,
					margin: 10,
					dots: false,
				},
				600: {
					items: 2,
					margin: 20,
					dots: true,
				},
				700: {
					items: 2,
					margin: 30,
					dots: true,
				},
				1000: {
					items: 3,
					margin: 40,
					dots: true,
				},
			},
			onResized: function() {
				// An example of using a callback function.
				console.log( 'The carousel has been resized.' );
			},
		} );

		// An example of using an event to control Owl Carousel.
		// Refresh carousel:
		// $carousel.trigger( 'refresh.owl.carousel' );

	} );
} )( jQuery );
