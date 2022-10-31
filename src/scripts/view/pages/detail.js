import UrlParser from "../../routes/url-parser";
import RestaurantsSource from "../../data/restaurants-source";
import createDetailRestaurantTemplate from "../templates/detailTemplate";
import LikeButtonInitiator from "../../utils/like-button-initiator";
import "../components/reviewForm";

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
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    if (location.hash) {
      setTimeout(function () {
        window.scrollTo(0, 0);
      }, 1);
    }

    const restaurant = await RestaurantsSource.detailRestaurant(url.id);

    const restaurantContainer = document.querySelector(".restaurant");

    restaurantContainer.innerHTML = createDetailRestaurantTemplate(restaurant);

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
