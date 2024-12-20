const button = document.getElementById("bt");
const msg = document.getElementById("msg");

button.addEventListener("click", () => {
  // Add the 'animate' class to trigger the animation
  msg.classList.add("animate");

  // Remove the 'animate' class after the animation ends
  msg.addEventListener(
    "animationend",
    () => {
      msg.classList.remove("animate");
    },
    { once: true }
  );
});
