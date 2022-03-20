class NavBar extends HTMLElement {

    constructor() {
        super();
        this._shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this._shadowDOM.querySelector("#search-surah").value;
    }

    render() {
        this._shadowDOM.innerHTML =
            `
            <style>
                * {
                margin: 0;
                padding: 0;
                }

                nav {
                    width: 100%;
                    background: #0066FF;
                    top: 0;
                    z-index: 9999;
                    box-sizing: border-box;
                }
                
                nav ul {
                    height: 3em;
                    width: 70%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 0 auto;
                    list-style: none;
                    box-sizing: border-box;
                }

                li {
                    display: flex;
                }

                li a {
                    text-decoration: none;
                    color: white;
                    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                    font-weight: bold;
                }

                li svg {
                    margin-top: .1em;
                }

                input {
                    width: 15em;
                    background: white;
                    position: relative;
                    border: none;
                    padding: .5em;
                    border-radius: .2em 0 0 .2em;
                    box-sizing: border-box;
                }

                #btn-search {
                    background: white;
                    cursor: pointer;
                    border: none;
                    padding: 0 .5em;
                    border-radius: 0 .2em .2em 0;
                }

                 @media screen and (max-width: 576px) {
                    nav ul {
                        width: 90%;
                    }

                    input {
                        width: 10em;
                    }
                }

            </style>

            <nav>
                <ul>
                    <li>
                        <a href="#">Mari Mengaji</a>
                    </li>
                    <li>
                        <input type="text" placeholder="search surah" id="search-surah">
                        <button id="btn-search" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </button>
                    </li>
                </ul>
            </nav>
        `;

        this._shadowDOM.querySelector("#btn-search").addEventListener("click", this._clickEvent);
    }
}

customElements.define('nav-bar', NavBar);