import UrlParser from "../../routes/url-parser";
import RestaurantsSource from "../../data/restaurants-source";
import createDetailRestaurantTemplate from "../templates/createDetailRestaurantTemplate";
import LikeButtonInitiator from "../../utils/like-button-initiator";
import "../components/reviewForm/reviewForm";
import createReviewTemplate from "../templates/createReviewTemplate";

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant" autoscroll="true">
        <p>loading</p>
      </div>
      <form-review></form-review>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    let fontAwesomeScriptElement = document.querySelector(
      'script[src="https://kit.fontawesome.com/dc1bf0123a.js"]'
    );

    if (!fontAwesomeScriptElement) {
      fontAwesomeScriptElement = document.createElement("script");
      fontAwesomeScriptElement.src =
        "https://kit.fontawesome.com/dc1bf0123a.js";
      document.body.appendChild(fontAwesomeScriptElement);
    }

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    if (location.hash) {
      setTimeout(function () {
        window.scrollTo(0, 0);
      }, 1);
    }

    const restaurant = await RestaurantsSource.detailRestaurant(url.id);

    const restaurantContainer = document.querySelector(".restaurant");

    restaurantContainer.innerHTML = createDetailRestaurantTemplate(restaurant);

    const review = document.querySelector("#review");
    review.innerHTML = createReviewTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
        rating: restaurant.rating,
        city: restaurant.city,
      },
    });
  },
};

export default Detail;
