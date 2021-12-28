import * as api from "./api.js";
import { addOwner, endpoints } from "./data.js";


export async function getRecipes() {
    return api.get(endpoints.getRecipes)
};

export async function getRecipeById(id) {
    return api.get(endpoints.recipeDetails(id))
};

export async function createRecipes(recipe) {
    addOwner(recipe);
    return api.post(endpoints.createRecipes, recipe)
};

export async function updateRecipes(id, recipe) {
    return api.put(endpoints.getRecipeById + id, recipe)
};

export async function deleteRecipe(id) {
    return api.del(endpoints.getRecipeById + id)
};




