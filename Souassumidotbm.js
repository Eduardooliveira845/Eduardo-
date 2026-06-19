const resultado = document.getElementById("resultado");

document.getElementById("btnSobre").addEventListener("click", () => {
    resultado.innerHTML =
        "Sou desenvolvedor Full Stack com experiência em HTML, CSS, JavaScript e Python.";
});

document.getElementById("btnProjetos").addEventListener("click", () => {
    resultado.innerHTML =
        "Projetos: Sistema de Vendas, Portfólio Profissional e Plataforma de Gestão Empresarial.";
});

document.getElementById("btnContato").addEventListener("click", () => {
    resultado.innerHTML =
        "Entre em contato pelo e-mail: lucas.ferreira@email.com";
});
