import CONFIG from "../../globals/config";

const createDetailRestaurantTemplate = (restaurant) => `
    
    <div class="restaurant_">
<<<<<<< HEAD
    <h2 class="restaurant_name">${restaurant.name}</h2>
      <img class="resturant_picture" src="${
        CONFIG.BASE_IMAGE_URL + restaurant.pictureId
      }" alt="${restaurant.name}"/>
=======
    <h2 class="restaurant_name" tabindex="0">${restaurant.name}</h2>
      <img class="resturant_picture" src="${
        CONFIG.BASE_IMAGE_URL + restaurant.pictureId
      }" alt="${restaurant.name}" tabindex="0" aria-label="Restaurant image"/>
>>>>>>> 67b1175 (Configuration sw.js)
    </div>
    </div>
      <div class="restaurant_info">
      <div id="info">
<<<<<<< HEAD
      <h3>Information</h3>
      <h4>Address</h4>
      <p>${restaurant.address}, ${restaurant.city}</p>
      <h4>Category</h4>
      <p>${restaurant.categories
=======
      <h3 tabindex="0">Information</h3>
      <h4 tabindex="0">Address</h4>
      <p tabindex="0">${restaurant.address}, ${restaurant.city}</p>
      <h4 tabindex="0">Category</h4>
      <p tabindex="0">${restaurant.categories
>>>>>>> 67b1175 (Configuration sw.js)
        .map((category) => {
          return category.name;
        })
        .join(" | ")}</p>
<<<<<<< HEAD
      <h4>Rating</h4>
        <p class="restaurant_rating">${restaurant.rating}  
=======
      <h4 tabindex="0">Rating</h4>
        <p class="restaurant_rating" tabindex="0">${restaurant.rating}  
>>>>>>> 67b1175 (Configuration sw.js)
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
          </svg>
        </span>
      </div>
<<<<<<< HEAD
      <div id="menu">
      <h3>Menus</h3>
      <section>
        <div>
          <h4 class="menu">Foods</h4>
          <ul>
=======
      <div id="menu" >
      <h3 tabindex="0">Menus</h3>
      <section>
        <div>
          <h4 class="menu" tabindex="0">Foods</h4>
          <ul tabindex="0">
>>>>>>> 67b1175 (Configuration sw.js)
          ${restaurant.menus.foods
            .map((food) => {
              return `<li>| ${food.name}</li>`;
            })
            .join(" ")}
          </ul>
<<<<<<< HEAD
      </div>
      <div>
        <h4 class="menu">Drinks</h4>
        <ul>
        ${restaurant.menus.drinks
          .map((drink) => {
            return `<li>| ${drink.name}</li>`;
          })
          .join(" ")}
        </ul>
      </div>
    </section>
      </div>
=======
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
>>>>>>> 67b1175 (Configuration sw.js)
    </p>
  </div>

  <section id="description">
<<<<<<< HEAD
  <h3>Description</h3>
  <p>${restaurant.description}</p>

  </section>

  <section id="review">
    <h3>Customer Review</h3> 
=======
  <h3 tabindex="0">Description</h3>
  <p tabindex="0">${restaurant.description}</p>
  </section>

  <section id="review">
    <h3 tabindex="0">Customer Review</h3> 
>>>>>>> 67b1175 (Configuration sw.js)
    <div class="review_container">
    ${restaurant.customerReviews
      .map((review) => {
        return `
<<<<<<< HEAD
        <div class="review_card">
        <h5>${review.name}</h5>
        <span>${review.date}</span>
        <p>${review.review}</p>
=======
        <div class="review_card" tabindex="0">
          <h5 >${review.name}</h5>
          <span >${review.date}</span>
          <p >${review.review}</p>
>>>>>>> 67b1175 (Configuration sw.js)
        </div>
      `;
      })
      .join(" ")}
      </div>
  </section>

`;

export default createDetailRestaurantTemplate;
