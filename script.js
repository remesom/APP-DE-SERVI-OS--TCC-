// Função para inicializar o mapa na página principal
function initMap() {
    const map = L.map('map').setView([-15.9486, -48.2578], 13);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(map);
  
    const profissionais = [
      { name: "Eletricista João", lat: -15.941, lng: -48.05 },
      { name: "Designer Maria", lat: -15.945, lng: -48.055 },
    ];
  
    profissionais.forEach((profissional) => {
      L.marker([profissional.lat, profissional.lng]).addTo(map)
        .bindPopup(`<strong>${profissional.name}</strong>`);
    });
  }
  
  // Interatividade da página principal
  document.addEventListener("DOMContentLoaded", () => {
    // Verifica se está na página principal (com o mapa)
    const mapContainer = document.querySelector("#map");
    if (mapContainer) {
      initMap();
    }
  
    // Interatividade do botão da página principal
    const ctaButton = document.querySelector(".cta-button");
    if (ctaButton) {
      ctaButton.addEventListener("click", () => {
        alert("Bem-vindo! Vamos ajudar você a encontrar os melhores profissionais.");
      });
    }
  });
  
  // Interatividade da página de anúncio de serviço
  document.addEventListener("DOMContentLoaded", () => {
    // Verifica se o formulário está presente na página atual
    const serviceForm = document.querySelector("#service-form");
    if (serviceForm) {
      serviceForm.addEventListener("submit", (event) => {
        event.preventDefault();
  
        // Captura os valores do formulário
        const name = document.querySelector("#name").value;
        const service = document.querySelector("#service").value;
        const description = document.querySelector("#description").value;
        const location = document.querySelector("#location").value;
  
        // Exibe mensagem de confirmação ao usuário
        alert(`Serviço anunciado com sucesso!\n\nNome: ${name}\nServiço: ${service}\nDescrição: ${description}\nLocalização: ${location}`);
  
        // Limpa os campos do formulário após o envio
        serviceForm.reset();
      });
    }
  });
  