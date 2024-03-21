import styles from './RecipeItem.module.css'
import {useSelector} from 'react-redux'
import { useActions } from '../../hooks/useActions'
import { useFavorites } from '../../hooks/useFavorites'
import { IRecipe } from '../../types/recipe.types'
import { DeleteRecipe } from '../mutations/delete/DeleteRecipe'
import { useState } from 'react'
  
interface IRecipeItem {
  recipe: IRecipe
}

export function RecipeItem({recipe}: IRecipeItem) {
  const {favorites } = useFavorites()
  const {toggleFavorite} = useActions()

  const isExists = favorites.some(r => r.id === recipe.id)
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.btns}>
          <DeleteRecipe />
          <button onClick={() => toggleFavorite(recipe)} className={styles.button}>{isExists ? 'Remove from favorites' : 'Add to favorites'}</button>

        </div>
        <img src={recipe.image} alt={recipe.name} width={'300'} height={'300'}/>
        <div className={styles.info}>
          <h3 className={styles.title}>{recipe.name}</h3>
        </div>
      </div>
    </div>
  )
}
