import { getFirestore, collection, addDoc, doc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore';
import app from '../firebaseConfig';

// Funzione per aggiungere una nuova ricetta
export const addRecipe = async (recipeData: {title: string; ingredients: Array<string>; instructions: string; image: string}) => {
  try {
    const db = getFirestore(app);
    const recipeRef = await addDoc(collection(db, 'recipes'), recipeData);
    console.log('Ricetta aggiunta con successo:', recipeRef.id);
    return recipeRef.id; // Ritorna l'ID della nuova ricetta
  } catch (error) {
    console.error('Errore durante l\'aggiunta della ricetta:', error);
    throw error;
  }
};

// Funzione per modificare una ricetta esistente
export const updateRecipe = async (recipeId: string, recipeData: {title: string; ingredients: Array<string>; instructions: string; image: string}) => {
  try {
    const db = getFirestore(app);
    const recipeRef = doc(db, 'recipes', recipeId);
    await updateDoc(recipeRef, recipeData);
    console.log('Ricetta aggiornata con successo');
  } catch (error) {
    console.error('Errore durante l\'aggiornamento della ricetta:', error);
    throw error;
  }
};

// Funzione per eliminare una ricetta esistente
export const deleteRecipe = async (recipeId: string) => {
  try {
    const db = getFirestore(app);
    const recipeRef = doc(db, 'recipes', recipeId);
    await deleteDoc(recipeRef);
    console.log('Ricetta eliminata con successo');
  } catch (error) {
    console.error('Errore durante l\'eliminazione della ricetta:', error);
    throw error;
  }
};

// Funzione per ottenere tutte le ricette
export const getAllRecipes = async () => {
  try {
    const db = getFirestore(app);
    const recipesSnapshot = await getDocs(collection(db, 'recipes'));
    const recipes = recipesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log('Ricette ottenute con successo:', recipes);
    return recipes;
  } catch (error) {
    console.error('Errore durante l\'ottenimento delle ricette:', error);
    throw error;
  }
};
