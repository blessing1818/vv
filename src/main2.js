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
// 추천 카테고리 클릭 시 recommend.html로 이동
document.addEventListener("DOMContentLoaded", function () {
  const recommendCategory = document.querySelector(".category.selected");
  if (recommendCategory && recommendCategory.textContent.includes("추천")) {
    recommendCategory.style.cursor = "pointer";
    recommendCategory.addEventListener("click", function () {
      window.location.href = "recommend.html";
    });
  }
});
