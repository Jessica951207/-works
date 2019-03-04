/**
 * Created by ChenCheng on 2016/11/3.
 */

$(function () {
    var contentIndex = 0,
        itemIndex = 0,
        detailIndex = 0,
        contentItemNum = new Array();

    //home点击
    /*$('.home_box').click(function () {
        $('.first_nav_btn').eq(0).click();
    });*/

    //根据html内容生成二维数组
    for (var i = 0, L = $('.content').length; i < L; i++) {
        contentItemNum[i] = new Array();
        for (var c = 0, N = $('.content').eq(i).children('.item').length; c < N; c++) {
            contentItemNum[i][c] = $('.content').eq(i).children('.item').eq(c).children('.detail').length;
        }
    }
    /*console.log(contentItemNum);*/
    judgeArrow();

    //自动设置内容分割线
    $('.detail').each(function () {
        if ($(this).children('div').length > 1) {
            $(this).children('.left').addClass('right_border');
        }
    });
    $('.rightHigh').children('.left').removeClass('right_border');
    $('.rightHigh').children('.right').addClass('left_border');

    $('.first_nav_btn').on({
        //一级菜单点击
        click: function () {
            contentIndex = $('.first_nav_btn').index(this);
            itemIndex = 0;

            reshow();
            $('.item,.arrow_box').hide();
            $('.content').fadeOut(0).eq(contentIndex).fadeIn(200).find('.item').eq(itemIndex).show();
            /*console.log(contentIndex);*/
            judgeArrow();

        },
        //nav mouseover效果
        mouseover: function (e) {
            e.stopImmediatePropagation();
            $(this).children().show();
        }
    });
    $('html,body').mouseover(function(){
        $('.first_nav_btn').children().hide();
    });
    $('.arrow_show').hover(function () {
            $(this).parent('.second_nav').siblings('.arrow_icon').addClass('isSelected');
        },
        function () {
            $('.arrow_icon').removeClass('isSelected');
        });

    //二级菜单点击
    $('.second_nav_li').click(function (e) {
        e.stopImmediatePropagation();
        contentIndex = $('.first_nav_btn').index($(this).closest('.first_nav_btn'));
        itemIndex = $('.second_nav').eq(contentIndex).find('.second_nav_li').index(this);

        reshow();
        $('.second_nav,.item,.arrow_box').hide();
        $('.content').fadeOut(0).eq(contentIndex).fadeIn(200).find('.item').eq(itemIndex).show();
        judgeArrow();

    });

    //右箭头点击
    $('.right_arrow').click(function () {
        $('.left_arrow').show();
        if (detailIndex >= contentItemNum[contentIndex][itemIndex] - 1) {
            detailIndex = contentItemNum[contentIndex][itemIndex] - 1;
            return false;
        }
        ++detailIndex;
        if (detailIndex >= contentItemNum[contentIndex][itemIndex] - 1)$('.right_arrow').hide();
        /*console.log(detailIndex);*/
        $('.content').eq(contentIndex).children('.item').eq(itemIndex).children('.detail').fadeOut(0).eq(detailIndex).fadeIn(200);
    });
    //左箭头点击
    $('.left_arrow').click(function () {
        $('.right_arrow').show();
        if (detailIndex <= 0) {
            detailIndex = 0;
            return false;
        }
        --detailIndex;
        if (detailIndex <= 0) $('.left_arrow').hide();
        /*console.log(detailIndex);*/
        $('.content').eq(contentIndex).children('.item').eq(itemIndex).children('.detail').fadeOut(0).eq(detailIndex).fadeIn(200);
    });

    //根据内容判断是否显示左右箭头
    function judgeArrow() {
        if (contentItemNum[contentIndex][itemIndex] > 1) {
            $('.arrow_box').show();
        }
    }

    //刷新内容
    function reshow() {
        detailIndex = 0;
        $('.left_arrow,.detail').hide();
        $('.right_arrow,.first_detail').show();
    }
});



