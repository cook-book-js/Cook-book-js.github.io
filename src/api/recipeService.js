import * as api from "./api.js";
import { addOwner, endpoints } from "./data.js";

export async function getRecentRecipes() {
    return api.get(endpoints.recent)
};

export async function getRecipes(page, query) {
    if (query) {
        query = {
            name: {
                $text: {
                    $search: {
                        $term: query,
                        $caseSensitive: false
                    }
                }
            }
        }
        return api.get(endpoints.recipesSearch(page, query))
    } else {
        return api.get(endpoints.recipes(page))
    }

};

export async function getRecipeById(id) {
    return api.get(endpoints.recipeDetails(id))
};

export async function createRecipes(recipe) {
    addOwner(recipe);
    return api.post(endpoints.createRecipes, recipe)
};

export async function updateRecipes(id, recipe) {
    return api.put(endpoints.recipeById + id, recipe)
};

export async function deleteRecipe(id) {
    return api.del(endpoints.recipeById + id)
};




