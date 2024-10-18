document.addEventListener('DOMContentLoaded', () => {
    const skillsContainer = document.getElementById('skills');
    const projectsContainer = document.getElementById('projects');

    // Ajouter les barres de compétences
    skills.forEach(skill => {
        const skillBarElement = createSkillBar(skill);
        skillsContainer.appendChild(skillBarElement);
    });

    // Ajouter les projets
    projects.forEach(project => {
        const projectElement = createProject(project);
        projectsContainer.appendChild(projectElement);
    });
});