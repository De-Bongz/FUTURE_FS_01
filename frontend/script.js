function showSection(sectionId, btn){
    const cards = document.querySelectorAll(".card");
    const buttons = document.querySelectorAll(".top-nav button");

    cards.forEach(card => {
        card.classList.remove("active");
    });
    buttons.forEach(button => button.classList.remove("active-btn"));

    document.getElementById(sectionId).classList.add("active");
    btn.classList.add(active-btn);
}