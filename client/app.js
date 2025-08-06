import { PublicPageTemplate } from "./src/js/templates/PublicPageTemplate.js";

const app = document.getElementById('app');
const page = new PublicPageTemplate();

app.insertAdjacentHTML('beforeend', page.render());
