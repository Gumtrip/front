/**
 * Created by gumtrip on 2016/4/17.
 */
$(document).ready(function () {
    $(".product_feature_nav li").mouseover(function () {
        var i =$(this).index()
      //  var target =$(this).first().offset();
        $(".product_feature_nav li").eq(i).css('color','blue').siblings().css('color','black');//b元素是内联
        $('.p_f_selected').stop();//首先之前的停止动画
        $('.p_f_selected').animate({
            left:130 *i,
        },300);
        $('.product_list ul').eq(i).show().siblings().hide();//选项卡内容
    })

    //切换图片
    $('.adver li').on('click', function () {
        var i = $(this).index();
        $('.product_d_pic img').attr('src','Public/images/pro_0'+(i+1)+'.png')
    })


    $('.adver li').eq(3).nextAll().hide();//初始化
    $('.banner img').eq(0).css('z-index',2).nextAll().css('z-index',1)
    $('.banner img ').eq(0).css('top',0)
    var j =0;//当前显示的图片序号

    $('#btn_r').on('click', function () {
        if(j ==$('.banner img').length-1 ){
            j=0;
            $('.banner img').last().css('z-index',1)
        }else{
            j++;
        }

        $('.banner img').eq(j).css('z-index',2).prev().css('z-index',1)
        $('.banner img').eq(j).animate({
            top:0
        },1000, function () {
            if(j==0){
                $('.banner img').css('top',-215)
            }else{
                $('.banner img').eq(j).prev().css('top',-215)
            }
        })
    })
    function lunbo(){
        if(j ==$('.banner img').length-1 ){
            j=0;
        }else{
            j++;
        }

        $('.banner img').eq(j).css('z-index',2).siblings().css('z-index',1)
        $('.banner img').eq(j).animate({
            top:0
        },1000, function () {
                $('.banner img').eq(j).siblings().css('top',-215)
        })
    }
    var time = setInterval(lunbo,2000)


    //做一个放大镜
})