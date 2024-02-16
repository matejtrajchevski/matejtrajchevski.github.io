let likeCounts = {
    product1: 0,
    product2: 0,
    product3: 0,
    product4: 0,
    product5: 0,
    product6: 0,
    product7: 0,
    product8: 0,
    product9: 0,
};

function toggleLike(productId) {
    likeCounts[productId] += likeCounts[productId] === 0 ? 1 : -1;
    updateLikeCount(productId);
}

function updateLikeCount(productId) {
    const likeCountElement = $('#' + productId + ' .like-count');
    likeCountElement.text(likeCounts[productId]);
}

function submitComment(productId) {
    const commentText = $('#' + productId + ' .comment-text').val();
    if (commentText.trim() !== "") {
        const commentsContainer = $('#' + productId + ' .comments');
        const commentElement = $('<div></div>').text(commentText);
        commentsContainer.append(commentElement);
        $('#' + productId + ' .comment-text').val(""); 
    }
}

function submitSurvey() {
    alert('Survey submitted successfully! Thank you for your feedback.');
}

function buyProduct(productId) {
    const commentSection = $('.order-form');
    if (commentSection.length) {
        console.log('Product number ' + productId);
        commentSection.css('display', 'block'); 
    } else {
        console.error("Comment section for " + productId + " not found.");
    }
}

function youBoughtaProduct(ProductDetails) {
    alert('You bought a product!');
}