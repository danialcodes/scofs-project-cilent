import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebase.config";

const initializeFirebase = () => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app)
}
export default initializeFirebase;