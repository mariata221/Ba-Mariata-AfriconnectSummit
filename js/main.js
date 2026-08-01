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



// BOUTONS FILTRAGE

const filterbuttons = document.querySelectorAll(".filtre");
const catreintervenants = document.querySelectorAll(".carte");

filterbuttons.forEach(button => {
  button.addEventListener("click", () => {

    filterbuttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.name;

    catreintervenants.forEach(card => {
      const cardCategory = card.dataset.name;

      if (category =="Tous"  || cardCategory === category) {
        card.style.display ="block";
      } else {
        card.style.display = "none"
      }
    })
  })
})




  // FILTRAGES DES TABLEAU DE PLANNING DES PROGRAMME

document.addEventListener('DOMContentLoaded' , () => {
  const boutons = document.querySelectorAll('.onglet button');
  const tableaux = [
    document.querySelector('.onglet1'),
    document.querySelector('.onglet2'),
    document.querySelector('.onglet3')
  ];

  function afficherJour(numero) {
    tableaux.forEach((tab,index) => {
      tab.style.display = (index === numero - 1) ? 'block' : 'none';
    });
    boutons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.onglet button[data-jour = "${numero}"]`).classList.add('active');
  }

  boutons.forEach(btn => {
    btn.addEventListener('click' , () => {
      const jour = parseInt(btn.getAttribute('data-jour'));
      afficherJour(jour);
    });
  });

});

// DATE FICTIVE DU CONFRERENCE
// date fictive
const dateConference = new Date("2026-09-18T09:00:00").getTime();

const x = setInterval(function() {
    //  Date du jour
    const maintenant = new Date().getTime();
    
    // Distance entre maintenant et la conférence
    const distance = dateConference - maintenant;
    
    // Calculs pour jours, heures, minutes, secondes
    const elJours = document.getElementById("jours");
const elHeures = document.getElementById("heures");
const elMinutes = document.getElementById("minutes");
const elSecondes = document.getElementById("secondes");

if (elJours && elHeures && elMinutes && elSecondes) {
    const dateConference = new Date("2026-09-18T09:00:00").getTime();

    setInterval(function() {
        const maintenant = new Date().getTime();
        const distance = dateConference - maintenant;

        const jours = Math.floor(distance / (1000 * 60 * 60 * 24));
        const heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const secondes = Math.floor((distance % (1000 * 60)) / 1000);

        elJours.innerHTML = jours < 10 ? '0' + jours : jours;
        elHeures.innerHTML = heures < 10 ? '0' + heures : heures;
        elMinutes.innerHTML = minutes < 10 ? '0' + minutes : minutes;
        elSecondes.innerHTML = secondes < 10 ? '0' + secondes : secondes;
    }, 1000);
}
})

// VALIDATION DU FORMULAIRE

document.addEventListener("DOMContentLoaded", function() {
    
    const form = document.getElementById('form');
    const succesMsg = document.getElementById('succes-message');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Bloque l'envoi
        let isValid = true;

        // validation Nom complet
        const nom = document.getElementById('nomcomplet');
        if(nom.value.trim().length < 3){
            setErreur(nom, 'erreur-nomcomplet', 'Le nom doit contenir au moins 3 caractères');
            isValid = false;
        } else {
            setSucces(nom, 'erreur-nomcomplet');
        }

        // validation email
        const email = document.getElementById('email');
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!regexEmail.test(email.value)){
            setErreur(email, 'erreur-email', 'Veuillez entrer un email valide');
            isValid = false;
        } else {
            setSucces(email, 'erreur-email');
        }

        // validation numeros téléphone 
        const telephone = document.getElementById('telephone');
        const regexTel = /^[0-9]{9}$/;
        if(telephone.value.trim() === ''){
            setErreur(telephone, 'erreur-telephone', 'Le téléphone est obligatoire');
            isValid = false;
        } else if(!regexTel.test(telephone.value)){
            setErreur(telephone, 'erreur-telephone', 'Le téléphone doit avoir 9 chiffres');
            isValid = false;
        } else {
            setSucces(telephone, 'erreur-telephone');
        }

        // validation Type de participation 
        const sujet = document.getElementById('sujet');
        if(sujet.value === ''){
            setErreur(sujet, 'erreur-sujet', 'Veuillez choisir un type de participation');
            isValid = false;
        } else {
            setSucces(sujet, 'erreur-sujet');
        }

        // validation message de motivation
        const message = document.getElementById('message');
        if(message.value.trim().length < 20){
            setErreur(message, 'erreur-message', 'La motivation doit avoir au moins 20 caractères');
            isValid = false;
        } else {
            setSucces(message, 'erreur-message');
        }

        //  message de succès
        if(isValid){
            succesMsg.style.display = 'block'; 
            // Vide le formulaire
            form.reset(); 
            
            // Enlève les bordures vertes après reset
            document.querySelectorAll('.valide').forEach(el => el.classList.remove('valide'));

            // Cache le message après 5 secondes
            setTimeout(() => {
                succesMsg.style.display = 'none';
            }, 5000);
        }
    });

    // Fonctions utilitaires
    function setErreur(input, idErreur, message){
        const spanErreur = document.getElementById(idErreur);
        spanErreur.innerText = message;
        input.classList.add('erreur-input');
        input.classList.remove('valide');
    }

    function setSucces(input, idErreur){
        const spanErreur = document.getElementById(idErreur);
        spanErreur.innerText = '';
        input.classList.remove('erreur-input');
        input.classList.add('valide');
    }
});