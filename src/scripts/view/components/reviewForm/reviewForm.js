import RestaurantsSource from "../../../data/restaurants-source";
import UrlParser from "../../../routes/url-parser";
import createReviewTemplate from "../../templates/createReviewTemplate";

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
        const {value} = event.target;
        this._name = value;
    }

    onReviewChangeHandler(event) {
        const {value} = event.target;
        this._review = value;
    }

    async onSubmitHandler() {
        const review = {
            id: this._id,
            name: this._name,
            review: this._review,
        };

        const responseReview = await RestaurantsSource.addReview(review);

        const reviewContainer = document.querySelector(".review_container");

        reviewContainer.innerHTML = createReviewTemplate(responseReview);
        document.querySelector(".form_input_name").value = "";
        document.querySelector(".form_input_review").value = "";
    }

    render() {
        this.innerHTML = `
    <form tabindex="0" class="review_form" >
        <h2 tabindex="0">Add Reviews</h2>
        <div class="input_field" tabindex="0" aria-label="Name Field Input">
            <label for="name" tabindex="0">Name :</label>
            <input 
            type="text" 
            id="name" 
            name="name" 
            class="form_input_name"
            value="${this._name}"
            placeholder="Your name here.."
            tabindex="0"
            required/>
        </div >
        <div id="review" class="input_field" aria-label="Review Field Input">
            <label for="review" tabindex="0">Review :</label>
            <textarea 
            name="review" 
            type="text" 
            id="review" 
            class="form_input_review"
            value="${this._review}"
            placeholder="Your review here.."
            tabindex="0"
            resize="none"
            required></textarea>
        </div>
        <button type="submit" tabindex="0">Add Review</button>
    </form>
    `;
    }
}

customElements.define("form-review", ReviewForm);
