document.querySelectorAll(".theme").forEach((theme) => {
  theme.addEventListener('click', (e) => {
    const card = e.target.parentNode.parentNode
    const themeName = card.getAttribute('data-name')
    const event = {
      theme: themeName,
      category: 'Themes',
      label: themeName,
    }
    if (themeName && event) {
      analytics.track("Theme Clicked", event);
    }
  })
})
