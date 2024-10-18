function createProject(project) {
    const projectElement = document.createElement('div');
    projectElement.className = 'project';

    const title = document.createElement('h3');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description;

    const technologies = document.createElement('div');
    technologies.className = 'technologies';

    project.technologies.forEach(tech => {
        const techSpan = document.createElement('span');
        techSpan.className = 'technology';
        techSpan.textContent = tech;
        technologies.appendChild(techSpan);
    });

    projectElement.appendChild(title);
    projectElement.appendChild(description);
    projectElement.appendChild(technologies);

    return projectElement;
}