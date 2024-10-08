import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import { auth } from '../../firebase/Firebase';
import './Account.scss';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'; // Import SweetAlert2

const Account = () => {
  const db = getFirestore();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loggedUserId, setLoggedUserId] = useState<string | null>(null); // Allow loggedUserId to be either string or null

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = user.uid; // Get the current user's ID
        setLoggedUserId(userId);
        localStorage.setItem("loggedUserId", userId); // Store the user ID in local storage

        const docRef = doc(db, "users", userId);
        getDoc(docRef)
          .then((docSnap) => {
            if (docSnap.exists()) {
              const userData = docSnap.data();
              setName(userData.name);
              setPhone(userData.phone);
              setEmail(userData.email);
            }
          });
      }
    });

    return () => unsubscribe(); // Clean up the subscription
  }, [db]);

  const handleUpdate = async (e: any) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if loggedUserId is not null before using it
    if (loggedUserId) {
      const docRef = doc(db, "users", loggedUserId); // Create a reference using the user ID
      try {
        await updateDoc(docRef, {
          name: name,
          phone: phone,
          email: email,
        });
        Swal.fire({
          icon: "success",
          title: "Account updated successfully!",
          showConfirmButton: false,
          timer: 1500
        });
      } catch (error) {
        console.error("Error updating account: ", error);
        toast.error("Failed to update account.");
      }
    } else {
      toast.info("User is not logged in.");
    }
  };

  return (
    <div className='container account'>
      <p className='page-heading'>Home / <span className='page-heading__active'>My Account</span></p>

      <h3 className='account-head'>Edit Your Profile</h3>
      <form onSubmit={handleUpdate}>
        <div>
          <label className='account-label'>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='account-input'
          />
        </div>
        <div>
          <label className='account-label'>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className='account-input'
          />
        </div>
        <div>
          <label className='account-label'>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='account-input'
          />
        </div>
        <button className='button-red' type="submit">Update Account</button>
      </form>
    </div>
  );
};

export default Account;