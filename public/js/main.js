/**
 * Created by Administrator on 2016/6/2 0002.
 */

var isIndex=true;
var onCLickOnOff=true;      //防止过快点击重复提交加一个开关

$(function(){
    //runPage('contact/ajaxMyOpenSoure.html')

    navGoTop();
    $(window).scroll(navGoTop);
    function navGoTop(){
        var _scroll=$(window).scrollTop();
        if(_scroll>10){
            if(isIndex){
                $('.nav-wrap').addClass('goTop-nav');
            }
            $('.nav-wrap').addClass('top');
        }else{
            if(isIndex){
                $('.nav-wrap').removeClass('goTop-nav');
            }
            $('.nav-wrap').removeClass('top');
        }
    }
});
//ajax  请求文章页
function runPage(pageUrl){
    if(pageUrl=="" || onCLickOnOff==false) return ;
    onCLickOnOff=false;

    $.ajax({
        url:pageUrl,
        success:function(res,status){
            if(status == "success"){
                if(isIndex){
                    $('.nav-wrap').addClass('goTop-nav');
                }else{
                    $('.nav-wrap').removeClass('goTop-nav');
                }
                var prevTab=$('.ajax-tab').eq(0);
                prevTab.after("<section class='ajax-tab'></section>");
                var newTab=$('.ajax-tab').eq(1);
                prevTab.animate({left:'50%',top:'50%',width:0,height:0,opacity:0});
                newTab.html(res);
                newTab.css({left:'50%',top:'50%',width:0,height:0,opacity:0});
                newTab.animate({left:0,top:0,width:'100%',height:'100%',opacity:1},function(){
                    setTimeout(function(){
                        prevTab.remove();
                        $('.ajax-tab').css({height:'auto'});
                        onCLickOnOff=true;
                        isIndex?$('.banner').removeClass('small'):$('.banner').addClass('small');
                    },500);
                })
            }
        }
    });
}