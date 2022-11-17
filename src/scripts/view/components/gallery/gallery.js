class Gallery extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="gallery" tabindex="0" aria-label="galery card">
        <div class="myGallery" >
            <picture tabindex="0">
                <source srcset="./images/image1.webp" type="image/webp" >
                <source srcset="./images/image1.jpg" type="image/jpeg" >
                <img class="lazyload" data-src="./images/image1.jpg" alt="image 1" >
            </picture>
            <div class="description" tabindex="0" aria-label="galery description">
            <h3 tabindex="0">Lorem ipsum dolor sit.</h3>
            <p tabindex="0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat iste architecto excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum incidunt, reiciendis unde adipisci est saepe.</p>
            </div>
        </div>
        <div class="myGallery">
            <picture tabindex="0">
                <source srcset="./images/image2.webp" type="image/webp" >
                <source srcset="./images/image2.jpg" type="image/jpeg" >
                <img class="lazyload" data-src="./images/image2.jpg" alt="image 2" >
            </picture>
        <div class="description" tabindex="0" aria-label="galery description" >
            <h3 tabindex="0">Lorem ipsum dolor sit.</h3>
            <p tabindex="0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat iste architecto excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum incidunt, reiciendis unde adipisci est saepe.</p>
        </div>
        </div>
        <div class="myGallery" >
            <picture tabindex="0">
                <source srcset="./images/image3.webp" type="image/webp" >
                <source srcset="./images/image3.jpg" type="image/jpeg" >
                <img class="lazyload" data-src="./images/image3.jpg" alt="image 3" >
            </picture>
            <div class="description" tabindex="0" aria-label="galery description" >
            <h3 tabindex="0">Lorem ipsum dolor sit.</h3>
            <p tabindex="0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat iste architecto excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum incidunt, reiciendis unde adipisci est saepe.</p>
            </div>
        </div>
        <div class="myGallery" >
            <picture tabindex="0">
                <source srcset="./images/image4.webp" type="image/webp"  >
                <source srcset="./images/image4.jpg" type="image/jpeg" >
                <img class="lazyload" data-src="./images/image4.jpg" alt="image 4" >
            </picture>
            <div class="description" tabindex="0" aria-label="galery description" >
            <h3 tabindex="0">Lorem ipsum dolor sit.</h3>
            <p tabindex="0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat iste architecto excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum incidunt, reiciendis unde adipisci est saepe.</p>
            </div>
        </div>
        <div class="myGallery">
            <picture tabindex="0">
                <source srcset="./images/image5.webp" type="image/webp" >
                <source srcset="./images/image5.jpg" type="image/jpeg" >
                <img class="lazyload" data-src="./images/image5.jpg" alt="image 5" >
            </picture>
            <div class="description" tabindex="0" aria-label="galery description">
            <h3 tabindex="0">Lorem ipsum dolor sit.</h3>
            <p tabindex="0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat iste architecto excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum incidunt, reiciendis unde adipisci est saepe.</p>
            </div>
        </div>
        <div class="myGallery">
            <picture tabindex="0">
                <source srcset="./images/image6.webp" type="image/webp"  >
                <source srcset="./images/image6.jpg" type="image/jpeg" >
                <img class="lazyload" data-src="./images/image6.jpg" alt="image 6" >
            </picture>
            <div class="description" tabindex="0" aria-label="galery description" >
            <h3 tabindex="0">Lorem ipsum dolor sit.</h3>
            <p tabindex="0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat iste architecto excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum incidunt, reiciendis unde adipisci est saepe.</p>
            </div>
        </div>
        </div>
    `;
  }
}

customElements.define("gallery-resto", Gallery);
