import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import createNotFoundTemplate from "../templates/createNotFoundTemplate";
import createRestaurantCard from "../templates/createRestaurantCard";

const FavoritePage = {
  async render() {
    return `
        <section id="restaurants">
          <article class="restaurantsHeading">
          <h2 tabindex="0">Your Favorite Restaurants</h2>
          </article>
          <article class="card-container" >
          </article>
        </section>
        `;
  },

  async afterRender() {
    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      const cardContainer = document.querySelector(".card-container");

      if (restaurants.length <= 0) {
        cardContainer.innerHTML = "No Restaurant Favorite";
      }
      restaurants.forEach((restaurant) => {
        cardContainer.innerHTML += createRestaurantCard(restaurant);
      });
    } catch {
      const cardContainer = document.querySelector(".card-container");
      cardContainer.innerHTML = createNotFoundTemplate();
    }
  },
};

export default FavoritePage;
