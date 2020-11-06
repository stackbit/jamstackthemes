document.querySelectorAll(".theme").forEach((theme) => {
    const themeName = theme.getAttribute('data-name');
    const buttons = theme.querySelector(".theme-buttons");

    buttons.addEventListener('click', (e) => {
        let action = null;
        if (e.target.classList.contains("theme-button-demo")) {
            action = "demo"
        }
        if (e.target.classList.contains("theme-button-github")) {
            action = "github"
        }
        if (e.target.classList.contains("theme-button-stackbit")) {
            action = "stackbit"
        }

        if (action) {
            const event = {
                theme: themeName,
                action: action,
                label: themeName,
                category: 'Themes',


            };
            analytics.track("Theme Clicked", event);
        }
    });

});
