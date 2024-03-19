import {RecipeItem } from './Recipe-item/RecipeItem.jsx'
import {Header} from './header/Header.jsx'
import { User } from './user/User'
function App() {

  return (
    <section>
      <Header/>
      <User/>
      <div>
        <RecipeItem recipe={{
          name: 'Lazania',
          id: 1
        }}/>
        <RecipeItem recipe={{
          name: 'Cake',
          id: 2
        }}/>
        <RecipeItem recipe={{
          name: 'Spagetti',
          id: 4
        }}/>
      </div>
    </section>
  )
}

export default App
