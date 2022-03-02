let navLink = document.getElementsByClassName("nav-link");

document.addEventListener("DOMContentLoaded", function(){
  
  setTimeout(function(){
    // navLink[0].classList.add("nav-font")
    // navLink[1].classList.add("nav-font")
    // navLink[2].classList.add("nav-font")
    // navLink[3].classList.add("nav-font")
    for(let link of navLink){
      link.classList.add('nav-font');
    }
  },1000);
});