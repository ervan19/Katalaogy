class Brand extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
      <div class="logo">
        <span>
          <svg width="51" height="48" viewBox="0 0 51 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.21926 10.3224C12.2193 -9.17731 54.7193 -2.57765 50.7193 47.8224C41.7193 31.6557 -8.39395 40.3373 1.21926 10.3224Z" fill="url(#paint0_linear_104_264)"/>
          <defs>
          <linearGradient id="paint0_linear_104_264" x1="50.9839" y1="24" x2="1.55429e-05" y2="24" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FF9901"/>
          <stop offset="1" stop-color="#FF9901" stop-opacity="0.54"/>
          </linearGradient>
          </defs>
          </svg>
        </span>      
        <p class="Brand Title" tabindex="0">Katalaogy</p>
    </div>
    `;
    }
}

customElements.define("header-brand", Brand);
