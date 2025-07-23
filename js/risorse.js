// Dati delle tecnologie disponibili con risorse
const tecnologie = {
    'JavaScript': {
        logo: '../imgs/JavaScript_logo_2.svg.png',
        risorse: {
            'Principiante': [
                { nome: 'JavaScript.info - Introduzione', url: 'https://javascript.info/' },
                { nome: 'MDN JavaScript Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript' }
            ],
            'Intermedio': [
                { nome: 'Eloquent JavaScript', url: 'https://eloquentjavascript.net/' },
                { nome: 'JavaScript Design Patterns', url: 'https://www.patterns.dev/posts/' }
            ],
            'Avanzato': [
                { nome: 'You Don\'t Know JS', url: 'https://github.com/getify/You-Dont-Know-JS' },
                { nome: 'JavaScript Algorithms', url: 'https://github.com/trekhleb/javascript-algorithms' }
            ]
        }
    },
    'HTML': {
        logo: '../imgs/HTML5_logo_and_wordmark.svg.png',
        risorse: {
            'Principiante': [
                { nome: 'HTML Tutorial su W3Schools', url: 'https://www.w3schools.com/html/' },
                { nome: 'MDN HTML Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML' }
            ],
            'Intermedio': [
                { nome: 'HTML Best Practices', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto' },
                { nome: 'HTML Semantic Elements', url: 'https://www.w3schools.com/html/html5_semantic_elements.asp' }
            ],
            'Avanzato': [
                { nome: 'HTML Living Standard', url: 'https://html.spec.whatwg.org/' },
                { nome: 'Web Components', url: 'https://developer.mozilla.org/en-US/docs/Web/Web_Components' }
            ]
        }
    },
    'CSS': {
        logo: '../imgs/Official_CSS_Logo.svg.png',
        risorse: {
            'Principiante': [
                { nome: 'CSS Tutorial su W3Schools', url: 'https://www.w3schools.com/css/' },
                { nome: 'MDN CSS Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS' }
            ],
            'Intermedio': [
                { nome: 'CSS Tricks', url: 'https://css-tricks.com/' },
                { nome: 'Flexbox Guide', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' }
            ],
            'Avanzato': [
                { nome: 'CSS Grid Guide', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/' },
                { nome: 'CSS Architecture', url: 'https://en.bem.info/methodology/css/' }
            ]
        }
    },
    'Node.js': {
        logo: '../imgs/Node_js.png',
        risorse: {
            'Principiante': [
                { nome: 'Node.js Official Docs', url: 'https://nodejs.org/en/docs/guides/' },
                { nome: 'The Node Beginner Book', url: 'https://www.nodebeginner.org/' }
            ],
            'Intermedio': [
                { nome: 'Node.js Design Patterns', url: 'https://www.patterns.dev/posts/nodejs-patterns/' },
                { nome: 'Express.js Guide', url: 'https://expressjs.com/' }
            ],
            'Avanzato': [
                { nome: 'Node.js Best Practices', url: 'https://github.com/goldbergyoni/nodebestpractices' },
                { nome: 'Advanced Node.js', url: 'https://blog.risingstack.com/node-js-at-scale-understanding-node-js-event-loop/' }
            ]
        }
    },
    'Python': {
        logo: '../imgs/Python_Logo.png',
        risorse: {
            'Principiante': [
                { nome: 'Python Official Tutorial', url: 'https://docs.python.org/3/tutorial/' },
                { nome: 'Python for Beginners', url: 'https://www.python.org/about/gettingstarted/' }
            ],
            'Intermedio': [
                { nome: 'Real Python Tutorials', url: 'https://realpython.com/' },
                { nome: 'Python Design Patterns', url: 'https://refactoring.guru/design-patterns/python' }
            ],
            'Avanzato': [
                { nome: 'Fluent Python', url: 'https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/' },
                { nome: 'Python Internals', url: 'https://realpython.com/products/python-internals-book/' }
            ]
        }
    },
    'MongoDB': {
        logo: '../imgs/Mongo_DB_Logo.png',
        risorse: {
            'Principiante': [
                { nome: 'MongoDB University', url: 'https://university.mongodb.com/' },
                { nome: 'MongoDB Basics', url: 'https://www.mongodb.com/basics' }
            ],
            'Intermedio': [
                { nome: 'MongoDB Aggregation', url: 'https://www.mongodb.com/docs/manual/aggregation/' },
                { nome: 'Indexing Strategies', url: 'https://www.mongodb.com/docs/manual/applications/indexes/' }
            ],
            'Avanzato': [
                { nome: 'MongoDB Performance', url: 'https://www.mongodb.com/docs/manual/core/performance-optimization/' },
                { nome: 'Sharding Guide', url: 'https://www.mongodb.com/docs/manual/sharding/' }
            ]
        }
    },
    'PostgreSQL': {
        logo: '../imgs/postgresql_Logo.jpg',
        risorse: {
            'Principiante': [
                { nome: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com/' },
                { nome: 'PostgreSQL Docs', url: 'https://www.postgresql.org/docs/current/tutorial.html' }
            ],
            'Intermedio': [
                { nome: 'PostgreSQL Performance', url: 'https://www.postgresql.org/docs/current/performance-tips.html' },
                { nome: 'Advanced Queries', url: 'https://www.postgresql.org/docs/current/queries.html' }
            ],
            'Avanzato': [
                { nome: 'PostgreSQL Internals', url: 'https://www.interdb.jp/pg/' },
                { nome: 'Replication Guide', url: 'https://www.postgresql.org/docs/current/high-availability.html' }
            ]
        }
    },
    'Fullstack': {
        logo: '../imgs/Fullstack_logo.png',
        risorse: {
            'Principiante': [
                { nome: 'Fullstack Open', url: 'https://fullstackopen.com/en/' },
                { nome: 'The Odin Project', url: 'https://www.theodinproject.com/' }
            ],
            'Intermedio': [
                { nome: 'Fullstack Development Guide', url: 'https://www.freecodecamp.org/news/full-stack-development-guide/' },
                { nome: 'Modern Fullstack', url: 'https://roadmap.sh/full-stack' }
            ],
            'Avanzato': [
                { nome: 'Fullstack Architecture', url: 'https://microservices.io/' },
                { nome: 'Enterprise Patterns', url: 'https://www.enterpriseintegrationpatterns.com/' }
            ]
        }
    },
    'Frameworks': {
        logo: '../imgs/Frameworks_logo.png',
        risorse: {
            'Principiante': [
                { nome: 'Framework Comparison', url: 'frameworks.html' },
                { nome: 'Choosing a Framework', url: 'https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/' }
            ],
            'Intermedio': [
                { nome: 'Framework Patterns', url: 'frameworks.html' },
                { nome: 'Framework Architecture', url: 'frameworks.html' }
            ],
            'Avanzato': [
                { nome: 'Framework Internals', url: 'frameworks.html' },
                { nome: 'Framework Performance', url: 'frameworks.html' }
            ]
        }
    }
};

// Inizializzazione della pagina
document.addEventListener('DOMContentLoaded', function() {
    // Popola le card delle tecnologie
    const techGrid = document.querySelector('.tech-grid');
    Object.entries(tecnologie).forEach(([tech, data]) => {
        const link = document.createElement('a');
        link.href = `${tech.toLowerCase()}.html`;
        link.className = 'tech-card';
        link.innerHTML = `
            <img src="${data.logo}" alt="${tech}">
            <h3>${tech}</h3>
        `;
        techGrid.appendChild(link);
    });
});
