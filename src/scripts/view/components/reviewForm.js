import RestaurantsSource from "../../data/restaurants-source";
import UrlParser from "../../routes/url-parser";

class ReviewForm extends HTMLElement {
  constructor() {
    super();
    this._id = UrlParser.parseActiveUrlWithoutCombiner().id;
    this._name = "";
    this._review = "";

    this.addEventListener("change", (event) => {
      const elementTarget = event.target;
      if (elementTarget.classList.contains("form_input_name")) {
        this.onNameChangeHandler(event);
      } else if (elementTarget.classList.contains("form_input_review")) {
        this.onReviewChangeHandler(event);
      }
    });

    this.addEventListener("submit", async (event) => {
      event.preventDefault();
      const elementTarget = event.target;
      if (elementTarget.classList.contains("review_form")) {
        await this.onSubmitHandler();
      }
    });
  }

  connectedCallback() {
    this.render();
  }

  onNameChangeHandler(event) {
    const { value } = event.target;
    this._name = value;
  }

  onReviewChangeHandler(event) {
    const { value } = event.target;
    this._review = value;
  }

  async updatePostReview(restaurantID) {
    const restaurantDataUpdate = await RestaurantsSource.detailRestaurant(
      restaurantID
    );

    return restaurantDataUpdate;
  }

  async dispatchReviewSubmitEvent(updatedPostReview) {
    this.dispatchEvent(
      new CustomEvent("review-submit", {
        bubbles: true,
        detail: updatedPostReview.restaurant.customerReviews,
      })
    );
  }

  async onReviewSubmit(review) {
    try {
      await RestaurantsSource.addReview(review).then(async () => {
        const reviewUpdate = await this.updatePostReview(this._id);
        const dispatchSubmit = await this.dispatchReviewSubmitEvent(
          reviewUpdate
        );

        return dispatchSubmit;
      });
    } catch (err) {
      console.log(err);
    }

    this._name = "";
    this._review = "";
  }

  async onSubmitHandler() {
    const review = {
      id: this._id,
      name: this._name,
      review: this._review,
    };

    await RestaurantsSource.addReview(review);
    location.reload();
  }

  render() {
    this.innerHTML = `
    <form class="review_form">
        <h2>Add Reviews</h2>
        <div class="input_field">
            <label for="name">Name :</label>
            <input 
            type="text" 
            id="name" 
            name="name" 
            class="form_input_name"
            value="${this._name}"
            placeholder="Your name here.."/>
        </div >
        <div id="review" class="input_field" resize="none">
            <label for="review">Review :</label>
            <textarea 
            name="review" 
            type="text" 
            id="review" 
            class="form_input_review"
            value="${this._review}"
            placeholder="Your review here.."></textarea>
        </div>
        <button type="submit">Add Review</button>
    </form>
    `;
  }
}

customElements.define("form-review", ReviewForm);
