const createReviewTemplate = (restaurant) => `
${restaurant.customerReviews
        .map((review) => {
            return `
        <div class="review_card" tabindex="0">
            <h4 aria-label="Customer Name" >${review.name}</h4>
            <span aria-label="Review date" >${review.date}</span>
            <p aria-label="Review" >${review.review}</p>
        </div>
    `;
        })
        .join(" ")}
`;

export default createReviewTemplate;
