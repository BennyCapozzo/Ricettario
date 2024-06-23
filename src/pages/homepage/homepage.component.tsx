import RecipeList from '../../components/recipe-list/recipe-list.component';
import Searchbar from '../../components/searchbar/searchbar.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import './homepage.styles.scss';
import { Box } from "@mui/material";

// Todo cancellare mocks dopo integrazione
const RECIPES_MOCKS = [
  { id: '1', name: 'Recipe 1', image: 'https://via.placeholder.com/150', description: 'Description 1' },
  { id: '2', name: 'Recipe 2', image: 'https://via.placeholder.com/150', description: 'Description 2' },
  { id: '3', name: 'Recipe 3', image: 'https://via.placeholder.com/150', description: 'Description 3' },
  { id: '4', name: 'Recipe 4', image: 'https://via.placeholder.com/150', description: 'Description 4' },
]

const HomePage = () => {
  return <Box className="homepage">
    <Sidebar handleSelectedTabChange={(index) => console.log(index)} />
    <Box className="homepage__content">
      <Searchbar onSearch={(value) => console.log(value)} />
      <RecipeList recipes={RECIPES_MOCKS} />
    </Box>
  </Box>
}

export default HomePage;

