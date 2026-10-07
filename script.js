const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));
}

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

if (modal && modalImg) {
  document.querySelectorAll("[data-full]").forEach(card => {
    card.addEventListener("click", () => {
      modalImg.src = card.dataset.full;
      modal.classList.add("show");
    });
  });
  function hideModal(){ modal.classList.remove("show"); modalImg.src = ""; }
  if (closeModal) closeModal.addEventListener("click", hideModal);
  modal.addEventListener("click", e => { if(e.target === modal) hideModal(); });
  document.addEventListener("keydown", e => { if(e.key === "Escape") hideModal(); });
}


document.querySelectorAll(".video-play-button").forEach(button => {
  button.addEventListener("click", async () => {
    const box = button.closest(".video-box, .video-media");
    const video = box?.querySelector(".video-player");
    if (!box || !video) return;
    box.classList.add("is-playing");
    try {
      await video.play();
    } catch (error) {
      
    }
  });
});
