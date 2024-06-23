import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import app from '../firebaseConfig';

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const auth = getAuth(app);
    try {
      // Registra l'utente con email e password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Dopo la registrazione con successo, aggiungi i dettagli dell'utente al database Firestore
      const db = getFirestore(app);
      await addDoc(collection(db, 'users'), {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
      });

      console.log('Utente registrato con successo e aggiunto al database Firestore');
    } catch (error) {
      console.error('Errore durante la registrazione e l\'aggiunta dell\'utente:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Registrati</button>
    </form>
  );
}

export default RegistrationForm;
