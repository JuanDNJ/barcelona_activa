export default class EnlaceRollOver extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    this.ready()
  }
  static get styles() {
    return /*html*/ `
      :host{
        display: inline-block;
      }
      a.link {
        text-decoration: none;
        padding: .5rem .5rem .5rem 0rem;
        font-size: 1em;
        font-weight: 600;
        color: gray;
      }

      a.link:hover,
      a.link:active,
      a.link:focus,
      a.link:target {
        animation: roll-over 1000ms ease-in-out infinite;
      }
      @keyframes roll-over {
        0% { 
          border-bottom: 2px solid red;
        }
        100% {
          color: darkred;
          border-bottom: 2px solid gray;
        }
      }
    `
  }
  ready() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${EnlaceRollOver.styles}</style>
        <a class="link"  href="${this.getAttribute('path') ?? '#'}" title="${this.getAttribute("content")}">
          ${
            this.hasAttribute("content") 
              ? this.getAttribute("content")  
                : '<slot name="content">Link</slot>'
          }
        </a>
      `
  }
  disconnectedCallback() {
    this.shadowRoot.innerHTML = /* html */ "";
  }

  attributeChangedCallback(attr, old, now) { }


  static get observedAttributes() {
    return [''];
  }
}
window.customElements.define("a-roll-over",EnlaceRollOver);