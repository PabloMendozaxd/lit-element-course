import {
    LitElement,
    html,
    css
} from "lit-element";


class MyButton extends LitElement {



    static get properties() {
        return {
            text: {
                Type: String,
                attribute: true
            }
        }
    }
    constructor() {
        super();
    }
    static get styles() {
        return css `
      button {
            all:initial;
            background-color: #9292b5;
            font-family:cursive; 
            margin-right:20px;
            width: 150px;
            border-radius:10px;
            text-align:center;
            padding: 2px;
            cursor: pointer;
      }
    `;
    }
    firstUpdated() {
        this.button = this.shadowRoot.querySelector('button');
    }

    mouseDownListener(event) {
        this.button.style.backgroundColor = 'orange';
    }
    mouseUpListener(event) {
        this.button.style.backgroundColor = 'blue';
    }

    render() {
        return html `
        <button @mousedown="${this.mouseDownListener}" @mouseup="${this.mouseUpListener}">${this.text}</button>
        `
    }
}

window.customElements.define('my-button', MyButton);