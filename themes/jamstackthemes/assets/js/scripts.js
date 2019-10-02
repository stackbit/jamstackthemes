document.querySelectorAll(".toggle-icon").forEach((title) => {
  title.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('closed');
    e.currentTarget.parentNode.parentNode.classList.toggle('closed');
  })
})



document.addEventListener("DOMContentLoaded", function() {
  tippy('.tooltip', {
    boundary: "window",
    placement: "top-end"
  });
});