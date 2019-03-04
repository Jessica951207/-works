$(function(){
    var touchy,
        touchendy,
        issectionmoving = false,
        zIndex = 15,
        showSectionIndex = 0,
        sectionCount = $('#content_holder').find('section').length;

    $('#content_holder').bind('touchstart', function() {
        touchy = touchendy = Number(event.touches[0].clientY);
    }).bind('touchmove', function() {
        event.preventDefault();
        touchendy = Number(event.touches[0].clientY);
    }).bind('touchend', function() {
        var moveDistance = touchy - touchendy;
        if (moveDistance < -50 && !issectionmoving) {
            if (showSectionIndex <= 0 || showSectionIndex == sectionCount) return;
            prevSection();
        } else if (moveDistance > 50 && !issectionmoving) {
            if (showSectionIndex >= sectionCount - 1) return;
            nextSection();
    }
    });
    $('.adv_info').click(function(){
        var _this=$(this);
        showSectionIndex=_this.attr('data-show')-1;

        nextSection();
        window.setTimeout(function() {
            _this.parents('section').removeAttr('style class');
        }, 500);
    });
    $('#back_cta').click(function(){
        var _this=$(this).hide();
        var pre_index=showSectionIndex;
        showSectionIndex=_this.attr('data-show')-1;
        console.log(pre_index);
        console.log(showSectionIndex);

        nextSection();
        window.setTimeout(function() {
            $('#content_holder section').eq(pre_index).removeAttr('style class');
        }, 500);
    });

    function prevSection() {
        issectionmoving = true;
        if(showSectionIndex<=2){
            $('#back_cta').hide();
        }
        $('#content_holder section').eq(--showSectionIndex).addClass('prevsection').css('z-index', ++zIndex);
        window.setTimeout(function() {
            $('#content_holder section').eq(showSectionIndex + 1).removeAttr('style class');
            issectionmoving = false;
        }, 500);
    }
    function nextSection() {
        issectionmoving = true;
        if(showSectionIndex>=1){
            $('#back_cta').show();
        }
        $('#content_holder section').eq(++showSectionIndex).addClass('nextsection').css('z-index', ++zIndex);
        window.setTimeout(function() {
            $('#content_holder section').eq(showSectionIndex - 1).removeAttr('style class');
            issectionmoving = false;
        }, 500);
    }
});