class HeaderLink extends HTMLElement {
  connectedCallback() {
    this.renderElement();
  }

  renderElement() {
    this.innerHTML = `
      <ul>
        <li><a href="/" tabindex="0">Home</a></li>
        <li><a href="#/favorite" tabindex="0">Favorite</a></li>
        <li><a href="https://www.linkedin.com/in/ervan-muhammad-adrian-9173a6213/" tabindex="0">About Us</a></li>
      </ul>
    `;
  }
}

customElements.define("header-link", HeaderLink);
