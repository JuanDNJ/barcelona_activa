export default class BannerPrincipal extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    this.ready()
  }
  static get styles() {
    return /*css*/ `
      :host{
        display: block;
      }
      article.banner {
        --height-banner: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        margin: -1rem;
        height: var(--height-banner);
        align-items: end;
        order: 1;
        position: relative;
        padding: 1rem;
      }
      span.descripcion {
        position: absolute;
        top: 60%;
        font-family: var(--font-family-titulos);
        font-size: 5vmin; 
        color: var(--color-dos-a);
        text-shadow: 0px 0px 2.5px rgba(0, 0, 0, 1);
        text-align: center;
        letter-spacing: 1px;
       
      }
      @media screen and (min-width: 425px) {
        span.descripcion {
          letter-spacing: 1.2px;
        }
      }
      @media screen and (min-width: 768px) {
        span.descripcion {
          font-size: 2rem;
          letter-spacing: 2px; 
        }
      }
     
    `
  }
  ready() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${BannerPrincipal.styles}</style>
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
window.customElements.define("banner-principal", BannerPrincipal);