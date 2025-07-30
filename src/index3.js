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
  const goRecommend = document.getElementById("go-recommend");
  if (goRecommend) {
    goRecommend.addEventListener("click", async function () {
      try {
        // Firestore recommend 카운트 증가 및 문서 자동 생성
        const docRef = doc(db, "counter", "recommend");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const current = docSnap.data().count || 0;
          await updateDoc(docRef, { count: current + 1 });
        } else {
          await setDoc(docRef, { count: 1 });
        }
      } catch (e) {
        // Firestore 오류 무시하고 이동
      }
      window.location.href = "./recommend2.html";
    });
  }

  // 구매하기 버튼 클릭 시 orders2/pickup 문서의 purchaseCount 증가 및 팝업 표시
  const purchaseBtn = document.querySelector(".add-to-cart-btn");
  if (purchaseBtn) {
    purchaseBtn.addEventListener("click", async function () {
      try {
        const docRef = doc(db, "orders2", "pickup");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const current = docSnap.data().purchaseCount || 0;
          await updateDoc(docRef, { purchaseCount: current + 1 });
        } else {
          await setDoc(docRef, { purchaseCount: 1 });
        }
        alert("구매가 정상적으로 처리되었습니다!");
      } catch (e) {
        alert("구매 처리 중 오류가 발생했습니다.");
      }
    });
  }
});
