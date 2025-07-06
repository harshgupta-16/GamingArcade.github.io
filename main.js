const glowOnHover = document.querySelector(".glow-on-hover")

glowOnHover.addEventListener("click", ()=>{
    window.location.href = "./Home page/home.html";
});

window.addEventListener('DOMContentLoaded', () => {
  const glowOnHover = document.querySelector(".glow-on-hover");
  setTimeout(() => {
    glowOnHover.classList.add('active');
  }, 3000); 
});

window.addEventListener('DOMContentLoaded', () => {
  const heading = document.querySelector('.heading');
  setTimeout(() => {
    heading.classList.add('active');
  }, 300); 
});