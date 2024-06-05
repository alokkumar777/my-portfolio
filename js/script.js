function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

document.addEventListener("DOMContentLoaded", function () {
  const ageElement = document.getElementById("age");
  const birthYear = ageElement.getAttribute("data-birth-year");
  if (birthYear) {
    ageElement.textContent = calculateAge(birthYear);
  }
});

