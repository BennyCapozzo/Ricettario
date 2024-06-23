import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import app from '../../firebaseConfig';
import { Button, Dialog, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import './registration-form.styles.scss';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistration, setIsRegistration] = useState(false);

  const handleSubmitRegister = async (event: React.FormEvent<HTMLFormElement>) => {
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

  const handleSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const auth = getAuth(app);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Utente loggato con successo:', userCredential.user);
    } catch (error) {
      console.error('Errore durante il login:', error);
    }
  };

  return (
    <Dialog open maxWidth="xs" fullWidth>
      <DialogTitle textAlign="center" sx={{backgroundColor: '#444444', color: 'white'}}>{isRegistration ? 'Registrati' : 'Login'}</DialogTitle>
      <DialogContent sx={{ backgroundColor: '#444444' }}>
      <form onSubmit={isRegistration ? handleSubmitRegister : handleSubmitLogin} className='dialog__content'>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          fullWidth
          autoComplete="off"
          InputProps={{
            style: {
              color: 'white', 
              borderColor: '#1cff42', // Colore del bordo
            }
          }}
          InputLabelProps={{
            style: { color: 'white' }
          }}
          sx={{
            '& .MuiOutlinedInput-root': {

              '&:hover fieldset': {
                borderColor: '#1cff42', // Colore del bordo al passaggio del mouse
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1cff42', // Colore del bordo quando è focalizzato
              },
            }
          }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          fullWidth
          InputProps={{
            style: {
              color: 'white',
              borderColor: '#1cff42', // Colore del bordo
            }
          }}
          InputLabelProps={{
            style: { color: 'white' }
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: '#1cff42', // Colore del bordo al passaggio del mouse
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1cff42', // Colore del bordo quando è focalizzato
              },
            }
          }}
        />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: '16px', backgroundColor: '#1cff42', color: '#444444' }}
            >
            {isRegistration ? 'Registrati' : 'Login'}
          </Button>

     {!isRegistration && <Typography mt="1rem" color="white">Non hai un account? <span className='dialog__register' onClick={() => setIsRegistration(true)}>Registrati</span></Typography>}
     {isRegistration && <Typography mt="1rem" color="white">Hai già un account? <span className='dialog__register' onClick={() => setIsRegistration(false)}>Login</span></Typography>}
      </form>
      </DialogContent>
    </Dialog>
  );
}

export default RegistrationForm;

