// Configuração do i18next
i18next.init({
    lng: 'pt', // Linguagem inicial
    debug: true,
    resources: {
        en: {
            translation: {
                "welcome": "Welcome to my site!",
                "example": "This is an example of how to implement a night mode."
            }
        },
        pt: {
            translation: {
                "welcome": "Bem-vindo ao meu site!",
                "example": "Este é um exemplo de como implementar um modo noturno."
            }
        }
    }
}, function(err, t) {
    // Atualiza o conteúdo inicial da página
    updateContent();
});

// Função para atualizar o conteúdo da página
function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(function(element) {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = i18next.t(key);
    });
}

// Alterna entre modo diurno e noturno
document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const icon = document.getElementById('mode-icon');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

// Alterna entre português e inglês
document.getElementById('translate-button').addEventListener('click', function() {
    const currentLang = i18next.language;
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    i18next.changeLanguage(newLang, updateContent);
});
