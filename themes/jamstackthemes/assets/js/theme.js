document.querySelectorAll(".theme-detail").forEach((theme) => {
    const themeName = theme.getAttribute('data-name');
    const githubButton = theme.querySelector('.theme-button-github');
    const demoButton = theme.querySelector('.theme-button-demo');

    githubButton.addEventListener('click', (e) => {
        analytics.track("Theme Github Clicked", {
            theme: themeName
        });
    });
    demoButton.addEventListener('click', (e) => {
        analytics.track("Theme Demo Clicked", {
            theme: themeName
        });
    })
});