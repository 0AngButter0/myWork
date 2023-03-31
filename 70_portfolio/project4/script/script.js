// 문서가 준비되면  (html 맨위에 스크립트 연결하면 필요)
// $(document),ready(function(){});
// $(function(){});

$(function () {
    /* mobile toggler button */
    let flag = 0;
    // .toggler를 클릭하면
    $(".toggler").click(function () {
        let ww = $(window).width();
        if (ww < 768) {
            if (flag === 0) {
                // .toggler에 active 클래스 추가 -> 버튼의 모양( X )
                $(this).addClass("active");
                // animate({속성: 값, 속성: 값, ... }, 시간[,가속도])
                $("#gnb").stop().animate({ right: 0 }, 200, 'easeOutExpo');
                flag = 1;
            } else {
                // .toggler에 active 클래스 제거 -> 버튼의 모양( = )
                $(this).removeClass("active");
                $("#gnb").stop().animate({ right: -50 + "%" }, 200, 'easeInExpo');
                flag = 0;
            }
        }
    });

    // 창의 크기가 바뀌면
    $(window).resize(function () {
        // 창의 가로 크기를 ww에 할당.
        let ww = $(window).width();
        if (ww > 768) {
            $("#gnb").css({ right: 0 });
            $(".toggler").addClass("active");
        } else {
            $("#gnb").css({ right: -50 + "%" });
            $(".toggler").removeClass("active");
        }
    });
});