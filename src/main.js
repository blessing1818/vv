document.addEventListener("DOMContentLoaded", function () {
  const regionButtons = document.querySelectorAll(".region-btn");
  const pickupStoreLabel = document.querySelector(".pickup-store-label");

  regionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // 모든 버튼에서 'selected' 클래스 제거
      regionButtons.forEach((btn) => btn.classList.remove("selected"));

      // 클릭된 버튼에 'selected' 클래스 추가
      this.classList.add("selected");
    });
  });
});
