import { html } from "../api/library.js";
import { createRecipes } from "../api/recipeService.js";
import { createSubmitHandler } from "../api/util.js";
import { errorMsg, field } from "./common.js";

let createTemplate = (onCreate, errors, data) => html`
<section id="create">
    <article>
        <h2>New Recipe</h2>
        <form @submit=${onCreate} id="createForm">

            ${errorMsg(errors)}
            ${field({ label: "Name", name: "name", placeholder: "Recipe name", value: data.name, error: errors.name })}
            ${field({ label: "Image", name: "img", placeholder: "Image URL", value: data.img, error: errors.img })}
            ${field({
            label: "Ingredients", type: "textarea", name: "ingredients",
         placeholder: "Enter ingredients on separate lines", value: data.ingredients, error: errors.ingredients
            })}

            ${field({
            label: "Preparation", type: "textarea", name: "steps",
         placeholder: "Enter preparation steps on separate lines", value: data.steps, error: errors.steps
            })}

            <input type="submit" value="Create Recipe">
        </form>
    </article>
</section>`;



export function createPage(ctx) {
    update();

    function update(errors = {}, data = {}) {
        ctx.render(createTemplate(createSubmitHandler(onCreate, "name", "img", "ingredients", "steps"), errors, data));
    }

    async function onCreate(data, event) {
        try {
            let missing = Object.entries(data).filter(([k, v]) => v == "");
            if (missing.length > 0) {
                throw missing.reduce((a, [k]) => Object.assign(a, { [k]: true }), { message: "Please fill all fields!" });
            };

            let recipe = {
                name: data.name,
                img: data.img,
                ingredients: data.ingredients.split("\n").filter(row => row != ""),
                steps: data.steps.split("\n").filter(row => row != "")
            }

            let result = await createRecipes(recipe);
            event.target.reset();
            ctx.page.redirect("/details/" + result.objectId);

        } catch (err) {
            update(err, data)
        }
    };


};



