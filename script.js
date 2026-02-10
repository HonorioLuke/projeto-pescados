function verificarFuncionamento() {
    const agora = new Date();
    const diaSemana = agora.getDay(); // 0 = Domingo, 1 = Segunda...
    const hora = agora.getHours();
    const minutos = agora.getMinutes();
    
    const statusDiv = document.getElementById('statusLoja');
    let estaAberto = false;

    // Regras de Horário do Afonso Pescados
    // Segunda (1): Fechado
    // Terça (2) a Sábado (6): 10h às 22h30
    // Domingo (0): 10h às 19h

    if (diaSemana >= 2 && diaSemana <= 6) {
        // Terça a Sábado
        if (hora >= 10 && (hora < 22 || (hora === 22 && minutos <= 30))) {
            estaAberto = true;
        }
    } else if (diaSemana === 0) {
        // Domingo
        if (hora >= 10 && hora < 19) {
            estaAberto = true;
        }
    }

    if (estaAberto) {
        statusDiv.innerHTML = "🟢 ABERTO AGORA - Vem pro Boteco!";
        statusDiv.className = "status-funcionamento aberto";
    } else {
        statusDiv.innerHTML = "🔴 FECHADO AGORA - Abrimos às 10h";
        statusDiv.className = "status-funcionamento fechado-status";
    }
}

// Executa ao carregar e atualiza a cada minuto
verificarFuncionamento();
setInterval(verificarFuncionamento, 60000);

// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});