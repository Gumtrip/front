/**
 * Created by gumtrip on 2016/4/17.
 */
//下部选项卡
$(document).ready(function () {
    $(".product_feature_nav li").mouseover(function () {
        var i =$(this).index();//选项卡索引
      //  var target =$(this).first().offset();
        $(".product_feature_nav li").eq(i).css('color','blue').siblings().css('color','black');//b元素是内联
        $('.p_f_selected').stop().animate({
            left:130 *i,
        },300);
        $('.product_list ul').eq(i).show().siblings().hide();//选项卡内容
    })

    //切换图片
    $('.pic_view li').eq(0).addClass('selected');//添加选中的css
    var index = 0;//图片索引
    var slidewidth=$('.pic_view li').width();
    $('.right_arrow1').click(function () {
        index++;
        index=index==8?0:index;
        switcher();
    })
    $('.left_arrow1').click(function () {
        index--;
        index=index==-1?7:index;
        switcher();
    })
    $('.pic_view').find('li').on('click', function () {
        index = $(this).index();
        console.log(index);
        switcher();
    })

    function switcher(){
        var picname=$('.pic_view a').eq(index).attr('href');
        console.log(picname);
        $('.product_d_pic img').attr('src',picname);
        $('.pic_view').find('li').eq(index).addClass('selected').siblings().removeClass('selected');//添加选中的css
        if(index<=4){
            $('.pic_view ul').animate({
                left:-index*slidewidth,
            },'fast');
        }else{
            $('.pic_view ul').animate({
                left:-616,
            },'fast');;
        }
    }
    //放大图片
/*未完成
    $('.product_d_pic ').click( function () {
        $('.zoom_pic').show();
        $('.zoom_pic_container img').eq(1).attr('src',$('.product_d_pic a').attr('href'));
    })
    $('.zoom_pic').click(function () {
        $('.zoom_pic').hide();
    })
*/
    //阻止默认事件
    $('.pic_view,.product_d_pic').find('a').click(function (event) {
        event.preventDefault();
    })


})