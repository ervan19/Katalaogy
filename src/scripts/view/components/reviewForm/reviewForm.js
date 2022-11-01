import RestaurantsSource from "../../../data/restaurants-source";
import UrlParser from "../../../routes/url-parser";

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

    this.addEventListener("click", async (event) => {
      event.preventDefault();
      const elementTarget = event.target;
      if (elementTarget.classList.contains("review_form_button")) {
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

  async onSubmitHandler() {
    const review = {
      id: this._id,
      name: this._name,
      review: this._review,
    };

    await RestaurantsSource.addReview(review);
<<<<<<< HEAD
    location.reload();
=======
>>>>>>> 67b1175 (Configuration sw.js)
  }

  render() {
    this.innerHTML = `
<<<<<<< HEAD
    <form >
        <h2>Add Reviews</h2>
        <div class="input_field">
            <label for="name">Name :</label>
=======
    <form tabindex="0" >
        <h2 tabindex="0">Add Reviews</h2>
        <div class="input_field" tabindex="0">
            <label for="name" tabindex="0">Name :</label>
>>>>>>> 67b1175 (Configuration sw.js)
            <input 
            type="text" 
            id="name" 
            name="name" 
            class="form_input_name"
            value="${this._name}"
<<<<<<< HEAD
            placeholder="Your name here.."/>
        </div >
        <div id="review" class="input_field" resize="none">
            <label for="review">Review :</label>
=======
            placeholder="Your name here.."
            tabindex="0"/>
        </div >
        <div id="review" class="input_field" resize="none">
            <label for="review" tabindex="0">Review :</label>
>>>>>>> 67b1175 (Configuration sw.js)
            <textarea 
            name="review" 
            type="text" 
            id="review" 
            class="form_input_review"
            value="${this._review}"
<<<<<<< HEAD
            placeholder="Your review here.."></textarea>
        </div>
        <button type="submit" class="review_form_button">Add Review</button>
=======
            placeholder="Your review here.."
            tabindex="0"></textarea>
        </div>
        <button type="submit" class="review_form_button" tabindex="0">Add Review</button>
>>>>>>> 67b1175 (Configuration sw.js)
    </form>
    `;
  }
}

customElements.define("form-review", ReviewForm);
