class NavBar extends HTMLElement {
  connectedCallback() {
    this.renderElement();
  }
  renderElement() {
    this.innerHTML = `
    <header>
       <header-brand></header-brand>
        <button class="hamburger-menu" tab-index="0" aria-label="hamburger menu">
         <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0C0D22" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </span>
      </button>
      <nav>
        <header-link></header-link>
      </nav>
    </header>
    `;
  }
}

customElements.define("nav-bar", NavBar);
