$(function () {

    $(window).scroll(function () {
        //변수 선언
        let wh = $(window).height();
        let st = $(window).scrollTop();
        const easing = "easeOutExpo";

        if (st > wh) {
            //참일 경우
            // animate({ 속성1: 값1, 속성2: 값2, ... }[, 시간][, 가속도]);
            // 시간은 400밀리초(기본값이 400밀리초)
            // 가속도 swing
            $(".motion1").stop().animate({ top: 0, opacity: 1 }, 800, easing);
            $(".motion2").stop().animate({ top: 0, opacity: 1 }, 1200, easing);
            $(".motion3").stop().animate({ top: 0, opacity: 1 }, 1400, easing);
            $(".motion4").stop().animate({ top: 0, opacity: 1 }, 1600, easing);
        } else {
            //거짓일 경우
            $(".motion1").stop().animate({ top: 1000, opacity: 0 }, 500,);
            $(".motion2").stop().animate({ top: 1500, opacity: 0 }, 500,);
            $(".motion3").stop().animate({ top: 2000, opacity: 0 }, 500,);
            $(".motion4").stop().animate({ top: 2500, opacity: 0 }, 500,);
        }
    });

});