import { centerData, rightData } from "../data/headerData.js";

export function Header() {

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

                        <div class="mobile-menu">
                            <ul>
                                <li>
                                    <img src="./src/assets/img/mobile-menu.svg" alt="menu">
                                    <div class="dropdown-menu">
                                        <div class="fa fa-caret-up"></div>
                                        <ul>
                                            ${centerNavbarHTML}
                                        </ul>
                                    </div>
                                </li>
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
        `;
}