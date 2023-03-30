// js
// document.addEventListener('DOMContentLoaded', function (){});
//jq
// $(document).ready(function(){})
// 더 줄여서 제일 간략히 가능 jq

// bxslider에서 가져 온거라 html에 bxslider 라이브러리가 연결되야 한다.
// 모든 제이쿼리 문서는 function은 하나만 쓴다. 그리고 그 안에 써야 한다.
$(function(){

    $('.slider1').bxSlider({
        auto: true,
        // autoControls: true,
        stopAutoOnClick: true,
        // 슬라이더의 동그라미 세개
        pager: true
    });
    $('.slider2').bxSlider({
        auto: true,
        // autoControls: true,
        stopAutoOnClick: true,
        pager: false,
        slideMargin: 24,
        maxSlides:4,
        moveSlides: 1,
        slideWidth: 359,
    });

});

