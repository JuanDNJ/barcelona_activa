export default class ItemMenu extends HTMLElement {
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
      li.item{
          display: flex;
          align-items: center;
          justify-content: center;
          gap: .5rem; 
          transform: scale(.9);
          transition: transform 300ms ease-in-out;
      }
      li.item:hover{
        --color-primario: yellow;
        transform: scale(1.1);
       
      }
      li.item:active{
        background: var(--color-primario);
        --font-size: 10rem;
      }
    ` 
  }
  ready() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${ItemMenu.styles}</style>
        <li class="item">
          <slot name="icono"></slot>
          <slot name="enlace"></slot>
        </li>
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