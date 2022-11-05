const createLikeButtonTemplate = () => ` 
    <button id="likeButton" class="like" tabindex="0" aria-label="Like button">
         <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button id="likeButton" class="like" tabindex="0" aria-label="Unlike button">
         <i class="fa fa-heart" aria-hidden="true"></i>
    </button>

`;

export {createLikeButtonTemplate, createLikedButtonTemplate};
