const $ = (tag, all = false) => {
  let ragRef = tag;

  if (tag.charAt(0) === '.') {
    ragRef = tag.slice(0, 1);
    console.log(ragRef.slice(0, 1))
  } else if (tag.charAt(0) === '#') {
    ragRef = tag.slice(0, 1);
    console.log(ragRef.slice(0, 1))
  }
  if (all === true) {
    return Array.from(document.querySelectorAll(tag))
  } else {
    return document.querySelector(tag)
  }

}

const templateMenu = document.createElement('template');
templateMenu.innerHTML = /*html*/ `
 <nav class="menu">
  <i class="icono__menu-bar"><img src="./public/images/svg/menu_bars.svg" alt="Menu bar"></i>
    <ul class="list__menu">
      <li class="item__list">
        <i class="icono icono__home">
          <img class="svg__ico" src="./public/images/svg/home.svg" alt="Inicio">
        </i>
        <a title="Pulsar" href="#" class="link">Inicio</a>
      </li>
      <li class="item__list">
        <i class="icono icono__home">
          <img class="svg__ico" src="./public/images/svg/rutas.svg" alt="Rutas">
        </i>
        <a title="Pulsar" href="#" class="link">Rutas</a>
      </li>
      <li class="item__list">
        <i class="icono icono__home">
          <img class="svg__ico" src="./public/images/svg/hoteles.svg" alt="Hoteles">
        </i>
        <a title="Pulsar" href="#" class="link">Hoteles</a>
      </li>
      <li class="item__list">
        <i class="icono icono__home">
          <img class="svg__ico" src="./public/images/svg/vuelos.svg" alt="Vuelos">
        </i>
        <a title="Pulsar" href="#" class="link">Vuelos</a>
      </li>
      <li class="item__list">
        <i class="icono icono__home">
          <img class="svg__ico" src="./public/images/svg/contacto.svg" alt="Contacto">
        </i>
        <a title="Pulsar" href="#" class="link">Contacto</a>
      </li>
    </ul>
</nav>

`;


let cabecera = $(".item:nth-child(1)");
console.log(cabecera)
cabecera.appendChild(templateMenu.content.cloneNode((true)))