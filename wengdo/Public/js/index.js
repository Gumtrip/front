$(document).ready(function(){
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
        console.log($name);
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
        console.log($(this));
        $(this).next('dd').slideToggle().siblings('dd').slideUp();
        $(this).addClass('company_title_1').siblings('dt').removeClass('company_title_1');//������ӵ���Ḳ��ͬ��css���ԡ�
    });
});
