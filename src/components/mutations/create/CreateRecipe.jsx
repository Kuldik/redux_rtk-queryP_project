import { useState } from 'react'
import styles from './CreateRecipe.module.css'


export default function CreateRecipe() {

    const [recipe, setResipe] = useState({
        name: '',
        image: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(recipe);
    }

  return (
    <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
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
