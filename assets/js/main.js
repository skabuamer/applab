document.getElementById('demo').addEventListener("click", vid => {
    document.getElementById("popup-video").style.display = 'block';
})

document.querySelector('#popup-video span').onclick = () => {
    document.getElementById("popup-video").style.display = 'none';
}


const popupImage = document.getElementById('popup-image');
const selectedImage = document.getElementById('selected-img');
const expand = document.querySelectorAll('.single-portfolio-info svg');


for (let i = 0; i < expand.length; i++) {
    const element = expand[i];
    element.addEventListener('click', () => {
        popupImage.style.display = 'block';
        selectedImage.src = `assets/img/portfolios/portfolio-${i}.jpg`
    })
}

document.querySelector('#popup-image span').onclick = () => {
    document.getElementById("popup-image").style.display = 'none';
}
