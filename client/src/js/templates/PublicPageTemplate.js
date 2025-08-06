import { headerData } from "../data/headerData.js";

export class PublicPageTemplate {


    header() {
        let navbarHTML = '';

        for (const data of headerData) {
            navbarHTML += `<li><a href=${data.href}>${data.text}</a></li>`
        }

        return `
        <header>
            <div class="container">
                <div class="row">
                    <nav class="main-nav">
                        <img class="logo" src="./src/assets/img/logo.png" alt="BabyG logo" />
                        <div class="main-menu">
                            <ul>
                                ${navbarHTML}
                            </ul>
                        </div>
                        <div class="user-actions">
                            <ul>
                            <li><a><img src="./src/assets/img/bag.svg" alt="cart" /></a></li>
                            <li><a><img src="./src/assets/img/heart.svg" alt="heart" /></a></li>
                            <li><a><img src="./src/assets/img/user.svg" alt="user" /></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        `
    }

    main() {
        return `
        <main>
            <h1>Main</h1>
        </main>
        `
    }

    footer() {
        return `
        <footer>
            <h1>Footer</h1>
        </footer>
        `
    }

    render() {
        return `
        ${this.header()}
        ${this.main()}
        ${this.footer()}
        `
    }
}