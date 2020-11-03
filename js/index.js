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

//changes the map image to a cat when doubleclicked
const mapImg = document.querySelector('.img-content img')
const sneakyCat = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIVFRUXFRUVFRUVFRUQFRAVFRUXFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQFy0dHR8rLS0rLSsrNy0rKy0tLS0rKzcrKy4rLSstLS0tKy0tLS0tLSstLSstLSsrLSsrLS0tK//AABEIAL4BCQMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwEEBQAGBwj/xAA/EAACAQIEAwQGCQMEAQUAAAABAgADEQQSITEFQVEiYXGRBhMygaHRFEJSU2KSscHwI3LhBxWC8dIzQ2Oisv/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAlEQEBAAIBBQABBAMAAAAAAAAAAQIRAwQSEyExIgUUQVEyYXH/2gAMAwEAAhEDEQA/APjSxqrBQRyiSJBII1RBRY9Vk1cjlEO85RCtJW5YYEBRGLEcSojAJAnXiMYjBFLGAQMckCSiRoWI9F5J2SNEICIaKyTrR4EEpDZ6Aohwcs6AQZFoVp1oABWDkjrQSIyJKSMsdaLYQIorAZY+CyxkrMsS6S2RFssqJsUXpxDpL7LEusqVFig6xdpaqLFZZSEIsciwlWNQSdrkQqxyrOURgk2rkcFkZYUNYj0HLGIki0NTEbTfg1kV2q01zC6qxa9upsDaU6+DZPasQdmUhlPgwi8UxKqfs9k9w3H7yaasoujaHdTqreIm3ZLNxl32XVFkHI8tQRYg92uo/lpKiKWoDoBZvs/+J/aMpMD/ADaY5SxtjlKs0xJZYKw1MlaFSHaTecNYgERiiFkkCAA6xYEssIq28YDaARHIJUxvEkpXAs78huq956+ErHG1GWUx+r1LDjLnqMKadSLl+5F+sfhKbcTp3ISlf8VQ5if+IsBMapiKlVruzMdtf27pr4Th3ZvadGGEjmyztWA4dM1rEG3TfpElY+mlqPLWp8FH+YCzPl9ZNeLfaSVgkSwwijM1kMsWwllolxGSq8S8sOIh5UTVZ4u0cwg2lM6MCGgkBY6mslo5VjLQrTgJKkWkqJ1odOI0hZwllRpBNOBop22OoOh8JbweDsSt72Fx3iICS5gqlje2o67Ec5px5fwz5Mf5Vcbw8HUHUTNdSp1uD9sa+Y5z0VW5a60/deIxQU6FHB53tY+FprrbJlriyoBf2ToHGqn5HululXU7G8pOhRjYXB3BFwe4iWeFkCxUW59bA9D0keOVXlyi1Ua2+k5KgiuIUi7i5sBb39ZSp4SxO510HcZN4Vzn/wBNGvjlXQ6noINLiNMi9/gZi08M1rnfNe/dfaX/AFQDDvGg8Y/FE+atdWBEE2yFiQFB1J+H76d0TjyCoUGxuDv3fKZHErsSgbsqL2G3Qe86+AErxSF5a7ifF79ilovNtmbvPQdwmbh6eY7/AKfvHmgFUrz3Zjsv+e75zsGhDezoOuh98uRld361uG4AE2Av3nQf5m9j19VR0HdK/DcQNyco7hcmdj671GGtlXW3XpK9SHJtVa+VVPIfHcxY0jHMS85Ld3bqk1NJNSKZoDGLLRATvFF4FSpFGpKTRu0U0gtIzxkXUirw6jRWaUir4EYolcGPUSGiY1RBRY0CI0ZJIpwxCBiUlFhmLJkgRGdeHQYAgkac/DnEgwgIpdHo+niirNbUDYi+o7++T9ND31t8ZTx9Aqq1FJsTY2+qRtfukUEO5Hfe3PvnVPblvq6OqAtsNR5Hu7owYaxUjmLgbX+0P3neuAII8COn86R3rQyeGo7rnW3wlxFHToZgCPwj5/rLGIwVgdN9z3nQfCVeEYi72OgsDf8At1I99vjN3MGuTYXN7DSwAFr99yZciHlqdBSCh+0b/wBtwSIb0cxuoO9gbbAW2744a1qigWFrkDkOQ8ZqAqiFCdbX8c1h+58opDeYr1Mp77ae/YeMpU3I1bQE3vzYd0uLRzsze0L9nppoSR47dZWrIFbU7b8zf+fzSKiFVtdToN+pHeT9o9YdPFG2wXuAuQPn3mKqtrm1t02AttKjOOvj3mI2lS4tl0AJ/Wa+ErlqYJv2tTf4TzWEFzZUJvz2npFGVQLWsAJnyW6a8U3UsYio8CpWtKVfETCN7TalaV6laU6teJarKkRclp6sA1JW9ZOzx6TtYzwTUiC8EvHpOzWeBmiy0HNGluKsYDItOAmbc5YwCLXSGpiODEMCQohGJccFhqsEGWKQERlMkdTSEyw8LRLsFEJNi3TQoYW9I6aX6X1mViXy6ctrHTy5e6e4p4IBAo0BFut2/n6zzPFOGAk93M38p3THU04sst3bBPUi4lenXIJAJsevn75qpwiqR2AOfTa19AZd9KOAJw7D0nrO1TEVhmWiuWmlIaXzsQxa2YDS2pt3ybl22T+02xjcPDKx5ixseo6H4zc4RUYsSToLm2126+HP3jpF+jOF+k0jUp3vTIWom5Qt7LA/WF+c1MLgrE2XTISeu3ID3ecvG7+JlZHBAMzsxNy9zpe5sTr5zHxeJYs2u5tvva1v0m/hUamrt1v3WPLSePeuC972B3J5DX/PlCmucNqvY2tuT0H/AEL/AAnfRMwsDe+7W89Pdv8ACVcdjqnq1NNbIxIDn6+Q2Nh0vbU7m89R6KcFTG4KvUo1aiYrDqXamSrpXTKSMugKE5SBroR0OkZZzGbont5erhCPqtb7R0HuvKOIonqAOZ3+E9Ni8I6IGZLgj2gb28dwR3iYeMqA799tLeQjsCpg6gDC2uvObtbE6TAWnYZupsPduf0HnLT1DkEyzm2vHdGV8TKFWteLepFkyJF2pLQc0i86NKCZwaQZEZDLQbyJAjIV5M5RDyQDfAhqsWDGgzJvBFYYEhYxREqItGWnWnNEaVF44L0i6cYlSBmgS9wfSoJmvWj+EOfWC3vlYf5ROd/GveZsy9LH3a7foZVx6C2YgZTo1x9Yb3tyO9/HpC4fWJ7Nr3BtfqNR52t75pNh1KkNbKwANt16MORI+c9BwvFcW7dNlpko4vY72I215jSel4+n+60aeIwjKuMpU3pvQcgMi1VyVAL+F1bbw5ee45wWoHK01ZnAzDJ28y75lA1YW6CZOEwmMDBmwtZhyPqawI05EKCswzwtss+wrNx9H9AfRleF4Oq+KdQ9UXex0UAGyLf2jqfeZFTDhirqur08z9xZQxv0lLhXo+9anetQqOwIKK5qCxuDu+gGk9hwzgLBV9YyoAACq6k8rFtv1l8eHZu2+6menzLjlArRa3hflr/1Pn2IwtqLsNe0B4XIHw/efo7ifo1g3TK2axFr52HPynjcd/pYRmbCYjMjBs1OrbW+gtUQeO498eU2cyl/l5Pg9BMdwtMPRqiniKV0dTa1Wn6w1FvzAJsbjmNbz0XolwZuGYfEKzrUxVdMgVO0tJcrWZj9kZmJPuEq4H0Lr0DY4ENa2VwFqeRGvnaXK3CcebhaLqOi5Uv4knUTD9vfly/He9DfvbF4xUWjRFBT7IA3FwFAHnPB4ilnfKNBYszHUKo3J/m5A5z0XEqVQ1Xolf6gJDC4uMvtEnYKObGeex9VdadMhluDUcbVmG2Xn6sa26m56W1yq4rOxcgWstwFHQd/fuT33i6dW5Y8tdO7lJTRWY/2L0u29vBb/mEUm0zy+Kx+ksdYMNouZtEyCZF514ydecTIMgxkm8kCCoj6dOAHSWO9XG0qUd6uTtWloGdKbYsDnA/3DpF21ffI01e0clS8wKuOMBcY3WV40+WPSO9pFOrMIYljzh0sUeZi8Y8sbzVBA9cJjviLjQym2IYag+7rC8YnK9A+JlzhlTtg/wAM8muNJO2s2eFY4U3W9me/M3Sl4/bbu2HfHhj7GXJLH1PC0LFWZsuxA1JJ6gfvtNmrUtYgHKwvpyvuLX3B/aebwOJ9aLglmt2jv5nYTY4YWINMlQSboM2Yh+mlwARp4gTslc6xRrMgZ6QzMo/plhfICRnAHQ226zXPpbTRVzXZiO1lHZzaX1vtMOq7Bcy73sVtlI8bzEx1Uh7Hs/3DLa46c+c7en4ceTH3Hi/qHU8nDyfhfsfQcH6QiqLpp32vaDiKpJ9onrPP8DxCZQqXZtTtlv7zpNR2qfZX3vtFeKY5eppE6q54Td3/AMRxZc1IANz5nfuMxqWLr0LFKptzB/qC99LA6iXOKV3CAFRq2pW5G3fvMqjQZ2spUeNxN+OTt1fjh58737w3K019N6trNTUttpp75icT9La7BlFkBH1SwYeBBgYnCZRUfMvZ0tchn2GgMw6tJqhJRTpvewG197902x4eKe5ETqupyvblldPOelfHHqMaei5gPWsosaxGg9Yb3YWA02vrvMCnTLWVQWJNgANSSbC03eKcKuxb1Zcj2gtZKJ237YN7DkLQmwdPDoCyVEq1VIS5DeqRtM4YLbOwuBzCknS4nic81yV9T017uLG3+nneIsoIRCCqC2Yah2Ort4X0HcoiOU0RwkA3zED8S2+KEiJxeFI2sfCzfpqJhk6cfrPIgmS0AyFOgmFBjJAMK0i0NBACpJL1FIFGnLK05NVIYqRmSCjR2aCnnBDM5VhWBE2cxLw6UgidALKv0hMBbSJoGPZ+6I0qubbf9YuohvacG1DL75esrdomwG/XwHfA1SjhWNypCqPbqNoEvyHO56DUyVxVGn7FP1jD69S4X3UgbW/uJ8BAx9YtYbKL5V5LffxJ5mVCsBt6vhnpQxKioL22AFgPAbD3AT2mBxxqLmL5FGhbUAG2wA1Zra2/Qaz5ngMEqAVa9wDb1dJTapWvz/An4tzyvuPTcKqOxLVLAUweyOzTwqaHKejai97na+ZiBLmRafS8BxBagzKp9bbUlQ9SuoA/qIl7X+0Ld9zrABcrlYBkYaNfPbTQix5C17eM8UeM2saZK3sQ2z1LHRzb2Vv7KXPNiWO/tvRzjdDFpkaotOsbBSzACuUAzFep1HnznV03N2X38ef+odNebGdv2H8Kw/qX1JOb2SASrdwYc+42m+vEKezEA9CReVsRwk2IN0Ld2am3iOR7xaZjq6diptyN7g+BPPx1nZe3k97ePLn087e3UaXEK6tbKykbbzEqYVWJyML6ba6/8dZffEAJYMunK4vPNvimqMchJ5dm9h4nYe8zTiwY9TnvW5tXxhBaysSOuuvnKOOxGVco07ha/nNnBcNeo2Wmudu7/wBNO9mG/gLeM9Lw30Hpp28SwzHXTRQd97fAecvm58MJq1PS9Hy8t3jPTyvAPRuoUFZgDm7SKbG7aHMzqQbD7Dc9DpedjfRdizPZldtXIOjH7TqND4ge7YT6rTwKqgVDcAW5a+UzeIUSNtR5MvzE8f1ldvqsd44yPlmL4B6pSXFtN1tlbxG0+f8AGCmckKbD6ykAr/xO3wn2T0o4lkpEG1u/b39J8S4tSBqMyHW98vP/AIn6w/msz5JI2wu1RyW5h/JW/wA/GJK/9HQwSQe4/A/KSXOx18dfIzBogyJN5wEA5RLVKlAoreX6NO0VpyOoJL4p6RCpDDkSWhT07RdjLNQ3iYyY1MAzjpAAhrNnMJLHWc6wQLGQzWgB4ffpH1rcomhe+kdUF/GBiSntbfnGVWsbLsPieZkYYEAnpt3GQ9QG42gFavvpLfDqKKPXVRmUEinTP/v1ANj/APGtwW63A56LwmGLEKu5Nh75eq4hfWAJqtNbKd8qj7H43Yi7d+m14CLGDokualZj61+1YHKaSEXuSRaloNOaqNAN1nEcQDjKAFw1IiyL2fX1ORa5JI3Nzchb/WMoYqoQoS93qHM5+1mOi+86+AWV8WdkB0Xs9xP1295+AESlg4xjdidWJA7+TEDkLWUdB4RoxQzqBsmUD3G7N4klj75nF7nTYABfAfy/vh0CL6ytpe49HvTnF4Rjaq1Wnc/0qrGotr8idV06G3dPovD/APULh9df6ufDvsQ6508Qy308bHunwzPue/SMDHcx453H4nPjxzn5R99+j4LEg+pxlFhuQtQAjX6yjl5TW4d6JURbMwcfZFlTyG8/PuAx5Q6E7EHv5z3/AKGemT06mSoxKjUAnkdxN/PyWa7nN+y4Zl3du312nQSmMqKB0sAITNcWcabHmPfBw2OpVFurA/5htUFtxcfGYau/bqtkmoxcbwgqc1Gqy/hzaTDx+PKgirc94J/beavFOLBAQyEDqNp889JOJ3ByEsOl9Zr8Z/XjfSnEdtmoVHy37SZi2TvW/LfQ9/Qgecc3HLuA0B/sP1T3beEu18T2ycrX2PO46HrKmNoWGZblT/8AU9/8/wAY5+2uKhW18eu1+5hyaJvCZr7+f7GQR5/rM1hvCWDeGgiNZoTSw56zNoTQpWk1eK2ptF1HksNIkmJVLd7SM8UzXM68rSGaDHZZWUxqmasBo2tj7jAZIT6yFN7iASgtqNo3Pa/WLtcayFB1MAuYbtA25bytVexj8O+h8IiqLmBrWAORalUnULlXuLkIT4hS/lJ4aOyTcDMwW/QKCzEeFwf+MVXOWkQOdRQfBFYj4sYL1MtFBfVhU66AsAfglvfA4NamZ2qdAWUchbRB7iV8oqnzv4fOdRayP17C+ZJP/wCJwGkCGFnMusJTtIqoRrygBUfhHBrkxCmOotrAzfWfpLVPE6g+6VPHpaFYQD0PDvSavRPZcgqLb6MvIHwnpOFf6h1G7NU36N7LDxnz10BOjaRuGosdtQPfLmVTcZX0rinpAai9QeZ5+B2M8fxEXvbeBgyRpewO/Q+I298uVMObXVh4RZW08ZI8lUosrXN/1hVsQcu1xseVxLfF843ExzVkbOKtZRfTb+fGKv8AzpCdoF5KkmOpLEqJewtC8VOGUQJbpL0krhhCSnaQ0iGqEaRVQ3g1GkMbaxigYQLQ3eKlIZwMsXFpVBjAw6zRlYaI0JE5h1HnJWqOo84EYrDY+4zhT01gO6nmL+M4Vh1EDEjWBkU6ljFOw5EQlcDS484BZxakJb8Wb4ESnUf2R9kW8ySf1lmvWBHtDbrzlTTqIjOpt2G/uT9HhodJXV9LX5g+V7fqY0OLbiMj80sE3AlMVR1HnGCstvaHmIA9ktIvpIespHtDzEAVlt7Q8xEZ7HQzgb/D3xZrrp2h5iQK66doeYjBqX8tu+PouQey1r7jrK6VFP1lv4jWOSsvUEjTeMmxhah5897f5mnRxVrWbz1mVhqyk7aeP6QsVUQG6uAehMoj+MOSu3lPIV6n8M9S+JuvZYfAzzHEnGY3sD3SchFImROzCTcdZm0MorNTDoZmUqg6jzmjRxQt7Q8xFVYrqbaxNSqdhF1aw+0PMSEqDqPMSVoF4l25GRVxIB9oeYlc1QeY85UiLTs152aLWqvUecL1y9R5xk/ZH0Gl90n5F+U76DS+6T8i/KWJ0YV/oNL7pPyL8p30Gl90n5F+UsToBX+g0vuk/IvynfQaX3SfkX5SxOgFf6DS+6T8i/Kd9BpfdJ+RflLE6AVK+GoorM1NAqgsTkBsALnYSkuJw2YL6pbMEKt6rQ53ZFB07NyBvvcTWdbgg3100JB9xGolSjwqkosqaXU+0xJK1DVUkk3JzsT33gFGtjMKAhFINnAYZaV+y1N6ik6aXFNpB4jgxuqAhC5U0u0oCGobjLe+UE2l1ODURaynQqR26mmUMqgdr2bOwy7WO04cIpWIs1mUow9ZUIcFcnaGbU5dLnWwHQQCtWxOGXN/SBKhSyijqMxAGmXfXaScThdewumg/ontEOKZC9ntEMQpA2JlzEcNpuxZgSSpX23FgbXygGynQaix0i/9oo69k6/jfsnMHJXtdglgGJW1yLmAJwtTDvUemKS5kIBHqxoCiOCdOz7drH7J6SGxGFAv6sWzFRaiTmK5s2Wy9oDK2o6S0nDKYYsAQxtds75msFAzG9zoi79/U3F+E0iCCrWLFrCpUGUtmzZbN2QczXAsDeAVHxuEBIKLpqSKLFbAKxOYLawDqSe+WcSMNTZFcUlao2SmCqg1GALZV01NgT7o1+G0iCCmhDKRdho4VWGh00VfKWWpg2JAJBuLi9jtcdIBm4lqVN8rUUy+rqVM2VdqZXMLW/GJQbidEIr/AEdDfNcAKcoAVtezo1nG+n4rWvtVsAjuKjAlgrIO24XK1swKA5Tew3HISueCULWyHnf+pUJYMFUqxzXZSEUZTcdkaQCq2NoBqiiipyBbEKn9VmZ0yr35kIuf2hUq9NjSth0tVTMmiEjsZzmFtF2GbqR1l08KoZmb1SXYAN2R2gCSLjbdjrAo8HooQUVlsgpgLUqKoRQQBlDW0udbXvrvAKIxaFAwwyH+qKRGgOYsqjKCtyO1fW2xizxKjdx9HQZWC3YKq+26XZiOyLodddxzmvR4dTW1gbhy4LM7kuVyZizEljl01vpaLXhVIZrBhm3tUqKR2i1lIbsi5JsLDWARgaVGrTSotJMrori6LezAEX074/6DS+6T8i/KNpUwqhVFlUAADYACwAhwCv8AQaX3SfkX5TvoNL7pPyL8pYnQCv8AQaX3afkX5TvoNL7tPyL8pYnQCv8AQaX3SfkX5TvoNL7pPyL8pYnQCv8AQaX3SfkX5TvoNL7pPyL8pYnQD//Z'
mapImg.addEventListener('dblclick', () => 
{
    if (true === true) {
        mapImg.src = sneakyCat;
        funBus.textContent = 'I\'m a sneaky cat. Shh!';
    }
    else {
        console.log('Nope')
    }
})

//enlarge main body text when selected
const mainBodyText = document.querySelector('.container .intro p')
console.log(mainBodyText)
mainBodyText.addEventListener('select', () => 
{
    mainBodyText.style.padding = '100px';
})

//change all images on page to cats with different events
const allImgs = document.querySelectorAll('img')
const navItemBlog = document.querySelector('.main-navigation .container nav a:nth-of-type(3)');
function makeSneaky () 
{
    if (true === true) 
    {
        for (let i=0; i < allImgs.length; i++) 
        {
            allImgs[i].src = sneakyCat;
        }
    }
    else 
    {
        console.log('some other image')
    }
}

const funBus = document.querySelector('header div h1');

if (funBus.textContent === 'I\'m a sneaky cat. Shh!') 
{
    makeSneaky();
}
else {
    console.log('not very sneaky')
}

//changes background color of all divs to rebeccapurple when clicked; reverts to white when double clicked
const divs = document.querySelectorAll('div')
divs.forEach((element) => 
{
    element.addEventListener('click', (event) => 
    {
        event.target.style.backgroundColor = 'rebeccapurple'
    })
})
divs.forEach((element) =>
{
    element.addEventListener('dblclick', (event) => 
    {
        event.target.style.backgroundColor = 'white';
    })
})
//prevents default refresh of nav home nav anchor
navItemHome.addEventListener('click', (event) => 
{
    event.preventDefault();
})
