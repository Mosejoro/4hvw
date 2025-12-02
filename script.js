// Historical Inventions Data - Only years with significant inventions
const inventionsData = {
  1608: {
    era: "The Age of Discovery",
    inventions: [
      {
        name: "Telescope",
        creator: "Hans Lippershey",
        category: "Optics",
        description:
          "The first practical telescope, revolutionizing astronomy and our understanding of the cosmos. This invention opened humanity's eyes to the vast universe beyond Earth.",
        image: "image/antique-telescope-brass-vintage.jpg",
      },
    ],
  },
  1620: {
    era: "The Age of Discovery",
    inventions: [
      {
        name: "Submarine",
        creator: "Cornelis Drebbel",
        category: "Transportation",
        description:
          "The first navigable submarine, tested in the Thames River. This wooden vessel covered in leather could carry 16 rowers and remain submerged for hours.",
        image: "image/early-submarine-vessel-nautical.jpg",
      },
    ],
  },
  1642: {
    era: "The Scientific Revolution",
    inventions: [
      {
        name: "Mechanical Calculator",
        creator: "Blaise Pascal",
        category: "Computing",
        description:
          "The Pascaline, a mechanical calculator capable of addition and subtraction. It laid the groundwork for all future computing machines.",
        image: "image/pascaline-mechanical-calculator-antique.jpg",
      },
    ],
  },
  1656: {
    era: "The Scientific Revolution",
    inventions: [
      {
        name: "Pendulum Clock",
        creator: "Christiaan Huygens",
        category: "Timekeeping",
        description:
          "The first precision timekeeper, increasing clock accuracy from 15 minutes per day to just 15 seconds. It transformed navigation and scientific measurement.",
        image: "image/pendulum-clock-vintage-brass-antique.jpg",
      },
    ],
  },
  1698: {
    era: "The Early Industrial Era",
    inventions: [
      {
        name: "Steam Engine",
        creator: "Thomas Savery",
        category: "Engineering",
        description:
          "The first commercially used steam-powered device, initially designed to pump water from mines. This invention sparked the Industrial Revolution.",
        image: "image/early-steam-engine-industrial-vintage.jpg",
      },
    ],
  },
  1712: {
    era: "The Early Industrial Era",
    inventions: [
      {
        name: "Atmospheric Engine",
        creator: "Thomas Newcomen",
        category: "Engineering",
        description:
          "An improved steam engine that became the workhorse of the mining industry, capable of pumping water from depths previously impossible to reach.",
        image: "image/newcomen-engine-steam-industrial.jpg",
      },
    ],
  },
  1752: {
    era: "The Enlightenment",
    inventions: [
      {
        name: "Lightning Rod",
        creator: "Benjamin Franklin",
        category: "Electrical",
        description:
          "A device that protects structures from lightning strikes by providing a path for electrical discharge. Franklin's famous kite experiment proved the electrical nature of lightning.",
        image: "image/lightning-rod-vintage-colonial-building.jpg",
      },
    ],
  },
  1769: {
    era: "The Enlightenment",
    inventions: [
      {
        name: "Steam Engine (Improved)",
        creator: "James Watt",
        category: "Engineering",
        description:
          "Watt's separate condenser dramatically improved steam engine efficiency, making it practical for factories and transportation. This truly ignited the Industrial Revolution.",
        image: "image/james-watt-steam-engine.jpg",
      },
    ],
  },
  1783: {
    era: "The Age of Revolution",
    inventions: [
      {
        name: "Hot Air Balloon",
        creator: "Montgolfier Brothers",
        category: "Aviation",
        description:
          "The first successful human flight, carrying passengers above Paris. This achievement fulfilled humanity's ancient dream of flying through the skies.",
        image: "image/montgolfier-balloon.jpg",
      },
    ],
  },
  1796: {
    era: "The Age of Revolution",
    inventions: [
      {
        name: "Smallpox Vaccine",
        creator: "Edward Jenner",
        category: "Medicine",
        description:
          "The world's first vaccine, developed using cowpox to immunize against deadly smallpox. This discovery saved countless millions of lives and pioneered modern immunology.",
        image: "image/smallpox-vaccine-vial.jpg",
      },
    ],
  },
  1804: {
    era: "The Industrial Revolution",
    inventions: [
      {
        name: "Steam Locomotive",
        creator: "Richard Trevithick",
        category: "Transportation",
        description:
          "The first full-scale working railway steam locomotive, forever changing how humanity moved goods and people across vast distances.",
        image: "image/steam-locomotive.jpg",
      },
    ],
  },
  1826: {
    era: "The Industrial Revolution",
    inventions: [
      {
        name: "Photography",
        creator: "Nicéphore Niépce",
        category: "Imaging",
        description:
          "The first permanent photograph, 'View from the Window at Le Gras,' captured after an 8-hour exposure. This invention would transform art, science, and memory itself.",
        image: "image/photography-camera.jpg",
      },
    ],
  },
  1837: {
    era: "The Victorian Era",
    inventions: [
      {
        name: "Telegraph",
        creator: "Samuel Morse",
        category: "Communication",
        description:
          "The electrical telegraph and Morse code enabled near-instantaneous communication across continents, shrinking the world and revolutionizing commerce and news.",
        image: "image/morse-telegraph.jpg",
      },
    ],
  },
  1846: {
    era: "The Victorian Era",
    inventions: [
      {
        name: "Anesthesia",
        creator: "William Morton",
        category: "Medicine",
        description:
          "The first public demonstration of surgical anesthesia using ether. This breakthrough transformed surgery from torture into precise medical science.",
        image: "image/anesthesia-equipment.jpg",
      },
    ],
  },
  1876: {
    era: "The Victorian Era",
    inventions: [
      {
        name: "Telephone",
        creator: "Alexander Graham Bell",
        category: "Communication",
        description:
          "The device that connected human voices across distances. Bell's famous first words: 'Mr. Watson, come here, I want to see you.'",
        image: "image/bell-telephone.jpg",
      },
      {
        name: "Internal Combustion Engine",
        creator: "Nikolaus Otto",
        category: "Engineering",
        description:
          "The four-stroke engine that would power the automobile revolution and reshape cities, economies, and daily life worldwide.",
        image: "image/otto-engine.jpg",
      },
    ],
  },
  1879: {
    era: "The Age of Electricity",
    inventions: [
      {
        name: "Practical Light Bulb",
        creator: "Thomas Edison",
        category: "Electrical",
        description:
          "After thousands of experiments, Edison created a long-lasting incandescent bulb. Electric light extended productive hours and transformed human society.",
        image: "image/edison-lightbulb.jpg",
      },
    ],
  },
  1885: {
    era: "The Age of Electricity",
    inventions: [
      {
        name: "Automobile",
        creator: "Karl Benz",
        category: "Transportation",
        description:
          "The Benz Patent-Motorwagen, the first true automobile powered by an internal combustion engine. It would reshape the modern world entirely.",
        image: "image/benz-automobile.jpg",
      },
    ],
  },
  1895: {
    era: "The Age of Electricity",
    inventions: [
      {
        name: "X-Ray Imaging",
        creator: "Wilhelm Röntgen",
        category: "Medicine",
        description:
          "The discovery of X-rays allowed doctors to see inside the human body without surgery. Röntgen's first image was of his wife's hand, showing her bones and wedding ring.",
        image: "image/xray-image.jpg",
      },
      {
        name: "Cinema",
        creator: "Lumière Brothers",
        category: "Entertainment",
        description:
          "The Cinématographe brought moving pictures to audiences worldwide, creating an entirely new art form and entertainment industry.",
        image: "image/lumiere-cinema.jpg",
      },
    ],
  },
  1903: {
    era: "The Modern Age",
    inventions: [
      {
        name: "Powered Flight",
        creator: "Wright Brothers",
        category: "Aviation",
        description:
          "Twelve seconds that changed the world. At Kitty Hawk, Orville Wright achieved the first controlled, powered airplane flight, fulfilling humanity's oldest dream.",
        image: "image/wright-flyer.jpg",
      },
    ],
  },
  1928: {
    era: "The Modern Age",
    inventions: [
      {
        name: "Penicillin",
        creator: "Alexander Fleming",
        category: "Medicine",
        description:
          "The accidental discovery of the first antibiotic. Fleming noticed mold killing bacteria in a petri dish, leading to medicines that would save hundreds of millions of lives.",
        image: "image/penicillin-mold.jpg",
      },
    ],
  },
  1947: {
    era: "The Atomic Age",
    inventions: [
      {
        name: "Transistor",
        creator: "Bardeen, Brattain & Shockley",
        category: "Electronics",
        description:
          "The tiny switch that would enable the digital revolution. Transistors replaced vacuum tubes, making modern computers, phones, and electronics possible.",
        image: "image/transistor.jpg",
      },
    ],
  },
  1957: {
    era: "The Space Age",
    inventions: [
      {
        name: "Satellite (Sputnik)",
        creator: "Soviet Space Program",
        category: "Space",
        description:
          "The first artificial satellite launched into Earth's orbit. Its radio beeps from space announced a new era of human achievement and ignited the Space Race.",
        image: "image/sputnik-satellite.jpg",
      },
    ],
  },
  1969: {
    era: "The Space Age",
    inventions: [
      {
        name: "ARPANET",
        creator: "DARPA",
        category: "Computing",
        description:
          "The precursor to the Internet, connecting computers at four universities. This network would evolve to connect billions of people worldwide.",
        image: "image/arpanet-computer.jpg",
      },
    ],
  },
  1971: {
    era: "The Digital Age",
    inventions: [
      {
        name: "Microprocessor",
        creator: "Intel (Ted Hoff)",
        category: "Computing",
        description:
          "The Intel 4004, the first commercial microprocessor, placed an entire CPU on a single chip. It launched the personal computer revolution.",
        image: "image/intel-microprocessor.jpg",
      },
    ],
  },
  1983: {
    era: "The Digital Age",
    inventions: [
      {
        name: "Internet Protocol (TCP/IP)",
        creator: "Vint Cerf & Bob Kahn",
        category: "Computing",
        description:
          "The communication protocol that unified computer networks into the Internet. January 1, 1983 is considered the Internet's official birthday.",
        image: "image/tcp-ip-network.jpg",
      },
    ],
  },
  1989: {
    era: "The Information Age",
    inventions: [
      {
        name: "World Wide Web",
        creator: "Tim Berners-Lee",
        category: "Computing",
        description:
          "HTML, URLs, and HTTP—the foundation of the web. Berners-Lee made his invention freely available, enabling the information revolution that transformed society.",
        image: "image/world-wide-web.jpg",
      },
    ],
  },
  2007: {
    era: "The Mobile Age",
    inventions: [
      {
        name: "iPhone",
        creator: "Apple (Steve Jobs)",
        category: "Consumer Electronics",
        description:
          "The smartphone that redefined mobile computing. Combining phone, iPod, and internet device, it put a powerful computer in everyone's pocket.",
        image: "image/iphone-smartphone.jpg",
      },
    ],
  },
  2012: {
    era: "The AI Age",
    inventions: [
      {
        name: "Deep Learning Breakthrough",
        creator: "Geoffrey Hinton et al.",
        category: "Artificial Intelligence",
        description:
          "AlexNet's victory in ImageNet demonstrated deep learning's power, sparking the AI revolution that would transform every industry.",
        image: "image/deep-learning-neural.jpg",
      },
    ],
  },
  2022: {
    era: "The AI Age",
    inventions: [
      {
        name: "Large Language Models",
        creator: "OpenAI, Google, et al.",
        category: "Artificial Intelligence",
        description:
          "AI systems capable of human-like text generation and reasoning. ChatGPT brought AI into daily life, marking a new chapter in human-machine collaboration.",
        image: "image/large-language-model.jpg",
      },
    ],
  },
};

// Get sorted years
const years = Object.keys(inventionsData)
  .map(Number)
  .sort((a, b) => a - b);

// State
let currentIndex = 0;
let introComplete = false;

// DOM Elements
const intro = document.getElementById("intro");
const timeline = document.getElementById("timeline");
const timelineTrack = document.getElementById("timelineTrack");
const detailView = document.getElementById("detailView");
const detailContent = document.getElementById("detailContent");
const closeBtn = document.getElementById("closeBtn");
const progressBar = document.getElementById("progressBar");
const eraIndicator = document.getElementById("eraIndicator");

// Initialize Timeline
function initTimeline() {
  years.forEach((year, index) => {
    const yearItem = document.createElement("div");
    yearItem.className = "year-item";
    yearItem.dataset.index = index;
    yearItem.dataset.year = year;

    const inventionCount = inventionsData[year].inventions.length;
    const mainInvention = inventionsData[year].inventions[0].name;

    yearItem.innerHTML = `
            <span class="year-number">${year}</span>
            <span class="year-preview">${mainInvention}</span>
            <span class="invention-count">${inventionCount} invention${
      inventionCount > 1 ? "s" : ""
    }</span>
        `;

    yearItem.addEventListener("click", () => openDetail(year));
    timelineTrack.appendChild(yearItem);
  });

  updateActiveYear();
}

// Update which year is active (centered)
function updateActiveYear() {
  const yearItems = document.querySelectorAll(".year-item");
  yearItems.forEach((item, index) => {
    item.classList.toggle("active", index === currentIndex);
  });

  // Update era indicator
  const currentYear = years[currentIndex];
  const era = inventionsData[currentYear].era;
  eraIndicator.querySelector(".era-text").textContent = era;

  // Update progress bar
  const progress = (currentIndex / (years.length - 1)) * 100;
  progressBar.style.setProperty("--progress", `${progress}%`);

  // Update track position
  updateTrackPosition();
}

// Smooth scroll to center the active year
function updateTrackPosition() {
  const yearItems = document.querySelectorAll(".year-item");
  if (yearItems.length === 0) return;

  let offset = 0;
  for (let i = 0; i < currentIndex; i++) {
    offset += yearItems[i].offsetHeight;
  }

  // Center the active item
  const activeHeight = yearItems[currentIndex].offsetHeight;
  const viewportCenter = window.innerHeight / 2;
  const translateY = viewportCenter - offset - activeHeight / 2;

  timelineTrack.style.transform = `translateY(${translateY}px)`;
}

// Handle scroll/wheel events
function handleScroll(e) {
  if (!introComplete) return;

  e.preventDefault();

  const direction = e.deltaY > 0 ? 1 : -1;
  const newIndex = Math.max(
    0,
    Math.min(years.length - 1, currentIndex + direction)
  );

  if (newIndex !== currentIndex) {
    currentIndex = newIndex;
    updateActiveYear();
  }
}

// Open detail view for a year
function openDetail(year) {
  const data = inventionsData[year];

  // Add click animation
  const activeItem = document.querySelector(".year-item.active");
  if (activeItem) {
    activeItem.classList.add("clicking");
    setTimeout(() => activeItem.classList.remove("clicking"), 300);
  }

  // Build detail content
  const inventionsHTML = data.inventions
    .map(
      (inv, i) => `
        <div class="invention-card" style="--delay: ${0.1 + i * 0.1}s">
            <div class="invention-image">
                <img src="${inv.image}" alt="${inv.name}" loading="lazy">
            </div>
            <span class="invention-category">${inv.category}</span>
            <h3 class="invention-name">${inv.name}</h3>
            <p class="invention-creator">By ${inv.creator}</p>
            <p class="invention-description">${inv.description}</p>
        </div>
    `
    )
    .join("");

  detailContent.innerHTML = `
        <div class="detail-header">
            <span class="detail-era">${data.era}</span>
            <h2 class="detail-year">${year}</h2>
        </div>
        <div class="inventions-grid">
            ${inventionsHTML}
        </div>
    `;

  // Show detail view
  setTimeout(() => {
    detailView.classList.add("visible");
  }, 200);
}

// Close detail view
function closeDetail() {
  detailView.classList.remove("visible");
}

// Handle intro scroll
function handleIntroScroll(e) {
  if (introComplete) return;

  e.preventDefault();
  introComplete = true;
  intro.classList.add("hidden");
  timeline.classList.add("visible");
}

// Keyboard navigation
function handleKeydown(e) {
  if (!introComplete) {
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      handleIntroScroll(e);
    }
    return;
  }

  if (detailView.classList.contains("visible")) {
    if (e.key === "Escape") {
      closeDetail();
    }
    return;
  }

  if (e.key === "ArrowDown" || e.key === "ArrowRight") {
    e.preventDefault();
    if (currentIndex < years.length - 1) {
      currentIndex++;
      updateActiveYear();
    }
  } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
    e.preventDefault();
    if (currentIndex > 0) {
      currentIndex--;
      updateActiveYear();
    }
  } else if (e.key === "Enter") {
    openDetail(years[currentIndex]);
  }
}

// Touch handling for mobile
let touchStartY = 0;
let touchEndY = 0;

function handleTouchStart(e) {
  touchStartY = e.changedTouches[0].screenY;
}

function handleTouchEnd(e) {
  if (!introComplete) {
    introComplete = true;
    intro.classList.add("hidden");
    timeline.classList.add("visible");
    return;
  }

  if (detailView.classList.contains("visible")) return;

  touchEndY = e.changedTouches[0].screenY;
  const diff = touchStartY - touchEndY;

  if (Math.abs(diff) > 30) {
    const direction = diff > 0 ? 7 : -7;
    const newIndex = Math.max(
      0,
      Math.min(years.length - 1, currentIndex + direction)
    );
    currentIndex = newIndex;
    updateActiveYear();
  }
}

// Event Listeners
window.addEventListener(
  "wheel",
  (e) => {
    if (!introComplete) {
      handleIntroScroll(e);
    } else if (!detailView.classList.contains("visible")) {
      handleScroll(e);
    }
  },
  { passive: false }
);

window.addEventListener("keydown", handleKeydown);
window.addEventListener("touchstart", handleTouchStart, { passive: true });
window.addEventListener("touchend", handleTouchEnd, { passive: true });
window.addEventListener("resize", updateTrackPosition);
closeBtn.addEventListener("click", closeDetail);

// Initialize
initTimeline();
