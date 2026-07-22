document.addEventListener('DOMContentLoaded', () => {
const toggle = document.querySelector('.navbar-toggle');
const linkNav = document.querySelector('.linkNav');
toggle.addEventListener('click', () =>{
    linkNav.classList.toggle('active');
    
});
document.querySelectorAll('.linkNav a') .forEach(link => {
        link.addEventListener('click', () => { 
        linkNav.classList.remove('active');
        });
    });

});