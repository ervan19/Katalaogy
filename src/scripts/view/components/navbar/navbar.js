import "../hamburgerButton/hamburgerButton";

class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <header>
      <header-brand></header-brand>
      <hamburger-button></hamburger-button>
      <nav>
        <header-link></header-link>
      </nav>
    </header>
    `;
  }
}

customElements.define("nav-bar", NavBar);
