document.querySelectorAll(".theme-detail").forEach((theme) => {
    const themeName = theme.getAttribute('data-name');
    const githubButton = theme.querySelector('.theme-button-github');
    const demoButton = theme.querySelector('.theme-button-demo');

    const event = {
        theme: themeName,
        category: 'Themes',
        label: themeName,
    };

    githubButton.addEventListener('click', (e) => {
        analytics.track("Theme Github Clicked", event);
    });
    demoButton.addEventListener('click', (e) => {
        analytics.track("Theme Demo Clicked", event);
    })
});