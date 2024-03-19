import {RecipeItem} from './components/Recipe-item/RecipeItem.jsx'
import {BsFillBookmarkHeartFill} from 'react-icons/bs'
import {Header } from './components/Header/Header.jsx'

function App() {

  return (
    <section>
      <Header/>
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
