jQuery(function() {

	var errmsg = {
		card_number : {
			blank : '请输入信用卡卡号后4位',
			illegal : '请输入正确的信用卡卡号后4位'
		},
        id_number : {
			blank : '请输入身份证号码',
			illegal : '请输入正确身份证号码'
		},
        id_number_oth : {
			blank : '请输入证件号码',
			illegal : '请输入正确证件号码'
		}
	};
	
    var reg = {
        cardnum : /^[0-9]{4}$/,
        idnum1 : /^[0-9]+$/,
        // idnum2 : /^[0-9]{17}[a-zA-Z0-9]{1}$/,
        idnum2 : /^[0-9]{14}[a-zA-Z0-9]{1}$/,
        idnum3 : /^[0-9]{17}[a-zA-Z0-9]{1}$/,
        idnum4 : /^[a-zA-Z0-9]+$/
    };

    $(document.forms[0]).submit(function(event) {
		// get form data
		//var card_number = $('[name="card_number"]').val();
		//var id_number = $('[name="id_number"]').val();
		//var id_other_number = $('[name="id_number_oth"]').val();
		var tel = $('[name="tel"]').val();
		
		// claer errmsg
		$('.errmsg').html('');
		// clear tick/cross
		$('.ico').removeClass('fail').removeClass('success');
		
        var canSubmit = true;

        function noSubmit() {
            canSubmit = false;
        }

        // fill in card number last 4 digits.
        /*if ( card_number == '' ) {
			$('#card_number_field .errmsg').html(errmsg.card_number.blank);
			$('#card_number_field .ico').addClass('fail');
            noSubmit();
		}else if ( !reg.cardnum.test(card_number) ) {
			$('#card_number_field .errmsg').html(errmsg.card_number.illegal);
			$('#card_number_field .ico').addClass('fail');
            noSubmit();
        } else {
			$('#card_number_field .ico').addClass('success');
		}*/
		
		if ( tel == '' ) {
			$('#tel_field .errmsg').html('请填写正确的手机号');
			$('#tel_field .ico').addClass('fail');
            noSubmit();
		}else if ( !/(13|14|15|17|18)\d{9}/.test(tel) ) {
			$('#tel_field .errmsg').html('请填写正确的手机号');
			$('#tel_field .ico').addClass('fail');
            noSubmit();
        } else {
			$('#tel_field .ico').addClass('success');
		}
		
        // fill in id number if user selected "id number".
		/*if ($('[name="cer"]:checked').val() == 'idcard') {
			if ( id_number == '' ) {
				$('#id_number_field .errmsg').html(errmsg.id_number.blank);
				$('#id_number_field .ico').addClass('fail');
				noSubmit();
			} else if( !(reg.idnum2.test(id_number) || reg.idnum3.test(id_number)) ) {
				$('#id_number_field .errmsg').html(errmsg.id_number.illegal);
				$('#id_number_field .ico').addClass('fail');
				noSubmit();
			} else {
				$('#id_number_field .ico').addClass('success');
			}*/

        // fill in id_number_oth if user selected "other id number".
		/*} else {			
			if ( id_other_number == '' ) {
				$('#id_number_oth_field .errmsg').html(errmsg.id_number_oth.blank);
				$('#id_number_oth_field .ico').addClass('fail');
				noSubmit();
			} else if ( !reg.idnum4.test(id_other_number) ) {
				$('#id_number_oth_field .errmsg').html(errmsg.id_number_oth.illegal);
				$('#id_number_oth_field .ico').addClass('fail');
				noSubmit();
			} else {
				$('#id_number_oth_field .ico').addClass('success');
			}
		}*/
		
		if ($('#tnc:checked').val() != 'Y') {
			$('#tncline').css('color','#f00');
			$('#id_agreement .ico').addClass('fail');			
			$('#tnc_2').css('color','#f00');	
			noSubmit();
		} else {
			$('#tncline').css('color','#000');
			$('#id_agreement .ico').addClass('success');
			$('#tnc_2').css('color','#000');			
		}
		
		if (canSubmit) {
			event.preventDefault();
			window.open('thankyou.htm','thankyou','height=360,width=600');
			
			document.form1.action = $('input[name="action_url"]').val();
			document.form1.submit();
			$("#form-table").hide();
			$("#submitting-table").show();
			
		/* 	$.ajax({
				type: "POST",
				url: $('input[name="action_url"]').val(),
				data: $('#form1').serialize(),
				success: function (result) {
					$(this).attr("action", $('[name="action_url"]').val());			
					$('.popup').show();
					$('input[type="text"]').val('');
					// if( msg == 's=1'){ 
						// go_thanks();
					// } else if(msg =='e=4') {
						// notice( '重複電話/電郵/Facebook用戶資料登記', 'form1');
						// return false;   
					// } else {
						// notice( '連線問題，請稍後再嘗試', 'form1');
						// return false;   
					// }
				},
				error: function () {
				
					$(this).attr("action", $('[name="action_url"]').val());			
					$('.popup').show();
					$('input[type="text"]').val('');				
					// alert('submission fail');
				}
			}); */
		}else{
		   event.preventDefault();
		}
        //return canSubmit;
    });
	
	$('[name="cer"]').change(function () {
		if ($('[name="cer"]:checked').val() == 'idcard') {
			// switch disable text field
			$('[name="id_number"]').attr("disabled", false);
			$('[name="id_number_oth"]').attr("disabled", true);
			$('[name="id_number_oth"]').val('');
		} else if ($('[name="cer"]:checked').val() == 'othercard') {
			// switch disable text field
			$('[name="id_number"]').attr("disabled", true);
			$('[name="id_number_oth"]').attr("disabled", false);
			$('[name="id_number"]').val('');
		}
	});
	
	function gup( name ) {
		name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		var regexS = "[\\?&]"+name+"=([^&#]*)";
		var regex = new RegExp( regexS );
		var results = regex.exec( window.location.href );
		
		if( results == null )
			return "";
		else
			return results[1];
	}

	function update_code() {

		get_code = gup('promote_code');
		
		if(get_code!=''){
			document.form1.promote_code.value = get_code;
		}
	}

	$(document).ready(function () {
		update_code();
		$('.btn_close').click(function () {  
			// window.top.location = $('[name="back_url"]').val(); 
			window.open('', '_self', ''); 
			window.close(); 
		});
	});
});
