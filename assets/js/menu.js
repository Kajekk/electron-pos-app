document.body.addEventListener('click', (event) => {
    if (event.target.dataset.section) {
        handleSectionTrigger(event)
    }
});

function handleSectionTrigger(event) {
    hideAllSections();
    // Highlight clicked button and show view
    event.target.classList.add('is-selected')

    // Display the current section
    const sectionId = `${event.target.dataset.section}-section`;
    document.getElementById(sectionId).classList.add('is-shown')
    document.getElementById('myInput').focus()
}

function hideAllSections() {
    const sections = document.querySelectorAll('.js-section.is-shown');
    Array.prototype.forEach.call(sections, (section) => {
        section.classList.remove('is-shown')
    });

    const buttons = document.querySelectorAll('.nav-button.is-selected');
    Array.prototype.forEach.call(buttons, (button) => {
        button.classList.remove('is-selected')
    })
}

function showMainContent () {
    document.querySelector('.js-nav').classList.add('is-shown')
    document.querySelector('.js-content').classList.add('is-shown')
}

(function activateDefaultSection() {
    showMainContent();
    document.getElementById('button-payment').click()
})();