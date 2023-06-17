import './components/Menu.js'
import './components/RedSocial.js'
import './components/LogoEmpresa.js'
import './components/BannerPrincipal.js'
import './components/Articulo.js'

const $ = (tag, all = false) => {
  try {
    if (all === true) {
      return [...Array.from(document.querySelectorAll(tag))] // Retorna un array de nodos
    } else {
      return document.querySelector(tag) // Retorna un nodo
    }
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
}

