const glowOnHover = document.querySelector(".glow-on-hover")

glowOnHover.addEventListener("click", ()=>{
    window.location.href = "home.html";
});

window.addEventListener('DOMContentLoaded', () => {
  const glowOnHover = document.querySelector(".glow-on-hover");
  setTimeout(() => {
    glowOnHover.classList.add('active');
  }, 4000); // 3 sec delay
});


window.addEventListener('DOMContentLoaded', () => {
  const heading = document.querySelector('.heading');
  // Delay a bit to see the animation clearly
  setTimeout(() => {
    heading.classList.add('active');
  }, 300); // 300ms delay before animation starts
});