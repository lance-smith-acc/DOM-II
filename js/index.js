// Your code goes here

// 1 and 2
const funBus = document.querySelector(".intro img");
funBus.addEventListener('click', () => {
    funBus.src = "https://farm1.staticflickr.com/540/20423760052_d6b2b0025c_b.jpg";
})
funBus.addEventListener('dblclick', () => {
    funBus.src = "img/fun-bus.jpg";
})


// 3 and 4
document.querySelectorAll("nav a").forEach(element => {
    element.addEventListener("mouseover", function(event){
        element.style.backgroundColor = "hotpink";
        event.preventDefault;
    })
    element.addEventListener("mouseleave", function(event){
        element.style.backgroundColor = "white";
        event.preventDefault;
    })
})



// 5 and 6

let imgSrcs = [];

document.querySelectorAll("img").forEach(function(element,index){
    document.addEventListener("keydown", event => {
    if (event.key == 's'){
        event.stopPropagation();
        element.src = "https://farm1.staticflickr.com/44/131421682_4ca19817f1_b.jpg";
    }
    })
    document.addEventListener("keyup", () => {
        event.stopPropagation();
        element.src = imgSrcs[index];
    })
    imgSrcs.push(`${element.src}`);
    
})

// 7
const logoHead = document.querySelector(".logo-heading");
window.addEventListener("resize", () => {
    logoHead.style.color = "hotpink";
})


// 8
document.querySelectorAll(".destination p").forEach(element => {
    window.addEventListener("wheel", function(event){
    scale += event.deltaY * -0.01;
    element.style.fontSize = `${scale}px`;
    console.log(scale);
})
}) 
let scale = 26;


// 9
document.querySelectorAll(".img-content img").forEach(function(element){
    element.addEventListener("dblclick", event => {
        element.remove();
        event.stopPropagation();
    })
})

// 10
const bodyColor = document.querySelector('body')
window.addEventListener('scroll', () => {
    bodyColor.style.backgroundColor = "green";
})