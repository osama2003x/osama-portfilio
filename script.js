// Tab Navigation
const navTabs = document.querySelectorAll('.nav-tab');
const tabContents = document.querySelectorAll('.tab-content');

navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        navTabs.forEach(t => {
            t.classList.remove('active', 'text-white');
            t.classList.add('text-gray-400');
            const span = t.querySelector('span');
            if (span) {
                span.classList.remove('scale-x-100');
                span.classList.add('scale-x-0');
            }
        });

        // Add active class to clicked tab
        tab.classList.add('active', 'text-white');
        tab.classList.remove('text-gray-400');
        const span = tab.querySelector('span');
        if (span) {
            span.classList.add('scale-x-100');
            span.classList.remove('scale-x-0');
        }

        // Hide all tab contents
        tabContents.forEach(content => {
            content.classList.add('hidden');
            content.classList.remove('active');
        });

        // Show target tab content
        const targetId = tab.getAttribute('data-tab');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => {
                targetContent.classList.add('active');
            }, 10);
        }

        // Update Logo Text
        const logoText = document.getElementById('logo-text');
        if (logoText) {
            switch (targetId) {
                case 'about':
                    logoText.textContent = '~/';
                    break;
                case 'portfolio':
                    logoText.textContent = '~/projects';
                    break;
                case 'stack':
                    logoText.textContent = '~/stack';
                    break;
                case 'contact':
                    logoText.textContent = '~/contact';
                    break;
                default:
                    logoText.textContent = '~/';
            }
        }
    });
});

// Skill Bar Animation
function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach((item, index) => {
        const skillBar = item.querySelector('.skill-bar');
        const progress = item.getAttribute('data-progress');

        if (skillBar && progress) {
            setTimeout(() => {
                skillBar.style.width = progress + '%';
            }, index * 50); // Stagger animation
        }
    });
}

// Intersection Observer for Skill Bars
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
        }
    });
}, observerOptions);

const stackSection = document.getElementById('stack');
if (stackSection) {
    skillsObserver.observe(stackSection);
}

// Project Loading and Filtering
document.addEventListener('DOMContentLoaded', () => {
    // Check if projects data is available
    if (typeof projects !== 'undefined') {
        const projectsGrid = document.getElementById('projectsGrid');

        if (projectsGrid) {
            // Function to create project card HTML
            const createProjectCard = (project) => {
                return `
                    <div class="project-card bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-300 group" data-category="${project.category}">
                        <div class="relative overflow-hidden h-48">
                            <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <a href="${project.github}" target="_blank" class="bg-white/10 backdrop-blur-md p-3 rounded-full text-white hover:bg-primary hover:text-black transition-all duration-300">
                                    <i class="fab fa-github text-xl"></i>
                                </a>
                                <a href="${project.demo}" target="_blank" class="bg-white/10 backdrop-blur-md p-3 rounded-full text-white hover:bg-primary hover:text-black transition-all duration-300">
                                    <i class="fas fa-external-link-alt text-xl"></i>
                                </a>
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">${project.title}</h3>
                                <span class="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">${project.category.toUpperCase()}</span>
                            </div>
                            <p class="text-gray-400 text-sm mb-4 line-clamp-2">${project.description}</p>
                            <div class="flex flex-wrap gap-2">
                                ${project.tags.map(tag => `<span class="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">${tag}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                `;
            };

            // Render all projects initially
            projectsGrid.innerHTML = projects.map(createProjectCard).join('');

            // Filter Logic
            const filterBtns = document.querySelectorAll('.filter-btn');
            const projectCards = document.querySelectorAll('.project-card');

            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const filter = btn.getAttribute('data-filter');

                    // Update active button
                    filterBtns.forEach(b => b.classList.remove('active', 'bg-primary', 'text-black'));
                    filterBtns.forEach(b => b.classList.add('text-white')); // Reset others

                    btn.classList.add('active', 'bg-primary', 'text-black');
                    btn.classList.remove('text-white');

                    // Filter projects
                    projectCards.forEach(card => {
                        const category = card.getAttribute('data-category');

                        if (filter === 'all' || category.toLowerCase() === filter.toLowerCase()) {
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'scale(1)';
                            }, 10);
                        } else {
                            card.style.opacity = '0';
                            card.style.transform = 'scale(0.8)';
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 300);
                        }
                    });
                });
            });
        }
    }
});

// Console greeting
console.log('%c👋 Hello! Welcome to my portfolio!', 'color: #7c3aed; font-size: 20px; font-weight: bold;');
