function showSection(sectionId, btn){
    const cards = document.querySelectorAll(".card");
    const buttons = document.querySelectorAll(".top-nav button");

    cards.forEach(card => {
        card.classList.remove("active");
    });
    buttons.forEach(button => button.classList.remove("active-btn"));

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add("active");
    btn.classList.add("active-btn");

    activeSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

async function sendMessage() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(!name || !email || !message){
        alert("Please fill in all the fields!!!");
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){
        alert("Enter a valid email address!");
        return;
    }

    const response = await fetch("https://future-fs-01-la1t.onrender.com/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
    });

    const text = await response.text();

    let data;
    try{
        data = JSON.parse(text);
    }catch(e){
        alert("Server error. Please try again later.");
        return;
    }

    alert(data.message);

    if(data.success){
        document.getElementById("success-msg").style.display = "block";

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }

    
}
