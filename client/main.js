import { HomePage } from "./src/js/pages/HomePage.js";
import { AboutUsPage } from "./src/js/pages/AboutUsPage.js";
import { ProductsPage } from "./src/js/pages/ProductsPage.js";
import { ContactsPage } from "./src/js/pages/ContactsPage.js";

const app = document.getElementById('app');

const routes = {
    '/': () => new HomePage(),
    '/kolekcija': () => new ProductsPage(),
    '/apie-mus': () => new AboutUsPage(),
    '/kontaktai': () => new ContactsPage(),
};

function router() {
    const path = window.location.pathname;
    const routeFunc = routes[path];

    app.innerHTML = '';

    if (routeFunc) {
        const page = routeFunc();
        app.insertAdjacentHTML('beforeend', page.render());
    } else {
        app.insertAdjacentHTML('beforeend', '404 - Page not found');
    }
}

function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});
