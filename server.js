const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));

// Handle contact form submission
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  // Here, we can do something with the data (e.g., save to database or send an email)
  console.log(`New contact form submission:
    Name: ${name}
    Email: ${email}
    Message: ${message}`);
  
  res.send("Message sent successfully! We'll get back to you soon.");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
