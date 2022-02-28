const menuTemplate = document.createElement('template');
const footerTemplate = document.createElement('template');

menuTemplate.innerHTML = `
    <style>
        nav {
            background-color: #0a0a23;
            overflow: hidden;
            float: right;
            padding-right: 20px;
        }

        header {
            font-family: Monserrat;
            margin: -8px;
            background-color: #0a0a23;
            overflow: hidden;
        }

        li {
            height: 100%;
            display: inline-block;
            list-style-type: none;
        }

        a {
            float: left;
            color: #f2f2f2;
            text-align: center;
            padding: 7px 16px;
            text-decoration: none;
            font-size: 17px;
        }

        a:hover {
            font-size: 130%;
            color: #566ab3;
        }
    </style>
    <header>
        <a href="https://www.w3schools.com/" target="_blank"><img src="../assets/W3S.svg" alt="w3shools logo" height="45px" style="padding: 7px;"></a>
        <nav>
            <ul>
                <li>
                    <a href="index.html">E</a>
                </li>
                <li>
                    <a href="Convolution.html">Convolución de matrices</a>
                </li>
                <li>
                    <a href="Aplication.html">Aplicación de la convolución de matrices</a>
                </li>
            </ul>
        </nav>
    </header>
`;

footerTemplate.innerHTML = `
    <style>
        footer {
            background-color: #b5c1c7;
            color: #222324;
            font-family: Monserrat;
            font-size: small;
            text-align: center;
            width: 99%;
            height: 25px;
            padding: 7.5px;
            margin-right: 0px;
            position: fixed;
            bottom: 0px;
            right: 0px;
            left: 0px;
        }
    </style>
    <footer>hola soy un footer</footer>
`;

class Menu extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(menuTemplate.content);
    }
}

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(footerTemplate.content);
    }
}


customElements.define('menu-custom', Menu);
customElements.define('footer-custom', Footer);