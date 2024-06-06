// Add an event listener for form submission on the element with id "contact-form"
document
  .getElementById("contact-form")
  .addEventListener("submit", async function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form element that triggered the event
    const form = event.target;

    // Create a FormData object from the form
    const formData = new FormData(form);

    // Convert the FormData object to a plain object
    const data = Object.fromEntries(formData.entries());

    try {
      // Send the form data to the server using a POST request
      const response = await fetch(form.action, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      // Check if the response from the server is successful
      if (response.ok) {
        // Get the sender's name from the form data
        const senderName = data.name;

        // Reset the form
        form.reset();

        // Display a success message to the user
        const successMessage = document.querySelector(".success-message");
        successMessage.textContent = `Thank you, ${senderName}! Your message has been received.`;
        successMessage.style.display = "block";
      } else {
        // Alert the user if the message failed to send
        alert("Failed to send the message.");
      }
    } catch (error) {
      // Alert the user if there was an error during the fetch operation
      alert("Failed to send the message.");
    }
  });
