class Gallery extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="gallery" tabindex="0" aria-label="galery card">
        <div class="myGallery" >
            <img src="/images/image1.jpg" alt="image 1" tabindex="0">
            <div class="description" tabindex="0" aria-label="galery description">
            <h3 tabindex="0">Lorem ipsum dolor sit.</h3>
            <p tabindex="0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat iste architecto excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum incidunt, reiciendis unde adipisci est saepe.</p>
            </div>
        </div>
        <div class="myGallery">
        <img src="/images/image2.jpg" alt="image 2" tabindex="0">
        <div class="description" tabindex="0" aria-label="galery description" >
            <h3 tabindex="0">Lorem ipsum dolor sit.</h3>
            <p tabindex="0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat iste architecto excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum incidunt, reiciendis unde adipisci est saepe.</p>
        </div>
        </div>
        <div class="myGallery" >
            <img src="/images/image3.jpg" alt="image 3" tabindex="0"> 
            <div class="description" tabindex="0" aria-label="galery description" >
            <h3 tabindex="0">Lorem ipsum dolor sit.</h3>
            <p tabindex="0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat iste architecto excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum incidunt, reiciendis unde adipisci est saepe.</p>
            </div>
        </div>
        <div class="myGallery" >
            <img src="/images/image4.jpg" alt="image 4" tabindex="0">
            <div class="description" tabindex="0" aria-label="galery description" >
            <h3 tabindex="0">Lorem ipsum dolor sit.</h3>
            <p tabindex="0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat iste architecto excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum incidunt, reiciendis unde adipisci est saepe.</p>
            </div>
        </div>
        <div class="myGallery">
            <img src="/images/image5.jpg" alt="image 5" tabindex="0">
            <div class="description" tabindex="0" aria-label="galery description">
            <h3 tabindex="0">Lorem ipsum dolor sit.</h3>
            <p tabindex="0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat iste architecto excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum incidunt, reiciendis unde adipisci est saepe.</p>
            </div>
        </div>
        <div class="myGallery">
            <img src="/images/image6.jpg" alt="image 6" tabindex="0">
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
