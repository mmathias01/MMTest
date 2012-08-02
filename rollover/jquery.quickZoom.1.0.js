/*
 * quickZoom 0.1.0 - JavaScript Image viewer
 * Copyright (c) 2011 Louis Sawtell, contact@louis-sawtell.com, http://louis-sawtell.com
 */

(function($) {
    $.fn.quickZoom = function(options) {
		var thumbX, thumbY;
		
		// define default values
		var defaults = {
			zoom: 2,
			speedIn: 500,
			speedOut: 400,
			easeIn: 'swing',
			easeOut: 'swing',
			titleInEffect: 'slide',
			titleInSpeed: 200,
			titleInEase: 'swing',
			titleOutEffect: 'fade',
			titleOutSpeed: 400,
			titleOutEase: 'swing',
			sqThumb: false,
			shadow: true
		};
		// merge the defaults with given parameters
		var e = $.extend(defaults, options);
		// set $(this) to var to speed up code
		var myThis = $(this);
		
		// Set the dimensions of the object that the function is assigned to
		myThis.data('width', myThis.width());
		myThis.data('height', myThis.height());
		
		// when hovering on an li...
		myThis.hover(function() {
			// assign vars to avoid overusing $(this)
			var target = $(this);
			var target_image = target.find("img");
			var target_title = target.find("span");
			
			// get thumbnail dimensions
			thumbX = target.data('width');
			thumbY = target.data('height');
			
			// get zoomed dimensions
			var zoomX = thumbX*e.zoom;
			var zoomY = thumbY*e.zoom;
			
			// If the thumbnail doesn't represent the image aspect ratio..
			if (e.sqThumb) {
				// create img var to gather full size dimensions
				var img = new Image();
				img.src = target_image.attr("src");
				
				// get aspect ratio
				var ratio = img.height/img.width;
				// apply ratio
				zoomY = zoomY*ratio;
			}
			
			// this is the offset for the title
			var marginX = (zoomX-thumbX)/2;
			var marginY = (zoomY-thumbY)/2;
			
			// add z-index and optional shadow
			if (e.shadow) {target_image.addClass('quickZoom-hoverShadow');}
			target_image.css({'z-index':10});
			
			// enlarge the image
			target_image.stop(true, false).animate({
				width:zoomX+'px',
				height:zoomY+'px',
				marginTop:'-'+marginY+'px',
				marginLeft:'-'+marginX+'px'
			}, {
				duration: e.speedIn,
				easing: e.easeIn,
				complete: function() {
					// position the title to bottom of image
					var paddingLeft = parseInt(target_image.css('padding-left').replace('px',''));
					var paddingBottom = parseInt(target_image.css('padding-bottom').replace('px',''));
					var titleX = marginX-paddingLeft; var titleY = marginY+paddingBottom;
					target_title.css({'bottom':'-'+titleY+'px', 'left':'-'+titleX+'px', 'width':zoomX+'px'});
					if (e.titleInEffect == 'slide') {
						target_title.slideDown(e.titleInSpeed, e.titleInEase);
					} else {
						target_title.fadeIn(e.titleInSpeed, e.titleInEase);
					}
				}
			});
		}, function() {
			var target = $(this);
			var target_image = target.find("img");
			var target_title = target.find("span");
			if (e.titleOutEffect == 'slide') {
				target_title.stop(true,true).slideUp(e.titleOutSpeed, e.titleOutEase);
			} else {
				target_title.stop(true,true).fadeOut(e.titleOutSpeed, e.titleOutEase);
			}
			target_image.stop(true, false).animate({
				marginTop:'0px',
				marginLeft:'0px',
				width: thumbX+'px',
				height: thumbY+'px',
				top:'0',
				left:'0'
			}, {
				duration: e.speedOut,
				easing: e.easeOut,
				complete: function() {
					target_image.css({'z-index':1});
				}
			});
			target_image.removeClass('quickZoom-hoverShadow');
			target_image.css({'z-index':2});
		});
	}
})(jQuery);