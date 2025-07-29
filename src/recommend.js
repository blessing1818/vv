// 추천 상품 리스트 페이지 전용 JS
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".product-card");
  if (cards.length > 0) {
    // 첫 번째 상품(맥켈란 12년 더블 캐스크)만 상세보기 버튼 동작
    const firstDetailBtn = cards[0].querySelector(".view-detail-btn");
    if (firstDetailBtn) {
      firstDetailBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "index3.html";
      });
    }
    // 나머지 상세보기 버튼은 비활성화하지 않음
  }
});
