const assert = require("assert");

Feature("Liking Restaurants");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked restaurants", ({ I }) => {
  I.seeElement("#query");
  I.see("No Restaurants to showing", ".restaurant-item__not__found");
});

Scenario("liking one restaurant", async ({ I }) => {
  I.see("No Restaurants to showing", ".restaurant-item__not__found");

  I.amOnPage("/");

  I.waitForElement(".detailBtn_container", 10);

  const firstRestaurant = locate(".restaurant-name").first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(locate(".detailBtn_container").first());

  I.waitForElement("#likeButton", 10);
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.waitForElement(".card", 10);
  const likedRestaurantName = await I.grabTextFrom(".restaurant-name");

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario("searching restaurant", async ({ I }) => {
  I.see("No Restaurants to showing", ".restaurant-item__not__found");

  I.amOnPage("/");

  I.waitForElement(".detailBtn_container", 10);

  const names = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate(".detailBtn_container").at(i));
    I.waitForElement("#likeButton", 10);
    I.click("#likeButton");
    I.waitForElement(".restaurant-name", 10);
    names.push(await I.grabTextFrom(".restaurant-name"));
    I.amOnPage("/");
  }

  I.amOnPage("/#/favorite");
  I.seeElement("#query");

  const searchQuery = names[1].substring(1, 3);
  const matchingRestaurants = names.filter(
    (name) => name.indexOf(searchQuery) !== -1
  );

  I.fillField("#query", searchQuery);
  I.pressKey("Enter");

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements(".card");
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

  matchingRestaurants.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(
      locate(".restaurant-name").at(index + 1)
    );
    assert.strictEqual(name, visibleName);
  });
});
