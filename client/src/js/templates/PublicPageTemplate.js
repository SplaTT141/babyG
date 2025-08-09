import { centerData, rightData } from "../data/headerData.js";

export class PublicPageTemplate {


    header() {
        let centerNavbarHTML = '';

        for (const data of centerData) {
            centerNavbarHTML += `<li><a href=${data.href}>${data.text}</a></li>`
        }

        let rightNavbarHTML = '';

        for (const data of rightData) {
            rightNavbarHTML += `<li><a href="${data.href}"><img src="${data.imgSrc}" alt="cart" /></a></li>`
        }

        return `
        <header>
            <div class="container">
                <div class="row">
                    <nav class="main-nav col-12">
                        <img class="logo" src="./src/assets/img/logo.png" alt="BabyG logo" />
                        <div class="main-menu">
                            <ul>
                                ${centerNavbarHTML}
                            </ul>
                        </div>
                        <div class="user-actions">
                            <ul>
                                ${rightNavbarHTML}
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
            <section class="intro">
                <div class="container">
                    <div class="row">
                        <div class="intro-content">
                            <div class="text-content col-6">
                                <h1 class="first-line">Žavūs drabužėliai patiems</h1>
                                <h1 class="second-line">mažiausiems</h1>
                                <p>Atraskite mūsų patogių, stilingų ir prieinamų drabužių kolekciją, skirtą kūdikiams ir vaikams.</p>
                                <button type="button">Apsipirkti</button>
                            </div class="col-6">
                            <img src="./src/assets/img/kids3.png" alt="Kids" />
                            <div class="numbers">
                                <div class="section1">
                                    <h1>100+</h1>
                                    <p>Laimingų šeimų</p>
                                </div>
                                <div class="section2">
                                    <h1>70+</h1>
                                    <p>Drabužių</p>
                                </div>
                                <div class="section3">
                                    <div class="rating">
                                        <h1>4.9</h1>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <p>Reitingas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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