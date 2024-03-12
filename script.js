document.querySelector(".work-done-1 .card-four").addEventListener("mouseenter", function(){
    document.querySelector(".work-done-1 .card-one").style.transform = "perspective(1000px) rotateX(-20deg)"; 
    document.querySelector(".work-done-1 .card-two").style.transform = "perspective(1000px) rotateX(-30deg)"; 
    document.querySelector(".work-done-1 .card-three").style.transform = "perspective(1000px) rotateX(-40deg)"; 
    document.querySelector(".work-done-1 .card-four").style.transform = "perspective(1000px) rotateX(-50deg)"; 
})

document.querySelector(".work-done-1 .card-four").addEventListener("mouseleave", function(){
    document.querySelector(".work-done-1 .card-one").style.transform = "perspective(1000px) rotateX(0deg)"; 
    document.querySelector(".work-done-1 .card-two").style.transform = "perspective(1000px) rotateX(0deg)"; 
    document.querySelector(".work-done-1 .card-three").style.transform = "perspective(1000px) rotateX(0deg)"; 
    document.querySelector(".work-done-1 .card-four").style.transform = "perspective(1000px) rotateX(0deg)"; 
})


document.querySelector(".work-done-2 .card-four").addEventListener("mouseenter", function(){
    document.querySelector(".work-done-2 .card-one").style.transform = "perspective(1000px) rotateX(-20deg)"; 
    document.querySelector(".work-done-2 .card-two").style.transform = "perspective(1000px) rotateX(-30deg)"; 
    document.querySelector(".work-done-2 .card-three").style.transform = "perspective(1000px) rotateX(-40deg)"; 
    document.querySelector(".work-done-2 .card-four").style.transform = "perspective(1000px) rotateX(-50deg)"; 
})

document.querySelector(".work-done-2 .card-four").addEventListener("mouseleave", function(){
    document.querySelector(".work-done-2 .card-one").style.transform = "perspective(1000px) rotateX(0deg)"; 
    document.querySelector(".work-done-2 .card-two").style.transform = "perspective(1000px) rotateX(0deg)"; 
    document.querySelector(".work-done-2 .card-three").style.transform = "perspective(1000px) rotateX(0deg)"; 
    document.querySelector(".work-done-2 .card-four").style.transform = "perspective(1000px) rotateX(0deg)"; 
})

document.querySelector(".work-done-3 .card-four").addEventListener("mouseenter", function(){
    document.querySelector(".work-done-3 .card-one").style.transform = "perspective(1000px) rotateX(-20deg)"; 
    document.querySelector(".work-done-3 .card-two").style.transform = "perspective(1000px) rotateX(-30deg)"; 
    document.querySelector(".work-done-3 .card-three").style.transform = "perspective(1000px) rotateX(-40deg)"; 
    document.querySelector(".work-done-3 .card-four").style.transform = "perspective(1000px) rotateX(-50deg)"; 
})

document.querySelector(".work-done-3 .card-four").addEventListener("mouseleave", function(){
    document.querySelector(".work-done-3 .card-one").style.transform = "perspective(1000px) rotateX(0deg)"; 
    document.querySelector(".work-done-3 .card-two").style.transform = "perspective(1000px) rotateX(0deg)"; 
    document.querySelector(".work-done-3 .card-three").style.transform = "perspective(1000px) rotateX(0deg)"; 
    document.querySelector(".work-done-3 .card-four").style.transform = "perspective(1000px) rotateX(0deg)"; 
})

document.querySelector(".work-done-4 .card-four").addEventListener("mouseenter", function(){
    document.querySelector(".work-done-4 .card-one").style.transform = "perspective(1000px) rotateX(-20deg)"; 
    document.querySelector(".work-done-4 .card-two").style.transform = "perspective(1000px) rotateX(-30deg)"; 
    document.querySelector(".work-done-4 .card-three").style.transform = "perspective(1000px) rotateX(-40deg)"; 
    document.querySelector(".work-done-4 .card-four").style.transform = "perspective(1000px) rotateX(-50deg)"; 
})

document.querySelector(".work-done-4 .card-four").addEventListener("mouseleave", function(){
    document.querySelector(".work-done-4 .card-one").style.transform = "perspective(1000px) rotateX(0deg)"; 
    document.querySelector(".work-done-4 .card-two").style.transform = "perspective(1000px) rotateX(0deg)"; 
    document.querySelector(".work-done-4 .card-three").style.transform = "perspective(1000px) rotateX(0deg)"; 
    document.querySelector(".work-done-4 .card-four").style.transform = "perspective(1000px) rotateX(0deg)"; 
})


var tl = gsap.timeline();

tl.to(".loading .line",{
    width: "100%",
})
.to(".loading .upper",{
    height: "0%",
    delay: 3,
},'s')
.to(".loading .lower",{
    height: "0%",
    delay: 3,
},'s')
.to(".loading",{
    display: "none",
    delay: 0.5,
})