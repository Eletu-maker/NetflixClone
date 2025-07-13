import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyAgGFkcNC3sEWhz0AfPsCEOdnQ9eSQCgxw",
  authDomain: "netflix-clone2-8bdc8.firebaseapp.com",
  projectId: "netflix-clone2-8bdc8",
  storageBucket: "netflix-clone2-8bdc8.firebasestorage.app",
  messagingSenderId: "535886019529",
  appId: "1:535886019529:web:5ca4abe00b50f5ea5c4618"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

const signup = async (name, email, password) => {
    console.log("Signup started");
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Firebase auth success:", res);

        const user = res.user;

        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });

        alert("User created successfully");
        console.log("User created successfully", user);
    } catch (err) {
        console.error("Signup failed:", err);
        toast.error(err.code.split('/')[1].split('-').join(' '));
    }
};

const login = async (email, password) => {
    try{
       await signInWithEmailAndPassword(auth, email, password); 
    }catch(err){
        console.error(err);
       toast.error(err.code.split('/')[1].split('-').join(' '));
    }
}

const logout = () => {
    signOut(auth);

}

export { auth, db, signup, login, logout };

