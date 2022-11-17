import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";
import * as TestFactories from "./helper/testFactories";

describe("Unliking A Restaurant", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("should display unlike widget when the restaurant has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="Unlike restaurant"]')
    ).toBeTruthy();
  });

  it("should not display like widget when the restaurant has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="Like restaurant"]')
    ).toBeFalsy();
  });

  it("should be able to remove liked movie from the list", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    document
      .querySelector('[aria-label="Unlike restaurant"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it("should not throw error if the unliked restaurant is not in the list", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document
      .querySelector('[aria-label="Unlike restaurant"]')
      .dispatchEvent(new Event("click"));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
