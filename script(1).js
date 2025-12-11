const consejos = {
    "Tomate": 
    "• Necesita mínimo 6 horas de sol directo al día.<br>" +
    "• Riégalo sin mojar las hojas para evitar hongos.<br>" +
    "• Usa tutores o varas para sostenerlo.<br>" +
    "• Cosecha cuando estén rojos y firmes.",

    "Lechuga": 
    "• Crece mejor en clima fresco.<br>" +
    "• Mantén la tierra húmeda pero no encharcada.<br>" +
    "• Evita el sol directo fuerte.<br>" +
    "• Se puede cosechar hoja por hoja.",

    "Zanahoria": 
    "• Prefiere tierra muy suelta y profunda.<br>" +
    "• Riego ligero pero constante.<br>" +
    "• No usar fertilizante fresco, deforma la raíz.<br>" +
    "• Ideal para siembra directa.",

    "Fresa": 
    "• Le gusta el sol y clima templado.<br>" +
    "• Riego moderado sin mojar la fruta.<br>" +
    "• Quitar hojas secas evita enfermedades.<br>" +
    "• Puede producir todo el año.",

    "Albahaca": 
    "• Planta de sol directo y clima cálido.<br>" +
    "• No resiste el frío.<br>" +
    "• Podar las flores alarga su vida.<br>" +
    "• Ideal para repeler insectos.",

    "Pepino": 
    "• Planta trepadora, ponle soporte.<br>" +
    "• Necesita abundante riego.<br>" +
    "• Requiere sol fuerte.<br>" +
    "• Cosecha cuando aún estén verdes.",

    "Cebolla": 
    "• Requiere sol pleno.<br>" +
    "• Riego moderado.<br>" +
    "• No cubrir completamente el bulbo.<br>" +
    "• Cosecha cuando las hojas se doblen solas.",

    "Ajo": 
    "• Muy fácil de sembrar.<br>" +
    "• Necesita poco agua.<br>" +
    "• Prefiere clima frío al inicio.<br>" +
    "• Planta un diente = sale una cabeza.",

    "Calabacita": 
    "• Requiere bastante agua.<br>" +
    "• Crece rápido en suelo rico.<br>" +
    "• Sol directo.<br>" +
    "• Produce muchas piezas por planta."
};

// Selección de elementos
const cards = document.querySelectorAll(".plant-card");
const box = document.getElementById("consejo-box");
const titulo = document.getElementById("planta-titulo");
const texto = document.getElementById("planta-consejo");

// Evento click
cards.forEach(card => {
    card.addEventListener("click", () => {
        const planta = card.dataset.planta;

        titulo.textContent = planta;
        texto.innerHTML = consejos[planta];

        box.classList.add("show");
        box.classList.remove("hidden");
    });
});
