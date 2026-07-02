// REVEAL ANIMATION

const reveals = document.querySelectorAll(".reveal");

function reveal() {

reveals.forEach(item => {

const windowHeight = window.innerHeight;
const revealTop = item.getBoundingClientRect().top;

if(revealTop < windowHeight - 100){
item.classList.add("active");
}

});

}

window.addEventListener("scroll", reveal);
reveal();

// ==========================
// SPARKLE BACKGROUND
// ==========================

function createSparkle(){

    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = Math.random() * window.innerHeight + "px";

    sparkle.style.animationDuration =
        (Math.random() * 2 + 1.5) + "s";

    sparkle.style.width =
        sparkle.style.height =
        (Math.random() * 5 + 3) + "px";

    document.body.appendChild(sparkle);

    setTimeout(()=>{
        sparkle.remove();
    },3000);

}

setInterval(createSparkle,250);


// HAMBURGER MENU

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
navMenu.classList.toggle("active");
});


// DARK MODE

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
darkBtn.innerHTML = "☀️";
}else{
darkBtn.innerHTML = "🌙";
}

});

// ===============================
// TYPING EFFECT
// ===============================

const text = "EMA GINA HAGANA BR KARO";
const typingElement = document.getElementById("typing");

let index = 0;

function typingEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, 120); // kecepatan mengetik
    }
}

typingEffect();