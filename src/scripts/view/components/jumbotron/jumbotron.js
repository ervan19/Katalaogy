class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section id="jumbotron" >
        <article>
            <h2  tabindex="0">We help you find a variety of <span>unique and interesting</span> restaurants as a reference for you</h2>
            <p  tabindex="0">Providing complete information about restaurants is our job. You just need to choose which restaurant suits you.</p>
            <button tabindex="0">Find Restaurant</button>
        </article>
        <aside class="jumbotron-image">
            <span>
                <picture tabindex="0">
                  <source type="image/webp" srcset="./images/jumbotron.webp">
                  <source type="image/jpeg" srcset="./images/jumbotron.jpg">
                  <img class="lazyload" data-src="./images/jumbotron.jpg" alt="image 1" >
              </picture>
            </span>
        </aside>
      </section>
        
        `;
  }
}

customElements.define("jumbotron-element", Jumbotron);
