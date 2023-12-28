let isLiked = false;
let likeCount = 0;

const likeIcon = document.getElementById('likeIcon');
const likeCountDisplay = document.getElementById('likeCount');

likeIcon.addEventListener('click', function () {
    if (isLiked) {
        likeIcon.classList.remove('glyphicon-heart');
        likeIcon.classList.add('glyphicon-heart-empty');
        likeCount--;
    } else {
        likeIcon.classList.remove('glyphicon-heart-empty');
        likeIcon.classList.add('glyphicon-heart');
        likeCount++;
    }
    isLiked = !isLiked;
    likeCountDisplay.textContent = likeCount;
});