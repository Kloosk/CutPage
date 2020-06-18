let cut = document.querySelector(".cut");
let menu = document.querySelector(".menu");
let inp = document.querySelector(".inp__txt");
let eve;

const hacker = () => {

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
inp.addEventListener("keypress",() => {
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

