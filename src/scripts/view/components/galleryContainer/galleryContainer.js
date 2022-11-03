import "../gallery/gallery";
import "../sectionHeading/sectionHeading";
class GalleryContainer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
    <section id="foodGallery">
        <section-heading headingP="Food Gallery" headingH2="Various Food Galleries"></section-heading>
        <gallery-resto></gallery-resto>
    </section>
    `;
    }
}

customElements.define("gallery-container", GalleryContainer);
