const searchInput = document.querySelector("#video-search");
const categoryButtons = document.querySelectorAll(".category-button");
const videoCards = document.querySelectorAll(".video-card");
const noResultsMessage = document.querySelector(".no-results");
const videoCount = document.querySelector(".video-count");

let selectedCategory = "all";

function showMatchingVideos() {
  const searchText = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  videoCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const category = card.dataset.category.toLowerCase();

    // An empty search matches every title.
    const matchesSearch = searchText === "" || title.includes(searchText);
    const matchesCategory =
      selectedCategory === "all" || category === selectedCategory;
    const shouldShow = matchesSearch && matchesCategory;

    card.hidden = !shouldShow;

    if (shouldShow) {
      visibleCount += 1;
    }
  });

  noResultsMessage.hidden = visibleCount > 0;
  videoCount.textContent =
    `${visibleCount} ${visibleCount === 1 ? "video" : "videos"}`;
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.category.toLowerCase();

    categoryButtons.forEach((categoryButton) => {
      const isSelected = categoryButton === button;
      categoryButton.classList.toggle("active", isSelected);
      categoryButton.setAttribute("aria-pressed", isSelected);
    });

    showMatchingVideos();
  });
});
// Give each video its own like button and count.
document.querySelectorAll(".like-button").forEach((button) => {
  button.addEventListener("click", () => {
    const isLiked = button.getAttribute("aria-pressed") === "true";
    const countLabel = button.querySelector(".like-count");
    const likeIcon = button.querySelector(".like-icon");
    const currentCount = Number(countLabel.textContent);
    const nextCount = isLiked ? currentCount - 1 : currentCount + 1;

    // Update only the button that was clicked.
    button.setAttribute("aria-pressed", String(!isLiked));
    button.classList.toggle("liked", !isLiked);
    button.setAttribute(
      "aria-label",
      isLiked ? "Like this video" : "Unlike this video"
    );
    countLabel.textContent = String(nextCount);
    likeIcon.textContent = isLiked ? "♡" : "♥";
  });
});
const welcomeSection = document.querySelector(".welcome");
const videoSection = document.querySelector(".video-section");
const videoViewer = document.querySelector(".video-viewer");
const viewerTitle = document.querySelector(".viewer-title");
const viewerCreator = document.querySelector(".viewer-creator");
const viewerDescription = document.querySelector(".viewer-description");
const viewerPlayer = document.querySelector(".viewer-player");
const backButton = document.querySelector(".back-button");

let previouslyFocusedCard = null;
// Show the viewer and fill it with details from the chosen card.
function openVideo(card) {
  previouslyFocusedCard = card;
  viewerTitle.textContent = card.querySelector("h3").textContent;
  viewerCreator.textContent = card.querySelector(".creator").textContent;
  viewerDescription.textContent = card.dataset.description;

  welcomeSection.hidden = true;
  videoSection.hidden = true;
  videoViewer.hidden = false;

  videoViewer.scrollIntoView({ behavior: "smooth", block: "start" });
  viewerTitle.focus({ preventScroll: true });
}

// Clicking a card opens it; clicking its like button only likes the video.
videoCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    if (event.target.closest(".like-button")) {
      return;
    }

    openVideo(card);
  });

  // Enter or Space also opens a card when it has keyboard focus.
  card.addEventListener("keydown", (event) => {
    if (
      event.target === card &&
      (event.key === "Enter" || event.key === " ")
    ) {
      event.preventDefault();
      openVideo(card);
    }
  });
});

// Stop playback and return to the video grid.
backButton.addEventListener("click", () => {
  viewerPlayer.pause();
  viewerPlayer.currentTime = 0;

  videoViewer.hidden = true;
  welcomeSection.hidden = false;
  videoSection.hidden = false;

  videoSection.scrollIntoView({ behavior: "smooth", block: "start" });

  if (previouslyFocusedCard) {
    previouslyFocusedCard.focus({ preventScroll: true });
  }
});

searchInput.addEventListener("input", showMatchingVideos);

// Show all videos when the page first loads.
showMatchingVideos();