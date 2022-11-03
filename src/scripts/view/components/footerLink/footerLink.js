class FooterLink extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="footer-link" >
            <ul >
            <li><a href="#" tabindex="0">Home</a></li>
            <li><a href="#/favorite" tabindex="0">Favorite</a></li>
            <li><a href="#" tabindex="0">About Us</a></li>
            <li><a href="/#foodGallery" tabindex="0">Food Gallery</a></li>
            <li><a href="/#restaurants" tabindex="0">Restaurant List</a></li>
            </ul>
        </div>
    `;
    }
}

customElements.define("footer-link", FooterLink);
