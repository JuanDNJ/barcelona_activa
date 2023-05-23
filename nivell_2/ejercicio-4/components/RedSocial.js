export default class RedSocial  extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    this.ready()
  }
  static get styles() {
    return /* CSS */ `
      :host{
        display: block;
      }
    `
  }
  ready() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${RedSocial.styles}</style>
        <article class="red-social">
          <i class="icono icono__home">
            <img class="svg__ico" src="./public/images/svg/facebook.svg" alt="Facebook">
          </i>
          <i class="icono icono__home">
            <img class="svg__ico" src="./public/images/svg/twitter.svg" alt="Twitter">
          </i>
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
window.customElements.define("red-social",RedSocial);