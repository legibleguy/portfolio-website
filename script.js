document.addEventListener('DOMContentLoaded', () => {
    const projects = [
      { id: 'project1', title: 'call of duty modern warfare II' },
      { id: 'project2', title: 'jerry gets fired' },
      { id: 'project3', title: 'the arbor bar' },
      { id: 'project4', title: 'the butcher’s harvest' },
    ];
  
    const projectList = document.getElementById('project-list');
    const welcomeMessage = document.getElementById('welcome').querySelector('p');
  
    // Populate the project list
    projects.forEach((project) => {
      const li = document.createElement('li');
      li.textContent = project.title;
      li.dataset.target = project.id;
      projectList.appendChild(li);
    });
  
    // Replace welcome message with project list on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        welcomeMessage.style.display = 'none';
        projectList.style.display = 'block';
      } else {
        welcomeMessage.style.display = 'block';
        projectList.style.display = 'none';
      }
  
      // Highlight the active project
      projects.forEach((project) => {
        const section = document.getElementById(project.id);
        const rect = section.getBoundingClientRect();
        const projectItem = projectList.querySelector(`[data-target="${project.id}"]`);
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          projectItem.classList.add('active');
        } else {
          projectItem.classList.remove('active');
        }
      });
    });
  
    // Scroll to sections on click
    projectList.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        const targetId = e.target.dataset.target;
        const targetSection = document.getElementById(targetId);
        window.scrollTo({ top: targetSection.offsetTop - 100, behavior: 'smooth' });
      }
    });
  });
  