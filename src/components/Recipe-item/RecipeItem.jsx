import styles from './RecipeItem.module.css'
import {useSelector} from 'react-redux'
import { useActions } from '../../hooks/useActions'


export function RecipeItem({recipe}) {

  const favorites = useSelector(state => state.favorites)

  const {toggleFavorite} = useActions()

  const isExists = favorites.some(r => r.id === recipe.id)

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* <img src="" alt="" /> */}
        <h3 className={styles.title}>{recipe.name}</h3>
        <button onClick={() => toggleFavorite(recipe)} className={styles.button}>{isExists ? 'Remove from favorites' : 'Add to favorites'}</button>
      </div>
    </div>
  )
}
