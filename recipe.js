const API_KEY = "ca98f80310b3452db05fef09f799f6a9";

const recipeListEl = document.getElementById("recipe-list");
function displayRecipes(recipes)
{
  recipeListEl.innerHTML = "";
  recipes.forEach((recipe) => 
    {
        console.log(recipe)
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");
        let recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        let recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerText = recipe.title;    
        let recipeIngredientsEl = document.createElement("p");
        recipeIngredientsEl.innerHTML = `<strong>Ingredients: </strong>${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}`; 
        
        let recipeLinkEl = document.createElement("a");
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.target ="blank";
        recipeLinkEl.innerText = "View Recipe";

        recipeItemEl.appendChild(recipeImageEl); // Corrected the variable name here
        recipeItemEl.appendChild(recipeTitleEl);
        recipeListEl.appendChild(recipeItemEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeItemEl.appendChild(recipeLinkEl);
    });
}

async function getRecipes()
{
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
    const data = await response.json();
    return data.recipes;
}
async function init()
{
    const recipes = await getRecipes();
    console.log(recipes);
    displayRecipes(recipes);//const recipes = await getRecipes();
}
init();