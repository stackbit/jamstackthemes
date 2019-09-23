document.querySelectorAll(".filter-title").forEach((title) => {
  title.addEventListener('click', (e) => {
    e.target.classList.toggle('closed');
    e.target.parentNode.classList.toggle('closed');
  })
})
