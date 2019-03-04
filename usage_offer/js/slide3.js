var INDEX = 0;
var count = 0;
var oldspan;
var href = new Array();
var spanIsClick = true;
count = $('div.slideshowpic').length;
if (count > 1) {
	for (var i = 0; i < count; i++) {
		$('div.slidepoint').append('<span' + (i == 0 ? ' class="first"' : '') + '></span>');
		href[i] = $('div.slideshowpic a').attr('href');
	}
	$('div.slideshowpic').each(function(i, item) {
		if (i > 0) $(this).css({opacity:0,display:'none'})
	});

	oldspan = $('div.slidepoint span').first();
	if ($('div.slidepoint span').length > 0) {
		$('div.slidepoint span').click(function () {
			if ($(this).css('backgroundImage').indexOf('but2.png') > 0)
				return;
			var index = $('div.slidepoint span').index($(this));
			INDEX = index;
			qiehuan(index);
			$('body').stopTime().everyTime('3s', function () { qiehuan(++INDEX); });
		})
	}
	$('body').everyTime('3s', function () { qiehuan(++INDEX); });
}

function qiehuan(index) {
	if (!spanIsClick)
		return;
	spanIsClick = false;
	if (index > count - 1) {
		INDEX = index = 0;
	}
	$(oldspan).css('backgroundImage', 'url(images/but1.png)');
	$('div.slidepoint span').eq(index).css('backgroundImage', 'url(images/but2.png)');
	var oldIndex = $('div.slidepoint span').index(oldspan);
	oldspan = $('div.slidepoint span').eq(index);
	$('div.slideshowpic').eq(oldIndex).animate({ opacity: 0 }, 1000, function(){$(this).hide();
		if(index==3){
			$('.btn1').attr('href','https://www.citibank.com.cn/sim/ICARD/usage_offer/weekend.html');
		} else {
		$('.btn1').attr('href','credit_card2_detail.html');
		}
	});
	$('div.slideshowpic').eq(oldIndex).find('a').removeAttr('href');
	$('div.slideshowpic').eq(index).show().animate({ opacity: 1 }, 1000, function() {
		$(this).find('a').attr('href', href[index]);
		spanIsClick = true;
	});
}