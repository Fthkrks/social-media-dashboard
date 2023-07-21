const thememode = document.querySelector(".slider-round")
const thememode2 = document.querySelector(".toggle-ball")
const items = document.querySelectorAll(".toggle-ball, .card, .slider-round, .card-small, .count, .member-count, body, .title");
console.log(items);

thememode.addEventListener("click",()=>{
    items.forEach((item) => item.classList.toggle("active"))
})


thememode2.addEventListener("click",()=>{
    items.forEach((item) => item.classList.toggle("active"))
})