
  AOS.init();

function toggleFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}


const carousel = document.querySelector("#skills"),
firstImg = document.querySelectorAll(".skill")[0];
arrowIcons  = document.querySelectorAll(".carousel i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 200;

arrowIcons.forEach(icon =>{
    icon.addEventListener("click", () => {
        carousel.scrollLeft+= icon.id == "left" ?  -firstImgWidth : firstImgWidth;
    })
})

let dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) =>{
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft =  prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);



const overlayImages = document.querySelectorAll('.overlay-img');

overlayImages.forEach((image) => {
    image.addEventListener('click', () => {
        closeOpenOverlay();

        const overlay = image.nextElementSibling;

        overlay.classList.add('show');

        centerOverlay(overlay);
    });
});

const closeButtons = document.querySelectorAll('.close-btn');

closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const overlay = button.parentNode;

        overlay.classList.remove('show');
    });
});

function closeOpenOverlay() {
    const openOverlay = document.querySelector('.overlay.show');
    if (openOverlay) {
        openOverlay.classList.remove('show');
    }
}

