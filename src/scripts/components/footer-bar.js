class FooterBar extends HTMLElement {
    constructor() {
        super();
        this._shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this._shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0
                }

                footer {
                    width: 100%;
                    height: 3em;
                    margin-top: 40em;
                    background: rgb(34, 34, 34);
                    line-height: 3em;
                    box-sizing: border-box;
                    position: relative;
                    bottom: 0;
                }
                
                footer p {
                    color: rgb(136, 136, 136);
                    text-align: center;
                }
            </style>

            <footer>
                <p>Created by pahrurozi</p>
            </footer>
        `
    }
}

customElements.define("footer-bar", FooterBar);