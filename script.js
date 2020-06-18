let cut = document.querySelector(".cut");
let menu = document.querySelector(".menu");
let inp = document.querySelector(".inp__txt");
let main = document.querySelector("main");
let win = document.querySelector(".win");
let animeStart = false;
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
    if(inp.value === "ggwp" || inp.value === "GGWP"){
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
    eve.target.parentElement.remove();
});
window.addEventListener("click",() => {
    menu.style.visibility = "hidden";
});

