import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAycwXJLZZcu-RJXySvjmOyIyTgU-D7h2k",
  authDomain: "aeronet-bed6e.firebaseapp.com",
  projectId: "aeronet-bed6e",
  storageBucket: "aeronet-bed6e.firebasestorage.app",
  messagingSenderId: "570385533808",
  appId: "1:570385533808:web:d1e373777d2471c4481db5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById('qform');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const question = form.question.value;
  const formData = {
    q: question,
    timestamp: new Date()
  };
  const docRef = await addDoc(collection(db, "questions"), formData);
  console.log("Document written with ID: ", docRef.id);
  form.reset();
});