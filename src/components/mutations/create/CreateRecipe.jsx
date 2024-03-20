import { useState } from 'react'
import styles from './CreateRecipe.module.css'
import { useCreateRecipeMutation } from '../../../store/api/recipe.api'


export default function CreateRecipe() {

    const defaultValues = {
        name: '',
        image: '',
    }

    const [recipe, setResipe] = useState(defaultValues)

    const [createRecipe] = useCreateRecipeMutation()
    

    const handleSubmit = (e) => {
        e.preventDefault()
        createRecipe(recipe).then(() => setResipe(defaultValues))
    }

  return (
    <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.title}>Create new Recipe</h1>
            <label>
                <input 
                    type="text" 
                    className={styles.input}
                    placeholder="Name" 
                    value={recipe.name}
                    onChange={(e) => setResipe({...recipe, name: e.target.value})}
                />
            </label>
            <label>
                <input 
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
  )
}
