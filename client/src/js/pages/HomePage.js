import { PublicPageTemplate } from "../templates/PublicPageTemplate.js";

export class HomePage extends PublicPageTemplate {
    constructor() {
        super();
    }

    main() {
        return `
        <main>
            <section class="intro">
                <div class="container">
                    <div class="row intro-content">
                        <div class="text-content col-12 col-md-6 col-lg-5">
                            <div class="text-section">
                                <h1 class="first-line">Žavūs drabužiai patiems</h1>
                                <h1 class="second-line">mažiausiems</h1>
                                <p>Atraskite mūsų patogių, stilingų ir prieinamų drabužių kolekciją, skirtą kūdikiams ir vaikams.</p>
                                <button class="btn-linear" type="button">Apsipirkti</button>
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
                        </div>
                        <div class="col-12 col-md-6 col-lg-6 offset-lg-1 img-wrapper">
                            <img src="./src/assets/img/kids3.png" alt="Kids">
                        </div>
                    </div>
                </div>
            </section>
            <section class="age">
                <div class="container">
                    <div class="row">
                        <div class="age-header">
                            <h2 class="heading">Pirkite pagal amžių</h2>
                            <p class="heading-paragraph">Išsirinkite tobulus drabužius kiekvienam jūsų vaiko augimo etapui.</p>
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
            <section class="popular-products">
                <div class="container">
                    <div class="row">
                        <div class="products-header">
                            <h2 class="heading">Populiariausios prekės</h2>
                            <p class="heading-paragraph">Atraskite mūsų populiariausias prekes, kurios derina komfortą ir stilių</p>
                        </div>
                        <div class="product-cards">
                            <div class="product-card col-4">
                                <h3>Džemperis</h3>
                                <img src="./src/assets/img/product.png" alt="product"/>
                                <p class="product-label">Mergaitei</p>
                                <p class="age">4-7 metų</p>
                                <p class="price">13,99€</p>
                                <button type="button" href="#">Pridėti į krepšelį</button>
                            </div>
                            <div class="product-card col-4">
                                <h3>Džemperis</h3>
                                <img src="./src/assets/img/product.png" alt="product"/>
                                <p class="product-label">Mergaitei</p>
                                <p class="age">4-7 metų</p>
                                <p class="price">13,99€</p>
                                <button type="button" href="#">Pridėti į krepšelį</button>
                            </div>
                            <div class="product-card col-4">
                                <h3>Džemperis</h3>
                                <img src="./src/assets/img/product.png" alt="product"/>
                                <p class="product-label">Mergaitei</p>
                                <p class="age">4-7 metų</p>
                                <p class="price">13,99€</p>
                                <button type="button" href="#">Pridėti į krepšelį</button>
                            </div>
                            <div class="product-card col-4">
                                <h3>Džemperis</h3>
                                <img src="./src/assets/img/product.png" alt="product"/>
                                <p class="product-label">Mergaitei</p>
                                <p class="age">4-7 metų</p>
                                <p class="price">13,99€</p>
                                <button type="button" href="#">Pridėti į krepšelį</button>
                            </div>
                            <div class="product-card col-4">
                                <h3>Džemperis</h3>
                                <img src="./src/assets/img/product.png" alt="product"/>
                                <p class="product-label">Mergaitei</p>
                                <p class="age">4-7 metų</p>
                                <p class="price">13,99€</p>
                                <button type="button" href="#">Pridėti į krepšelį</button>
                            </div>
                            <div class="product-card col-4">
                                <h3>Džemperis</h3>
                                <img src="./src/assets/img/product.png" alt="product"/>
                                <p class="product-label">Mergaitei</p>
                                <p class="age">4-7 metų</p>
                                <p class="price">13,99€</p>
                                <button type="button" href="#">Pridėti į krepšelį</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="container">
                    <div class="row">
                        <div class="subscription">
                            <div class="subscription-header">
                                <h2 class="heading">Likite informuoti!</h2>
                                <p class="heading-paragraph">Gaukite išskirtinius pasiūlymus ir naujų prekių pranešimus tiesiai į savo el. paštą</p>
                            </div>
                            <div class="email">
                                <div class="email-input">
                                    <input type="email" placeholder="Įveskite savo elektroninį paštą"></input>
                                    <button class="btn-linear" type="submit">Prenumeruoti</button>
                                </div>
                                <p>Jokio šlamšto, galite bet kada atsisakyti prenumeratos. Mes gerbiame jūsų privatumą.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>`
    }
}