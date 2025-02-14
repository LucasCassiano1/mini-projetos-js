function carregar() {
    atualizarHorario();
    setInterval(atualizarHorario, 60000); // Atualiza a cada 60 segundos
}

function atualizarHorario() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var saudacao;

    if (hora >= 0 && hora < 12) {
        img.src = "manhaQ.jpg";
        document.body.style.background = '#F0E68C';
        saudacao = "Bom dia!";
    } else if (hora >= 12 && hora < 18) {
        img.src = "tardeQ.jpg";
        document.body.style.background = '#b9846f';
        saudacao = "Boa tarde!";
    } else {
        img.src = "noiteQ.jpg";
        document.body.style.background = '#191970';
        saudacao = "Boa noite!";
    }

    msg.innerHTML = `${saudacao} Agora são ${hora}:${minuto < 10 ? '0' + minuto : minuto}.`;
}
