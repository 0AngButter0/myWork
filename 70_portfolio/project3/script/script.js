// HTML위에 스트립트 넣을시 JS시작 이벤트
document.addEventListener('DOMContentLoaded', function () {

    const lst1 = document.querySelector("#lst1"),
        modal = document.querySelector(".modal"),
        closed = modal.querySelector("button");

    lst1.addEventListener("click", function () {
        // classList.add("클래스명") ~ 클래스 추가
        // modal 객체에 active 클래스 추가
        modal.classList.add("active");
    });

    closed.addEventListener("click", function () {
        // classList.remove("클래스명") ~ 클래스 제거
        // modla 객체에 active 클래스 삭제
        modal.classList.remove("active");
    });

});

/* const lst1 = document.querySelectorAll("#lst1"),
    modal = document.querySelector(".modal"),
    closed = modal.querySelector("button");

for (let i = 0; i < lst.length; i++) {
    lst1.addEventListener("click", function () {
        modal.classList.add("active");
    });
}

closed.addEventListener("click", function () {
    modal.classList.remove("active");
}); */