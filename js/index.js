// Your code goes here

//selector for the bus div
const busImg = document.querySelector('.container .intro img')
//bus grows larger when mouse enters frame
busImg.addEventListener('mouseenter', function() {
    busImg.style.transform = "scale(1.1)";
} );
//bus returns to original size when leaving frame
busImg.addEventListener('mouseleave', function() {
    busImg.style.transform = "scale(1.0)";
} );


