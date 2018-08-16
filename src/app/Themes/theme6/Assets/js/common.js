!function ($) {
    "use strict";
	
    function toggleChevron(e) {
        $(e.target)
                .prev('.panel-heading')
                .find("i.indicator")
                .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
    }
	
    $('#accordion').on('hidden.bs.collapse', toggleChevron);
    $('#accordion').on('shown.bs.collapse', toggleChevron);
    $(".accordion_example1").smk_Accordion();
    
//////////////////////////////////////////////
	
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.on('click',function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').on('click',function () {
        $('#wrapper').toggleClass('toggled');
  });  
  
/////////////////////////////////////////////////
$('.btn-number').on('click',function(e){
    e.preventDefault();
    
    var fieldName = $(this).attr('data-field');
    var type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val(),10);
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val(),10) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val(),10) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    
   var  minValue =  parseInt($(this).attr('min'),10);
   var maxValue =  parseInt($(this).attr('max'),10);
   var valueCurrent = parseInt($(this).val(),10);
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    
    
});
$(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
	


////////////////////////////////////////////////


$('ul.nav li.dropdown a').on('click',function(){
    if (!$('.navbar-toggle').is(':visible') && $(this).attr('href') != '#') {
        $(this).toggleClass('open', false);
        window.location = $(this).attr('href')
    }
});

//////////////////////////////////////////////
$('.counter_number').counterUp({
                delay: 1,
                time: 1600
            });
            
             $('.counter_number1').counterUp({
                delay: 1,
                time: 1600
            });
            
        $('.counter_number2').counterUp({
                delay: 1,
                time: 1600
            });
        $('.counter_number3').counterUp({
                delay: 1,
                time: 1600
            });
            
        $('.counter_number4').counterUp({
                delay: 1,
                time: 1600
            });
            
        $('.counter_number5').counterUp({
                delay: 1,
                time: 1600
            });
			
		

		$(window).on('load', function() { // makes sure the whole site is loaded 
            $('#status').fadeOut(); // will first fade out the loading animation 
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
            $('body').delay(350).css({'overflow':'visible'});
        });
		
$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('#header').addClass("fixed");
  }
  else{
    $('#header').removeClass("fixed");
  }
});

jQuery("li.search").click(function() {
            jQuery("#header .search-box").is(":visible") ? jQuery("#header .search-box").fadeOut(300) : (jQuery(".search-box").fadeIn(300), jQuery("#header .search-box form input").focus(), jQuery("div.quick-cart-box").is(":visible") && jQuery("div.quick-cart-box").fadeOut(300))
        }), 0 != jQuery("#header li.search").size() && (jQuery("#header .search-box, #header li.search").on("click", function(e) {
            e.stopPropagation()
        }), jQuery("body").on("click", function() {
            jQuery(".search-box").is(":visible") && jQuery("#header .search-box").fadeOut(300)
        })), jQuery(document).bind("click", function() {
            jQuery(".search-box").is(":visible") && jQuery("#header .search-box").fadeOut(300)
        }), jQuery("#closeSearch").bind("click", function(e) {
            e.preventDefault(), jQuery("#header .search-box").fadeOut(300)
        }), jQuery("button#page-menu-mobile").bind("click", function() {
            jQuery(this).next("ul").slideToggle(150)
        }), jQuery("li.quick-cart>a").click(function(e) {
            e.preventDefault();
            var t = jQuery("div.quick-cart-box");
            t.is(":visible") ? t.fadeOut(300) : (t.fadeIn(300), jQuery(".search-box").is(":visible") && jQuery(".search-box").fadeOut(300))
        }), 0 != jQuery("li.quick-cart>a").size() && (jQuery("li.quick-cart").on("click", function(e) {
            e.stopPropagation()
        }), jQuery("body").on("click", function() {
            jQuery("div.quick-cart-box").is(":visible") && jQuery("div.quick-cart-box").fadeOut(300)
        }));
		
		// DEMO Swticher Base
	jQuery('.demo_changer .demo-icon').click(function(){

		if(jQuery('.demo_changer').hasClass("active")){
			jQuery('.demo_changer').animate({"left":"-350px"},function(){
				jQuery('.demo_changer').toggleClass("active");
			});						
		}else{
			jQuery('.demo_changer').animate({"left":"0px"},function(){
				jQuery('.demo_changer').toggleClass("active");
			});			
		} 
	});
	$('.boxed_switch').click(function(){
		if(this.value=="boxed")
		{
			$('body').addClass('boxed');
		}
		else
		{
			$('body').removeClass('boxed');
		}
		$(window).resize();
	});
	
 /* jQuery(document).ready(function( $ ) {
        jquery('.counter').counterUp({
            delay: 10,
            time: 100
        });
    });
  */
  
  


//////////////////////////
                if ($('.menu-filter-items').length) {
                    var $galleryFilter = $('.menu-filter-items').isotope({
                        itemSelector: '.menu-item',
                        masonry: {
                            columnWidth: '.menu-item'
                        }
                    });
                    $('.menu-filter-list').on('click', 'li', function () {
                        var filterValue = $(this).attr('data-filter');
                        $('.menu-filter-list').find('.is-checked').removeClass('is-checked');
                        $(this).addClass('is-checked');
                        $galleryFilter.isotope({filter: filterValue});
                    });

                    $galleryFilter.imagesLoaded().progress(function () {
                        $galleryFilter.isotope('layout');
                    });
                }
////////////////////////////////////
            $('.flexslider').flexslider({
            animation: "slide",
            autoplay:true
            });
/////////////////////////////////////////////
$('#Development').LineProgressbar({
percentage:87,
});
$('#Support').LineProgressbar({
percentage:70,
fillBackgroundColor: '#DA4453'
});
$('#Marketing').LineProgressbar({
percentage:93,
fillBackgroundColor: '#E0C341'
});
$('#user').LineProgressbar({
percentage:80,
fillBackgroundColor: '#DA4453'
});

$('#Photoshop1').LineProgressbar({
percentage:80,
fillBackgroundColor: '#DA4453'
});
$('#JavaScript1').LineProgressbar({
percentage:60,
fillBackgroundColor: '#DA4453'
});
$('#Wordpress1').LineProgressbar({
percentage:90,
fillBackgroundColor: '#DA4453'
});
$('#user1').LineProgressbar({
percentage:90,
fillBackgroundColor: '#DA4453'
});

$('#Photoshop').LineProgressbar({
percentage:80,
fillBackgroundColor: '#DA4453'
});
$('#JavaScript').LineProgressbar({
percentage:60,
fillBackgroundColor: '#DA4453'
});
$('#Wordpress').LineProgressbar({
percentage:90,
fillBackgroundColor: '#DA4453'
});

$('#HTML1').LineProgressbar({
percentage:55,
fillBackgroundColor: '#DA4453'
});
$('#PHP').LineProgressbar({
percentage:70,
fillBackgroundColor: '#DA4453'
});
$('#Drupal').LineProgressbar({
percentage:50,
fillBackgroundColor: '#DA4453'
});

////////////////////////////////////////////////////////
     $('.masonry_post').masonry({
  // options
  itemSelector: '.post'
});
$('.flexslider').flexslider({
     item:1,
     animation: "slide",
     smoothHeight: true,
     start: function(){
                 var $container = $('.masonry_post');
                $container.imagesLoaded( function() {
                $container.masonry({
                        itemSelector: '.post',                        
                    });
                }); 
            },
  });
////////////////////////////////////////////////////
     $('.masonry-box').masonry({
  // options
  itemSelector: '.masonry-post'
});
////////////////////////////////////////////////////////
$('.portfolio-box.iso-call').masonry({
  // options
  itemSelector: '.post'
});
///////////////////////////////////////////

var slider = new MasterSlider();

            //adds Arrows navigation control to the slider.
             // slider.control('arrows');
           slider.control('timebar', {insertTo: '#masterslider'});
           // slider.control('bullets');

            slider.setup('masterslider', {
                width: 1400, // slider standard width
                height: 800, // slider standard height
                space: 1,
                layout: 'fullwidth',
                loop: true,
                preload: 0,
                instantStartLayers: true,
                autoplay: true
            });
            
            
/********height1100********/
var slider = new MasterSlider();

            //adds Arrows navigation control to the slider.
           //   slider.control('arrows');
          slider.control('timebar', {insertTo: '#masterslider'});
           // slider.control('bullets');

            slider.setup('masterslider1', {
                width: 1400, // slider standard width
                height: 800, // slider standard height
                space: 1,
                layout: 'fullwidth',
                loop: true,
                preload: 0,
                instantStartLayers: true,
                autoplay: true
            });
            
/**********height460*********/
var slider = new MasterSlider();

            //adds Arrows navigation control to the slider.
              slider.control('arrows');
           // slider.control('timebar', {insertTo: '#masterslider'});
           // slider.control('bullets');

            slider.setup('masterslider2', {
            width:1170,    // slider standard width
            height:460,   // slider standard height
            space:5,
            fullwidth:false,
            autoHeight:false,
            
            });
            
            
/**********height900********/
var slider = new MasterSlider();

            //adds Arrows navigation control to the slider.
           //   slider.control('arrows');
                slider.control('timebar', {insertTo: '#masterslider'});
           // slider.control('bullets');

            slider.setup('masterslider3', {
                width: 1400, // slider standard width
                height: 900, // slider standard height
                space: 1,
                layout: 'fullwidth',
                loop: true,
                preload: 0,
                instantStartLayers: true,
                autoplay: true
            });
            
/*********height980*********/
var slider = new MasterSlider();

            //adds Arrows navigation control to the slider.
           //   slider.control('arrows');
                slider.control('timebar', {insertTo: '#masterslider'});
           // slider.control('bullets');

            slider.setup('masterslider4', {
                width: 1400, // slider standard width
                height: 980, // slider standard height
                space: 1,
                layout: 'fullwidth',
                loop: true,
                preload: 0,
                instantStartLayers: true,
                autoplay: true
            });
            
/*********height943*********/
var slider = new MasterSlider();

            //adds Arrows navigation control to the slider.
            //  slider.control('arrows');
           // slider.control('timebar', {insertTo: '#masterslider'});
           // slider.control('bullets');

            slider.setup('masterslider6', {
                width: 1400, // slider standard width
                height: 943, // slider standard height
                space: 1,
                layout: 'fullwidth',
                loop: true,
                preload: 0,
                instantStartLayers: true,
                autoplay: true
            });



/*********height1140*********/
 //adds Arrows navigation control to the slider.
           //   slider.control('arrows');
          slider.control('timebar', {insertTo: '#masterslider'});
           // slider.control('bullets');

            slider.setup('masterslider8', {
                width: 1400, // slider standard width
                height: 840, // slider standard height
                space: 1,
                layout: 'fullwidth',
                loop: true,
                preload: 0,
                instantStartLayers: true,
                autoplay: true
            });  
            
/*********height1060*********/
var slider = new MasterSlider();

            //adds Arrows navigation control to the slider.
           //   slider.control('arrows');
                slider.control('timebar', {insertTo: '#masterslider'});
           // slider.control('bullets');

            slider.setup('masterslider5', {
                width: 1400, // slider standard width
                height: 860, // slider standard height
                space: 1,
                layout: 'fullwidth',
                loop: true,
                preload: 0,
                instantStartLayers: true,
                autoplay: true
            });  
            
/*********height800*********/
var slider = new MasterSlider();

            //adds Arrows navigation control to the slider.
           //   slider.control('arrows');
                slider.control('timebar', {insertTo: '#masterslider'});
           // slider.control('bullets');

            slider.setup('masterslider7', {
                width: 1400, // slider standard width
                height: 800, // slider standard height
                space: 1,
                layout: 'fullwidth',
                loop: true,
                preload: 0,
                instantStartLayers: true,
                autoplay: true
            }); 
			
///////////////////////////////////////////////////////

	jQuery.fn.progressBar = function( options ) {

		//Default values for progress_bar
		var defaults = {
			height : "9",
			backgroundColor : "#E0E0E0",
			barColor : "#F97352",
			percentage : true,
			shadow : false,
			border : false,
			animation : false,
			animateTarget : false,
		};

		var settings = $.extend( {}, defaults, options );

		return this.each( function() {
			var elem = $( this );
			$.fn.replaceProgressBar( elem, settings );
		});
	};

	$.fn.replaceProgressBar = function( item, settings ) {
		var skill		= item.text();
		var progress	= item.data( 'width' );
		var target		= item.data ( 'target' );
		var bar_classes = ' ';
		var animation_class = '';
		var bar_styles	= 'background-color:' + settings.backgroundColor + ';height:' + settings.height + 'px;';
		if ( settings.shadow ) { bar_classes += 'shadow'; }
		if ( settings.border ) { bar_classes += ' border'; }
		if ( settings.animation ) { animation_class = ' animate'; }

		var overlay = '<div class="sonny_progressbar' + animation_class + '" data-width="' + progress + '">';
		overlay += '<p class="title">' + skill + '</p>';
		overlay += '<div class="bar-container' + bar_classes + '" style="' + bar_styles + '">';

		// Render the progress bar background
		overlay += '<span class="backgroundBar"></span>';

		// Display target bar only if set
		if ( target ) {
			if ( settings.animateTarget ) {
				overlay += '<span class="targetBar loader" style="width:' + target + '%;background-color:' + settings.targetBarColor + ';"></span>';
			}
			else {
				overlay += '<span class="targetBar" style="width:' + target + '%;background-color:' + settings.targetBarColor + ';"></span>';
			}
		}

		// Render the progress bar
		if ( settings.animation ) {
			overlay += '<span class="bar" style="background-color:' + settings.barColor + ';"></span>';
		}
		else {
			overlay += '<span class="bar" style="width:' + progress + '%;background-color:' + settings.barColor + ';"></span>';
		}

		// Render the percentage if enabled
		if ( settings.percentage ) {
			overlay += '<span class="progress-percent" style="line-height:' + settings.height + 'px;">' + progress + '%</span>';
		}

		// End
		overlay += '</div></div>';

		// Render the progress bar on the page
		$( item ).replaceWith( overlay );

	};

	var animate = function() {

		var doc_height = $(window).height();

		$( '.sonny_progressbar.animate' ).each( function() {
			var position = $( this ).offset().top;

			if ( ( $(window).scrollTop() + doc_height - 60 ) > position ) {
				var progress = $( this ).data( 'width' ) + "%";

				$( this ).removeClass( 'animate' );
				$( this ).find( '.bar' ).css('opacity', '0.1');

				$( this ).find( '.bar' ).animate({
					width : progress,
					opacity : 1
				}, 3000 );
			}

		});

	};

	// Looking for an animation element in the view
	$(window).scroll(function() {

		if ( $( '.sonny_progressbar.animate' ).length < 1 ) {
			return;
		}

		// If there is an animate element visible on the page, trigger the animation
		animate();

	});


//////////////////////////////////////////////////////
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


/************6 column***********/
 // set variable used for events
        var owl = $("#product_seller");

        // initialize
        owl.owlCarousel({
        items:6,
        margin: 15,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true
});




 
  $("#slider1").owlCarousel({
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      itemsTablet:[768,1],
      autoplay:true
 
  });
 

    $("#trainer-slider").owlCarousel({
        items:4,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[979,3],
        itemsTablet:[768,2],
        itemsTablet:[768,1],
        pagination: true,
        autoPlay:false
    });




    $("#testimonial-slider").owlCarousel({
        items:3,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination: true,
        autoPlay:true
    });




            $("#testimonial_slider").owlCarousel({
            items:2,
            itemsDesktop:[1199,2],
            itemsDesktopSmall:[979,2],
            itemsTablet:[768,1],
            pagination: true,
            autoPlay:true
            });
       
        

    $("#testi-slider").owlCarousel({
        items:1,
        itemsDesktop:[1199,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination: true,
        autoPlay:true
    });



    $("#dishes-slider").owlCarousel({
        items:1,
        itemsDesktop:[1199,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination: true,
        autoPlay:true
    });



/*********PRODUCT Details**********/

 
        $('#myCarousel').carousel({
                interval: 5000
        });
 
        $('#carousel-text').html($('#slide-content-0').html());
 
        //Handles the carousel thumbnails
       $('[id^=carousel-selector-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarousel').carousel(id);
        });
 
 
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });


/********content-slider********/


    $("#content-slider").owlCarousel({
        items:3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,2],
        pagination: true,
        autoPlay:true
    });
	
	
	//////////////////////////////////////////////////

var owl = $("#client_logo");

// initialize
owl.owlCarousel({
  items:5,
  margin: 10,
  loop: true,
  center: true,
  mouseDrag: true,
  touchDrag: true,
  nav: false,
  dots: false,
      autoWidth:true,
  lazyLoad: true,
  autoplay: true,
  autoplayTimeout: 7000,
  autoplayHoverPause: true
});


var owl = $("#client_logo2");

// initialize
owl.owlCarousel({
  items:3,
  margin: 30,
  loop: true,
  itemsDesktop:[1199,3],
  itemsDesktopSmall:[979,2],
  itemsTablet:[768,2],
  center: true,
  mouseDrag: true,
  touchDrag: true,
  nav: false,
  dots: false,
  lazyLoad: true,
  autoplay: true,
  autoplayTimeout: 7000,
  autoplayHoverPause: true
});

// set variable used for events
var owl = $("#client_logo3");

// initialize
owl.owlCarousel({
  items:4,
  margin: 20,
  loop: true,
  itemsDesktop:[1199,4],
  itemsDesktopSmall:[979,3],
  itemsTablet:[768,3],
  center: true,
  mouseDrag: true,
  touchDrag: true,
  nav: false,
  dots: false,
  lazyLoad: true,
  autoplay: true,
  autoplayTimeout: 7000,
  autoplayHoverPause: true
});

}(window.jQuery);	