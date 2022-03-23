(function ($) {
	"use strict";

	  //=============================
    // Preloder Start
    //=============================

    $(window).on('load', function () {
        $('.loading').fadeOut();
        $('.preloader').delay(500).fadeOut('slow');
        $('body').delay(500).css({ 'overflow': 'visible' });
    });


	//=============================
    // Sticky Start
    //=============================

	var headerHeight = $(".header").height()
	var HeaderTopBar = $('.header-top-bar').height();
	var HeaderTopPart = HeaderTopBar + 31; 
	// console.log(HeaderTopBar);
	// console.log(HeaderTopPart);
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < HeaderTopPart) {
			$('body').css('padding-top', '0')
            $(".header").removeClass("sticky");
        } else {
			if($(window).width() > 992){
				$('body').css('padding-top', '204px')
				// console.log('desktop');
			}else if($(window).width() > 768){
				$('body').css('padding-top', '148px')
				// console.log('tab');
			}else{
				$('body').css('padding-top', '175px')
				// console.log('mobile');
			}
				
            $(".header").addClass("sticky");
        }
    });

	

	// var HeaderTopBar = $('.header-top-bar').height();
	// var HeaderMidCata = $('.header-mid-cata').height();
	// var HeaderTopPart = HeaderTopBar + HeaderMidCata + 31 + 20; 
    // $(window).on('scroll', function (event) {
    //     var scroll = $(window).scrollTop();
    //     if (scroll < HeaderTopPart) {
	// 		$('body').css('padding-top', '0')
    //         $(".header").removeClass("sticky");
    //     } else {
	// 		if($(window).width() > 992){
	// 			$('body').css('padding-top', '157px')
	// 			// console.log('desktop');
	// 		}else if($(window).width() > 768){
	// 			$('body').css('padding-top', '101px')
	// 			// console.log('tab');
	// 		}else{
	// 			$('body').css('padding-top', '116px')
	// 			// console.log('mobile');
	// 		}
				
    //         $(".header").addClass("sticky");
    //     }
    // });




	//=============================
	// Multi level submenu
	//=============================
	if ($(".main-nav .has-menu-children").length) {
		$(".main-nav .has-menu-children a").on("click", function (e) {
			e.preventDefault();
			$(this).next(".sub-menu").slideToggle();
			// console.log("clicked");
		});
	}

	//=================================
	// Add/Minus Quantity
	//=================================

	$(".incressQnt").on("click", function () {
		var $qty = $(this).closest("div").find(".qnttinput");
		var currentVal = parseInt($qty.val());
		if (!isNaN(currentVal)) {
			$qty.val(currentVal + 1);
		}
	});
	$(".decressQnt").on("click", function () {
		var $qty = $(this).closest("div").find(".qnttinput");
		var currentVal = parseInt($qty.val());
		if (!isNaN(currentVal) && currentVal > 0) {
			$qty.val(currentVal - 1);
		}
	});

	

	// SEARCH BAR

	$(".toggle").on("click", function () {
		$(".search-box").slideToggle(200);
	});

	//========================
	//    BAnner SLIDER  START
	//========================

	$(".banner-slide").owlCarousel({
		loop: true,
		margin: 30,
		autoplay: false,
		dots: false,
		nav: true,
		items: 1,
		navText: ["<i class='ti-angle-left'>", "<i class='ti-angle-right'>"],
	});

	//========================
	//    SALE SLIDER  START
	//========================

	$(".sale-slide").owlCarousel({
		loop: true,
		margin: 30,
		autoplay: false,
		dots: false,
		nav: true,
		items: 1,
		navText: [
			"<svg width='6px' height='10px'><path d='M5.03213 1.53033C5.32503 1.23744 5.32503 0.762563 5.03213 0.46967C4.73924 0.176777 4.26437 0.176777 3.97147 0.46967L5.03213 1.53033ZM1.70891 3.79289L2.23924 4.32322H2.23924L1.70891 3.79289ZM1.70891 5.20711L2.23924 4.67678H2.23924L1.70891 5.20711ZM3.97147 8.53033C4.26437 8.82322 4.73924 8.82322 5.03213 8.53033C5.32503 8.23744 5.32503 7.76256 5.03213 7.46967L3.97147 8.53033ZM3.97147 0.46967L1.17858 3.26256L2.23924 4.32322L5.03213 1.53033L3.97147 0.46967ZM1.17858 5.73744L3.97147 8.53033L5.03213 7.46967L2.23924 4.67678L1.17858 5.73744ZM1.17858 3.26256C0.49516 3.94598 0.495162 5.05402 1.17858 5.73744L2.23924 4.67678C2.14161 4.57914 2.14161 4.42085 2.23924 4.32322L1.17858 3.26256Z' fill='#FAE155'/></svg>",
			"<svg width='6px' height='10px'><path d='M1.53131 0.46967C1.23841 0.176777 0.76354 0.176777 0.470647 0.46967C0.177753 0.762563 0.177753 1.23744 0.470647 1.53033L1.53131 0.46967ZM3.79387 3.79289L3.26354 4.32322H3.26354L3.79387 3.79289ZM3.79387 5.20711L3.26354 4.67678H3.26354L3.79387 5.20711ZM0.470646 7.46967C0.177753 7.76256 0.177753 8.23744 0.470647 8.53033C0.76354 8.82322 1.23841 8.82322 1.53131 8.53033L0.470646 7.46967ZM0.470647 1.53033L3.26354 4.32322L4.3242 3.26256L1.53131 0.46967L0.470647 1.53033ZM3.26354 4.67678L0.470646 7.46967L1.53131 8.53033L4.3242 5.73744L3.26354 4.67678ZM3.26354 4.32322C3.36117 4.42085 3.36117 4.57914 3.26354 4.67678L4.3242 5.73744C5.00762 5.05402 5.00762 3.94598 4.3242 3.26256L3.26354 4.32322Z' fill='#FAE155'/></svg>",
		],
	});

	//======================
	// REVIEW SLIDER  START
	//======================

	$(".trending-item").owlCarousel({
		loop: true,
		margin: 30,
		autoplay: true,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1.1,
				margin: 12,
			},
			355: {
				items: 2,
				margin: 12,
			},
			375: {
				items: 2.15,
				margin: 12,
			},
			576: {
				items: 2.50,
				margin: 12,
			},
			// 500: {
			// 	items: 2.2,
			// },
			// 600: {
			// 	items: 2.2,
			// },
			768: {
				items: 3,
			},
			1300: {
				items: 5,
			},
		},
	});

	//======================
	// REVIEW SLIDER  START
	//======================

	$(".review-caro").owlCarousel({
		loop: true,
		margin: 30,
		autoplay: true,
		nav: true,
		navText: ["<i class='ti-angle-left'>", "<i class='ti-angle-right'>"],
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			768: {
				items: 2,
			},
			1240: {
				items: 3,
			},
		},
	});

	//======================
	// NICE SELECT
	//======================

	if ($("select").length > 0) {
		$("select").niceSelect();
	}

	// COOKIES POPUP

	$(".cookies").on("click", function () {
		$(this).fadeOut("");
	});

	// TOOLTIP

	$(document).ready(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	

	 //=========================
    // Price Range Slider
    //=========================

    if ($("#slider-range").length > 0) {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 100,
            values: [13, 80],
            slide: function (event, ui) {
                $("#minamount").html("$" + ui.values[0]);
                $("#maxamount").html("$" + ui.values[1]);
            }
        });
        $("#minamount").html("$" + $("#slider-range").slider("values", 0));
        $("#maxamount").html("$" + $("#slider-range").slider("values", 1));

    };

	
	
    //======================
    // Partner slider carousel
    //======================


    $(".partner-logo").owlCarousel({
        loop: true,
        margin: 5,
        autoplay: true,
        nav: true,
        dot: false,
		navText: ["<i class='ti-angle-left'>", "<i class='ti-angle-right'>"],
        responsive: {
            0: {
                items: 2
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            768: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    });



	// Theme switcher
	$(".color-switcher").on("click", function () {
		if ($(this).attr("data-theme") == "bg-light") {
			$(this).attr("data-theme", "bg-dark");
			$("body").addClass("theme-light");
			$("body").removeClass("theme-dark");
		} else {
			$(this).attr("data-theme", "bg-light");
			$("body").addClass("theme-dark");
			$("body").removeClass("theme-light");
		}
		// console.log("hi");
	});
	$(".check").on("click", function () {
		$(this).toggleClass("active");
	});

	// Add slideDown animation to Bootstrap dropdown when expanding.
	$(".dropdown").on("show.bs.dropdown", function () {
		$(this).find(".dropdown-menu").first().stop(true, true).slideDown();
	});

	// Add slideUp animation to Bootstrap dropdown when collapsing.
	$(".dropdown").on("hide.bs.dropdown", function () {
		$(this).find(".dropdown-menu").first().stop(true, true).slideUp();
	});

	$(".review-popup-toggler").on("click", function () {
		$(".review-popup").slideToggle(200);
	});

	// flyout-menu

	//======================
	// Menu
	//======================
	$(".flyout-menu li.has-menu-children").children(".sub-menu").prepend(`<a href="javascript:void(0)" class="back"><i class="fas fa-chevron-left"></i><span></span></a>`);

	$(".toggle-icon").on("click", function (e) {
		e.stopPropagation();
		$(".flyout-menu").addClass("slide-navbar").css({
			zIndex: 4,
		});
	});
	$("body, html, #close-menu").on("click", function (e) {
		$(".flyout-menu").removeClass("slide-navbar").css({
			zIndex: -1,
		});
	});
	$(".flyout-menu").on("click", function (e) {
		e.stopPropagation();
	});

	$(".flyout-menu .has-menu-children a").on("click", function (e) {
		let subMenu = $(this).parent().children(".sub-menu");
		subMenu.addClass("submenu-open");
		let currNavText = $(this).text();
		subMenu.find(" > .back span").text(currNavText);
		// console.log(subMenu.find(" > .back span"));
		// console.log(subMenu);
	});

	$(".back").on("click", function (e) {
		console.log("red");
		// console.log($(this).parent());
		$(this).parent(".sub-menu").removeClass("submenu-open");
		e.stopPropagation();
		// e.preventDefault();
	});



	//=================================
	// Adding back button for sub-menu
	//=================================

	// REVIEW BTN SCROLL

	$("#writeReviewBtn").on("click", function(e) {
		$(".review-popup").fadeOut();
		$(".product-description .nav li a").removeClass('active')		
		$("#reviewLink").addClass('active')
		
		$('.tab-pane').removeClass("show active"	)
		$("#reviews").addClass("show active")
		// e.preventDefault();
		$('html, body').animate({
			scrollTop: $('#review').offset().top
		}, 500);
	})


	// FIFA-21 TABS
	var headerHeight = $(".header").height()

	$("#pc-tabs").on("click", function(e) {
		$(".nav-tabs li a").removeClass('active')	
		$('html, body').animate({
			scrollTop: $('#PC').offset().top - headerHeight
		}, 500);
	})
	
	$("#xbox-tabs").on("click", function(e) {
		$(".nav-tabs li a").removeClass('active')	
		$('html, body').animate({
			scrollTop: $('#XBOX').offset().top - headerHeight
		}, 500);
	})
	$("#play-tabs").on("click", function(e) {
		$(".nav-tabs li a").removeClass('active')	
		$('html, body').animate({
			scrollTop: $('#PLAYSTATION').offset().top - headerHeight
		}, 500);
	})
	$("#nine-tabs").on("click", function(e) {
		$(".nav-tabs li a").removeClass('active')	
		$('html, body').animate({
			scrollTop: $('#NINTENDO').offset().top - headerHeight
		}, 500);
	})
	

	// RATING SELECT 

	const ratings = document.querySelectorAll(".content-card .ratings a")
	let arr = Object.values(ratings)
	
	for ( let i of arr) {
		$(i).on("mouseover", function() {
			$(ratings).removeClass("active")
			const itemCount = arr.indexOf(i);
			for ( let j = 0; j <= itemCount; j++) {
				$(arr[j]).addClass('active')
				console.log(arr[j]);
			}
			console.log(arr.indexOf(i));
		})
	}

	$(ratings).on('click', function(e) {
		e.preventDefault();
	})



 // //=============================
    // // SIDE CARd
    // //=============================

    $('.shopping-cart').on('click', function () {
        $('.sc-model').addClass('active');
    })
    $('.close').on('click', function () {
        $('.sc-model').removeClass('active');
    })

	$(document).on("click", function (e) {
		if ($(e.target).closest(".sc-container").length === 0 && $(e.target).closest(".shopping-cart").length === 0) {
			$(".sc-model").removeClass("active");
		}
	});


 //======================
    //SCROLL BAR FUNCTION
    //======================

    $(window).on("load", function () {
        $(".slideCol").mCustomScrollbar();
    });


    //=================================
    //SIDE BAR END
    //=================================
	


})(jQuery);
