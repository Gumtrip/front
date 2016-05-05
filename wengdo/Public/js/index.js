$(document).ready(function(){
    //左下角
    $('.message_title li').mouseover(function () {
        var i =$(this).index();
        $('.message_title li').eq(i).addClass('selected').siblings().removeClass('selected');
        $('.message_content ul').eq(i).show().siblings().hide();
    });
    //中间部分
    var k =0;
    var slidewidth =$('.new_product li').width();
    $('.product_left,.product_right').click(function(){
        var $name=$(this).attr('class');
        console.log($name);
        if($name=='product_left'){
            //左边
            k--;
            k=k==-1?k=2:k;
            pic_switcher();
        }else{
            //右边
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

    //右下角
    $('.company_title').on('click', function () {
        console.log($(this));
        $(this).next('dd').slideToggle().siblings('dd').slideUp();
        $(this).addClass('company_title_1').siblings('dt').removeClass('company_title_1');//后来添加的类会覆盖同名css属性。
    });
});
