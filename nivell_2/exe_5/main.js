import './components/Menu.js'
import './components/RedSocial.js'
import './components/LogoEmpresa.js'
import './components/BannerPrincipal.js'

const $ = (tag, all = false) => {
  if (all === true) {
    return Array.from(document.querySelectorAll(tag))
  } else {
    return document.querySelector(tag)
  }

}


// TODDO: Crear el evento de click para desplegar el menu, en modo mobil