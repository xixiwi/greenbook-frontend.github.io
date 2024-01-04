const likeIcons = document.querySelectorAll(".like-icon");
      const likeCounts = document.querySelectorAll(".like-count");

      likeIcons.forEach((likeIcon, index) => {
        let isLiked = false;
        let likeCount = parseInt(likeCounts[index].textContent);

        likeIcon.addEventListener("click", function () {
          if (isLiked) {
            likeIcon.classList.remove("glyphicon-heart");
            likeIcon.classList.add("glyphicon-heart-empty");
            likeCount--;
          } else {
            likeIcon.classList.remove("glyphicon-heart-empty");
            likeIcon.classList.add("glyphicon-heart");
            likeCount++;
          }
          isLiked = !isLiked;
          likeCounts[index].textContent = likeCount;
        });
      });