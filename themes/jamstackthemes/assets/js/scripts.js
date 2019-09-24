document.querySelectorAll(".filter-title").forEach((title) => {
  title.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('closed');
    e.currentTarget.parentNode.classList.toggle('closed');
  })
})
