// AOS init and set animations to occur only once
// AOS.init({ once: true });

const burg = document.querySelector(".burger");
const nav = document.querySelector(".nav__links");

// nav burger toggle mobile
burg.addEventListener("click", ()=>{
    burg.classList.toggle("show");
    nav.classList.toggle("show");
});

const rt = document.querySelector("body");
const togglebtn = document.querySelector(".toggleBtn");
togglebtn.addEventListener("click", ()=>{
    rt.classList.toggle("dark");
});

// auto close nav menu on click of any link for mobile
// const menu_entry = document.querySelectorAll("#menu-item");
// menu_entry.forEach((item) => {
//     item.addEventListener("click", ()=>{
//         burg.classList.remove("active");
//         nav.classList.remove("open");
//     });
// });

// on scroll show back to top button
window.onscroll = function() { 
    var btt = document.querySelector('.backTop');
    var pageBanner = document.querySelector('.homeBanner');
    var bannerHeight = pageBanner.offsetHeight*0.025;
    if ( window.scrollY > bannerHeight ) { btt.classList.add("shown"); }
    else { btt.classList.remove("shown"); }
}

// scroll to top function
function scrollToTop(){ window.scrollTo(0,0); }

// accordion
const accordion = document.querySelectorAll(".floor_plans_accordion");
accordion.forEach((accordion) => {
    accordion.addEventListener("click", ()=>{
        accordion.classList.toggle("active");
    });
});

//image to video
const demo = document.querySelector('.house__demo');
demo.addEventListener("click", () => {
    demo.classList.add('active');
});

