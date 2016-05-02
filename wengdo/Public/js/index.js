$(document).ready(function () {
    $(this).find('.main_right dt').click(
        function () {
            $('.main_right dd').slideUp('normal');
            $(this).next('dd').slideDown('normal');
        })
});
$(document).ready(function () {
    $(this).find('.main_right dt').click(function(){
        $('.main_right dt').removeClass('company_title_1');
        $(this).toggleClass('company_title_1');
    })
});
$(document).ready(function(){
    var  i =0
    var num = $(".index_banner img");
    $('.pic_num li').eq(0).css('opacity','0.3');
    //手动轮播
    $('#btn_l').on('click', function () {
        if(i == 0){
            i = num.length-1;
        }else{
            i--
        }
        $('.index_banner img').eq(i).show().siblings().hide();
        $('.pic_info').html($('div.index_banner img').eq(i).attr('alt'))
        $('.pic_num li').eq(i).css('opacity','0.3').siblings().css('opacity','1')
    });
    $('#btn_r').on('click', function () {
        if(i == num.length-1){
            i = 0;
        }else{
            i++
        }
        $('.index_banner img').eq(i).show().siblings().hide();
        $('.pic_info').html($('div.index_banner img').eq(i).attr('alt'))
        $('.pic_num li').eq(i).css('opacity','0.3').siblings().css('opacity','1')

    });
    //图片序号显示
    $('.pic_num li').on('click', function () {
        console.log($(this).index())
        $('.index_banner img').eq($(this).index()).show().siblings().hide();
        $('.pic_num li').eq($(this).index()).css('opacity',0.2).siblings().css('opacity',1);
    })

    //自动轮播
    function lunbo(){
        if(i == num.length){
            i=0;
        }
        $('.index_banner img').eq(i).show().siblings('img').hide();
        $('.pic_num li').eq(i).css('opacity',0.2).siblings().css('opacity',1);
        $('.pic_info').html($('div.index_banner img').eq(i).attr('alt'))
        i++
    };
//移入停止
    var dingshiqi = setInterval(lunbo,1000)

    $('.index_banner,.pic_num').hover(function () {
        clearInterval(dingshiqi)
    }, function () {
        dingshiqi = setInterval(lunbo,1000)

    })

//导航

    $('.father').hover(function () {
        $('.son').eq($(this).index()).show()
    }, function () {
        $('.son').hide()
    });
    $('.pic_info').html($('div.index_banner img').eq(0).attr('alt'))

    $('.footer_right')
//友情链接
    console.log($('.line option'))
    $('.line').change(function(){
        console.log($(this).val())
        //window.location.href=$(this).val()//在原来的网址中打开
        window.open($(this).val());//在新窗口打开用这个
    })
})
