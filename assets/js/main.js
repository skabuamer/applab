document.getElementById('demo').addEventListener("click", vid => {
    document.getElementById("popup-video").style.display = 'block';
})

document.querySelector('#popup-video span').onclick = () => {
    document.getElementById("popup-video").style.display = 'none';
}