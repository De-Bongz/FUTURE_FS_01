const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

//Email setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "bonganimaluleka572@gmail.com",
        pass: "eqng umgk ihub xssa"
    }
});

//Testing route
app.get("/",(req, res) => {
    res.send("Backend is running");
});

//contact route
app.post("/api/contact",async (req, res) => {
    const{ name, email, message } = req.body;

    if(!name || !email || !message){
        return res.status(400).json({
            success: false,
            message: "All fields are required!!"
        });
    }

    try{
        const mailOptions = {
      from: email,
      to: "bonganimaluleka572@gmail.com",
      subject: "Message from the portfolio web.",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Message sent successfully 🚀" });

    }   
    catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error sending message ❌" });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server running on port ${PORT} ');
});
   
