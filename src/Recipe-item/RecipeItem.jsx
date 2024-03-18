
export function RecipeItem(recipe) {
  return (
    <div>
        <h2>
            {/* <img src="" alt="" /> */}
            {recipe.name}
            <button>Add to favorites</button>
        </h2>
    </div>
  )
}
