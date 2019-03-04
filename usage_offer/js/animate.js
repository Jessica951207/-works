/**
 * Created by ChenCheng on 2015/12/4.
 */
$(document).ready(function () {
    $(".Tip").fancybox({
        'titlePosition': 'inside',
        'transitionIn': 'none',
        'transitionOut': 'none'
    });

    $('.popup_alert').fancybox({
        scrolling: 'no',
        onStart: function (e) {
            $('#popuplink').attr('href', $(e).attr('link'));
            $('#popup').show();
        }, onClosed: function () {
            $('#popup').hide();
        }
    });

    $(document).scroll(function(){
        if($(document).scrollTop()>=1300){
            setTimeout(function () {
                $("#PhoneFlow_ul").animate({opacity: "1"}, 500);
                setTimeout(function () {
                    $("#PhoneFlow_step1").animate({opacity: "1"}, 300);
                    setTimeout(function () {
                        $("#PhoneFlow_step2").animate({opacity: "1"}, 600);
                        setTimeout(function () {
                            $("#PhoneFlow_step3").animate({opacity: "1"}, 900);
                            setTimeout(function () {
                                $("#PhoneFlow_img1").animate({opacity: "1"}, 700);
                                setTimeout(function () {
                                    $("#PhoneFlow_img2").animate({opacity: "1"}, 700);
                                    setTimeout(function () {
                                        $("#PhoneFlow_img3").animate({opacity: "1"}, 700);
                                    },500);
                                },500);
                            },500);
                        },500);
                    },500);
                },500);
            },0);
        }
        else if($(document).scrollTop()>=1000){
            setTimeout(function () {
                $("#OnlineFlow_ul").animate({opacity: "1"}, 500);
                setTimeout(function () {
                    $("#OnlineFlow_step1").animate({opacity: "1"}, 300);
                    setTimeout(function () {
                        $("#OnlineFlow_step2").animate({opacity: "1"}, 600);
                        setTimeout(function () {
                            $("#OnlineFlow_step3").animate({opacity: "1"}, 900);
                            setTimeout(function () {
                                $("#OnlineFlow_img1").animate({opacity: "1"}, 700);
                                setTimeout(function () {
                                    $("#OnlineFlow_img2").animate({opacity: "1"}, 700);
                                    setTimeout(function () {
                                        $("#OnlineFlow_img3").animate({opacity: "1"}, 700);
                                    },500);
                                },500);
                            },500);
                        },500);
                    },500);
                },500);
            },0);
        }
        else if($(document).scrollTop()>=600){
            setTimeout(function () {
                $("#advantage_img1").animate({opacity: "1"},1000);
                setTimeout(function () {
                    $("#advantage_img2").animate({opacity: "1"},1000);
                    setTimeout(function () {
                        $("#advantage_img3").animate({opacity: "1"}, 1000);
                        setTimeout(function () {
                            $("#advantage_img4").animate({opacity: "1"}, 1000);
                        },500);
                    },500);
                },500);
            },0);
        }
    });

    /*$("#out_box").click(function () {
        alert($(document).scrollTop());
    });*/
});


