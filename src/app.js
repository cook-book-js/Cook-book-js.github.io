import decorateContext from "./api/middlewares/render.js";
import addSession from "./api/middlewares/session.js";
import notify from "./api/middlewares/notify.js";
import { page } from "./api/library.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";


page(addSession());
page(decorateContext());
page(notify());
page("/", homePage);
page("/login", loginPage);
page("/register", registerPage);
page("/catalog", catalogPage);
page("/create", createPage);




page.start();


