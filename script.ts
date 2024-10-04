const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

toggleSkillsButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block'; // to show skill section
        toggleSkillsButton.textContent = 'Hide Skills'; // to change button text
    } else {
        skillsSection.style.display = 'none'; // to hide skill section
        toggleSkillsButton.textContent = 'Show Skills'; //to change button text
    }
});
