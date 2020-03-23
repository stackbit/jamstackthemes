function toggleFilterList(element) {
  // Check aria-expanded state
  const pressed = (element.getAttribute("aria-expanded") === "true");
  element.setAttribute("aria-expanded", !pressed);
  element.classList.toggle('closed');
  element.parentNode.parentNode.classList.toggle('closed');
}

document.querySelectorAll(".toggle-icon").forEach((toggleIcon) => {
  toggleIcon.addEventListener('click', (e) => {
    toggleFilterList(e.currentTarget);
  })
  toggleIcon.addEventListener('keydown', (e) => {
    if (e.key === " " || e.key === "Enter" || e.key === "Spacebar") { // "Spacebar" for IE11 support
      // Prevent the default action to stop scrolling when space is pressed
      e.preventDefault();
      toggleFilterList(event.target);
    }
  })
})

// document.addEventListener("DOMContentLoaded", function() {
//   tippy('.tooltip', {
//     boundary: "window",
//     placement: "top-end"
//   });
// });

// jQuery(document).ready(function() {
//   jQuery("time.timeago").timeago();
// });
