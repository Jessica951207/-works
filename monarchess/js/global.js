function set_size() {
    $('html').css({'font-size':$(window).width()>=750?14:($(window).width()/750*14)})
}
$(window).resize(set_size);

$.fn.setEqualHeight = function (ele) {
    var maxHeight = 0, maxElement = null;
    $(ele).css({
        "height": "auto"
    });
    $(ele).each(function () {
        if (($(this).height() + parseInt($(this).css("padding-bottom")) + parseInt($(this).css("padding-top"))) > maxHeight) {
            maxHeight = $(this).height() + parseInt($(this).css("padding-top")) + parseInt($(this).css("padding-bottom"));
            maxElement = this;
        }
    });
    $(ele).not($(maxElement)).each(function () {
        $(this).height(maxHeight - parseInt($(this).css("padding-top")) - parseInt($(this).css("padding-bottom")))
    });
};
function closePopup(id) {
    $('#' + id).hide();
}
function openPopup(id) {
    $('#' + id).fadeIn();
}

$(function () {
    set_size();
	var popupHeight = $(window).height();
	$('.popupContent').height(popupHeight *0.7);
    
    var swiper2=new Swiper('#swiper2',{
		loop : true,
        roundLengths : true,
        slidesPerView : 1.3,
        slidesPerGroup : 1,
        spaceBetween : 0,
		effect : 'coverflow',		
		centeredSlides: true,
		allowTouchMove:true,
		autoplay:true,
		speed:1500,
		autoplay: {
		  delay: 4000,
		  disableOnInteraction: false,
		  waitForTransition: false,
		},
		coverflowEffect: {
			rotate: 0,
			stretch: -30,
			depth: 130,
			slideShadows : false
		  },
		pagination: {
			el: '.swiper-pagination',
		  },
		
        /*breakpoints: {
            //当宽度小于等于640
            640: {                
                slidesPerView: 1,
                slidesPerGroup : 1,
				spaceBetween : 10,
            }
        },*/
        /*navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },*/
		
    });
	

    $(".swiper-container").each(function () {
        $("body").setEqualHeight($(".eventTitle", this));
        $("body").setEqualHeight($(".eventTime", this));
    });

	$('.dallor_deposit').click(function(){
		openPopup('dollarPopup');
	});
	
	$('.structure_deposit').click(function(){
		openPopup('depositPopup');
	});
	
	$('.BFC_fitness').click(function(){
		openPopup('BFCPopup');
	});
	
    $('.stadium').click(function(){
		openPopup('stadiumPopup');
	});  
	
	$('.clarins').click(function(){
		openPopup('clarinsPopup');
	}); 

    
    
});