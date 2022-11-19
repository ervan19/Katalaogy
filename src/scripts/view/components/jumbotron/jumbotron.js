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
            <a class="find_button" href="#restaurants" tabindex="0">Find Restaurant</a>
        </article>
        <aside class="jumbotron-image">
            <span>
                <picture tabindex="0">
                <source srcset="./images/jumbotron-small.webp" type="image/webp" media="(max-width:600px)">
                <source srcset="./images/jumbotron-small.jpg" type="image/jpeg" media="(max-width:600px)">
                <source srcset="./images/jumbotron-large.webp" type="image/webp" media="(min-width:601px)">
                <source srcset="./images/jumbotron-large.jpg" type="image/jpeg" media="(min-width:601px)">
                <img width="100%" class="lazyload" data-src="./images/jumbotron-large.jpg" alt="image 1" >
              </picture>
            </span>
        </aside>
      </section>
        
        `;
    }
}

customElements.define("jumbotron-element", Jumbotron);
