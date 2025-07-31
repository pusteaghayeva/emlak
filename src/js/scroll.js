// scroll
document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.getElementById("announcementScroll");

    document.querySelector(".scroll-up").addEventListener("click", () => {
      scrollContainer.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    document.querySelector(".scroll-down").addEventListener("click", () => {
      scrollContainer.scrollTo({
        top: scrollContainer.scrollHeight,
        behavior: "smooth"
      });
    });
  });