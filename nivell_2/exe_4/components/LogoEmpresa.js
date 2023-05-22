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
    `
  }
  ready() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${LogoEmpresa.styles}</style>
        <article class="logo">
          <img class="png__logo" src="./public/images/jpg/logo.png" alt="Logo Empresa">
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