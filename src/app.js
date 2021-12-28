import { page } from "./api/library.js";
import decorateContext from "./api/middlewares/render.js";
import addSession from "./api/middlewares/session.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";


page(addSession());
page(decorateContext());
page("/", homePage);
page("/login", loginPage);




page.start();
