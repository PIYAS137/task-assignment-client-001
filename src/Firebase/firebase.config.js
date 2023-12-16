
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyChOvk3nyyN6Liw6GsKErtKcXZwJPgEIow",
  authDomain: "phprac-e9d11.firebaseapp.com",
  projectId: "phprac-e9d11",
  storageBucket: "phprac-e9d11.appspot.com",
  messagingSenderId: "894769508458",
  appId: "1:894769508458:web:3b745c88151883ac9e9a13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;