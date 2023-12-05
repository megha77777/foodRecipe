let recipes = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.2
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?cheese",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?kabab",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]
let RecipeContainer = document.getElementById("recipeContainer");
function displayRecipes(RecipesToDisplay) {
    console.log(RecipesToDisplay)
    RecipeContainer.innerHTML = "";
    RecipesToDisplay.forEach((recipe) => {
        let card = document.createElement("div")
        card.className = "recipe-card";
        card.innerHTML = `
        <img src = "${recipe.imageSrc}" height="200px">
        <p class="type">${recipe.type}</p>
        <h3>${recipe.name}</h3>
        <p class="rate">${recipe.rating}</p>
        
        `;
        // console.log(card);
        RecipeContainer.appendChild(card)
        // console.log(RecipeContainer)
    })
}
displayRecipes(recipes)

// let filteredRecipes = [recipes]
let search = document.getElementById("search")
search.addEventListener("input", (e) => {
    let searchText = e.target.value.toLowerCase();
    let filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchText)
    )
    displayRecipes(filteredRecipes);
})

document
.getElementById("all")
.addEventListener("click", () => filteredRecipeFxn("all"));
document
.getElementById("veg")
.addEventListener("click", () => filteredRecipeFxn("veg"));
document
.getElementById("nonVeg")
.addEventListener("click", () => filteredRecipeFxn("non-veg"));

function filteredRecipeFxn(type) {
    if(type == "all") {
        displayRecipes(recipes)
    }
    else {
        let filteredRecipes = recipes.filter((recipe) =>
            recipe.type == type
        )
        console.log(filteredRecipes)
        displayRecipes(filteredRecipes)
    }
}

document.querySelectorAll("input[name='rating']").forEach((radio)=>{
    radio.addEventListener("click", filterByRating)
})
function filterByRating(){
    let ratingAbove = document.getElementById("ratingAbove").checked;
    let ratingBelow = document.getElementById("ratingBelow").checked;
    let filteredRecipes = recipes.filter((recipe)=>{
        if(ratingAbove && recipe.rating>4.0){
            return true;
        }
        if(ratingBelow && recipe.rating<4.0){
            return true;
        }
        return false;
    })
    displayRecipes(filteredRecipes);
}