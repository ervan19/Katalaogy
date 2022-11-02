class Jumbotron extends HTMLElement {
  connectedCallbak() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="jumbotron" >
        <article>
            <h2  tabindex="0">We help you find a variety of <span>unique and interesting</span> restaurants as a reference for you</h2>
            <p  tabindex="0">Providing complete information about restaurants is our job. You just need to choose which restaurant suits you.</p>
            <a href="#restaurants" tabindex="0">Find Restaurant</a>
        </article>
        <aside class="jumbotron-image">
            <span>
            <img src="/images/Jumbotron.jpg" alt="Dua orang sedang bersalaman" tabindex="0">
            </span>
        </aside>
    </section>
    `;
  }
}

customElements.define("jumbotron-element", Jumbotron);
