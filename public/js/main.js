let menuOpen =document.querySelector(".menu__open");
let menuClose = document.querySelector(".menu__close");
let sidebar = document.querySelector(".sidebar");
let main = document.querySelector(".main");

menuOpen.addEventListener("click",function(){

    sidebar.style.cssText = "display:block;position: absolute;top: 0;left: 0;z-index: 9999;min-width: 19.5rem";
    // pose =true
})
menuClose.addEventListener("click" , function(){
    sidebar.style.display = "none"
})
