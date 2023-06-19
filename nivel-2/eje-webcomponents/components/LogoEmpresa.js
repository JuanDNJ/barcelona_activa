export default class LogoEmpresa extends HTMLElement {
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
        display: block;
      }
      img.png__logo {
        max-width: 64px;
        max-width: 64px;
      }
      .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        margin: -1rem;
        animation: moveLogo 300ms linear;
      }
      @media screen and (min-width: 768px) {
        .logo{
          order: -1;
        }
      }
      @keyframes moveLogo{
        0%{
          opacity: 0;
          transform: translateX(-100%) rotate(360deg);
        }
        100%{
          opacity: 1;
        }
      }
    `
  }
  ready() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${LogoEmpresa.styles}</style>
        <article class="logo">
          <img class="png__logo" src="./images/jpg/logo.png" alt="Logo Empresa">
        </article>
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
window.customElements.define("logo-empresa",LogoEmpresa);