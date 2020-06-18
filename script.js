// disintegrate.init();
let cut = document.querySelector(".cut");
let menu = document.querySelector(".menu");
let inp = document.querySelector(".inp__txt");
let main = document.querySelector("main");
let win = document.querySelector(".win");
let cutTxt = document.querySelector(".cutTxt");
let header = document.querySelector("header");
let char2 = document.querySelector(".char2");
let nav = document.querySelector("nav");
let bodyRotate = document.querySelector("body");

let animeStart = false;
let currentCut = 0;
let eve;
const anime = () => {
   win.style.transitionDuration = "0s";
   win.style.transitionDelay = "0s";
    setInterval(() => {
        console.log("work");
        animeStart = !animeStart;
        animeStart ? win.style.transform = `translate(0vw,0vh)` : win.style.transform = `translate(-0.5vw,-0.5vh)`;
    },500)


};
const hacker = () => {
    let inpVal = inp.value.toLowerCase();
    if(inpVal === "ggwp"){
        main.style.transform = `translate(-50%,130vh)`;
        setTimeout(() => {
            main.style.transform = `translate(-50%,0)`;
            win.style.transform = `translate(-1vw,-1vh)`;
            setTimeout(() => {
                anime();
            },2500)
        },2500);
    }
};
nav.addEventListener("click",() => {
   bodyRotate.style.transform = `translateY(100vh) rotate(180deg) `;
},{once:true});
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
    console.log(e);
    menu.style.top = `${e.clientY}px`;
    menu.style.left = `${e.clientX}px`;
    menu.style.visibility = "visible";
    eve = e;
});
let rotateInp = 10; // deg
let paddingInp = 60; //%
inp.addEventListener("keydown",e => {
    if((e.key === "Backspace") && (rotateInp > 10)){
        console.log(inp.value.length);
        paddingInp -= 10;
        rotateInp -= 20;
        inp.style.paddingLeft = `${paddingInp}%`;
        inp.style.transform = `rotate(${rotateInp}deg)`;
    }
});
inp.addEventListener("keyup",() => {
    if(rotateInp < 90) {
        paddingInp += 10;
        rotateInp += 20;
        inp.style.paddingLeft = `${paddingInp}%`;
        inp.style.transform = `rotate(${rotateInp}deg)`;
        if(rotateInp === 90){
            hacker();
        }
    }
});
cut.addEventListener("click",() => {
    console.log(eve.target.parentElement);
    // const disObj = disintegrate.getDisObj(eve.target);
    // disintegrate.createSimultaneousParticles(disObj);
    eve.target.parentElement.remove();
    currentCut++;
    cutTxt.innerText = `Current cut: ${currentCut}`;
});
window.addEventListener("click",() => {
    menu.style.visibility = "hidden";
});

