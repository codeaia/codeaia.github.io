// Hover move listing
$(document).ready(function() {

	// Open top
    $(".open").click(function() {
		$(".box").slideToggle("slow");
	});

	// pretty photo
	$("a[rel^='prettyPhoto']").prettyPhoto();	

	// tooltip
	$.tools.tooltip.addEffect("fade",
		// opening animation
		function(done) {
			this.getTip().fadeIn();
			done.call();
		},
		// closing animation
		function(done) {
			this.getTip().fadeOut();
			done.call();
		}
	);
	$(".tool").tooltip({
		effect: 'fade',
		offset: [50, 0]
	});
	$(".tool-right").tooltip({
		effect: 'fade',
		position: 'center right',
		offset: [0, -50],
		tipClass: 'tooltip-right'
	});
	$(".tool-bottom").tooltip({
		effect: 'fade',
		position: 'bottom center',
		offset: [-50, 0],
		tipClass: 'tooltip-bottom'
	});
	$(".tool-left").tooltip({
		effect: 'fade',
		position: 'center left',
		offset: [0, 50],
		tipClass: 'tooltip-left'
	});
	
	//superfish
	$("ul.sf-menu").superfish({
		autoArrows:  false, // disable generation of arrow mark-up
		  animation: {height:'show'},
		  speed: 'fast'
	}); 
	
	// rollovers
	$("#sidebar li.sidemenu ul li.cat-item a").hover(function() { 
		// on rollover	
		$(this).stop().animate({ 
			marginLeft: "7" 
		}, "fast");
	} , function() { 
		// on out
		$(this).stop().animate({
			marginLeft: "0" 
		}, "fast");
	});
	
	
	// gallery rollover
	$(".gallery li span").fadeTo(0, 0); 
	$(".gallery li span").hover(
		function() {
		$(this).stop().animate({"opacity": "1"}, "medium");
		},
		function() {
		$(this).stop().animate({"opacity": "0"}, "medium");
	});
	
		
	// slideshow
  	$('#slides')
  	.before('<div id="slideshow-nav-holder"><div id="slideshow-nav">')
  	.cycle({ 
		fx:     'scrollHorz', 
		speed:  500, 
		timeout: 6000, 
		pause: 1,
		pager:  '#slideshow-nav',
		after: function(){
			var myLink = $(this).children("a").attr("href");
            $('#slideshow-link').attr({ href: myLink});
		}
	});

	// add right cornoer to slide control
	$('#slideshow-nav-holder').prepend('<div class="nav-left"></div>');
	$('#slideshow-nav-holder').append('<div class="nav-right"></div>');
		
	//  slide fade
	$('.slide-fade').cycle({ 
		fx:     'fade', 
		speed:  500, 
		timeout: 3000, 
		pause: 1
	});
	
	//  slide scroll
	$('.slide-scroll').cycle({ 
		fx:     'scrollHorz', 
		speed:  500, 
		timeout: 3000, 
		pause: 1
	});
	
	// toggle
	$(".toggle-container").hide(); 
	$(".toggle-trigger").click(function(){
		$(this).toggleClass("active").next().slideToggle("slow");
		return false;
	});
	
	// accordion
	$('.accordion-container').hide(); 
	$('.accordion-trigger:first').addClass('active').next().show();
	$('.accordion-trigger').click(function(){
		if( $(this).next().is(':hidden') ) { 
			$('.accordion-trigger').removeClass('active').next().slideUp();
			$(this).toggleClass('active').next().slideDown();		}
		return false;
	});
	
	// equal footer cols
	$('ul.footer-cols').equalHeights();
	
	// tabs
	$('.tabbed').tabs({
		fxFade: true
	});
	
	// cufon
	Cufon.replace('.title .big, .post-title', { fontFamily: 'bebas',
								hover: true,
								textShadow: '1px 1px rgba(255, 255, 255, 1)'
	});
	
	
	Cufon.replace('#centeredmenu>ul>li>a, .custom, .more, .headline', { fontFamily: 'bebas',
								hover: true,
								textShadow: '1px 1px rgba(0, 0, 0, 1)'
	});
	
	Cufon.replace('#footer h6', { fontFamily: 'bebas',
								hover: true,
								textShadow: '1px 1px rgba(81, 101, 110, 1)'
	});
	
	
	
	
		
//close			
});
	


// search clearance	
function defaultInput(target){
	if((target).value == 'Search...'){(target).value=''}
}

function clearInput(target){
	if((target).value == ''){(target).value='Search...'}
}
