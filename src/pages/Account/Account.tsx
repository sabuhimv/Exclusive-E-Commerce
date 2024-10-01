import React, { useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { auth } from '../../firebase/Firebase';

const Account = () => {
  const db = getFirestore();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  onAuthStateChanged(auth, (user) => {
    const loggedUserId = localStorage.getItem("loggedUserId")
    if (loggedUserId) {
      const docRef = doc(db, "users", loggedUserId);
      getDoc(docRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            const userData = docSnap.data();
            setName(userData.name)
            setPhone(userData.phone)
            setEmail(userData.email)
          }
        })
    }
  })
  return (
    <>
      <div>{name}</div>
      <div>{phone}</div>
      <div>{email}</div>
    </>

  )
}

export default Account