import RestaurantsSource from "../../data/restaurants-source";
import "../components/hero/hero";
import "../components/galleryContainer/galleryContainer";
import "../components/restaurantContainer/restaurantContainer";
import createRestaurantCard from "../templates/createRestaurantCard";
import "../components/jumbotron/jumbotron";

const HomePage = {
    async render() {
        return `
      <hero-element></hero-element>
      <jumbotron-element></jumbotron-element>
      <gallery-container></gallery-container>
      <restaurant-container></restaurant-container>
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
