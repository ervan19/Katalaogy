import '../footerBrand/footerBrand';
import '../footerLink/footerLink';

class FooterContainer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
            <footer-brand></footer-brand>
            <footer-link></footer-link>
        </footer>
    `;
  }
}

customElements.define('footer-container', FooterContainer);
