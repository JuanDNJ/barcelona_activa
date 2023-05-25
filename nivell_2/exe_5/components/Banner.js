export default class BannerNjv extends HTMLElement {
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
      .banner {
        position: relative;
        bottom: 25px;
        display: flex;
        align-items: end;
        justify-content: center;
        overflow: hidden;
        margin: -1rem;
        height: 250px;
        order: 1;
      }
      span.descripcion{
        font-family: var(--font-family-titulos);
        font-size: 1.5rem; 
        color: rgba(255, 74, 74, 1);
        padding: 0 1rem 1rem 1rem;
      }
    `
  }
  ready() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${BannerNjv.styles}</style>
        <article class="banner">
         <span class="descripcion">"Disfruta de la experiencia de otros viajeros"</span>
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
window.customElements.define("banner-njv", BannerNjv);