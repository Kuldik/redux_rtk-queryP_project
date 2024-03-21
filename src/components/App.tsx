import { useGetResipesQuery } from '../store/api/api.js'
import {RecipeItem } from './Recipe-item/RecipeItem.js'
import {Header} from './header/Header.js'
import CreateRecipe from './mutations/create/CreateRecipe.js'
import  User  from './user/User.js'
import { IRecipe } from '../types/recipe.types.js'
import {DeleteRecipe} from './mutations/delete/DeleteRecipe.js'

function App() {
  const { isLoading, data} = useGetResipesQuery(null)
  return (
    <section>
      <Header/>
      <User/>
      <CreateRecipe/>
      <div className='items'>
        {isLoading ? <div className='loading'>Loading...</div> : 
          data ? data.map((recipe: IRecipe) => 
            <RecipeItem 
              key={recipe.id} 
              recipe={recipe}
            />) 
            : <div>No data</div>
        }
      </div>
      
      
    </section>
  )
}

export default App
