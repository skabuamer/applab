document.getElementById('demo').addEventListener("click", vid => {
    document.getElementById("popup-video").style.display = 'block';
})

document.querySelector('#popup-video span').onclick = () => {
    document.getElementById("popup-video").style.display = 'none';
}

// document.querySelectorAll("#portfolio-section .row img").forEach(imag => {
//     imag.onclick = () => {
//         document.querySelector('.popup-image').style.display = 'block';
//         document.querySelector('.popup-image img').src = imag.getAttribute('src');
//     }
// })

// document.querySelector('.single-portfolio-info svg').onclick = () => {
//     document.getElementById("popup-image").style.display = 'block';
// }

// document.querySelectorAll('.single-portfolio img').forEach(imag => {
//     console.log(imag.outerHTML)
//     // document.getElementById("popup-image").style.display = 'block';

//     // document.querySelectorAll("#portfolio-section .row img").forEach(imag => {
//         imag.onclick = () => {
//             document.querySelector('.popup-image').style.display = 'block';
//             document.querySelector('.popup-image img').src = imag.getAttribute('src');
//         }
//     // })
// })
