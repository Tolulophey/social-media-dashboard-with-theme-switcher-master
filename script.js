const toggle = document.getElementById("toggle");
const body = document.querySelector("body");
const header = document.querySelector("header")
const section = document.querySelector(".dashboard");
const section2 = document.querySelector(".overview-today");
toggle.onclick = function (){
    toggle.classList.toggle("active");
    body.classList.toggle("active");
    header.classList.toggle("active");
    section.classList.toggle("active")
    section2.classList.toggle("activestate");
}