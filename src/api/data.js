import { getUserData } from "./util.js";

let pageSize = 5;

export let endpoints = {
    recent: "/classes/Recipe?limit=3",
    recipes: (page) => `/classes/Recipe?skip=${(page - 1) * pageSize}&limit=${pageSize}`,
    recipesSearch: (page, query) => `/classes/Recipe?where=${createQuery(query)}&skip=${(page - 1) * pageSize}&limit=${pageSize}`,
    createRecipes: "/classes/Recipe",
    recipeDetails: (id) => `/classes/Recipe/${id}?include=owner`,
    commentsByRecipe: (recipeId) => `/classes/Comment?where=${createPointerQuery("recipe", "Recipe", recipeId)}&include=owner&order=-createdAt`,
    comments: "/classes/Comment",
    recipeById: '/classes/Recipe/',
};

export function createPointerQuery(propName, className, objectId) {
    return createQuery({
        [propName]: createPointer(className, objectId)
    })
};

export function createQuery(query) {
    return encodeURIComponent(JSON.stringify(query))
};

export function createPointer(className, objectId) {
    return {
        __type: "Pointer",
        className,
        objectId
    };
};

export function addOwner(record) {
    let { id } = getUserData();
    record.owner = createPointer("_User", id);

    return record;
};