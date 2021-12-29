import { login } from "../api/userService.js";
import { html } from "../api/library.js";
import { createSubmitHandler } from "../api/util.js";
import { errorMsg, field } from "./common.js";

let createTemplate = (onCreate, errors) => html`
<section id="create">
    <article>
        <h2>New Recipe</h2>
        <form @submit=${onCreate} id="createForm">

        ${errorMsg(errors)}

            <label>Name: <input type="text" name="name" placeholder="Recipe name"></label>
            <label>Image: <input type="text" name="img" placeholder="Image URL"></label>
            <label class="ml">Ingredients: <textarea name="ingredients"
                    placeholder="Enter ingredients on separate lines"></textarea></label>
            <label class="ml">Preparation: <textarea name="steps"
                    placeholder="Enter preparation steps on separate lines"></textarea></label>
            <input type="submit" value="Create Recipe">
        </form>
    </article>
</section>`;



export function createPage(ctx) {
    update();

    function update() {
        ctx.render(createTemplate());
    }


};



