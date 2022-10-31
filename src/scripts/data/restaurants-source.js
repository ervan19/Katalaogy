import API_ENDPOINT from "../globals/api-endpoint";
import CONFIG from "../globals/config";

class RestaurantsSource {
  static async restaurantsList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT);
    const responseJson = await response.json();

    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async searchRestaurant(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));

    return response.json();
  }

  static async addReview(data) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(API_ENDPOINT.ADD_REVIEW, options);

    const responseJson = await response.json();

    return responseJson;
  }
}

export default RestaurantsSource;
