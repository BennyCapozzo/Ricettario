import { Box, Typography } from "@mui/material";
import { IRecipeListProps } from "./recipe-list.interfaces";
import './recipe-list.styles.scss';

const RecipeList = ({recipes}: IRecipeListProps) => {
    return (
        <Box className="recipe-list">
            {recipes && recipes.length > 0 && recipes.map((recipe) => (
               <Box key={recipe.id} className="recipe-list__card">
                <Box className="recipe-list__image">
                    <img src={recipe.image} alt={recipe.name} />
                </Box>
                <Box className="recipe-list__item">
                   <Typography variant="h5" fontWeight={700} mt="1rem">{recipe.name}</Typography>
                   <Typography variant="body1">{recipe.description}</Typography>
                </Box>
               </Box>
            ))}
        </Box>
    )
}

export default RecipeList;