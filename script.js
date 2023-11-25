const company = document.getElementById("companies");
const roag = document.getElementById("roag");
const air = document.getElementById("air");
const sea = document.getElementById("sea");

let currentNumberCompany = 1;
let currentNumberRoag = 1;
let currentNumberAir = 1;
let currentNumberSea = 1;

const targetNumberCompany = 2917;
const targetNumberRoag = 3918;
const targetNumberAir = 38928;
const targetNumberSea = 7192;

const maxTargetNumber = Math.max(targetNumberCompany, targetNumberRoag, targetNumberAir, targetNumberSea);

const incrementInterval = 50; // Milliseconds (adjust as needed)

function incrementAndDisplay() {
    if (currentNumberCompany < targetNumberCompany) {
        currentNumberCompany += Math.ceil((targetNumberCompany - currentNumberCompany) / 6);
    }
    if (currentNumberRoag < targetNumberRoag) {
        currentNumberRoag += Math.ceil((targetNumberRoag - currentNumberRoag) / 7);
    }
    if (currentNumberAir < targetNumberAir) {
        currentNumberAir += Math.ceil((targetNumberAir - currentNumberAir) /7);
    }
    if (currentNumberSea < targetNumberSea) {
        currentNumberSea += Math.ceil((targetNumberSea - currentNumberSea) / 10);
    }

    company.textContent = currentNumberCompany;
    roag.textContent = currentNumberRoag;
    air.textContent = currentNumberAir;
    sea.textContent = currentNumberSea;

    if (currentNumberCompany < maxTargetNumber) {
        setTimeout(incrementAndDisplay, incrementInterval);
    }
}

incrementAndDisplay();

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active', 'prev', 'next'));
    slides[index].classList.add('active');
    slides[(index + 1) % slides.length].classList.add('next');
    slides[(index - 1 + slides.length) % slides.length].classList.add('prev');
    
     //Highlight the active dot
    dots.forEach(dot => dot.classList.remove('active-dot'));
    dots[index].classList.add('active-dot');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

showSlide(currentSlide);

// Auto advance to the next slide every 3 seconds
setInterval(nextSlide, 5000);
