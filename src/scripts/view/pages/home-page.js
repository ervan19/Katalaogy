import RestaurantsSource from "../../data/restaurants-source";
import "../components/gallery/gallery";
import createRestaurantCard from "../templates/createRestaurantCard";

const HomePage = {
  async render() {
    return `
    <div class="hero" tabindex="0" aria-label="Hero Image ">
        <h1 tabindex="0">Find your Favorite <br><span>Restaurant catalog</span> in Katalaogy</h1>
    </div>
    <section id="jumbotron" >
        <article>
            <h2  tabindex="0">We help you find a variety of <span>unique and interesting</span> restaurants as a reference for you</h2>
            <p  tabindex="0">Providing complete information about restaurants is our job. You just need to choose which restaurant suits you.</p>
            <a href="#restaurants" tabindex="0">Find Restaurant</a>
         </article>
         <aside class="jumbotron-image">
            <span>
            <img src="/images/Jumbotron.jpg" alt="Dua orang sedang bersalaman" tabindex="0">
            </span>
         </aside>
    </section>

  <section id="foodGallery">
    <div class="galleryHeading">
      <p tabindex="0">Food Gallery</p>
      <h2 tabindex="0">Various Food Galleries</h2>
    </div>
    <gallery-resto></gallery-resto>
  </section>

    <section id="restaurants">
        <article class="restaurantsHeading">
        <p tabindex="0">Restaurant List</p>
        <h2 tabindex="0">Various Restaurant List</h2>
        </article>
        <article class="card-container" >
        </article>
    </section>
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
