export default class BannerPrincipal extends HTMLElement {
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
        display: flex;
        justify-content: center;
        overflow: hidden;
        margin: -1rem;
        height: 250px;
        align-items: end;
        order: 1;
      }
      span {
        font-family: var(--font-family-titulos);
        font-size: 1.5rem; 
        color: var(--color-dos-a);
        text-shadow: 3px 3px 1px rgba(0, 0, 0, .5);
      }
    `
  }
  ready() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${BannerPrincipal.styles}</style>
        <article class="banner">
         <span class="descripcion__banner">"Disfruta de la experiencia de otros viajeros"</span>
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
window.customElements.define("banner-principal",BannerPrincipal);