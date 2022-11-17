import FavoriteRestaurantSearchView from "../src/scripts/view/pages/liked-restaurants/favorite-restaurant-search-view";
import FavoriteRestaurantShowPresenter from "../src/scripts/view/pages/liked-restaurants/favorite-restaurant-show-presenter";
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";

describe("Showing all favorite restaurants", () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe("When no restaurants have been liked", () => {
    it("should show the information that no restaurants have been liked", (done) => {
      document
        .querySelector(".card-container")
        .addEventListener("restaurants:updated", () => {
          expect(
            document.querySelectorAll(".restaurant-item__not__found").length
          ).toEqual(1);

          done();
        });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurants.getAllRestaurants.and.returnValues([]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });

    it("should ask for the favorite restaurants", () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });
  });

  describe("When favorite restaurants exist", () => {
    it("should show the restaurants", (done) => {
      document
        .querySelector(".card-container")
        .addEventListener("restaurants:updated", () => {
          expect(document.querySelectorAll(".card").length).toEqual(2);
          done();
        });

      const favoriteRestaurants = spyOnAllFunctions(
        FavoriteRestaurantIdb,
        false
      );

      favoriteRestaurants.getAllRestaurants.and.returnValue([
        {
          id: 11,
          name: "A",
          pictureId: "2234",
          description: "It's restaurant A",
          rating: "5",
          city: "Bandung",
        },
        {
          id: 22,
          name: "B",
          pictureId: "3345",
          description: "It's restaurant B",
          rating: "5",
          city: "Garut",
        },
      ]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});
