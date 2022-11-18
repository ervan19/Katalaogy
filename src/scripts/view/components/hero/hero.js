class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="hero" tabindex="0" aria-label="Hero Image ">
            <h1 tabindex="0">Find your Favorite <br><span>Restaurant catalog</span> in Katalaogy</h1>
        </div>
    `;
    }
}

customElements.define("hero-element", Hero);
