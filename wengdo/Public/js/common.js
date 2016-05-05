/**
 * Created by gumtrip on 2016/5/4.
 */
$(document).ready(function(){
//友情链接
    $('.line').change(function(){
        //window.location.href=$(this).val()//在原来的网址中打开
        window.open($(this).val());//在新窗口打开用这个
    })
//导航
//$('.nav_1').children()也可
    $('.nav_1>li').hover(function () {
        var i = $(this).index();
    $('.nav_2').css('left',-i*60);

        $(this).children('ul.nav_2').show();
    },function(){
        $(this).children('ul.nav_2').hide();
    });

})