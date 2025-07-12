// Habilidades
const skills = ["HTML", "CSS", "JavaScript", "Git", "TypeScript", "Java", "PHP", "C++"];
const skillsGrid = document.querySelector('.skills-grid');

skills.forEach(skill => {
  const skillItem = document.createElement('div');
  skillItem.classList.add('skill-item');
  skillItem.textContent = skill;
  skillsGrid.appendChild(skillItem);
});

// Projeto fictício
const projects = [
  {
    name: "Portfólio Pessoal",
    description: "Site feito com HTML, CSS e JS para apresentar minhas habilidades.",
    link: "#"
  },
  {
    name: "Calculadora JS",
    description: "Calculadora funcional desenvolvida com JavaScript.",
    link: "#"
  }
];

const projectsGrid = document.querySelector('.projects-grid');

projects.forEach(project => {
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');
  projectCard.innerHTML = `
    <h3>${project.name}</h3>
    <p>${project.description}</p>
    <a href="${project.link}">Ver Projeto</a>
  `;
  projectsGrid.appendChild(projectCard);
});

// Validação de formulário
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
  form.reset();
});
