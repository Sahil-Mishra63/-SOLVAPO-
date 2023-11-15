let menu = document.querySelector(".fa-solid");
let slide = document.querySelector("#side-pan");
let left = document.querySelector(".lefty");
menu.addEventListener("click",function(){
    slide.style.left="0%";
    menu.style.display="none";
})
document.querySelector(".newpg4").addEventListener("click",()=>{
    window.location.href="consult.html";
})
document.querySelector(".com").addEventListener("click",()=>{
    window.location.href="complain.html";
})
document.querySelector(".opt").addEventListener("click",()=>{
    alert("Logging you out");
    window.location.href="login.html";
})
document.querySelector(".user").addEventListener("click",()=>{
    window.location.href="profile.html";
})
document.querySelector(".lv").addEventListener("click",()=>{
        window.location.href="lvform.html";
})
document.querySelector(".clv").addEventListener("click",()=>{
    window.location.href="classleave.html";
})
document.querySelector(".mit").addEventListener("click",()=>{
    window.location.href="mitra.html";
})
document.querySelector(".bs").addEventListener("click",()=>{
    window.location.href="bus.html";
})

left.addEventListener("click",()=>{
    slide.style.left="-25%";
    menu.style.display="inline-block";
})

const element = document.getElementById("second-p");
let pos = element.offsetTop;
console.log(pos);
let men = document.querySelector(".mant");
let men1 = document.querySelector(".mant1");
let men2 = document.querySelector(".mant2");
let men3 = document.querySelector(".mant3");
men.addEventListener("click", function () {
    const element = document.getElementById("second-p");
    element.scrollIntoView({ behavior: "smooth" }); // Use smooth scrolling
});
men1.addEventListener("click", function () {
    const element = document.getElementById("third-p");
    element.scrollIntoView({ behavior: "smooth" }); // Use smooth scrolling
});
men2.addEventListener("click", function () {
    const element = document.getElementById("fourth-p");
    element.scrollIntoView({ behavior: "smooth" }); // Use smooth scrolling
});
men3.addEventListener("click", function () {
    const element = document.getElementById("first-p");
    element.scrollIntoView({ behavior: "smooth" }); // Use smooth scrolling
});

