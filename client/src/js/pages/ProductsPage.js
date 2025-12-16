import { PublicPageTemplate } from "../templates/PublicPageTemplate.js";

export class ProductsPage extends PublicPageTemplate {
    constructor() {
        super();
    }

    main() {
        return `
            <h1>Kolekcija page</h1>`
    }
}