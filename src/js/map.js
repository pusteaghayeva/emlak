const REGIONS = {
  nakhchivan: {
    name: "Naxçıvan şəhəri",
    area: "191 km²",
    population: "95,000",
    distanceToCity: "0 km",
    districts: "2", fieldAdmins: "5", municipalities: "7",
    citySettlements: "1", townSettlements: "0", villageSettlements: "28",
    image: "./src/img/ordubad.png"
  },
    babek: {
    name: "Babək rayonu",
    area: "760 km²",
    population: "76,200",
    distanceToCity: "0 km",
    districts: "2", fieldAdmins: "5", municipalities: "7",
    citySettlements: "1", townSettlements: "0", villageSettlements: "28",
    image: "./src/img/ordubad.png"
  },
  culfa:   { 
    name: "Culfa rayonu",
    area: "1222 km²",
    population: "95,000",
    distanceToCity: "0 km",
    districts: "2", fieldAdmins: "5", municipalities: "7",
    citySettlements: "1", townSettlements: "0", villageSettlements: "28",
    image: "./src/img/ordubad.png"
   },
  ordubad: { 
    name: "Ordubad rayonu",
    area: "9191 km²",
    population: "32,671 (2025)",
    distanceToCity: "70 km",
    districts: "1", fieldAdmins: "2", municipalities: "45",
    citySettlements: "45", townSettlements: "1", villageSettlements: "1",
    image: "./src/img/ordubad.png"
   },
  sahbuz:  {    
    name: "Şahbuz rayonu",
    area: "9191 km²",
    population: "95,000",
    distanceToCity: "0 km",
    districts: "2", fieldAdmins: "5", municipalities: "7",
    citySettlements: "1", townSettlements: "0", villageSettlements: "28",
    image: "./src/img/shahbuz.png"
  },
  sederek: {    
    name: "Sədərək rayonu",
    area: "9191 km²",
    population: "95,000",
    distanceToCity: "0 km",
    districts: "2", fieldAdmins: "5", municipalities: "7",
    citySettlements: "1", townSettlements: "0", villageSettlements: "28",
    image: "./src/img/sederek.png"},
        
  kengerli:{   
    name: "Kəngərli rayonu",
    area: "9191 km²",
    population: "95,000",
    distanceToCity: "0 km",
    districts: "2", fieldAdmins: "5", municipalities: "7",
    citySettlements: "1", townSettlements: "0", villageSettlements: "28",
    image: "./src/img/kengerli.png"

  },
  sharur:  {   
    name: "Sədərək rayonu",
    area: "9191 km²",
    population: "95,000",
    distanceToCity: "0 km",
    districts: "2", fieldAdmins: "5", municipalities: "7",
    citySettlements: "1", townSettlements: "0", villageSettlements: "28",
    image: "./src/img/ordubad.png"
  }
};

const marker = document.getElementById('marker');
const titleEl = document.querySelector('#title .region-title');
const panel = document.querySelector('.info-panel');

function setActiveRegion(el) {
  if (!el) return;
  const id = el.id;
  const data = REGIONS[id] || {};

  // aktivləşdirmə
  document.querySelectorAll('svg path.region').forEach(r => r.classList.remove('active'));
  el.classList.add('active');

  // başlıq və faktlar
  titleEl.textContent = data.name || id.toUpperCase();
  document.querySelectorAll('#region-facts dd[data-key]').forEach(dd => {
    const key = dd.getAttribute('data-key');
    dd.textContent = (data[key] ?? "—").toString();
  });

  if (data.image) {
    panel.classList.add('fade'); 
    panel.style.backgroundImage = `url('${data.image}')`;
    setTimeout(() => panel.classList.remove('fade'), 220);
  } else {
    panel.style.backgroundImage = 'none';
  }

  // marker
  const b = el.getBBox();
  marker.setAttribute('x', b.x + b.width / 2 - 30);
  marker.setAttribute('y', b.y + b.height / 2 - 30);
  marker.style.display = 'block';
}

document.querySelectorAll('svg path[id]').forEach(p => {
  p.addEventListener('click', () => setActiveRegion(p));
});

// ilk girişdə Naxçıvan aktiv
window.addEventListener('DOMContentLoaded', () => setActiveRegion(document.getElementById('nakhchivan')));
