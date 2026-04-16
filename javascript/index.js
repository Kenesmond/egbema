const communities = [
  {
    name: "Mmahu",
    traditional: "HRH Eze Cosmos Ikechukwu Iwuagwu",
    title: "Eze Mma 1 of Mmahu",
    landmark: "Mmahu River Crossing",
    population: "10,000 with 12 Villages",
    history: "Mmahu is the central community of the kingdom, known for its rich oil reserves, fishing and cultural heritage."
  },
  {
    name: "Abacheke",
    traditional: "Eze Sally Ikeji",
    title: "Eze of Abacheke",
    landmark: "Abacheke Market Square",
    population: "8,500 with 9 Villages",
    history: "Abacheke is famed for its traditional festivals and river worship practices and oil reserves."
  },
  {
    name: "Obiakpu",
    traditional: "Eze Okoro Lucky",
    title: "Eze Nkaralegwu II of Obiakpu",
    landmark: "Obiakpu Heritage Site",
    population: "7,200 ",
    history: "Obiakpu has a history rooted in fishing and agriculture, now thriving in oil exploration."
  },
  {
    name: "Obeakpu",
    traditional: "Eze Chamberlyn Uzu",
    title: "Eze of Obeakpu",
    landmark: "Obeakpu community town hall",
    population: "2,500",
    history: "Obeakpu is known for its artisanal crafts and community leadership."
  },
  {
    name: "Umuorji",
    traditional: "Eze Julius Ekwem",
    title: "Umuorji Village Head",
    landmark: "Umuorji Sacred Forest",
    population: "2,000",
    history: "This community is known for palm oil productions."
  },
  {
    name: "Obokofia",
    traditional: "Eze Onyeka Ozurumba",
    title: "Eze of Obkofia",
    landmark: "Obokofia Festival Ground",
    population: "5,800",
    history: "Obokofia has a vibrant market and traditional dance festivals."
  },
  {
    name: "Mgbara",
    traditional: "Eze Dr. Hillary Onyia",
    title: "Eze of Mgbara",
    landmark: "Mgbara primary school",
    population: "2,200 with 3 Villages",
    history: "Mgbara community is recognized for its historical significance and ancestral tales."
  },
  {
    name: "Ofuruola",
    traditional: "Eze Marcel Mazi",
    title: "Ofuruola Traditional Ruler",
    landmark: "Ofuruola Cultural Hall",
    population: "1,500",
    history: "Ofuruola boasts a rich history in traditional healing with herbs."
  },
  {
    name: "Ekugba",
    traditional: "Eze Dominic Emerenini (Regend)",
    title: "Eze of Ekugba",
    landmark: "Ekugba Sacred Mountain",
    population: "6,300",
    history: "Ekugba is renowned for its warriors and cultural festivals."
  },
  {
    name: "Etekwuru",
    traditional: "Eze Okereke Barry Kenneth",
    title: "Eze of Etekwuru",
    landmark: "Etekwuru Ancient Site",
    population: "7,100",
    history: "Etekwuru is notable for its historical sites and community alliances."
  },
  {
    name: "Umudike",
    traditional: "Eze Darlington Nnorom",
    title: "Eze of Umudike",
    landmark: "Umudike Forest Reserve",
    population: "2,500 with 3 Villages",
    history: "Umudike has a history training warrior center."
  },
  {
    name: "Opuoma",
    traditional: "Eze Wilfred Uwakwe",
    title: "Opuoma Village Head",
    landmark: "Opuoma Market",
    population: "3,700",
    history: "Opuoma is historically known for its fishing and trading activities and weaving."
  },
  {
    name: "Abaezi",
    traditional: "Eze Victor Ukwe",
    title: "Eze of Abaezi",
    landmark: "Abaezi Religious Shrine",
    population: "1,600",
    history: "Abaezi community is known for its traditional Agricultural practices."
  },
  {
    name: "Okwuzi",
    traditional: "Eze Sabastin Chukwuma Nwanoka",
    title: "Eze Oruamara of Okwuzi",
    landmark: "Okwuzi community primary school",
    population: "7,300 with 7 Villages",
    history: "Okwuzi has a storied past linked to early settlers and local legends with caneo making and Fishing."
  },
  {
    name: "Mgbede",
    traditional: "Eze Chadwick Ogor",
    title: "Eze Ogba-Agu of Mgbede",
    landmark: "Mgbede Cultural Center",
    population: "7,800",
    history: "Mgbede has a rich history in traditional governance and commerce."
  },
  {
    name: "Aggah",
    traditional: "Late Eze Ignetius Ekezie",
    title: "Eze Awoma of Aggah",
    landmark: "Aggah Historical Site",
    population: "8,000",
    history: "Aggah is the administrative hub with significant historical landmarks."
  },
  {
    name: "Egbema Central",
    traditional: "Nze Obi",
    title: "Nze Obi of Egbema Central",
    landmark: "Egbema Central Square",
    population: "00000",
    history: "Egbema Central is the administrative hub with significant historical landmarks."
  }
];

const itemsPerPage = 4;
let currentPage = 1;
const totalPages = Math.ceil(communities.length / itemsPerPage);

const gridContainer = document.getElementById('community-grid');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function renderCommunities() {
  // Clear existing content
  gridContainer.innerHTML = '';

  // Calculate start and end indices for current page
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const pageItems = communities.slice(startIdx, endIdx);

  // Render each community for the current page
  pageItems.forEach(community => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-3 mb-4';

    const cardDiv = document.createElement('div');
    cardDiv.className = 'community';

    const title = document.createElement('h2');
    title.className = 'h5';
    title.textContent = community.name;

    const details = document.createElement('div');
    details.className = 'details';

    // Insert community details
    details.innerHTML = `
      <strong>Traditional:</strong> ${community.traditional}<br>
      <strong>Title:</strong> ${community.title}<br>
      <strong>Landmark:</strong> ${community.landmark}<br>
      <strong>Population:</strong> ${community.population}<br>
      <strong>History:</strong> ${community.history}
    `;

    cardDiv.appendChild(title);
    cardDiv.appendChild(details);
    col.appendChild(cardDiv);
    gridContainer.appendChild(col);
  });

  // Disable buttons if on first or last page
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

// Event listener for Previous button
prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderCommunities();
  }
});

// Event listener for Next button
nextBtn.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderCommunities();
  }
});

// Initial rendering of communities
renderCommunities();
