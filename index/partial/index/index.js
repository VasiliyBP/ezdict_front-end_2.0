angular.module('index').controller('IndexCtrl',function($scope){
//Слимскролл
$(document).ready(function(){
    $('.st-translate').slimScroll({
        distance: '5px',
        height: '100%',
        size: '4px',
    });

    $('.item-annotation-inner').slimScroll({
        height:'100%',
        size: '4px'
    });
//  Навигация, кнопки
    $(document).on('click','.user-navigation',function(){
        $('.nav-btn').removeClass('active');
        $(this).addClass('active');
    });
//  поиск
     $(document).on('click','.icon-search',function(){
        if($('.search-wrap').is(':visible')) {
            $('.search-wrap').stop().hide();//animate({'marginTop':'0','margin-bottom':'0','height':'0'},400).fadeOut();
        } else {
            $('.search-wrap').stop().show();//fadeIn().animate({'marginTop':'12px','margin-bottom':'12px','height':'35px'},400);
        }
    });
// Анимация аннотаций контента   
    $('.pop-new-item').on('mouseenter', function(){
            $(this).find('.item-annotation').stop().animate({'height':'100%'},'fast', function(){
                $(this).find('.item-description-wrap').stop().fadeIn('fast').css('display','table');
                });
        }); 
    $('.pop-new-item').on('mouseleave', function(){
        $(this).find('.item-description-wrap').css('display','none');
        $(this).find('.item-annotation').stop().animate({'height':'40px'}, 'fast'); 
    }); 
// Карусель, слайды
    $('.slide-btn').on('click',function(){
        if(!$(this).hasClass('active')) {
            $('.slide-btn').removeClass('active');
            $(this).addClass('active');
            $('.carousel-item').addClass('next').stop().fadeOut(400,function(){$(this).removeClass('next');});
            var index = $(this).index();
            $('.carousel-item').eq(index).stop().fadeIn();
        }
    });
//стикер
    $('.slide-down-btn').on('click', function(){
        if (!$('.st-translate').hasClass('large')) {
            $(this).toggleClass('slide-up');
            $('.st-translate').toggleClass('large');
            $('.like-it').stop().fadeToggle();
        } else {
            $(this).toggleClass('slide-up');
            $('.st-translate').toggleClass('large').scrollTop(0);
            $('.like-it').stop().fadeToggle('fast');
        }
        
    });
    $('.st-source-btn').on('click',function(){
        if(!$(this).hasClass('active')){
            $('.st-source-btn').removeClass('active');
            $(this).addClass('active');
            var index = $(this).index();    
            $('.st-source-translate').stop().fadeOut(200).promise().done(function() {
                $('.st-translate').scrollTop(0);
                $('.st-source-translate').eq(index).stop().fadeIn(200);
            }); 
            $('.sticker').find('.slimScrollBar').animate({'top':'0'},300);
        }
    });

    $('#close-sticker').on('click',function(){
        $('.sticker').fadeOut();
    });

});





});