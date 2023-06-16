export default class Articulo extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    this.ready()
  }
  static get styles() {
    return /* CSS */ `
      :host{
        display: block;
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      article.articulo{
        background: var(--color-primario);
        padding:  0 0 1rem 0 ;
      }
      a.link-mas{
        color: var(--color-uno);
        margin: 1rem 0;
      }
      h2.titulo-articulo{
        color: var(--color-dos);
      }
      img.imagen-articulo{
        max-height: 178px;
      }
      p{
        color: var(--color-uno);
       
      }
      a.link-mas,h2.titulo-articulo, p {
        padding: 0 1rem;
      }
    `
  }
  ready() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${Articulo.styles}</style>
        <article class="articulo">
          <img class="imagen-articulo" src="${this.hasAttribute('srcSet') ? this.getAttribute('srcSet') : './images/jpg/sakura.jpg'}" alt="Imagen artículo">
          <h2 class="titulo-articulo">${this.hasAttribute('titulo') ? this.getAttribute('titulo') : 'Cultura'}</h2>
          <div class="descripcion">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Iusto nulla velit hic laborum optio accusantium id quidem
              cumque? Modi dolorem inventore quis quia facere eveniet
              debitis ad, suscipit perspiciatis odit ea ipsa nisi officia
              qui vero adipisci, ab nam eos maiores amet praesentium
              tempora? Vel iusto temporibus rerum quia saepe?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Iusto nulla velit hic laborum optio accusantium id quidem
              cumque? Modi dolorem inventore quis quia facere eveniet
              debitis ad, suscipit perspiciatis odit ea ipsa nisi officia
              qui vero adipisci, ab nam eos maiores amet praesentium
              tempora? Vel iusto temporibus rerum quia saepe?
            </p>
          </div>
          <a class="link-mas" href="#">Leer más...</a>
        </article>
      `
  }
  disconnectedCallback() {
    this.shadowRoot.innerHTML = /* html */ "";
  }

  // attributeChangedCallback(attr, old, now) { }


  // static get observedAttributes() {
  //   return [''];
  // }
}
window.customElements.define("articulo-njv",Articulo);