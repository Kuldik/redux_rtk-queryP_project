import { useGetResipesQuery } from '../store/api/api.js'
import {RecipeItem } from './Recipe-item/RecipeItem.jsx'
import {Header} from './header/Header.jsx'
import  User  from './user/User'

function App() {
  const { isLoading, data} = useGetResipesQuery()
  return (
    <section>
      <Header/>
      <User/>
      {isLoading ? <div className='loading'>Loading...</div> : 
        data ? data.map((recipe) => 
          <RecipeItem 
            key={recipe.id} 
            recipe={recipe}
          />) 
          : <div>No data</div>
      }
      
    </section>
  )
}

export default App
