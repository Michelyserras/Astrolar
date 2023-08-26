function mostrarProximaSecao(event) {
    event.preventDefault();  // Impede o comportamento padrão do link
  
    var proximaSecao = document.querySelector(event.target.getAttribute('href'));
    proximaSecao.classList.remove("hidden");  // Remove a classe "hidden" para mostrar a próxima seção
  
    proximaSecao.scrollIntoView({ behavior:'smooth' }); // Rola automaticamente para a próxima seção suavemente
  }
  



