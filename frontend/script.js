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

async function sendMessage() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
    });

    const data = await response.json();
    alert(data.message);
        
    
}