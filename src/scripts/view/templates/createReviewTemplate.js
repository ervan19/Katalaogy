const createReviewTemplate = (restaurant) => `
${restaurant.customerReviews
        .map((review) => {
            return `
        <div class="review_card" tabindex="0">
            <h5 >${review.name}</h5>
            <span >${review.date}</span>
            <p >${review.review}</p>
        </div>
    `;
        })
        .join(" ")}
`;

export default createReviewTemplate;
