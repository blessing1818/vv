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
import "./style2.css";

// 위스키 카테고리 클릭 시 recommend.html로 이동
document.addEventListener("DOMContentLoaded", function () {
  const whiskeyCategory = Array.from(
    document.querySelectorAll(".category")
  ).find((el) => el.textContent.trim() === "위스키");
  if (whiskeyCategory) {
    whiskeyCategory.style.cursor = "pointer";
    whiskeyCategory.addEventListener("click", function () {
      window.location.href = "recommend.html";
    });
  }
});
