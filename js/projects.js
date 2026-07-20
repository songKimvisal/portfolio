const PROJECTS = [
  {
    group: "Web",
    kind: "github",
    href: "https://github.com/songKimvisal/Happy_Khmer_New_year",
    img: "assets/cards/kyn.png",
    alt: "Khmer New Year",
    fallbackIcon: "fas fa-globe",
    badge: "Web",
    title: "Khmer New Year Website",
    desc: "A vibrant cultural site celebrating Khmer New Year with interactive traditions and animations.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    group: "Web",
    kind: "github",
    href: "https://songkimvisal.github.io/elevator/",
    img: "assets/cards/elevator.png",
    alt: "Elevator Simulation",
    fallbackIcon: "fas fa-building-elevator",
    badge: "Web",
    title: "Elevator Simulation",
    desc: "Real-time elevator control system with floor scheduling and intelligent queue management.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    group: "App",
    kind: "github",
    href: "https://github.com/songKimvisal/movie_booking_app_simulator",
    img: "assets/cards/Mobile App final .png",
    alt: "Mobile App Final",
    fallbackIcon: "fas fa-mobile-alt",
    badge: "Mobile",
    title: "Mobile App Final",
    desc: "A polished mobile solution with responsive layouts, animations, and real-world UX interactions for users on the go.",
    stack: ["Flutter", "NodeJs", "ExpressJs", "Prisma", "PostgreSQL"],
  },
  {
    group: "App",
    kind: "github",
    href: "https://github.com/songKimvisal/Phsar_One",
    img: "assets/cards/PhsarOne_Presentation.png",
    alt: "PhsarOne",
    fallbackIcon: "fas fa-store",
    badge: "Mobile",
    title: "PhsarOne",
    desc: "A mobile marketplace for buying, selling, and trading items, with real-time chat, AI-powered semantic search, image moderation, and Khmer & English support.",
    stack: ["Expo", "React Native", "Supabase", "Clerk", "Stripe"],
  },
  {
    group: "Prototype",
    kind: "figma",
    href: "https://www.figma.com/proto/xGnHqv3mpbMmPFIb28eWKy/PhsarOne?node-id=356-144&t=tA5qpkaAW3vjE4ws-1",
    img: "assets/cards/figma.png",
    alt: "PhsarOneFigmaPrototype",
    fallbackIcon: "fas fa-object-group",
    badge: "Prototype",
    title: "PhsarOne Figma Prototype",
    desc: "A mobile marketplace prototype designed in Figma, showcasing the UI/UX flow for buying, selling, and trading items with Khmer and English support.",
    stack: ["Figma"],
  },
  {
    group: "Prototype",
    kind: "figma",
    href: "https://www.figma.com/proto/bPdLz2RXMemKqdRr0o3VUM/ServiceHub?node-id=4025-531&t=8xPtAZBrHk9mZkWs-1",
    img: "assets/cards/service_hub.png",
    alt: "ServiceHub",
    fallbackIcon: "fas fa-object-group",
    badge: "Prototype",
    title: "ServiceHub",
    desc: "A mobile application connecting homeowners, renters, and small businesses with verified local service providers throughout Cambodia, transforming the stressful, fragmented process of finding reliable household services into a seamless, confident experience.",
    stack: ["Figma"],
  },
  {
    group: "Prototype",
    kind: "figma",
    href: "https://www.figma.com/proto/nnCxihDravCyV17VjmZXJ8/HRMIS-MOT?node-id=314-752&t=FcP0Pf8yPCj39DpY-1",
    img: "assets/cards/hrmis.png",
    alt: "hrmis-mot",
    fallbackIcon: "fas fa-object-group",
    badge: "Prototype",
    title: "HRMIS-MOT",
    desc: "A Mobile Application for Managing Staff at the Ministry of Tourism",
    stack: ["Figma"],
  },
  {
    group: "Prototype",
    kind: "soon",
    fallbackIcon: "fas fa-hourglass-half",
    badge: "Soon",
    title: "Next Project",
    desc: "Something new is in the works. Stay tuned.",
    stack: ["TBA"],
  },
];

function projectCardHTML(project, num) {
  const paddedNum = String(num).padStart(2, "0");
  const stackHTML = project.stack.map((s) => `<span>${s}</span>`).join("");
  const imgHTML = project.img
    ? `<img src="${project.img}" alt="${project.alt}" />`
    : "";

  const linkLabel =
    project.kind === "figma"
      ? `<span class="pcard-gh-label"><i class="fa-brands fa-figma"></i> Figma</span>`
      : project.kind === "github"
        ? `<span class="pcard-gh-label"><i class="fab fa-github"></i> GitHub</span>`
        : `<span class="pcard-gh-label pcard-gh-label--muted">Coming Soon</span>`;

  const body = `
    <div class="pcard-img">
      ${imgHTML}
      <div class="pcard-img-fb"><i class="${project.fallbackIcon}"></i></div>
      <div class="pcard-img-overlay"></div>
      <span class="pcard-badge">${project.badge}</span>
    </div>
    <div class="pcard-body">
      <div class="pcard-top">
        <span class="pcard-num">${paddedNum}</span>
        ${linkLabel}
      </div>
      <h3 class="pcard-title">${project.title}</h3>
      <p class="pcard-desc">${project.desc}</p>
      <div class="pcard-stack">${stackHTML}</div>
    </div>`;

  if (project.kind === "soon") {
    return `<div class="pcard pcard--soon">${body}</div>`;
  }
  return `<a class="pcard" href="${project.href}" target="_blank" rel="noopener">${body}</a>`;
}

function renderProjects() {
  const track = document.querySelector(".proj-track");
  if (!track) return;

  let html = "";
  let lastGroup = null;
  PROJECTS.forEach((project, i) => {
    if (project.group !== lastGroup) {
      html += `<span class="proj-group-title">${project.group}</span>`;
      lastGroup = project.group;
    }
    html += projectCardHTML(project, i + 1);
  });
  track.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", renderProjects);
