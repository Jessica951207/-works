var data_trtpl = { "id":"0" };
var html_option = "<option value=''>请选择</option>";

function fis_valid_email(v) {
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var address = v;
	if(reg.test(address) == false) {
		return false;
	}
	return true;
}
function fis_valid_phone(v) {
	var reg = /^([0-9]){11,11}$/;
	var val = v;
	if(reg.test(val) == false) {
		return false;
	}
	return true;
}

function fss_show_err(o, text){
	o = o.substr(0, 1) == '#' ? o : '#' + o;
	e = o + '_error';
	i = o + '_info';
	text = text || '';
	$(i).hide();
	$(e).html(text).show();
}
function fss_show_inf(o, text){
	o = o.substr(0, 1) == '#' ? o : '#' + o;
	e = o + '_error';
	i = o + '_info';
	$(e).hide();
	if(text){ $(i).html(text); }
	$(i).show();
}

function form_submit(){
	var $ = jQuery;
	var $form = $('#rform');
	var result = true;
	
	$form.find('label.error').hide();
	var o, e, m;
	
	o = 'gender'; 
	if( $form.find('input[name="'+o+'"]:checked').length < 1){
		fss_show_err('#' + o, '请选择您的性别'); result = false;
	}
	o = '#name'; 
	if( $(o).val() == ''){
		fss_show_err(o, '请填写您的姓名'); result = false;
	}
	o = '#phone'; 
	if( $(o).val() == ''){
		fss_show_err(o, '请填写正确手机号码，便于我们与您联系'); result = false;
	}else if( !fis_valid_phone($(o).val()) ){
		fss_show_err(o, '请填写正确手机号码，便于我们与您联系'); result = false;
	}
	o = '#city'; e = o + '_error';
	if( $(o).val() == ''){
		fss_show_err(o, '请选择原开户所在城市'); result = false;
	}
	o = '#bank'; e = o + '_error';
	if( $(o).val() == ''){
		fss_show_err(o, '请选择原开户所在分支行'); result = false;
	}
	o = '#email'; e = o + '_error';
	if( $(o).val() == ''){
		fss_show_err(o, '请填写正确的电子邮件'); result = false;
	}else if( !fis_valid_email($(o).val()) ){
		fss_show_err(o, '请填写正确的电子邮件'); result = false;
	}
	
	$form.find('input[name="r_flg"]').each(function(i){
		var index = $(this).val();
		o = 'r'+index+'_gender';
		if( $form.find('input[name="'+o+'"]:checked').length < 1){
			fss_show_err('#' + o, '请选择被推荐人性别'); result = false;
		}
		o = '#r'+index+'_name';
		if( $(o).val() == ''){
			fss_show_err(o, '请填写被推荐人姓名'); result = false;
		}
		o = '#r'+index+'_phone';
		if( $(o).val() == ''){
			fss_show_err(o, '请填写正确手机号码，便于我们与被推荐人联系'); result = false;
		}else if( !fis_valid_phone($(o).val()) ){
			fss_show_err(o, '请填写正确手机号码，便于我们与被推荐人联系'); result = false;
		}
		o = '#r'+index+'_city';
		if( $(o).val() == ''){
			fss_show_err(o, '请选择被推荐人城市'); result = false;
		}
		o = 'r'+index+'_product';
		if( $form.find('input[name="'+o+'"]:checked').length < 1){
			fss_show_err('#' + o, '请选择被推荐人可能感兴趣的产品'); result = false;
		}
	});
	//return result;
	o = 'chk_agree'; 
	if( $form.find('input[name="'+o+'"]:checked').length < 1){
		fss_show_err('#' + o, '请勾选声明以提交您的推荐表'); result = false;
	}
	if( result ){
		var flds = ""; nams = "";
		$form.find('input[name="r_flg"]').each(function(i){
			var j = $(this).val(); var k = i + 1;
			flds += 'r'+j+'_gender' + "," + 'r'+j+'_name' + "," + 'r'+j+'_phone' + "," + 'r'+j+'_city' + ","+'r'+j+'_product'+ ",";
			nams += 'Referree '+k+' Gender' + "," + 'Referree '+k+' Name' + "," + 'Referree '+k+' Phone' + "," + 'Referree '+k+' City' + ","+'Referree '+k+' Product'+ ",";
			
			//alert($("input[name=r"+j+"_gender]").filter(':checked').val())//获取选中的性别
			//alert($("input[name=r"+j+"_product]").filter(':checked').val())//获取选中产品
		});
		//alert(flds );alert(nams );
		
		flds = $("#__default_fields__").val()+","  + flds + "chk_agree";
		nams = $("#__default_names__").val()+"," + nams + "Agree";
		$('#_paramOrder').val( flds );
		$('#_paramAlias').val( nams );
		//alert($('#_paramAlias').val(  ))
		//$form.submit();
		document.getElementById('rform').submit();
	}
}
function form_reset(){
	var $ = jQuery;
	var $form = $('#rform');
	$form.find('label.error').html('').hide();
	$form.find("a.r-delete").each(function(){
		var index = $(this).data("index");
		if( index > 0 ){
			$(this).click();
		}
	});
	data_trtpl.id = 0;
	document.getElementById('rform').reset();
}
function eve_form_events(){
	var template = $.trim($("#PeopleTemplate").html());
	var $form = $('#rform');
	$("a.r-add").on("click", function(){
		if( $form.find('input[name="r_flg"]').length < 5 ){
			data_trtpl.id = parseInt(data_trtpl.id) + 1;
	        //$("#RecommendPanel").append($("#PeopleTemplate").render(data_trtpl));
	        $("#RecommendPanel").append( template.replace( new RegExp("\\{\\{>id\\}\\}", "g"), data_trtpl.id) );
	       	eve_load_cityto('r'+data_trtpl.id+'_city');
	    }
	    if( $form.find('input[name="r_flg"]').length >= 5){
	    	$("a.r-add").css("display", "none");
	    }
    });
	$(document).on("click", "a.r-delete", function(){
		var index = $(this).data("index");
		$("#r-item-" + index).remove();
	    if( $form.find('input[name="r_flg"]').length < 5){
	    	$("a.r-add").css("display", "");
	    }
    });
}
function eve_form_eclear(){
	var $ = jQuery;
	$('#rform').on('blur', 'input.fc_blur', function(){
		if( $(this).val() != ''){ fss_show_inf( '#' + $(this).attr('id') ); }//$('#' + $(this).attr('id') + '_error').html('').hide(); }
	});
	$('#rform').on('change', 'select.fc_change', function(){
		if( $(this).val() != ''){ fss_show_inf( '#' + $(this).attr('id') ); }//$('#' + $(this).attr('id') + '_error').html('').hide(); }
	});
	$('#rform').on('click', 'input[type="radio"].fc_click', function(){
		var name = $(this).attr('name');
		if( $('input[type="radio"][name="'+name+'"]:checked').length > 0 ){
			fss_show_inf( '#'  + name ); //$('#' + name + '_error').html('').hide(); 
		}
	});
}
function eve_load_citybank(){
	eve_load_cityto('city');
	$("#bank").empty().html(html_option);

	var html = html_option;
	$("#city").on("change", function(){
		var index = $("#city").get(0).selectedIndex;
		index--;
		$("#bank").empty().html(html_option);
		if( index < 0 || typeof(data_banks.data[index].data) == "undefined"){ return; }
		html = html_option;
		$.each(data_banks.data[index].data, function(i,data){
			html += "<option value='"+ data.code +"'>"+ data.name +"</option>";
		});
		$("#bank").html(html).prop("disabled", false).css({"display":"","visibility":""});
	});
	
	eve_load_cityto('r0_city');
}
function eve_load_cityto( id ){
	var html = html_option;
	$.each(data_banks.data,function(i,data){
		html += "<option value='"+ data.name  +"'>"+ data.name +"</option>";
	});
	$("#" + id).html(html);
}

function fis_log(msg){
	//if(console && console.log){console.log(msg);}
}

;(function($){


$(document).ready(function(){
	eve_load_citybank();
	eve_form_events();
    eve_form_eclear();
});


})(jQuery);
