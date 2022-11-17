const assert = require("assert");

Feature("Post Review");

Scenario("post new review for one restaurant", async ({ I }) => {
  I.amOnPage("/");
  I.waitForElement(".detailBtn_container", 10);

  const firstRestaurant = locate(".restaurant-name").first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(locate(".detailBtn_container").first());

  I.waitForElement("#review", 10);
  const detailRestaurantName = await I.grabTextFrom(".restaurant-name");
  assert.strictEqual(firstRestaurantName, detailRestaurantName);

  I.fillField(".form_input_name", "Halo");
  I.fillField(".form_input_review", "Makannya enak");

  I.click(".submitBtn_review");
});
