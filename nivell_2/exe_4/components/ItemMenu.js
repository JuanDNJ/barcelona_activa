export default class ItemMenu extends HTMLElement {
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
        <style>${ItemMenu.styles}</style>
        <h1>ItemMenu</h1>
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
window.customElements.define("item-menu",ItemMenu);