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

// add review star
function updateStars(hoveredIndex) {
    // Convert hoveredIndex to a number if it's a string
    hoveredIndex = Number(hoveredIndex);

    // Iterate over all star elements
    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById(`star-${i}`);
        if (i <= hoveredIndex) {
            // Apply 'text-primary' and 'fa-solid' for stars up to and including the hovered star
            star.classList.add('text-primary', 'fa-solid');
            star.classList.remove('text-gray', 'fa-regular');
        } else {
            // Apply 'text-gray' and 'fa-regular' for stars after the hovered star
            star.classList.add('text-gray', 'fa-regular');
            star.classList.remove('text-primary', 'fa-solid');
        }
    }
}

// Add event listeners to each star
for (let i = 0; i <= 5; i++) {
    const star = document.getElementById(`star-${i}`);
    star.addEventListener("mouseover", () => updateStars(i));
}
