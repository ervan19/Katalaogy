import RestaurantsSource from "../../data/restaurants-source";
import "../components/gallery/gallery";
import "../components/hero/hero";
import "../components/jumbotron/jumbotron";
import createRestaurantCard from "../templates/createRestaurantCard";

const HomePage = {
  async render() {
    return `
      <hero-element></hero-element>
      <jumbotron-element></jumbotron-element>
      <section id="foodGallery">
        <div class="galleryHeading">
          <p tabindex="0">Food Gallery</p>
          <h2 tabindex="0">Various Food Galleries</h2>
        </div>
        <gallery-resto></gallery-resto>a
      </section>

      <section id="restaurants">
          <article class="restaurantsHeading">
          <p tabindex="0">Restaurant List</p>
          <h2 tabindex="0">Various Restaurant List</h2>
          </article>
          <article class="card-container" >
          </article>
      </section>
    `;
  },

  async afterRender() {
    const cardContainer = document.querySelector(".card-container");

    const restaurants = await RestaurantsSource.restaurantsList();
    restaurants.forEach((restaurant) => {
      cardContainer.innerHTML += createRestaurantCard(restaurant);
    });

    const myGalleries = document.querySelectorAll(".description");
    myGalleries.forEach((gallery) => {
      gallery.addEventListener("click", () => {
        gallery.classList.toggle("swipe");
      });
    });
  },
};

export default HomePage;
