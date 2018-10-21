var shareImageButton = document.querySelector("#share-image-button");
var createPostArea = document.querySelector("#create-post");
var closeCreatePostModalButton = document.querySelector(
  "#close-create-post-modal-btn"
);

function openCreatePostModal() {
  createPostArea.style.display = "block";

  // 觸發添加到主畫面事件
  if (defaultPrompt) {
    defaultPrompt.prompt();
    defaultPrompt.userChoice.then(choiceResult => {
      // 如果用戶拒絕添加
      if (choiceResult.outcome === "dismissed") {
        console.log("用戶拒絕安裝到主畫面");
      } else {
        console.log("用戶同意安裝到主畫面");
      }
    });
    defaultPrompt = null;
  }
}

function closeCreatePostModal() {
  createPostArea.style.display = "none";
}

shareImageButton.addEventListener("click", openCreatePostModal);

closeCreatePostModalButton.addEventListener("click", closeCreatePostModal);
