// Your code goes here

//selector for the bus div
const busImg = document.querySelector('.container .intro img')
//bus grows larger when mouse enters frame
busImg.addEventListener('mouseenter', function() {
    busImg.style.transform = "scale(1.1)";
    this.style.transition = 'transform 1s'
} );
//bus returns to original size when leaving frame
busImg.addEventListener('mouseleave', function() {
    busImg.style.transform = "scale(1.0)";
} );

//change color of nav items when clicked
const navItems = document.querySelectorAll('.main-navigation .container nav a')
console.log(navItems)
navItems.forEach((item) => 
{
    item.addEventListener('click',() =>
    {
        item.style.color = "dodgerblue";
    })
})

//Change text of 'home' nav item when loading is complete after clicking
const navItemHome = document.querySelector('.main-navigation .container nav a')
// console.log(navItemHome)
navItemHome.addEventListener('click', () => 
{
    navItemHome.textContent = 'There. Now leave me alone.';
})
//changes 'home' nav item background to pink when it receives focus.. whatever that means
navItemHome.addEventListener('focus', (event) =>
{
    event.target.style.background = 'pink';
})

//changes text in 'welcome to fun bus' when 'wheel' event is detected in body of document
const bodyListener = document.querySelector('body');
const welcomeFunBus = document.querySelector('.container .intro h2');
bodyListener.addEventListener('wheel', () => 
{
    welcomeFunBus.textContent = 'Welcome To Fun Bus! Now we\'re wheelin!'
})

//makes 'Fun Bus' HUGE!
const funBus = document.querySelector('header div h1')
const windowListener = document.querySelector('window');
windowListener.addEventListener('resize', () => 
{
    console.log('resize fired');
})