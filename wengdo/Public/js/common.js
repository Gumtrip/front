/**
 * Created by gumtrip on 2016/5/4.
 */
$(document).ready(function(){
//��������
    $('.line').change(function(){
        //window.location.href=$(this).val()//��ԭ������ַ�д�
        window.open($(this).val());//���´��ڴ������
    })
//����
//$('.nav_1').children()Ҳ��
    $('.nav_1>li').hover(function () {
        var i = $(this).index();
    $('.nav_2').css('left',-i*60);

        $(this).children('ul.nav_2').show();
    },function(){
        $(this).children('ul.nav_2').hide();
    });

})