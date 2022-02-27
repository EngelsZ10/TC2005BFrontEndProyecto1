const menuTemplate = document.createElement('template');

menuTemplate.innerHTML = `
    <style>
        nav {
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #0a0a23;
        }
        
        li {
            height: 100%;
            display: inline-block;
            list-style-type: none;
        }
        
        a {
            font-size: 100%;
            display: flex;
            font-weight: 700;
            margin: 0 25px;
            color: #fff;
            text-decoration: none;
            height: 100%;
        }
        
        a:hover {
            font-size: 130%;
            color: #566ab3;
        }
    </style>
    <nav>
        <ul>
            <li>
                <a href="index.html">E</a>
            </li>
            <li>
                <a href="Convolution.html">Convolution</a>
            </li>
            <li>
                <a href="Aplication.html">Aplication</a>
            </li>
        </ul>
    </nav>
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

customElements.define('menu-custom', Menu);