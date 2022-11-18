import {createRestaurantCard} from "../../templates/createRestaurantCard";

class FavoriteRestaurantSearchView {
    getTemplate() {
        return `
      <section id="restaurants" class="restaurant-favorite">
        <article class="sectionHeading">
          <h2 tabindex="0">Your Favorite Restaurants</h2>
          <input id="query" type="text" placeholder="Find your favorite restaurants">
        </article>
        <article class="card-container"></article>
      </section>
      `;
    }

    runWhenUserIsSearching(callback) {
        document.getElementById("query").addEventListener("change", (event) => {
            callback(event.target.value);
        });
    }

    showRestaurants(restaurants) {
        this.showFavoriteRestaurants(restaurants);
    }

    showFavoriteRestaurants(restaurants = []) {
        let html;
        if (restaurants.length) {
            html = restaurants.reduce(
                (carry, restaurant) => carry.concat(createRestaurantCard(restaurant)),
                "",
            );
        } else {
            html = this._getEmptyRestaurantTemplate();
        }

        document.querySelector(".card-container").innerHTML = html;
        document
            .querySelector(".card-container")
            .dispatchEvent(new Event("restaurants:updated"));
    }

    _getEmptyRestaurantTemplate() {
        return "<div class=\"restaurant-item__not__found\">No Restaurants to showing</div>";
    }
}

export default FavoriteRestaurantSearchView;
