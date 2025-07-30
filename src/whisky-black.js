// 상단바 추천 클릭 시 recommend-black.html로 이동
document.addEventListener("DOMContentLoaded", function () {
  const goRecommend = document.getElementById("go-recommend");
  if (goRecommend) {
    goRecommend.addEventListener("click", function () {
      window.location.href = "recommend-black.html";
    });
  }
});
// 상단바 위스키 클릭 시 whisky-black.html로 이동(새로고침)
document.addEventListener("DOMContentLoaded", function () {
  const goWhisky = document.getElementById("go-whisky");
  if (goWhisky) {
    goWhisky.addEventListener("click", function () {
      window.location.href = "whisky-black.html";
    });
  }
});
// 위스키 상품 리스트 페이지 전용 JS
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".product-card");
  if (cards.length > 0) {
    // 첫 번째 상품(맥켈란 12년 더블 캐스크)만 상세보기 버튼 동작
    const firstDetailBtn = cards[0].querySelector(".view-detail-btn");
    if (firstDetailBtn) {
      firstDetailBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "index2.html";
      });
    }
    // 나머지 상세보기 버튼은 비활성화
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const goWhisky = document.getElementById("go-whisky");
  if (goWhisky) {
    goWhisky.addEventListener("click", function () {
      window.location.href = "whisky-black.html";
    });
  }
  const goRecommend = document.getElementById("go-recommend");
  if (goRecommend) {
    goRecommend.addEventListener("click", function () {
      window.location.href = "recommend-black.html";
    });
  }
  // 카테고리 호버 효과
  const categories = document.querySelectorAll(".category-bar .category");
  categories.forEach((cat) => {
    cat.addEventListener("mouseover", function () {
      this.style.color = "#555";
    });
    cat.addEventListener("mouseout", function () {
      if (this.classList.contains("selected")) {
        this.style.color = "#222";
      } else {
        this.style.color = "#222";
      }
    });
  });
  // 상세보기 버튼 첫 상품만 index2.html로 이동
  const cards = document.querySelectorAll(".product-card");
  if (cards.length > 0) {
    const firstDetailBtn = cards[0].querySelector(".view-detail-btn");
    if (firstDetailBtn) {
      firstDetailBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "index2.html";
      });
    }
  }
});
