import CONFIG from "../../globals/config";
import "../components/reviewForm/reviewForm";

const createDetailRestaurantTemplate = (restaurant) => `
    
    <div class="restaurant_">
    <h2 class="restaurant-name" tabindex="0">${restaurant.name}</h2>
    <picture>
          <source srcset="${
    CONFIG.BASE_IMAGE_URL + "small/" + restaurant.pictureId
}" type="image/webp" media="all and (max-width:600px)">
          <source srcset="${
    CONFIG.BASE_IMAGE_URL + "small/" + restaurant.pictureId
}" type="image/jpeg" media="all and max-width:600px)">
          <source srcset="${
    CONFIG.BASE_IMAGE_URL + "medium/" + restaurant.pictureId
}" type="image/webp" media="all and (min-width:601px) and (max-width:964px)">
          <source srcset="${
    CONFIG.BASE_IMAGE_URL + "medium/" + restaurant.pictureId
}" type="image/jpeg" media="all and (min-width:601px) and (max-width:964px)">
           <source srcset="${
    CONFIG.BASE_IMAGE_URL + "large/" + restaurant.pictureId
}" type="image/jpeg" media="all and (min-width:964px)">
          <source srcset="${
    CONFIG.BASE_IMAGE_URL + "large/" + restaurant.pictureId
}" type="image/jpeg" media="all and (min-width:964px)">
          <img class="lazyload" data-src="${
    CONFIG.BASE_IMAGE_URL + "large/" + restaurant.pictureId
}" alt="${restaurant.name}"/>
        </picture>
    </div>
    </div>
      <div class="restaurant_info">
      <div id="info">
      <h3 tabindex="0">Information</h3>
      <h4 tabindex="0">Address</h4>
      <p tabindex="0">${restaurant.address}, ${restaurant.city}</p>
      <h4 tabindex="0">Category</h4>
      <p tabindex="0">${restaurant.categories
        .map((category) => {
            return category.name;
        })
        .join(" | ")}</p>
      <h4 tabindex="0">Rating</h4>
        <p class="restaurant_rating" tabindex="0">${restaurant.rating}  
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
          </svg>
        </span>
      </div>
      <div id="menu" >
      <h3 tabindex="0">Menus</h3>
      <section>
        <div>
          <h4 class="menu" tabindex="0">Foods</h4>
          <ul tabindex="0">
          ${restaurant.menus.foods
        .map((food) => {
            return `<li>| ${food.name}</li>`;
        })
        .join(" ")}
          </ul>
        </div>
        <div>
          <h4 class="menu" tabindex="0">Drinks</h4>
          <ul tabindex="0">
          ${restaurant.menus.drinks
        .map((drink) => {
            return `<li>| ${drink.name}</li>`;
        })
        .join(" ")}
          </ul>
        </div>
    </section>
    </div>
    </p>
  </div>

  <section id="description">
  <h3 tabindex="0">Description</h3>
  <p tabindex="0">${restaurant.description}</p>
  </section>

  <section id="review" aria-label="Customer Review Container">
    <h3 tabindex="0">Customer Review</h3> 
    <div class="review_container"></div>
  </section>
  <review-form></review-form>

`;

export default createDetailRestaurantTemplate;
