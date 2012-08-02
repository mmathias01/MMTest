Thanks for downloading the QUICKzoom plugin!

If you want to share the love, please acknowledge me @ http://louis-sawtell.com or head over to http://www.jquery-quickzoom.com and buy me a beer!
If you need to contact me, please send an email to contact@louis-sawtell.com
Any bug reports or feature requests please head to http://louis-sawtell.com/content/quickzoom-jquery-plugin and leave a comment.

You can find more information over at http://www.jquery-quickzoom.com

RUNNING THE PLUGIN

set out your image list and add the "quickZoom" class to your <ul> :-
<ul class="quickZoom">
  <li><img src="path/to/image" alt="description" /><span>My image title</span></li>
  .....
  .....
</ul>

If you are not using the "quickZoom" class, then make sure that your zoom image is wrapped in another tag (div, li...etc) and both the wrapper and img are set the same dimensions within the CSS.


ADD THE JQUERY
in the <head> or in a .js file included AFTER the jQuery library and quickZoom.jQuery.js write:-
<script type="text/javascript">
  $(document).ready(function() {
    $('.quickZoom li').quickZoom();
  });
</script>

if you are having trouble with conflicting libraries use the below :-
<script type="text/javascript">
  jQuery(document).ready(function($) {
    $('.quickZoom li').quickZoom();
  });
</script>

CUSTOM EFFECTS

You can add your desired effects as so:-
<script type="text/javascript">
  jQuery(document).ready(function($) {
    $('.quickZoom li').quickZoom({
	  // these are the defaults
	  zoom:2,
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
	});
  });
</script>



TROUBLESHOOTING

If you are having problems getting the zoom to work...

- Make sure you have included the latest jQuery library (before any other plugins).
- Are you using an ease from the easing plugin? Make sure the plugin is included too.
- Double check your spelling and syntax...I always get stuck for hours because of a misplaced lettre !!
- Try removing all custom options from the function call.
- Getting funny dimensions? Make sure they are defined in your CSS
- Is there a conflict with another js library? Change the first line to:
  jQuery(document).ready(function($) {...});
