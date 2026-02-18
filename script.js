
// // ==========================
// // TYPING EFFECT
// // ==========================
// new Typed(".typing",{
// strings:[
// "Full Stack Developer",
// "Python Developer",
// "Web Developer"
// ],
// typeSpeed:60,
// backSpeed:40,
// loop:true
// });


// // ==========================
// // SMOOTH SCROLL
// // ==========================
// document.querySelectorAll("a[href^='#']").forEach(anchor=>{
// anchor.addEventListener("click",function(e){
// e.preventDefault();
// document.querySelector(this.getAttribute("href"))
// .scrollIntoView({behavior:"smooth"});
// });
// });


// // ==========================
// // SCROLL REVEAL
// // ==========================
// window.addEventListener("scroll",()=>{

// document.querySelectorAll(".reveal").forEach(el=>{
// const windowHeight = window.innerHeight;
// const elementTop = el.getBoundingClientRect().top;

// if(elementTop < windowHeight - 100){
// el.classList.add("active");
// }

// });

// });


// // ==========================
// // EMAIL JS CONTACT FORM
// // ==========================

// // EmailJS Init
// (function(){
// emailjs.init("RaGYaF9Br6j0_RaXA");   // ✅ Your Public Key
// })();

// // Contact Form Submit
// document.querySelector(".contact-form")
// .addEventListener("submit", function(e){

// e.preventDefault();

// emailjs.sendForm(
// "service_ezgx5yh",      // ✅ Your Service ID
// "template_rhoc8hv",     // ✅ Your Template ID
// this
// ).then(() => {

// document.getElementById("status").innerText =
// "✅ Message sent successfully!";

// this.reset();

// }, () => {

// document.getElementById("status").innerText =
// "❌ Failed to send message. Try again.";

// });

// });

// TYPING
new Typed(".typing",{
strings:[
"Full Stack Developer",
"Python Developer",
"Web Developer"
],
typeSpeed:60,
backSpeed:40,
loop:true
});

// SCROLL REVEAL
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-100){
el.classList.add("active");
}
});
});

// EMAILJS
(function(){
emailjs.init("RaGYaF9Br6j0_RaXA");
})();

document.querySelector(".contact-form")
.addEventListener("submit", function(e){

e.preventDefault();

emailjs.sendForm(
"service_ezgx5yh",
"template_rhoc8hv",
this
).then(()=>{
document.getElementById("status").innerText="Message Sent!";
this.reset();
});
});
