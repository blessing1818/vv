import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import firebaseConfig from "../whiskey.json";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", function () {
  const goWhisky = document.getElementById("go-whisky");
  if (goWhisky) {
    goWhisky.addEventListener("click", function () {
      window.location.href = "whisky-black.html";
    });
  }
  const goRecommend = document.getElementById("go-recommend");
  if (goRecommend) {
    goRecommend.addEventListener("click", async function () {
      try {
        const docRef = doc(db, "counter", "recommend");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const current = docSnap.data().count || 0;
          await updateDoc(docRef, { count: current + 1 });
        } else {
          await setDoc(docRef, { count: 1 });
        }
      } catch (e) {
        // Firestore 오류 무시하고 페이지 이동
      }
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
