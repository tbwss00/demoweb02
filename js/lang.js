// Menú lateral móvil
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

// Traducciones EN / ES
const translations = {
  en: {
    menu_home: "Home",
    menu_services: "Services",
    menu_projects: "Projects",
    menu_about: "About",
    menu_contact: "Contact",
    home_title: "Mobile welding solutions\nfor demanding industries",
    home_subtitle: "We are a specialized welding contractor providing certified mobile welding services for infrastructure projects, industrial plants, aviation, marine and construction.",
    home_cta: "Request a quote",
    services_title: "Services",
    services_intro: "We offer on-site and in‑shop welding services tailored to the needs of each project and industry.",
    services_mobile_title: "Mobile welding",
    services_mobile_text: "Fully equipped mobile units for structural repairs, fabrication and emergency welding at your location, minimizing downtime and transport costs.",
    services_infra_title: "Infrastructure & construction",
    services_infra_text: "Structural steel welding, bridges, supports, platforms and pipe systems for civil works and large‑scale construction projects.",
    services_industry_title: "Industrial & process",
    services_industry_text: "Welding and repair of tanks, pipelines, machinery and production lines for manufacturing, energy, oil & gas and process industries.",
    services_marine_title: "Marine & shipyard",
    services_marine_text: "Welding for hulls, decks, structures and marine equipment for vessels, ports and shipyards, with corrosion‑resistant materials and procedures.",
    services_aviation_title: "Aviation & high‑precision",
    services_aviation_text: "High‑precision welding for aviation and aerospace components, following strict quality standards, procedures and documentation.",
    services_custom_title: "Custom projects",
    services_custom_text: "Design, fabrication and installation of custom metalwork, prototypes and specialty parts according to engineering drawings and specifications.",
    projects_title: "Projects",
    projects_intro: "A selection of projects that showcase our experience across different sectors and environments.",
    projects_infra_title: "Bridge reinforcement",
    projects_infra_text: "Structural reinforcement welding for a road bridge, executed at night to reduce traffic impact and meet strict safety and inspection requirements.",
    projects_marine_title: "Port crane repair",
    projects_marine_text: "Critical repair of cracks and worn components on port cranes, with on‑site welding and non‑destructive testing to restore safe operation.",
    projects_industry_title: "Industrial pipeline",
    projects_industry_text: "Fabrication and installation of high‑pressure process pipelines with certified welders and documented procedures for quality assurance.",
    about_title: "About us",
    about_text_1: "True Blue Welding Services is a contractor focused on delivering reliable, safe and high‑quality welding solutions for demanding infrastructure and industrial projects.",
    about_text_2: "Our team combines certified welders, field experience and modern equipment to respond quickly, reduce downtime and meet the technical requirements of each client.",
    about_text_3: "We work under clear procedures, safety standards and documentation, collaborating closely with engineers, project managers and inspection teams.",
    contact_title: "Contact",
    contact_intro: "Tell us about your project and we will contact you with the best welding solution for your needs.",
    contact_button: "Send message",
    contact_details_title: "Contact details",
    contact_phone: "Phone: +00 000 000 000",
    contact_email: "Email: info@truebluewelding.com",
    contact_location: "Location: Mobile welding services for infrastructure and industrial projects."
  },
  es: {
    menu_home: "Inicio",
    menu_services: "Servicios",
    menu_projects: "Proyectos",
    menu_about: "Nosotros",
    menu_contact: "Contacto",
    home_title: "Soluciones de soldadura móvil\npara industrias exigentes",
    home_subtitle: "Somos una empresa contratista especializada en servicios de soldadura móvil certificada para proyectos de infraestructura, plantas industriales, aviación, sector naviero y construcción.",
    home_cta: "Solicitar cotización",
    services_title: "Servicios",
    services_intro: "Ofrecemos servicios de soldadura en sitio y en taller, ajustados a las necesidades de cada proyecto e industria.",
    services_mobile_title: "Soldadura móvil",
    services_mobile_text: "Unidades móviles totalmente equipadas para reparaciones estructurales, fabricación y soldadura de emergencia en tu ubicación, minimizando paradas y costos de transporte.",
    services_infra_title: "Infraestructura y construcción",
    services_infra_text: "Soldadura de estructuras metálicas, puentes, soportes, plataformas y sistemas de tubería para obras civiles y proyectos de construcción de gran escala.",
    services_industry_title: "Industrial y de proceso",
    services_industry_text: "Soldadura y reparación de tanques, tuberías, maquinaria y líneas de producción para manufactura, energía, petróleo y gas e industrias de proceso.",
    services_marine_title: "Naval y astilleros",
    services_marine_text: "Soldadura para cascos, cubiertas, estructuras y equipos navales en embarcaciones, puertos y astilleros, con materiales y procedimientos resistentes a la corrosión.",
    services_aviation_title: "Aeronáutica y alta precisión",
    services_aviation_text: "Soldadura de alta precisión para componentes de aviación y aeroespacial, siguiendo estrictos estándares de calidad, procedimientos y documentación.",
    services_custom_title: "Proyectos a medida",
    services_custom_text: "Diseño, fabricación e instalación de estructuras metálicas a medida, prototipos y piezas especiales según planos y especificaciones de ingeniería.",
    projects_title: "Proyectos",
    projects_intro: "Una selección de proyectos que demuestra nuestra experiencia en distintos sectores y entornos.",
    projects_infra_title: "Refuerzo de puente",
    projects_infra_text: "Soldadura de refuerzo estructural en un puente vehicular, ejecutada en horario nocturno para reducir el impacto en el tránsito y cumplir requisitos estrictos de seguridad e inspección.",
    projects_marine_title: "Reparación de grúa portuaria",
    projects_marine_text: "Reparación crítica de fisuras y componentes desgastados en grúas portuarias, con soldadura en sitio y ensayos no destructivos para restablecer la operación segura.",
    projects_industry_title: "Tubería industrial",
    projects_industry_text: "Fabricación e instalación de tuberías de proceso de alta presión con soldadores certificados y procedimientos documentados para asegurar la calidad.",
    about_title: "Nosotros",
    about_text_1: "True Blue Welding Services es una empresa contratista enfocada en ofrecer soluciones de soldadura confiables, seguras y de alta calidad para proyectos de infraestructura e industria exigente.",
    about_text_2: "Nuestro equipo combina soldadores certificados, experiencia en campo y equipos modernos para responder con rapidez, reducir tiempos muertos y cumplir los requerimientos técnicos de cada cliente.",
    about_text_3: "Trabajamos con procedimientos claros, estándares de seguridad y documentación, colaborando de cerca con ingenieros, jefes de proyecto y equipos de inspección.",
    contact_title: "Contacto",
    contact_intro: "Cuéntanos sobre tu proyecto y nos pondremos en contacto contigo con la mejor solución de soldadura para tus necesidades.",
    contact_button: "Enviar mensaje",
    contact_details_title: "Datos de contacto",
    contact_phone: "Teléfono: +00 000 000 000",
    contact_email: "Correo: info@truebluewelding.com",
    contact_location: "Ubicación: Servicios de soldadura móvil para proyectos de infraestructura e industria."
  }
};

function setLanguage(lang) {
  // Textos
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder-en]").forEach(function (el) {
    const en = el.getAttribute("data-i18n-placeholder-en");
    const es = el.getAttribute("data-i18n-placeholder-es");
    if (lang === "en") {
      el.setAttribute("placeholder", en);
    } else {
      el.setAttribute("placeholder", es);
    }
  });

  // Estado visual de botones
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  // Guardar preferencia
  localStorage.setItem("tbw_lang", lang);
}

// Eventos de click en botones de idioma
document.addEventListener("DOMContentLoaded", function () {
  const saved = localStorage.getItem("tbw_lang") || "en";
  setLanguage(saved);

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // Cerrar menú lateral al hacer click en un enlace
  document.querySelectorAll(".sidepanel a[href^='#']").forEach(function (link) {
    link.addEventListener("click", function () {
      closeNav();
    });
  });
});
