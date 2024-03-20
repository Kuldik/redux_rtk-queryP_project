import styles from './RecipeItem.module.css'
import {useSelector} from 'react-redux'
import { useActions } from '../../hooks/useActions'
import { useFavorites } from '../../hooks/useFavorites'


export function RecipeItem({recipe}) {
  const {favorites } = useFavorites()

  const {toggleFavorite} = useActions()

  const isExists = favorites.some(r => r.id === recipe.id)

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={recipe.image} alt={recipe.name} width={'300'} height={'300'}/>
        <div className={styles.info}>
          <h3 className={styles.title}>{recipe.name}</h3>
          <button onClick={() => toggleFavorite(recipe)} className={styles.button}>{isExists ? 'Remove from favorites' : 'Add to favorites'}</button>
        </div>
      </div>
    </div>
  )
}
