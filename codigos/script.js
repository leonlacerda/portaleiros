function ligaIndice() {
    if (document.getElementById("esconder").style.display == "none") {
    document.getElementById("esconder").style.display = "block";
    document.getElementById("indice").style.flexGrow = "1";
    document.getElementById("aperta-indice").textContent = "⯇";
    document.getElementById("aperta-indice").style.height = "60px";
    }else{
    document.getElementById("esconder").style.display = "none";
    document.getElementById("indice").style.flexGrow = "0";
    document.getElementById("aperta-indice").style.display = "block";
    document.getElementById("aperta-indice").textContent = "⯈";
    document.getElementById("aperta-indice").style.height = "calc(100vh - 29px)";
    document.getElementById("aperta-indice").style.borderBottom = "2px solid black";
    document.getElementById("aperta-indice").style.borderRight = "2px solid black";
    }
}

function ligaPrincipal() {
    let menu = document.getElementById("itens-principal");
    let titulo = document.getElementById("titulo-portaleiros");
    let sociais = document.getElementById("yt-e-ig");
    if (menu.style.display == "none") {
        menu.style.display = "flex";
        titulo.style.display = "none";
        sociais.style.display = "none";
    }else{
        menu.style.display = "none";
        titulo.style.display = "flex";
        sociais.style.display = "flex";
    }
}

/*
Faz o menu reaparecer ao aumentar a largura da janela, se estiver desativado pelo menu sanduíche. Código não funciona.
function conferePrincipal() {
    if (document.documentElement.clientWidth > "700") {
        document.getElementById("itens-principal").style.display = "block";
    }
}
*/