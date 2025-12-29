//untuk animasi scroll
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".anim");

  const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      requestAnimationFrame(() => {
        entry.target.classList.add("show");
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });


  items.forEach(item => observer.observe(item));
});

// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", ()=>{
navbar.classList.toggle("active");
});

//dumy masage send 
document.querySelector(".Contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Pesan terkirim! (dummy)");
  this.reset();
});



//untuk ngasih tau browser kalau touch&scroll listener  tidak akan mem block scroll
document.addEventListener("touchstart",()=>{},{passive:true});
document.addEventListener("touchmove",()=>{},{passive:true});
