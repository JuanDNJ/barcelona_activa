export default class IconoMenu extends HTMLElement {
   active = false;

   constructor() {
      super();
      this.attachShadow({ mode: 'open' })
   }

   static get styles() {
      return /*html*/ `
     :host {
        display: block;
      }
      i.menu-bar{
         display: inline-flex;
         padding: 1rem;
         cursor: pointer;
      }
     @media screen and (min-width: 425px) {
         i.menu-bar{
            display: inline-flex;
         }
     }
     @media screen and (min-width: 768px) {
      i.menu-bar{
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
      <i class="menu-bar">
         <img src="./images/svg/menu_bars.svg" alt="Menu bar">
      </i>
    `;
    const clickOpenMenu = this.shadowRoot.querySelector(".menu-bar");
    clickOpenMenu.addEventListener("click", this.handleCklickOpenMenu.bind(this));
   }

   handleCklickOpenMenu(event) {
      console.log(event.target)
      this.active = !this.active;
      this.dispatchEvent(new CustomEvent("openmenubar", {
         detail: {
            active: this.active
         },
         bubbles: true,
         composed: true
      }))

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