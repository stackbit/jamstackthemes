document.querySelectorAll(".action-button").forEach((button) => {
    const themeName = button.getAttribute('data-name');
    const context = button.getAttribute('data-context');
    const action = button.getAttribute('data-action');
    let branch = null;

    button.addEventListener('click', (e) => {
        if (action) {
            const event = {
                theme: themeName,
                action: action,
                category: 'Themes',
                label: themeName
            };

            if (context) {
                event.context = context;
            }
            if (branch) {
                event.branch = branch;
            }

            analytics.track("Theme Clicked", event);
        }
    });
});
