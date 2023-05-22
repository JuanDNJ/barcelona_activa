import './IconoMenu.js'
import './Enlace.js'
export default class MenuNjv extends HTMLElement {

  constructor() {
    super();
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
      ul.list__menu{
        display: none;
      }
     
    }
    @media screen and (min-width: 768px) {
      ul.list__menu{
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

    this.innerHTML = /*html*/ `
      <style>${MenuNjv.styles}</style>
      <nav class="menu">
        <icono-menu></icono-menu>
        <ul class="list__menu">
          <li class="item__list">
            <i class="icono icono__home">
              <img class="svg__ico" src="./public/images/svg/home.svg" alt="Inicio">
            </i>
            <a-roll-over content="Inicio"></a-roll-over>
          </li>
          <li class="item__list">
            <i class="icono icono__home">
              <img class="svg__ico" src="./public/images/svg/rutas.svg" alt="Rutas">
            </i>
            <a-roll-over content="Rutas"></a-roll-over>
          </li>
          <li class="item__list">
            <i class="icono icono__home">
              <img class="svg__ico" src="./public/images/svg/hoteles.svg" alt="Hoteles">
            </i>
            <a-roll-over content="Hoteles"></a-roll-over>
          </li>
          <li class="item__list">
            <i class="icono icono__home">
              <img class="svg__ico" src="./public/images/svg/vuelos.svg" alt="Vuelos">
            </i>
            <a-roll-over content="Vuelos"></a-roll-over>
          </li>
          <li class="item__list">
            <i class="icono icono__home">
              <img class="svg__ico" src="./public/images/svg/contacto.svg" alt="Contacto">
            </i>
            <a-roll-over content="Contacto"></a-roll-over>
          </li>
        </ul>
      </nav>
    `;
  }

  disconnectedCallback() {
    this.innerHTML = /* html */ "";
  }

  attributeChangedCallback(attr, old, now) { }


  static get observedAttributes() {
    return [''];
  }
}

window.customElements.define("menu-njv", MenuNjv);