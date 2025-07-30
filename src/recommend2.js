// 상단바 위스키 클릭 시 recommend.html로 이동
document.addEventListener("DOMContentLoaded", function () {
  const goWhisky = document.getElementById("go-whisky");
  if (goWhisky) {
    goWhisky.addEventListener("click", function () {
      window.location.href = "recommend.html";
    });
  }
});
// 상단바 추천 클릭 시 recommend2.html로 이동
document.addEventListener("DOMContentLoaded", function () {
  const goRecommend = document.getElementById("go-recommend");
  if (goRecommend) {
    goRecommend.addEventListener("click", function () {
      window.location.href = "recommend2.html";
    });
  }
});
// 추천 상품 리스트 페이지 전용 JS
// 상세보기 버튼 등 추가 기능 필요 시 여기에 작성
