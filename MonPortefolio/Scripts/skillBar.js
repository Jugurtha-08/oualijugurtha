function createSkillBar(skill) {
    const skillBar = document.createElement('div');
    skillBar.className = 'skill-bar';

    const name = document.createElement('p');
    name.textContent = `${skill.name} - ${skill.percentage}%`;
    
    const bar = document.createElement('div');
    bar.className = 'bar';
    
    const progress = document.createElement('div');
    progress.className = 'progress';
    progress.style.width = `${skill.percentage}%`;

    bar.appendChild(progress);
    skillBar.appendChild(name);
    skillBar.appendChild(bar);

    return skillBar;
}