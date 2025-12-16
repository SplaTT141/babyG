import { centerData, rightData } from "../data/headerData.js";

export class PublicPageTemplate {

    header() {
        const centerNavbarHTML = centerData.map(data =>
            `<li><a href="${data.href}" data-link>${data.text}</a></li>`
        ).join('');

        const rightNavbarHTML = rightData.map(data =>
            `<li><a href="${data.href}" data-link><img src="${data.imgSrc}" alt="${data.alt || 'icon'}" /></a></li>`
        ).join('');

        return `
        <header>
            <div class="container">
                <div class="row">
                    <nav class="main-nav col-12">
                        <img class="logo" src="./src/assets/img/logo.png" alt="BabyG logo" />
                        <div class="main-menu">
                            <ul>${centerNavbarHTML}</ul>
                        </div>
                        <div class="user-actions">
                            <ul>${rightNavbarHTML}</ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        `;
    }

    main() {
        return `<main><h1>Default main</h1></main>`;
    }

    footer() {
        return `
        <footer>
            <div class="container">
                <div class="row">
                    <div class="footer-section">
                        <div class="logo-section col-3 m-1">
                            <img src="./src/assets/img/logo-g.png" alt="logo" />
                            <p>Kuriame magiškas akimirkas su gražiais ir patogiais drabužiais Jūsų mažyliams.</p>
                        </div>
                        <div class="shop-section col-3 m-1">
                            <h4>Prekės</h4>
                            <ul>
                                <li><a href="#">Kūdikiams</a></li>
                                <li><a href="#">Mažyliams</a></li>
                                <li><a href="#">Vaikams</a></li>
                                <li><a href="#">Išpardavimas</a></li>
                            </ul>
                        </div>
                        <div class="contacts col-3">
                            <h4>Kontaktai</h4>
                            <ul>
                                <li><img src="./src/assets/img/phone.svg" alt="phone"/>(+370) 67190356</li>
                                <li><img src="./src/assets/img/mail.svg" alt="mail"/>info@babyg.lt</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }

    render() {
        return `${this.header()}${this.main()}${this.footer()}`;
    }
}
