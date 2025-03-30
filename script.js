// script.js

// Function to initialize Google Map
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -15.9433, lng: -48.0522 }, // Santo Antônio do Descoberto
      zoom: 12,
    });
  
    // Example Markers
    const profissionais = [
      { name: "Eletricista João", lat: -15.941, lng: -48.05 },
      { name: "Designer Maria", lat: -15.945, lng: -48.055 },
    ];
  
    profissionais.forEach((profissional) => {
      new google.maps.marker.AdvancedMarkerElement({
        position: { lat: profissional.lat, lng: profissional.lng },
        map: map,
        title: profissional.name,
      });
    });
  }
  
  // Button Interaction
  document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.querySelector(".cta-button");
  
    ctaButton.addEventListener("click", () => {
      alert("Bem-vindo! Vamos ajudar você a encontrar os melhores profissionais.");
    });
  });