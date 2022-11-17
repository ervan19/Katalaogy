class Gallery extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="gallery" tabindex="0" aria-label="galery card">
        <div class="myGallery" >
            <picture tabindex="0">
                <source srcset="./images/image1-small.webp" type="image/webp" media="(max-width:600px)">
                <source srcset="./images/image1-small.jpg" type="image/jpeg" media="(max-width:600px)">
                <source srcset="./images/image1-large.webp" type="image/webp" media="(min-width:601px)">
                <source srcset="./images/image1-large.jpg" type="image/jpeg" media="(min-width:601px)">
                <img class="lazyload" data-src="./images/image1-large.jpg" alt="image 1" >
            </picture>
            <div class="description" tabindex="0" aria-label="galery description">
            <h3 tabindex="0">Lorem ipsum dolor sit.</h3>
            <p tabindex="0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat iste architecto excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum incidunt, reiciendis unde adipisci est saepe.</p>
            </div>
        </div>
        <div class="myGallery">
            <picture tabindex="0">
                <source srcset="./images/image2-small.webp" type="image/webp" media="(max-width:600px)">
                <source srcset="./images/image2-small.jpg" type="image/jpeg" media="(max-width:600px)">
                <source srcset="./images/image2-large.webp" type="image/webp" media="(min-width:601px)">
                <source srcset="./images/image2-large.jpg" type="image/jpeg" media="(min-width:601px)">
                <img class="lazyload" data-src="./images/image2-large.jpg" alt="image 2" >
            </picture>
        <div class="description" tabindex="0" aria-label="galery description" >
            <h3 tabindex="0">Lorem ipsum dolor sit.</h3>
            <p tabindex="0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat iste architecto excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum incidunt, reiciendis unde adipisci est saepe.</p>
        </div>
        </div>
        <div class="myGallery" >
            <picture tabindex="0">
                <source srcset="./images/image3-small.webp" type="image/webp" media="(max-width:600px)">
                <source srcset="./images/image3-small.jpg" type="image/jpeg" media="(max-width:600px)">
                <source srcset="./images/image3-large.webp" type="image/webp" media="(min-width:601px)">
                <source srcset="./images/image3-large.jpg" type="image/jpeg" media="(min-width:601px)">
                <img class="lazyload" data-src="./images/image3-large.jpg" alt="image 3" >
            </picture>
            <div class="description" tabindex="0" aria-label="galery description" >
            <h3 tabindex="0">Lorem ipsum dolor sit.</h3>
            <p tabindex="0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat iste architecto excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum incidunt, reiciendis unde adipisci est saepe.</p>
            </div>
        </div>
        <div class="myGallery" >
            <picture tabindex="0">
             <source srcset="./images/image4-small.webp" type="image/webp" media="(max-width:600px)">
                <source srcset="./images/image4-small.jpg" type="image/jpeg" media="(max-width:600px)">
                <source srcset="./images/image4-large.webp" type="image/webp" media="(min-width:601px)">
                <source srcset="./images/image4-large.jpg" type="image/jpeg" media="(min-width:601px)">
                <img class="lazyload" data-src="./images/image4-large.jpg" alt="image 4" >
            </picture>
            <div class="description" tabindex="0" aria-label="galery description" >
            <h3 tabindex="0">Lorem ipsum dolor sit.</h3>
            <p tabindex="0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat iste architecto excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum incidunt, reiciendis unde adipisci est saepe.</p>
            </div>
        </div>
        <div class="myGallery">
            <picture tabindex="0">
            <source srcset="./images/image5-small.webp" type="image/webp" media="(max-width:600px)">
                <source srcset="./images/image5-small.jpg" type="image/jpeg" media="(max-width:600px)">
                <source srcset="./images/image5-large.webp" type="image/webp" media="(min-width:601px)">
                <source srcset="./images/image5-large.jpg" type="image/jpeg" media="(min-width:601px)">
                <img class="lazyload" data-src="./images/image5-large.jpg" alt="image 5" >
            </picture>
            <div class="description" tabindex="0" aria-label="galery description">
            <h3 tabindex="0">Lorem ipsum dolor sit.</h3>
            <p tabindex="0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat iste architecto excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum incidunt, reiciendis unde adipisci est saepe.</p>
            </div>
        </div>
        <div class="myGallery">
            <picture tabindex="0">
            <source srcset="./images/image6-small.webp" type="image/webp" media="(max-width:600px)">
                <source srcset="./images/image6-small.jpg" type="image/jpeg" media="(max-width:600px)">
                <source srcset="./images/image6-large.webp" type="image/webp" media="(min-width:601px)">
                <source srcset="./images/image6-large.jpg" type="image/jpeg" media="(min-width:601px)">
                <img class="lazyload" data-src="./images/image6-large.jpg" alt="image 6" >
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
