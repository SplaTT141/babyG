import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export class PublicPageTemplate {

    header() {
        return Header();
    }

    main() {
        return `<main><h1>Default main</h1></main>`;
    }

    footer() {
        return Footer();
    }

    render() {
        return `${this.header()}${this.main()}${this.footer()}`;
    }
}
