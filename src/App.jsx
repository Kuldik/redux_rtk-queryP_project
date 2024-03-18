import {RecipeItem} from './Recipe-item/RecipeItem.jsx'

function App() {

  return (
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
  )
}

export default App
