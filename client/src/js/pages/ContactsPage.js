import { PublicPageTemplate } from "../templates/PublicPageTemplate.js";

export class ContactsPage extends PublicPageTemplate {
    constructor() {
        super()
    }

    main() {
        return `
            <h1>Contacts page</h1>`
    }
}