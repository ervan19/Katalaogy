import "./reviewForm";

class ReviewContainer extends HTMLElement {
  constructor() {
    super();
    this._review = [];

    this.addEventListener("review-submit", (event) => {
      this._review = event.detail;
      this.render();
    });
  }

  connectedCallback() {
    this._review = JSON.parse(this.getAttribute("review"));
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="review">
    <h3>Customer Review</h3>
    <div class="review_container">
    ${this._review
      .map((review) => {
        return `
        <div class="review_card">
        <h5>${review.name}</h5>
        <span>${review.date}</span>
        <p>${review.review}</p>
        </div>
        `;
      })
      .join(" ")}
    </div>
    </section>
    <form-review></form-review>
    `;
  }
}

customElements.define("review-container", ReviewContainer);
