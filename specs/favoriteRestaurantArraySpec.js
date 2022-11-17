import { itActsAsFavoriteRestaurantModel } from "./contract/favoriteRestaurantContract";

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find((restaurant) => restaurant.id == id);
  },

  getAllRestaurants() {
    return favoriteRestaurants;
  },

  putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty("id")) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurants
    if (this.getRestaurant(restaurant.id)) {
      return;
    }

    favoriteRestaurants.push(restaurant);
  },

  deleteRestaurant(id) {
    favoriteRestaurants = favoriteRestaurants.filter(
      (restaurant) => restaurant.id != id
    );
  },

  searchRestaurants(query) {
    return this.getAllRestaurants().filter((restaurant) => {
      const loweredCaseRestaurantName = (restaurant.name || "-").toLowerCase();
      const jammedRestaurantName = loweredCaseRestaurantName.replace(/\s/g, "");
      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, "");
      return jammedRestaurantName.indexOf(jammedQuery) !== -1;
    });
  },
};

describe("Favorite Restaurants Array Contract Test Implementation", () => {
  afterEach(() => (favoriteRestaurants = []));

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
