/**
 * Created by gumtrip on 2016/4/17.
 */
//�²�ѡ�
$(document).ready(function () {
    $(".product_feature_nav li").mouseover(function () {
        var i =$(this).index();//ѡ�����
      //  var target =$(this).first().offset();
        $(".product_feature_nav li").eq(i).css('color','blue').siblings().css('color','black');//bԪ��������
        $('.p_f_selected').stop().animate({
            left:130 *i,
        },300);
        $('.product_list ul').eq(i).show().siblings().hide();//ѡ�����
    })

    //�л�ͼƬ
    $('.pic_view li').eq(0).addClass('selected');//���ѡ�е�css
    var index = 0;//ͼƬ����
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
        $('.pic_view').find('li').eq(index).addClass('selected').siblings().removeClass('selected');//���ѡ�е�css
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
    //�Ŵ�ͼƬ
/*δ���
    $('.product_d_pic ').click( function () {
        $('.zoom_pic').show();
        $('.zoom_pic_container img').eq(1).attr('src',$('.product_d_pic a').attr('href'));
    })
    $('.zoom_pic').click(function () {
        $('.zoom_pic').hide();
    })
*/
    //��ֹĬ���¼�
    $('.pic_view,.product_d_pic').find('a').click(function (event) {
        event.preventDefault();
    })


})