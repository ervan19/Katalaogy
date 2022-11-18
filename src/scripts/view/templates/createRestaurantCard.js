import CONFIG from "../../globals/config";

const createRestaurantCard = (restaurant) =>
    `
  <div class="card" id=${
    restaurant.id
} tabindex="0" aria-label="restaurant card">
  <div class="rate" aria-label="restaurant-rating" tabindex="0">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
        </svg>
      </span>
      <p tabindex="0">${restaurant.rating || "-"}</p>
    </div>
      <div class="card-image">
        <picture>
          <source srcset="${
    CONFIG.BASE_IMAGE_URL + "small/" + restaurant.pictureId
}" type="image/webp" media="all and (max-width:450px)">
          <source srcset="${
    CONFIG.BASE_IMAGE_URL + "small/" + restaurant.pictureId
}" type="image/jpeg" media="all and max-width:450px)">
          <source srcset="${
    CONFIG.BASE_IMAGE_URL + "medium/" + restaurant.pictureId
}" type="image/webp" media="all and (min-width:451px) and (max-width:964px)">
          <source srcset="${
    CONFIG.BASE_IMAGE_URL + "medium/" + restaurant.pictureId
}" type="image/jpeg" media="all and (min-width:451px) and (max-width:964px)">
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
      <div class="content-container">
        <div class="text-content">
          <h3 class="restaurant-name" tabindex="0">${
    restaurant.name || "-"
}</h3>
          <p tabindex="0">${restaurant.description || "-"}</p>
        </div>
        <div class="card-footer">
          <div class="location" aria-label="city" tabindex="0">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </span>
            <p tabindex="0" >${restaurant.city || "-"}</p>
          </div>
          <a href="#/detail/${
    restaurant.id
}" class="detailBtn_container">Detail  <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            </span>
          </a>
        </div>
      </div>
  </div>
  `;

const createSkeletonRestaurantCard = (count) => {
    let template = "";

    for (let i = 0; i < count; i += 1) {
        template += `
    <div class="card" tabindex="0" aria-label="restaurant card">
    <div class="rate" aria-label="restaurant-rating" tabindex="0">
        <p class="skeleton" tabindex="0">Lorem Rating</p>
      </div>
        <div class="card-image">
          <img src="./images/placeholder-large.jpg" alt="skeleton" width="100%" height="350px" >
        </div>
        <div class="content-container">
          <div class="text-content">
            <h3 class="skeleton" tabindex="0">Lorem Color</h3>
            <p class="skeleton" tabindex="0">Lorem ipsum color sit amet lorem ipsum color sit amet</p>
          </div>
          <div class="card-footer">
            <div class="location" aria-label="city" tabindex="0">
              <p class="skeleton" tabindex="0" >Lorem</p>
            </div>
            <p class="skeleton_btn">Lorem ipsum</p>
          </div>
        </div>
    </div>
    `;
    }

    return template;
};
export {createRestaurantCard, createSkeletonRestaurantCard};
