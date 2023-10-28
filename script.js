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