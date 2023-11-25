

const text = document.querySelector('#text');
const leaf = document.querySelector('#leaf');
const hill1 = document.querySelector('#hill1');
const hill4 = document.querySelector('#hill4');
const hill5 = document.querySelector('#hill5');

// Window Scroll Event Listener
window.addEventListener('scroll', () => {

    let value = window.scrollY;
    //console.log(value);

    // Text scroll animation
    text.style.marginTop = `${value * 2}px`;

    // Leaf scroll animation
    leaf.style.top = `${value * -1.5}px`;
    leaf.style.left = `${value * 1.5}px`;

    // Hills scroll animations
    hill5.style.left = `${value * 1.5}px`;
    hill4.style.left = `${value * -1.5}px`;
    hill1.style.top = `${value * 1}px`;
    
    
})

