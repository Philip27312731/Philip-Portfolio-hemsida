document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Stäng menyn när man klickar på en länk (för mobil)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Projektdata
    const projects = [
        {
            id: 1,
            title: 'Responsiv e-handelsplattform',
            category: 'webbdesign',
            image: 'https://images.unsplash.com/photo-1589466725882-f47191476e8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjbm9sb2d5fGVufDB8fDB8fHww',
            description: 'En modern och responsiv e-handelsplattform utvecklad för en lokal butik. Implementerad med fokus på användarvänlighet och konverteringsoptimering.',
            links: [
                {
                    text: 'Se live',
                    url: 'https://example.com/ecommerce',
                    type: 'primary'
                },
                {
                    text: 'GitHub',
                    url: 'https://github.com/Philip27312731/ecommerce',
                    type: 'outline'
                }
            ]
        },
        {
            id: 2,
            title: 'Företagsidentitet för restaurang',
            category: 'grafik',
            image: 'https://images.unsplash.com/photo-1631155989897-961b8fe3aba4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjbm9sb2d5fGVufDB8fDB8fHww',
            description: 'Komplett varumärkesidentitet för en nyöppnad restaurang, inklusive logotyp, menyer, visitkort och webbdesign.',
            links: [
                {
                    text: 'Se projekt',
                    url: 'https://example.com/restaurant-branding',
                    type: 'primary'
                }
            ]
        },
        {
            id: 3,
            title: 'Weather App',
            category: 'utveckling',
            image: 'https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVjbm9sb2d5fGVufDB8fDB8fHww',
            description: 'En väderapplikation byggd med React som använder ett offentligt API för att visa aktuella väderförhållanden och prognoser för olika platser.',
            links: [
                {
                    text: 'Se live',
                    url: 'https://example.com/weather-app',
                    type: 'primary'
                },
                {
                    text: 'GitHub',
                    url: 'https://github.com/Philip27312731/weather-app',
                    type: 'outline'
                }
            ]
        },
        {
            id: 4,
            title: 'Portfolio för fotograf',
            category: 'webbdesign',
            image: 'https://plus.unsplash.com/premium_photo-1681399975135-252eab5fd2db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVjbm9sb2d5fGVufDB8fDB8fHww',
            description: 'En elegant och minimalistisk portfoliosida för en professionell fotograf, med fokus på bildvisning och responsiv design.',
            links: [
                {
                    text: 'Se live',
                    url: 'https://example.com/photography',
                    type: 'primary'
                }
            ]
        },
        {
            id: 5,
            title: 'Bokningsapp för behandlingar',
            category: 'utveckling',
            image: 'https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY25vbG9neXxlbnwwfHwwfHx8MA%3D%3D',
            description: 'Ett komplett bokningssystem för en skönhetssalong, inklusive kalender, användarregistrering och betalningsintegration.',
            links: [
                {
                    text: 'Se live',
                    url: 'https://example.com/booking-app',
                    type: 'primary'
                },
                {
                    text: 'GitHub',
                    url: 'https://github.com/Philip27312731/booking-app',
                    type: 'outline'
                }
            ]
        },
        {
            id: 6,
            title: 'Produktförpackningsdesign',
            category: 'grafik',
            image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D',
            description: 'Design av produktförpackningar för en serie ekologiska hudvårdsprodukter med fokus på hållbarhet och estetik.',
            links: [
                {
                    text: 'Se projekt',
                    url: 'https://example.com/packaging-design',
                    type: 'primary'
                }
            ]
        }
    ];

    const projectsContainer = document.getElementById('projects-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Funktion för att visa projekt
    function displayProjects(projectsToShow) {
        projectsContainer.innerHTML = '';
        
        projectsToShow.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.setAttribute('data-category', project.category);
            projectCard.style.transitionDelay = `${index * 0.1}s`;
            
            let linksHTML = '';
            project.links.forEach(link => {
                linksHTML += `<a href="${link.url}" class="project-link ${link.type === 'outline' ? 'outline' : ''}" target="_blank">${link.text}</a>`;
            });
            
            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="project-img" onerror="this.src='images/placeholder.jpg'">
                <div class="project-content">
                    <span class="project-category">${project.category}</span>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.description}</p>
                    <div class="project-links">
                        ${linksHTML}
                    </div>
                </div>
            `;
            
            projectsContainer.appendChild(projectCard);
            
            // Trigger animation after a short delay
            setTimeout(() => {
                projectCard.classList.add('visible');
            }, 50);
        });
    }
    
    // Visa alla projekt när sidan laddas
    displayProjects(projects);
    
    // Filtreringsfunktionalitet
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Uppdatera aktiv klass
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filtrera projekt
            let filteredProjects;
            if (filter === 'alla') {
                filteredProjects = projects;
            } else {
                filteredProjects = projects.filter(project => project.category === filter);
            }
            
            // Visa filtrerade projekt
            displayProjects(filteredProjects);
        });
    });
    
    // Implementera IntersectionObserver för att animera projektkort när de syns
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        // Observera alla projektkort efter att de har rendererats
        setTimeout(() => {
            document.querySelectorAll('.project-card:not(.visible)').forEach(card => {
                observer.observe(card);
            });
        }, 100);
    }
});