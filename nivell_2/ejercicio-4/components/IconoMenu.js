export default class IconoMenu extends HTMLElement {


   constructor() {
      super();
      this.attachShadow({ mode: 'open' })
   }

   static get styles() {
      return /*html*/ `
     :host {
        display: block;
      }
      i.icono__menu-bar{
         display: inline-flex;
         padding: 1rem;
      }
     @media screen and (min-width: 425px) {
         i.icono__menu-bar{
            display: inline-flex;
         }
     }
     @media screen and (min-width: 768px) {
      i.icono__menu-bar{
        display: none;
      }
    }
   `;
   }
   connectedCallback() {
      this.render();
   }

   render() {

      this.shadowRoot.innerHTML = /*html*/ `
      <style>${IconoMenu.styles}</style>
      <i class="icono__menu-bar">
         <img src="./images/svg/menu_bars.svg" alt="Menu bar">
      </i>
    `;

   }


   disconnectedCallback() {
      this.shadowRoot.innerHTML = /* html */ "";
   }

   attributeChangedCallback(attr, old, now) { }


   static get observedAttributes() {
      return [''];
   }
}

window.customElements.define("icono-menu", IconoMenu);