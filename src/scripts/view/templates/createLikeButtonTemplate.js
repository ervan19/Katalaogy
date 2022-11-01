const createLikeButtonTemplate = () => ` 
<<<<<<< HEAD
    <button id="likeButton" class="like" >
=======
    <button id="likeButton" class="like" tabindex="0">
>>>>>>> 67b1175 (Configuration sw.js)
         <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
<<<<<<< HEAD
    <button id="likeButton" class="like" >
=======
    <button id="likeButton" class="like" tabindex="0">
>>>>>>> 67b1175 (Configuration sw.js)
         <i class="fa fa-heart" aria-hidden="true"></i>
    </button>

`;

export { createLikeButtonTemplate, createLikedButtonTemplate };
