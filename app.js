const features = document.getElementById('features').addEventListener('click', displayDropdownFeat);
const featuresContainer = document.getElementById('features-container');
const company = document.getElementById('company').addEventListener('click', displayDropdownComp);
const companyContainer = document.querySelector('.dropdown-container-company');

function displayDropdownFeat() {
    featuresContainer.classList.toggle("show")

}

function displayDropdownComp() {
    companyContainer.classList.toggle("show")

}
