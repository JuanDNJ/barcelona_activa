export default class RedSocial  extends HTMLElement {
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
      .svg__ico{
        cursor: pointer;
        transition: transform 300ms ease-in-out;
        margin: 0 .25rem;
      }
      .svg__ico:hover, .svg__ico:active{
        cursor: pointer;
        transform: scale(1.5);
      }
    `
  }
  static get data() {
    return [
    {
      name: 'facebook',
      url: 'https://www.facebook.com/',
      svg: './images/svg/facebook.svg',
      alt: 'Facebook'

    },
    {
      name: 'twitter',
      url: 'https://www.twitter.com/',
      svg: './images/svg/twitter.svg',
      alt: 'Twitter'
    }
    ]
  }
  ready() {
    const redSocial = RedSocial.data;
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${RedSocial.styles}</style>
        <article class="red-social">
          ${redSocial.map((item)=>{
            return /*html*/`	
            <i class="icono icono__home">
              <img class="svg__ico" src=${item.svg} alt=${item.alt}>
            </i>
            `
          }).join('')}
        </article>
      `
      const goTo = [...this.shadowRoot.querySelectorAll('img.svg__ico')];
      goTo.forEach((item)=>{
        item.addEventListener('click', this.handlerClick);
      });
  }
  handlerClick(event){
 
    const matches = [
      {
        name: 'facebook',
        match: event.target.src.match('facebook')
      },
      {
        name: 'twitter',
        match: event.target.src.match('twitter')
      }
    ];
    matches.forEach((item)=>{
      if(item.match){
        window.open(`https://www.${item.name}.com/`,'_blank');
      }
    });
  }

  disconnectedCallback() {
    this.shadowRoot.innerHTML = /* html */ "";
  }

  attributeChangedCallback(attr, old, now) { }


  static get observedAttributes() {
    return [''];
  }
}
window.customElements.define("red-social",RedSocial);