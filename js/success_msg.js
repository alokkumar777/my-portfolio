document
  .getElementById("contact-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const senderName = data.name;

        form.reset();

        const successMessage = document.querySelector(".success-message");
        successMessage.textContent = `Thank you, ${senderName}! Your message has been received.`;
        successMessage.style.display = "block";
      } else {
        alert("Failed to send the message.");
      }
    } catch (error) {
      alert("Failed to send the message.");
    }
  });
