document.addEventListener('DOMContentLoaded', function() {
    // Agregar el CDN de Devicon para los iconos de tecnologías
    const deviconCSS = document.createElement('link');
    deviconCSS.rel = 'stylesheet';
    deviconCSS.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    document.head.appendChild(deviconCSS);

    // Cargar proyectos desde el JSON
    fetch('contenido.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projects-container');
            
            data.proyectos.forEach(proyecto => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                
                projectCard.innerHTML = `
                <img src="${proyecto.imagen}" alt="${proyecto.nombre}" class="project-image">
                <div class="project-info">
                    <h3 class="project-title">${proyecto.nombre}</h3>
                    <p class="project-description">${proyecto.descripcion}</p>
                    <div class="project-tech">
                        ${proyecto.tecnologias.map(tech => `
                            <div class="tech-icon-container" title="${tech.nombre}">
                                <i class="${tech.icono} tech-icon"></i>
                            </div>
                        `).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${proyecto.demo}" target="_blank">
                            <i class="fas fa-external-link-alt"></i>
                            <span>Ver Demo</span>
                        </a>
                        <a href="${proyecto.codigo}" target="_blank">
                            <i class="fas fa-code"></i>
                            <span>Código</span>
                        </a>
                    </div>
                </div>
            `;
                
                projectsContainer.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Error al cargar los proyectos:', error));

    // Smooth scrolling para los enlaces del menú
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Manejar el formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            alert('Por el momento no puedo contestar correos, desde el formulario, por favor envía tu correo desde el apartado inicio.');
            contactForm.reset();
        });
    }
});