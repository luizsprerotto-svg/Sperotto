// script.js - Blog Manejo de Equinos
// Autor: Luiz Otávio Sperotto

document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Mensagem de boas-vindas dinâmica
  const header = document.querySelector("header h1");
  
  if (header) {
    const hora = new Date().getHours();
    let saudacao = "Bem-vindo";

    if (hora >= 5 && hora < 12) {
      saudacao = "Bom dia";
    } else if (hora >= 12 && hora < 18) {
      saudacao = "Boa tarde";
    } else {
      saudacao = "Boa noite";
    }

    header.innerText = `🐎 ${saudacao} ao Manejo de Equinos`;
  }

  // 2. Destacar link da página atual no menu
  const links = document.querySelectorAll("nav a");
  const paginaAtual = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === paginaAtual) {
      link.style.borderBottom = "2px solid white";
      link.style.paddingBottom = "2px";
    }
  });

  // 3. Efeito suave ao clicar nos links
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      // Só aplica efeito se for link interno
      if (href && href.includes(".html")) {
        console.log(`Navegando para ${href}`);
      }
    });
  });

  // 4. Pequeno efeito de scroll suave (caso tenha âncoras futuras)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

});
