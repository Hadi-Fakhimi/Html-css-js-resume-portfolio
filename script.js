// \Dark and light mode

const btn = document.getElementById("modeToggle");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if(currentTheme === "dark"){

    setDarkMode();
}
btn.addEventListener("click",function(){

    setTheme();
});
function setTheme(){
    let currentTheme = document.body.getAttribute("theme");
    if(currentTheme === "dark"){
        setLightMode();
    }else{
        setDarkMode();
    }
}
function setDarkMode(){

    document.body.setAttribute("theme","dark");
    localStorage.setItem("theme","dark");

    themeIcons.forEach((icon)=>{

        icon.src = icon.getAttribute("src-dark")

    });
}
function setLightMode() {
    
    document.body.removeAttribute("theme");
    localStorage.setItem("theme","light");

    themeIcons.forEach((icon)=>{

        icon.src = icon.getAttribute("src-light")

    });
}
//toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


//scroll sections
let sections =document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () =>{

    sections.forEach(sec =>{
        let top = scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >=offset && top < offset+ height){
            //active navbar links
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
            // active sections for animation on scroll

            sec.classList.add('show-animate');
        }
        //if you want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate')
        }
    });

    //sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    //remove toggle icon and navbar when click links (scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}