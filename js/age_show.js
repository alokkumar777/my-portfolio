// Function to calculate age based on birth year
function calculateAge(birthYear) {
  // Get the current year
  const currentYear = new Date().getFullYear();
  // Calculate and return the age
  return currentYear - birthYear;
}

// Add an event listener that runs when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the element with id "age"
  const ageElement = document.getElementById("age");
  // Get the birth year from the element's data attribute
  const birthYear = ageElement.getAttribute("data-birth-year");
  
  // If a birth year is provided, calculate the age and update the element's text content
  if (birthYear) {
    ageElement.textContent = calculateAge(birthYear);
  }
});
