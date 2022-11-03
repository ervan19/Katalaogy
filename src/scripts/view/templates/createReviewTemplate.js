const createReviewTemplate = (restaurant) => `
    <div class="review_container">
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
    </div>
`;

export default createReviewTemplate;
