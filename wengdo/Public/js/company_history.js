/**
 * Created by gumtrip on 2016/4/20.
 */
$(document).ready(function () {
    //³õÊ¼»¯
    $('.pic_num li').eq(0).css('opacity',0.3)//Í¼Æ¬Ë÷Òý
    $('.banner img').eq(0).css('z-index',1).siblings('img').css('z-index',0)
    $('.banner img').eq(0).css('top',0).siblings('img').css('top',215)
    $('.pic_info').html($('.banner img').eq(0).attr('alt'))



    $('.pic_num li').mouseover(function () {
        var i = $(this).index();
        var name=$('.banner img').eq(i).attr('alt')
        $('.banner img').eq(i).css('z-index',1).animate({
            top:0,

        },500, function () {
            $('.banner img').eq(i).siblings('img').css({
                'top':215
            })
        }).siblings('img').css('z-index',0);
        $(this).css('opacity',0.3).siblings('li').css('opacity',1)
        $('.pic_info').html(name)
    })
})