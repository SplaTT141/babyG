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
                            <div class="text-content col-5">
                                <div class="text-section">
                                    <h1 class="first-line">Žavūs drabužiai patiems</h1>
                                    <h1 class="second-line">mažiausiems</h1>
                                    <p>Atraskite mūsų patogių, stilingų ir prieinamų drabužių kolekciją, skirtą kūdikiams ir vaikams.</p>
                                    <button type="button">Apsipirkti</button>
                                </div>
                                <div class="numbers-section">
                                    <div class="section1">
                                        <h1>100+</h1>
                                        <p>Laimingų <br> šeimų</p>
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
                            </div class="col-6">
                            <img src="./src/assets/img/kids3.png" alt="Kids" class="col-6 m-1"/>
                            </div>
                    </div>
                </div>
            </section>
            <section class="age">
                <div class="container">
                    <div class="row">
                        <div class="age-header">
                            <h2>Pirkite pagal amžių</h2>
                            <p>Išsirinkite tobulus drabužius kiekvienam jūsų vaiko augimo etapui.</p>
                        </div>
                        <div class="age-groups">
                            <div class="baby col-4">
                                <img src="./src/assets/img/baby.png" alt="baby"/>
                                <h3>Kūdikis</h3>
                                <p>0-12 mėnesių</p>
                                <a href="#">Drabužiai kūdikiams</a>
                            </div>
                            <div class="toddler col-4">
                                <img src="./src/assets/img/toddler.png" alt="toddler"/>
                                <h3>Mažylis</h3>
                                <p>1-3 metų</p>
                                <a href="#">Drabužiai mažyliams</a>
                            </div>
                            <div class="kid col-4">
                                <img src="./src/assets/img/kid.png" alt="kid"/>
                                <h3>Vaikas</h3>
                                <p>4-7 metų</p>
                                <a href="#">Drabužiai vaikams</a>
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