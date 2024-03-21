import { useState } from 'react'
import styles from './CreateRecipe.module.css'
import { useCreateRecipeMutation } from '../../../store/api/recipe.api'
import { IRecipeData } from '../../../types/recipe.types'
import { FormEvent } from 'react'


export default function CreateRecipe() {

    const defaultValues = {
        name: '',
        image: '',
    }

    const [recipe, setResipe] = useState<IRecipeData>(defaultValues)

    const [createRecipe] = useCreateRecipeMutation()
    

    const checkInputLength = (name: string, image: string) => {
        return name.length >= 3 && image.length >= 3;
    };
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (checkInputLength(recipe.name, recipe.image)) {
            createRecipe(recipe).then(() => setResipe(defaultValues));
            alert('Recipe created');
        } else {
            alert("Name and Image should be at least 3 characters long.");
        }
    };
    
    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.title}>Create new Recipe</h1>
                <label>
                    <input
                        minLength={3}
                        type="text" 
                        className={styles.input}
                        placeholder="Name" 
                        value={recipe.name}
                        onChange={(e) => setResipe({...recipe, name: e.target.value})}
                    />
                </label>
                <label>
                    <input
                        minLength={3} 
                        className={styles.input}
                        type="text" 
                        placeholder="Image"  
                        value={recipe.image}
                        onChange={(e) => setResipe({...recipe, image: e.target.value})}
                    />
                </label>
                <button className={styles.button} type="submit">
                    Create
                </button>
            </form>
        </div>
    );
}
