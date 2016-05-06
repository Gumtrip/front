$(document).ready(function(){
    //banner
    //��ʼ��
    $('.pic_info').html($('.banner img').eq(0).attr('alt'));//��һ��ͼƬ��Ϣ
    $('.pic_num li').eq(0).css('opacity',0.3);
    var len_pic=$('.banner img').length;//ͼƬ����
    var banner_index = 0;//ͼƬ����
    var banner_slidewidth = $('.index_banner li').width();

    $('.pic_num li').on('click', function () {
        banner_index=$(this).index();
        console.log(banner_index);
        banner_switcher();
    });
    //��ʱ��
    function timer(){
        banner_index++;
        banner_switcher();
    }
    var stop = setInterval(timer,2000);
    $('.banner').hover(function(){
        clearInterval(stop);
    },function(){
        stop = setInterval(timer,2000);
    })
    function banner_switcher(){
        if(banner_index>=len_pic){
            banner_index=0;
        }
        $pic_name=$('.index_banner img').eq(banner_index).attr('alt');
        $('.pic_info').html($pic_name);
        $('.pic_num li').eq(banner_index).css('opacity',0.3).siblings().css('opacity',1);
        $('ul.index_banner').animate({
            left:-banner_index*banner_slidewidth
        },'normal');
    }
    //���½�
    $('.message_title li').mouseover(function () {
        var i =$(this).index();
        $('.message_title li').eq(i).addClass('selected').siblings().removeClass('selected');
        $('.message_content ul').eq(i).show().siblings().hide();
    });
    //�м䲿��
    var k =0;
    var slidewidth =$('.new_product li').width();
    $('.product_left,.product_right').click(function(){
        var $name=$(this).attr('class');
        if($name=='product_left'){
            //���
            k--;
            k=k==-1?k=2:k;
            pic_switcher();
        }else{
            //�ұ�
            k++;
            k=k==3?k=0:k;
            pic_switcher();
        }
    });
    function pic_switcher(){
        $('.new_product ul').animate({
            left:-k*slidewidth
        },'fast');
    }

    //���½�
    $('.company_title').on('click', function () {
        $(this).next('dd').slideToggle().siblings('dd').slideUp();
        $(this).addClass('company_title_1').siblings('dt').removeClass('company_title_1');//������ӵ���Ḳ��ͬ��css���ԡ�
    });
});
