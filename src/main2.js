import "./style2.css";
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
