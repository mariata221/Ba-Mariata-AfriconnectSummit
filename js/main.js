// MENU HAMBURGER
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

// NAVBAR AU SCROLL


const nav = document.querySelector('nav');
window.addEventListener('scroll',() => {
    if (window.scrollY >80){
        nav.classList.add('scrolled');
  }else{
    nav.classList.remove('scrolled');
}
} );


//BUTTON MODE JOURS/NUITS

const toggleBtn = document.getElementById('theme-toggle');

if(localStorage.getItem('theme')==='dark'){
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = '🌙';
}
toggleBtn.addEventListener('click',()=> {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent ='🌙';
    }else{
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent="🔆"
    }
}
);




// BOUTONS RETOURS EN HAUT
const back = document.getElementById('back');
window.addEventListener('scroll',() => {
    if (window.scrollY >300) {
        back.classList.add('show')
   }else {
        back.classList.remove('show')
    }
}  
);
if (back){
    back.addEventListener('click', () =>{
        window.scrollTo({ top : 0,
             behavior: 'smooth'});
    }
    );
};


// CONTER ANIMES

const counters = document.querySelectorAll('.counter');
const countObserver = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            const target = entry.target;
            const finalValue = parseInt(target.dataset.target);
            let current = 0;
            const increment = finalValue / 100;

            const timer = setInterval( () => {
                current += increment;
                if (current >= finalValue){ 

                current = finalValue;
                clearInterval(timer);
            }
            target.textContent = '+' + Math.floor(current);
        }, 20);
        countObserver.unobserve(target);
    }
});
 });
 counters.forEach(counter => countObserver.observe(counter));


 // FADE-IN

 const fadeElements = document.querySelectorAll('.fade-in');
 if (fadeElements.length > 0) {
    const fade0bserver = new IntersectionObserver((entries)=>{
        entries.forEach((entry) => {
        if (entry.isIntersecting){entry.target.classList.add('visible');
            fade0bserver.unobserve(entry.target);
        }
    });
 }, { threshold: 0.15});
 fadeElements.forEach((el) => fade0bserver.observe(el)); 
}

