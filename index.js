let scrollText = document.querySelector(".scroll-text");
let secText = document.querySelector(".sec-text")
window.onscroll= ()=>{
    let pos = window.scrollY;
    scrollText.style.left = `-${pos/2}px`
    secText.style.right = `-${pos/2}px`
    
}
var typed = new Typed('#typed', {
    strings: ['WEB DEVELOPER', 'WEB DESIGNER', 'REACT DEVELOPER'],
    typeSpeed: 100,
    loop: true
  });

