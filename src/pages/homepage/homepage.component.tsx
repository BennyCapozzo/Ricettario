import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import RecipeList from '../../components/recipe-list/recipe-list.component';
import Searchbar from '../../components/searchbar/searchbar.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import './homepage.styles.scss';
import { Box } from "@mui/material";
import app from '../../firebaseConfig';
import { useEffect, useState } from 'react';
import RegistrationForm from '../../components/registrationForm/registrationForm';
import { getAllRecipes } from '../../services/recipeService';
import { IRecipe } from '../../components/recipe-list/recipe-list.interfaces';

// Todo cancellare mocks dopo integrazione
const RECIPES_MOCKS = [
  { id: '1', name: 'Recipe 1', image: 'https://via.placeholder.com/150', description: 'Description 1' },
  { id: '2', name: 'Recipe 2', image: 'https://via.placeholder.com/150', description: 'Description 2' },
  { id: '3', name: 'Recipe 3', image: 'https://via.placeholder.com/150', description: 'Description 3' },
  { id: '4', name: 'Recipe 4', image: 'https://via.placeholder.com/150', description: 'Description 4' },
  { id: '5', name: 'Recipe 5', image: 'https://via.placeholder.com/150', description: 'Description 5' },
  { id: '6', name: 'Recipe 6', image: 'https://via.placeholder.com/150', description: 'Description 6' },
  { id: '7', name: 'Recipe 7', image: 'https://via.placeholder.com/150', description: 'Description 7' },
  { id: '8', name: 'Recipe 8', image: 'https://via.placeholder.com/150', description: 'Description 8' },
]

const HomePage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  useEffect(() => {
    if (!user) return;

    getRecipes();
  }, [user]);

  const getRecipes = async () => {
    const recipes = await getAllRecipes();
    setRecipes(recipes as IRecipe[]);
  }

  return <Box className="homepage">
    <Sidebar handleSelectedTabChange={(index) => console.log(index)} />
    <Box className="homepage__content">
      <Searchbar onSearch={(value) => console.log(value)} />
      <RecipeList recipes={RECIPES_MOCKS} />
    </Box>

    {!user && <RegistrationForm />}
  </Box>
}

export default HomePage;

