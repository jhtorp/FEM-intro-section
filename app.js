const features = document.getElementById('features').addEventListener('click', displayDropdownFeat);
const featuresContainer = document.getElementById('features-container');
const rotateArrowFeat = document.querySelector('.arrow-icon-feat');

const company = document.getElementById('company').addEventListener('click', displayDropdownComp);
const companyContainer = document.querySelector('.dropdown-container-company');
const rotateArrowComp = document.querySelector('.arrow-icon-comp');

function displayDropdownFeat() {
    featuresContainer.classList.toggle("show")
    rotateArrowFeat.classList.toggle("arrowAnimation")

}

function displayDropdownComp() {
    companyContainer.classList.toggle("show")
    rotateArrowComp.classList.toggle("arrowAnimation")

}


document.addEventListener('DOMContentLoaded', burgerDrop)
function burgerDrop() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-container-flex');
    const darkBg = document.querySelector('.page-mask');
    burger.addEventListener('click', () => {
        nav.classList.toggle('showBurger');
        burger.classList.toggle('showBurger');
        darkBg.classList.toggle('showDarkBg');
    })

}
