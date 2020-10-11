document.querySelectorAll(".toggle-icon").forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
        toggle.parentNode.parentNode.classList.toggle('closed');
    });
});
