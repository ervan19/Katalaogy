import "../sectionHeading/sectionHeading";
import {createSkeletonRestaurantCard} from "../../templates/createRestaurantCard";

class RestaurantContainer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section id="restaurants">
            <section-heading headingP="Restaurant List" headingH2="Various Restaurant List"></section-heading>
            <article class="card-container">
                ${createSkeletonRestaurantCard(20)}
            </article>
        </section>
    `;
    }
}

customElements.define("restaurant-container", RestaurantContainer);
