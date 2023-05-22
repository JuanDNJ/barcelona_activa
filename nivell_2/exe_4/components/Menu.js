import './IconoMenu.js'
import './Enlace.js'
import './ItemMenu.js'
export default class MenuNjv extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: 'open'})
  }

  static get styles() {
    return /*html*/ `
    :host {
      display: block;
    }
    ul.list__menu {
      display: none;
    }
  
    .menu{
      order: 2;
    }
    article.red-social {
      order: 1;
    }
    @media screen and (min-width: 425px) {
      ul.lista{
        display: none;
      }
     
    }
    @media screen and (min-width: 768px) {
      ul.lista{
        display: inline-flex;
      }
     
      .logo{
        order: -1;
      }
      .menu{
        order: -1;
      }
    }
  `;
  }

  connectedCallback() {
    this.render();
  }

  render() {

    this.shadowRoot.innerHTML = /*html*/ `
      <style>${MenuNjv.styles}</style>
      <nav class="menu">
        <icono-menu></icono-menu>
        <ul class="lista">
          <item-menu>
            <i class="icono" slot="icono">
              <img class="svg__ico" src="./public/images/svg/home.svg" alt="Inicio">
            </i>
            <a-roll-over slot="enlace" content="Inicio"></a-roll-over>
          </item-menu>
          <item-menu>
            <i class="icono" slot="icono">
              <img class="svg__ico" src="./public/images/svg/rutas.svg" alt="Rutas">
            </i>
            <a-roll-over slot="enlace" content="Rutas"></a-roll-over>
          </item-menu>
          <item-menu>
             <i class="icono" slot="icono">
              <img class="svg__ico" src="./public/images/svg/hoteles.svg" alt="Hoteles">
            </i>
            <a-roll-over slot="enlace"  content="Hoteles"></a-roll-over>
          </item-menu>
          <item-menu>
            <i class="icono" slot="icono">
              <img class="svg__ico" src="./public/images/svg/vuelos.svg" alt="Vuelos">
            </i>
            <a-roll-over slot="enlace"  content="Vuelos"></a-roll-over>
          </item-menu>
          <item-menu>
            <i class="icono" slot="icono">
              <img class="svg__ico" src="./public/images/svg/contacto.svg" alt="Contacto">
            </i>
            <a-roll-over slot="enlace"  content="Contacto"></a-roll-over>
          </item-menu>
        </ul>
      </nav>
    `;
  }

  disconnectedCallback() {
    this.shadowRoot.innerHTML = /* html */ "";
  }

  // attributeChangedCallback(attr, old, now) { }


  // static get observedAttributes() {
  //   return [''];
  // }
}

window.customElements.define("menu-njv", MenuNjv);