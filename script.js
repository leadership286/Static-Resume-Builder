var toggleSkillsButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block'; // Skills section ko dikhana
        toggleSkillsButton.textContent = 'Hide Skills'; // Button text change karna
    }
    else {
        skillsSection.style.display = 'none'; // Skills section ko chhupana
        toggleSkillsButton.textContent = 'Show Skills'; // Button text change karna
    }
});
