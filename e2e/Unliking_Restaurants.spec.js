const assert = require("assert");

Feature("Unliking Restaurants");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("unliking one restraurant", async ({ I }) => {
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

  I.click(".detailBtn_container");
  I.waitForElement("#likeButton", 10);
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
});
