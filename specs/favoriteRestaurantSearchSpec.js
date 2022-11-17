import FavoriteRestaurantSearchPresenter from "../src/scripts/view/pages/liked-restaurants/favorite-restaurant-search-presenter";
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";
import FavoriteRestaurantSearchView from "../src/scripts/view/pages/liked-restaurants/favorite-restaurant-search-view";

describe("Searching restaurants", () => {
  let presenter;
  let favoriteRestaurants;
  let view;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById("query");
    queryElement.value = query;
    queryElement.dispatchEvent(new Event("change"));
  };

  const setRestaurantSearchContainer = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurants,
      view,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  describe("When query is not empty", () => {
    it("should be able to capture the query typed by the user", () => {
      searchRestaurants("restaurant a");

      expect(presenter.latestQuery).toEqual("restaurant a");
    });

    it("should ask the model to search for liked restaurants", () => {
      searchRestaurants("restaurant a");

      expect(favoriteRestaurants.searchRestaurants).toHaveBeenCalledWith(
        "restaurant a"
      );
    });

    it("should show the restaurants found by Favorite Restaurants", (done) => {
      document
        .querySelector(".card-container")
        .addEventListener("restaurants:updated", () => {
          expect(document.querySelectorAll(".card").length).toEqual(3);

          done();
        });

      favoriteRestaurants.searchRestaurants
        .withArgs("restaurant a")
        .and.returnValues([
          { id: 111, name: "restaurant abdul" },
          { id: 222, name: "ada juga restaurant abah" },
          { id: 333, name: "ini juga boleh restaurant akang" },
        ]);

      searchRestaurants("restaurant a");
    });

    it("should show the name of the restaurants found by Favorite Restaurants", (done) => {
      document
        .querySelector(".card-container")
        .addEventListener("restaurants:updated", () => {
          const restaurantNames = document.querySelectorAll(".restaurant-name");

          expect(restaurantNames.item(0).textContent).toEqual(
            "restaurant abdul"
          );
          expect(restaurantNames.item(1).textContent).toEqual(
            "ada juga restaurant abah"
          );
          expect(restaurantNames.item(2).textContent).toEqual(
            "ini juga boleh restaurant akang"
          );

          done();
        });

      favoriteRestaurants.searchRestaurants
        .withArgs("restaurant a")
        .and.returnValues([
          { id: 111, name: "restaurant abdul" },
          { id: 222, name: "ada juga restaurant abah" },
          { id: 333, name: "ini juga boleh restaurant akang" },
        ]);

      searchRestaurants("restaurant a");
    });

    it("should show - when the restaurant returned does not contain a name ", (done) => {
      document
        .querySelector(".card-container")
        .addEventListener("restaurants:updated", () => {
          const restaurantNames = document.querySelectorAll(".restaurant-name");
          expect(restaurantNames.item(0).textContent).toEqual("-");

          done();
        });

      favoriteRestaurants.searchRestaurants
        .withArgs("restaurant a")
        .and.returnValues([{ id: 111 }]);

      searchRestaurants("restaurant a");
    });
  });

  describe("When query is empty", () => {
    it("should capture the query as empty", () => {
      searchRestaurants(" ");
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants(" ");
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants("  ");
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants("");
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants("\t");
      expect(presenter.latestQuery.length).toEqual(0);
    });

    it("should show all favorite restaurants", () => {
      searchRestaurants("   ");

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalled();
    });
  });

  describe("When no favorite restaurants could be found", () => {
    it("should show the empty message", (done) => {
      document
        .querySelector(".card-container")
        .addEventListener("restaurants:updated", () => {
          expect(
            document.querySelectorAll(".restaurant-item__not__found").length
          ).toEqual(1);

          done();
        });

      favoriteRestaurants.searchRestaurants
        .withArgs("restaurant a")
        .and.returnValues([]);

      searchRestaurants("restaurant a");
    });

    it("should not show any movie", (done) => {
      document
        .querySelector(".card-container")
        .addEventListener("restaurants:updated", () => {
          expect(document.querySelectorAll(".card").length).toEqual(0);

          done();
        });

      favoriteRestaurants.searchRestaurants
        .withArgs("restaurant a")
        .and.returnValues([]);

      searchRestaurants("restaurant a");
    });
  });
});
