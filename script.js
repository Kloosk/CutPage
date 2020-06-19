// disintegrate.init();
let menu = document.querySelector(".menu");
let inp = document.querySelector(".inp__txt");
let main = document.querySelector("main");
let win = document.querySelector(".win");
let cutTxt = document.querySelector(".cutTxt");
let header = document.querySelector("header");
let char2 = document.querySelector(".char2");

let animeStart = false;
let currentCut = 0;
let eve;
const anime = () => {
   win.style.transitionDuration = "0s";
   win.style.transitionDelay = "0s";
    setInterval(() => {
        animeStart = !animeStart;
        animeStart ? win.style.transform = `translate(0vw,-102vh)` : win.style.transform = `translate(-0.5vw,-101.5vh)`;
    },500)
};
const hacker = () => {
    let inpVal = inp.value.toLowerCase();
    if(inpVal === "ggwp"){
        main.style.transform = `translate(-50%,130vh)`;
        setTimeout(() => {
            main.style.transform = `translate(-50%,0)`;
            win.style.transform = `translate(0vw,-102vh)`;
            setTimeout(() => {
                anime();
            },2500)
        },2500);
    }
    else{
        inp.value = "";
        paddingInp = 60;
        rotateInp = 10;
        inp.style.paddingLeft = `60%`;
        inp.style.transform = `rotate(10deg)`;
    }
};
char2.addEventListener("click",() => {
    char2.style.transform =  `translateX(-150vw) rotate(360deg)`;
}, {once : true});
header.addEventListener("click",() => {
   header.style.transform = "translateX(-100vw)";
   setTimeout(() => {
       header.style.transform = "translateX(100vw)";
       setTimeout(() => {
           char2.style.transform =  `translateX(-150vw) rotate(-90deg)`;
           header.style.transform = "translateX(-50%)";
       },1000);
   },1000);
}, {once : true});
document.addEventListener("contextmenu",e => {
    e.preventDefault();
    menu.style.top = `${e.clientY}px`;
    menu.style.left = `${e.clientX}px`;
    menu.style.visibility = "visible";
    eve = e;
});
let rotateInp = 10; // deg
let paddingInp = 60; //%
inp.addEventListener("keyup",e => {
    if((e.key !== "Backspace") && (rotateInp < 90)) {
        paddingInp += 10;
        rotateInp += 20;
        inp.style.paddingLeft = `${paddingInp}%`;
        inp.style.transform = `rotate(${rotateInp}deg)`;
        if(rotateInp === 90){
            hacker();
        }
    }
    else if((e.key === "Backspace") && (rotateInp > 10)){
        paddingInp -= 10;
        rotateInp -= 20;
        inp.style.paddingLeft = `${paddingInp}%`;
        inp.style.transform = `rotate(${rotateInp}deg)`;
    }
});
menu.addEventListener("click",() => {
    // const disObj = disintegrate.getDisObj(eve.target);
    // disintegrate.createSimultaneousParticles(disObj);
    eve.target.parentElement.remove();
    currentCut++;
    cutTxt.innerText = `Current cut: ${currentCut}`;
});
window.addEventListener("click",() => {
    menu.style.visibility = "hidden";
});

