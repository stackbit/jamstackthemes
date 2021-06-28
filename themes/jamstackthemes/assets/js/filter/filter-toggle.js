document.querySelectorAll(".toggle-icon").forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
        toggle.parentNode.parentNode.classList.toggle('closed');
    });
});

document.querySelectorAll(".toggle-more").forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
        toggle.parentNode.classList.toggle('closed');
    });
});
