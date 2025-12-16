import { PublicPageTemplate } from "../templates/PublicPageTemplate.js";

export class AboutUsPage extends PublicPageTemplate {
    constructor() {
        super();
    }

    main() {
        return `
            <h1>About us page</h1>`
    }
}