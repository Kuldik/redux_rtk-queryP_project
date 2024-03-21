import { useDispatch } from 'react-redux';
import { IRecipe } from '../../../types/recipe.types';  

export const DeleteRecipe = () => {
    

    return (
        <div>
            <button
                className="delete-button"
            >
                Delete recipe
            </button>
        </div>
    );
};