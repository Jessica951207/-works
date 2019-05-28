// JavaScript Document
$(function(){
	var regex_number=/^[0-9]{12}$/;
	var regex_alphaNumber=/^6\d{11}$/;
    var cardNum,card,ecid;
	$('#submitBtn').click(function(){
		if(checkForm()){			
			if(card === '花旗礼程卡'){
				 window.location.href = 'https://webservice.citibank.com.cn/citicoas/?pcode=CC110&scode=LZ88ZDZR&locale=zh_CN&ecid=' + ecid + cardNum;
			}else if(card === '花旗礼享卡'){
				window.location.href = "https://webservice.citibank.com.cn/citicoas/?pcode=CC120&scode=LZ88ZDYR&locale=zh_CN&ecid=" + ecid + cardNum;
			}
		}
	});
	
	/*表单验证*/
	function checkForm(){
        cardNum = $('#idname').val();
        card = $('#Title option:selected').val();
        var submit = true;
				
		/*input标签*/
		if(cardNum === ''){
			$('#idErr').show();
			submit = false;
		}else if($('#idname').attr('data_field_type')=='AlphaNumber'){
			if(!regex_alphaNumber.test(cardNum)){
				 submit = false;
			}
		}else if($('#idname').attr('data_field_type')=='Number'){
			if(!regex_number.test(cardNum)){
				 submit = false;
			}
		}else{
            $('#idErr').hide();
        }
		
		/*select标签*/
		if(card === ''){
			$('#titleErr').show();
			submit = false;
		}else{
            $('#titleErr').hide();
		}

		return submit;
	};
	
	/*触发form的验证*/
	$('input,select').focus(function(){
		$(this).parent().find(".inputBox-lable").show();		
	}).blur(function(){
	   if($(this).val() != ""){
		   $(this).parent().find(".inputBox-lable").show();
		   $('#'+$(this).attr("data_inner_error")).hide();
		   $(this).removeClass('mandy_notfilled');
		   
		   if($(this).attr('data_field_type')=='AlphaNumber'){
			   if(!regex_alphaNumber.test($(this).val())){
				   $('#'+$(this).attr("data_inner_error")).show().html($(this).attr( "data_invalid"));
				   $(this).addClass('mandy_notfilled');
			  }else{
				  $('#'+$(this).attr("data_inner_error")).hide();
				  $(this).removeClass('mandy_notfilled');
			  }
		   }
		   else if($(this).attr('data_field_type')=='Number'){
			   if(!regex_number.test($(this).val())){
				   $('#'+$(this).attr("data_inner_error")).show().html($(this).attr( "data_invalid"));
				   $(this).addClass('mandy_notfilled');
			  }else{
				  $('#'+$(this).attr("data_inner_error")).hide();
				  $(this).removeClass('mandy_notfilled');
			  }
		   }
	   }else{		   
		   $(this).parent().find(".inputBox-lable").hide();		  
		   $('#'+$(this).attr("data_inner_error")).show().html($(this).attr( "data_missing"));
		   $(this).addClass('mandy_notfilled');
	   }
	});
	
	/*获取form值*/
	function gup(name) {
			name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
			var regexS = "[\\?&]"+name+"=([^&#]*)";
			var regex = new RegExp( regexS );
			var results = regex.exec( window.location.href );			
			if( results == null )
				return "";
			else
				return results[1];
		}
	 var ecid=gup('ecid');
	if(ecid.indexOf('PATVCEA') == 0){
		
	}else if(ecid.indexOf('PATVCSA') == 0){
		$('.title').html('最高15000南航里程 助您旅程无忧');
		$('.TabCard').html('您的南航明珠俱乐部会员卡号');
		$('#idname').attr('placeholder','您的南航明珠俱乐部会员卡号');
		$('#idname').attr('data_field_type','Number');
		$('.tips').html('（12位数字）可至南方航空APP或官网查询。');
		$('.Tab_brand1').html('500南航里程');
		$('.Tab_brand2').html('10000花旗南航里程');
		$('.Tab_brand3').html('500南航里程');
	}


	
});