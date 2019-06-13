if (!Date.now)
    Date.now = function () { return new Date().getTime(); };

$(document).ready(function(){

    $(".tip_popup").fancybox({
        'titlePosition': 'inside',
        'transitionIn': 'none',
        'transitionOut': 'none'
    });

});


(function () {
    'use strict';

    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = (window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame']);
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)
        || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function (callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime + 16, now);
            return setTimeout(function () { callback(lastTime = nextTime); }, nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
    }
}());

new Vue({
    el: '#out_box',
    data: {
        dataArray: {
            a1: "",
            a2: "",
            a3: "",
            a4: "",
            a5: "",
            a6: "",
            a7: "",
            a8: "",
            a9: "",
            a10: "",
            a11: "",
            a12: "",
            a13: "",
            a14: "",
            a15: "",
            a16: "",
            a17: "",
            a18: "",
            a19: "",
            a20: "",
            a21: "",
            a22: "",
            a23: "",
        },
		provinceArr: [
                {
					id:1,
                    name: '上海',
                    cities: ['上海']
                },
                {
					id:2,
                    name: '北京',
                    cities: ['北京']
                },
				{
					id:3,
                    name: '重庆',
                    cities: ['重庆']
                },
                {
					id:4,
                    name: '天津',
                    cities: ['天津']
                },
                {
					id:5,
                    name: '黑龙江',
                    cities: ['哈尔滨','大庆','齐齐哈尔','佳木斯','鸡西','鹤岗','双鸭山','牡丹江','伊春','七台河','黑河','绥化']
                },
                {
					id:6,
                    name: '吉林',
                    cities: ['长春','吉林','四平','辽源','通化','白山','松原','白城']
                },
				{
					id:7,
                    name: '辽宁',
                    cities: ['沈阳','大连','鞍山','抚顺','本溪','丹东','锦州','营口','阜新','辽阳','盘锦','铁岭','朝阳','葫芦岛']
                },
				{
					id:8,
                    name: '河北',
                    cities: ['石家庄','唐山','邯郸','秦皇岛','保定','张家口','承德','廊坊','沧州','衡水','邢台']
                },
				{
					id:9,
                    name: '山东',
                    cities: ['济南','青岛','淄博','枣庄','东营','烟台','潍坊','济宁','泰安','威海','日照','莱芜','临沂','德州','聊城','菏泽','滨州']
                },
				{
					id:10,
                    name: '江苏',
                    cities: ['南京','镇江','常州','无锡','苏州','徐州','连云港','淮安','盐城','扬州','泰州','南通','宿迁']
                },
				{
					id:11,
                    name: '安徽',
                    cities: ['合肥','蚌埠','芜湖','淮南','亳州','阜阳','淮北','宿州','滁州','安庆','巢湖','马鞍山','宣城','黄山','池州','铜陵']
                },
				{
					id:12,
                    name: '浙江',
                    cities: ['杭州','嘉兴','湖州','宁波','金华','温州','丽水','绍兴','衢州','舟山','台州']
                },
				{
					id:13,
                    name: '福建',
                    cities: ['福州','厦门','泉州','三明','南平','漳州','莆田','宁德','龙岩']
                },
				{
					id:14,
                    name: '广东',
                    cities: ['广州','深圳','汕头','惠州','珠海','揭阳','佛山','河源','阳江','茂名','湛江','梅州','肇庆','韶关','潮州','东莞','中山','清远','江门','汕尾','云浮']
                },
				{
					id:15,
                    name: '海南',
                    cities: ["海口","三亚"]
                },
				{
					id:16,
                    name: '云南',
                    cities: ['昆明','曲靖','玉溪','保山','昭通','丽江','普洱','临沧']
                },
				{
					id:17,
                    name: '贵州',
                    cities: ['贵阳','六盘水','遵义','安顺']
                },
				{
					id:18,
                    name: '四川',
                    cities: ['成都','绵阳','德阳','广元','自贡','攀枝花','乐山','南充','内江','遂宁','广安','泸州','达州','眉山','宜宾','雅安','资阳']
                },
				{
					id:19,
                    name: '湖南',
                    cities: ['长沙','株洲','湘潭','衡阳','岳阳','郴州','永州','邵阳','怀化','常德','益阳','张家界','娄底']
                },
				{
					id:20,
                    name: '湖北',
                    cities: ['武汉','襄樊','宜昌','黄石','鄂州','随州','荆州','荆门','十堰','孝感','黄冈','咸宁']
                },
				{
					id:21,
                    name: '河南',
                    cities: ['郑州','洛阳','开封','漯河','安阳','新乡','周口','三门峡','焦作','平顶山','信阳','南阳','鹤壁','濮阳','许昌','商丘','驻马店']
                },
				{
					id:22,
                    name: '山西',
                    cities: ['太原','大同','忻州','阳泉','长治','晋城','朔州','晋中','运城','临汾','吕梁']
                },
				{
					id:23,
                    name: '陕西',
                    cities: ['西安','咸阳','铜川','延安','宝鸡','渭南','汉中','安康','商洛','榆林']
                },
				{
					id:24,
                    name: '甘肃',
                    cities: ['兰州','天水','平凉','酒泉','嘉峪关','金昌','白银','武威','张掖','庆阳','定西','陇南']
                },
				{
					id:25,
                    name: '青海',
                    cities: ['西宁']
                },
				{
					id:26,
                    name: '江西',
                    cities: ['南昌','九江','赣州','吉安','鹰潭','上饶','萍乡','景德镇','新余','宜春','抚州']
                },
				{
					id:27,
                    name: '新疆',
                    cities: ['乌鲁木齐','克拉玛依']
                },
				{
					id:28,
                    name: '西藏',
                    cities: ['拉萨']
                },
				{
					id:29,
                    name: '宁夏',
                    cities: ['银川','石嘴山','吴忠','固原','中卫']
                },
				{
					id:30,
                    name: '内蒙古',
                    cities: ['呼和浩特','包头','乌海','赤峰','通辽','鄂尔多斯','呼伦贝尔','巴彦淖尔','乌兰察布']
                },
				{
					id:31,
                    name: '广西',
                    cities: ['南宁','柳州','桂林','梧州','北海','崇左','来宾','贺州','玉林','百色','河池','钦州','防城港','贵港']
                },
				{
					id:32,
                    name: '台湾',
                    cities: ['台北','台中','基隆','高雄','台南','新竹','嘉义']
                },
				{
					id:33,
                    name: '香港',
                    cities: ['香港']
                },
				{
					id:34,
                    name: '澳门',
                    cities: ['澳门']
                },
							

            ],
		cities:"",
        submit: true,
        disableEmission: true
    },

    methods: {
		/*省份城市二级联动*/
        selectchange(val){
              for(var i=0; i<this.provinceArr.length; i++){
                if(val === this.provinceArr[i].name ){
                  	this.cities = this.provinceArr[i].cities;
					this.dataArray.a8 = this.cities[0];
				  
                } else{
					this.disableEmission = false;
				}
              }
            },

		/*表单验证*/
        checkForm: function (val) {
            this.submit = true;
			var AllExt = ".jpg|.png|",
				fileSize = 0;

            for (var i = 0; i < val + 1; i++) {
                var item_data = $('.item_data:not(div)').eq(i),
                    err = item_data.data('missing'),
                    objectName = 'a' + (+i + 1);

                /*验证必填项，先判断有没有data-missing，有的话检查是否为空*/
                if (err) {
                    if (item_data.next('.error-message').html() != '')
                        this.submit = false;
                    else {
                        if (this.dataArray[objectName] == '' || this.dataArray[objectName] == undefined) {
                            item_data.next('.error-message').html(err);
                            this.submit = false;
                        } else {
                            item_data.next('.error-message').empty();
                        }
                    }
                }

                if (i == 2) {
                    if (this.dataArray[objectName] == '' || this.dataArray[objectName] == undefined) {
                        item_data.next('.error-message').html(err);
                        this.submit = false;
                    } else if (!this.checkID(this.dataArray[objectName])) {
                        item_data.next('.error-message').html('请输入正确的身份证号码');
                        this.submit = false;
                    } else {
                        item_data.next('.error-message').empty();
                    }
                } else if (i == 3) {
                    if (this.dataArray[objectName] == '' || this.dataArray[objectName] == undefined) {
                        item_data.next('.error-message').html(err);
                        this.submit = false;
                    } else if (!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(this.dataArray[objectName])) {
                        item_data.next('.error-message').html('请输入正确的邮箱地址');
                        this.submit = false;
                    } else {
                        item_data.next('.error-message').empty();
                    }
                } else if (i == 4) {
                    if (this.dataArray[objectName] == '' || this.dataArray[objectName] == undefined) {
                        item_data.next('.error-message').html(err);
                        this.submit = false;
                    } else if (!this.checkMobile(this.dataArray[objectName])) {
                        item_data.next('.error-message').html('请输入正确的手机号');
                        this.submit = false;
                    } else {
                        item_data.next('.error-message').empty();
                    }
                } else if (i == 5) {
                    if (this.dataArray[objectName] == '' || this.dataArray[objectName] == undefined) {
                        item_data.next('.error-message').html(err);
                        this.submit = false;
                    } else if (!/^\d{6}$/.test(this.dataArray[objectName])) {
                        item_data.next('.error-message').html('请输入正确的验证码');
                        this.submit = false;
                    } else {
                        item_data.next('.error-message').empty();
                    }
                } else if (i == 15) {
                    if (this.dataArray[objectName] == '' || this.dataArray[objectName] == undefined) {
                        item_data.next('.error-message').html(err);
                        this.submit = false;
                    } else if (!/^[0-9]\d*$/.test(this.dataArray[objectName])) {
                        item_data.next('.error-message').html('请输入正确的家庭人口数');
                        this.submit = false;
                    } else {
                        item_data.next('.error-message').empty();
                    }
                }else if (i == 16) {
                    if (this.dataArray[objectName] == '' || this.dataArray[objectName] == undefined) {
                        item_data.next('.error-message').html(err);
                        this.submit = false;
                    } else if (!/^[0-9]\d*$/.test(this.dataArray[objectName])) {
                        item_data.next('.error-message').html('请输入正确的劳动人口数');
                        this.submit = false;
                    } else {
                        item_data.next('.error-message').empty();
                    }
                } else if (i == 17) {
                    if (this.dataArray[objectName] == '' || this.dataArray[objectName] == undefined) {
                        item_data.next('.error-message').html(err);
                        this.submit = false;
                    } else if (!/^[0-9]\d*$/.test(this.dataArray[objectName])) {
                        item_data.next('.error-message').html('请输入正确的家庭年收入');
                        this.submit = false;
                    } else {
                        item_data.next('.error-message').empty();
                    }
                }else if (i == 18) {
                    if (this.dataArray[objectName] == '' || this.dataArray[objectName] == undefined) {
                        item_data.next('.error-message').html(err);
                        this.submit = false;
                    } else if (!/^[0-9]\d*$/.test(this.dataArray[objectName])) {
                        item_data.next('.error-message').html('请输入正确的家庭年支出');
                        this.submit = false;
                    } else {
                        item_data.next('.error-message').empty();
                    }
                }else if (i == 22) {
                    if (!this.dataArray[objectName]) {
                        item_data.next().next('.error-message').html(err);
                        this.submit = false;
                    } else {
                        item_data.next().next('.error-message').empty();
                    }
                }
            }
            
            if (val == 23 && this.submit) {
                $.ajax({
                    url: 'saveAid',
                    type: 'POST',
                    data: new FormData(document.forms[0]),
                    async: false,
                    cache: true,
                    dataType: 'json',
                    processData: false,
                    contentType: false,
                    success: function (json) {
                        if (json.error == '') {
                            for (var attr in this.dataArray)
                                this.dataArray[attr] = '';
                            $('form').find(':text,select,textarea,:checkbox,:file').each(function () {
                                if ($(this).is(':checkbox')) $(this).prop('checked', false);
                                else if ($(this).is(':file')) {
                                    $(this).val('').prev().find('div.item_data').html($(this).data('defaultvalue') + '<span class="two">点击上传文件</span>');
                                } else {
                                    if ($(this).prop('name') == 'city') $(this).prop('disabled', true);
                                    $(this).val('');
                                }
                            });
                            $.cookie('sendVerifiyCodeWait', '', { expires: -1 });
                            alert('提交成功');
                        } else
                            alert(json.error);
                    }
                });
            }
        },

		/*文件验证*/
        getImageData: function (value, e) {
            if (e.target.files.length == 0) {
                $(e.target).next('.error-message').html('请选择文件');
                $(e.target).parent().find('.upload').html($(e.target).data('defaultvalue') + '<span class="two">点击上传文件</span>');
                this.submit = false;
            } else {
                var selectFile = e.target.files[0];
                var picName = e.target.files[0].name;

                if(e.target.files.length >= 2 ){
                    $(e.target).next('.error-message').html('只能提交一个');
                    this.submit = false;
                } else if ((selectFile.name.slice(-3)) !== 'jpg' && (selectFile.name.slice(-3)) !== 'png') {
                    $(e.target).next('.error-message').html('请输入正确的文件格式');
                    this.submit = false;
                } else if (selectFile.size > 1048576) {
                    $(e.target).next('.error-message').html('您提交的文件过大');
                    this.submit = false;
                } else {
                    this.dataArray[value] = selectFile;
                    $(e.target).parent().find('.upload').html('已选择：' + picName);
                    $(e.target).next('.error-message').html('');
                }
            }
        },

        checkMobile: function (val) {
            return /^1[345789]\d{9}$/.test(val);
        },


        /*身份证验证*/
        checkCode: function (val) {
            var p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
            var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
            var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
            var code = val.substring(17);
            if(p.test(val)) {
                var sum = 0;
                for(var i=0;i<17;i++) {
                    sum += val[i]*factor[i];
                }
                if(parity[sum % 11] == code.toUpperCase()) {
                    return true;
                }
            }
            return false;
        },
        checkDate :function (val) {
            var pattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;
            if(pattern.test(val)) {
                var year = val.substring(0, 4);
                var month = val.substring(4, 6);
                var date = val.substring(6, 8);
                var date2 = new Date(year+"-"+month+"-"+date);
                if(date2 && date2.getMonth() == (parseInt(month) - 1)) {
                    return true;
                }
            }
            return false;
        },
        checkProv :function (val) {
            var pattern = /^[1-9][0-9]/;
            var provs = {11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门"};
            if(pattern.test(val)) {
                if(provs[val]) {
                    return true;
                }
            }
            return false;
        },
        checkID :function (val) {
            if(this.checkCode(val)) {
                var date = val.substring(6,14);
                if(this.checkDate(date)) {
                    if(this.checkProv(val.substring(0,2))) {
                        return true;
                    }
                }
            }
            return false;
        },
        getAuthenticationCode: function (e) {
            if ($.cookie('sendVerifiyCodeWait') == undefined) {
                var canSend = true;
                if (this.dataArray['a5'] == '' || this.dataArray['a5'] == undefined) {
                    $(e.target).prev('.error-message').html($(e.target).prev().prev().data('missing'));
                    canSend = false;
                } else if (!this.checkMobile(this.dataArray['a5'])) {
                    $(e.target).prev('.error-message').html('请输入正确的手机号');
                    canSend = false;
                }
                else
                    $(e.target).prev('.error-message').html('');

                if (canSend) {
                    $.ajax({
                        url: 'sendVerifiyCode',
                        type: 'POST',
                        data: { tel: this.dataArray['a5'] },
                        async: true,
                        cache: true,
                        dataType: 'json',
                        success: function (json) {
                            if (json.error == '') {
                                alert('发送成功');

                                var date = new Date;
                                date.setTime(Date.now() + 60 * 1000);
                                $.cookie('sendVerifiyCodeWait', Date.now(), { expires: date });
                                console.log(Date.now());
                                sendWaitCountDown();
                            } else
                                alert(json.error);
                        }
                    });
                }
            }
        }

    },

});

var animationFrame;
function sendWaitCountDown() {
    var sendWaitTime = Math.round(60 - (Date.now() - $.cookie('sendVerifiyCodeWait')) / 1000, 10);
    if (isNaN(sendWaitTime)) {
        $('#get_vcode').removeClass('disabled').text('获取验证码');
        cancelAnimationFrame(animationFrame);
    } else {
        $('#get_vcode').addClass('disabled').text('获取验证码（' + sendWaitTime + '）');
        animationFrame = requestAnimationFrame(sendWaitCountDown);
    }
}
sendWaitCountDown();
