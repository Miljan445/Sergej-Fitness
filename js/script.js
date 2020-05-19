let icon = document.querySelector(".ham");
let hamMenu = document.querySelector(".menu");
let lineOne = document.getElementsByClassName("lines")[0];
let lineTwo = document.getElementsByClassName("lines")[1];
let lineThree = document.getElementsByClassName("lines")[2];
let open = false;
icon.addEventListener("click",()=>{
if(open===false){
    hamMenu.className += " slideIn";
    hamMenu.classList.remove("slideOut");
    lineOne.className += " shrink";
    lineOne.classList.remove("expand");
    lineTwo.className += " rotateOne";
    lineTwo.classList.remove("rotateOneReverse");
    lineThree.className += " rotateTwo";
    lineThree.classList.remove("rotateTwoReverse");
    open=true;
}
else{
    hamMenu.classList.toggle("slideOut");
    hamMenu.classList.remove("slideIn");
    lineOne.classList.toggle("expand");
    lineOne.classList.remove("shrink");
    lineTwo.classList.toggle("rotateOneReverse");
    lineTwo.classList.remove("rotateOne");
    lineThree.classList.toggle("rotateTwoReverse");
    lineThree.classList.remove("rotateTwo");
    open=false;
}
})