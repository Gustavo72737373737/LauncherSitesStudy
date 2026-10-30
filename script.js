
        document.addEventListener('DOMContentLoaded', () => {
            const botoes = document.querySelectorAll('.btn-rodar');
            
            botoes.forEach(botao => {
                botao.addEventListener('click', (e) => {
                    const url = e.target.getAttribute('data-url');
                    if (url) {
                        window.open(url, '_blank');
                    }
                });
            });
        });
