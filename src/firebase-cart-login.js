import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAJIgMQ9jLPLrhuld_r9E91Uw_R9VpNEwQ",
  authDomain: "whiskey-c8cb8.firebaseapp.com",
  projectId: "whiskey-c8cb8",
  storageBucket: "whiskey-c8cb8.firebasestorage.app",
  messagingSenderId: "407306260376",
  appId: "1:407306260376:web:05ca0d5768ef9cfb7fe5ed",
  measurementId: "G-GHRLE2TSK9",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
  const cartBtn = document.querySelector(".cart-btn");
  if (cartBtn) {
    cartBtn.addEventListener("click", () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          alert("로그인 성공: " + result.user.displayName);
        })
        .catch((error) => {
          alert("로그인 실패: " + error.message);
        });
    });
  }
});

import { getFirestore, doc, updateDoc, increment } from "firebase/firestore";

// ...existing code...

const db = getFirestore();

document.addEventListener("DOMContentLoaded", () => {
  // ...existing code...

  const orderBtn = document.querySelector(".add-to-cart-btn");
  if (orderBtn) {
    orderBtn.addEventListener("click", async () => {
      // 페이지별로 Firestore 컬렉션 이름 분기
      let collectionName = "orders";
      if (window.location.pathname.includes("index3.html")) {
        collectionName = "orders2";
      }
      const orderRef = doc(db, collectionName, "pickup");
      try {
        await updateDoc(orderRef, {
          purchaseCount: increment(1),
        });
        alert("주문이 완료되었습니다!");
      } catch (error) {
        alert("주문 실패: " + error.message);
      }
    });
  }
});
