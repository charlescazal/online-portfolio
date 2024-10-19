const btnMenu = document.querySelector('.btn-menu'),
    ligne = document.querySelector('.cont-ligne'),
    menu = document.querySelector('header'),
    home = document.querySelector('.home'),
    cvdownload = document.querySelector('#cvdownload'),
    tabs = document.querySelector('.tabs'),
    allItemNav = document.querySelectorAll('.tabs li'),
    portFilter = document.querySelectorAll('.filter li'),
    portBox = document.querySelectorAll('.cont-portfolio .box'),
    preloader = document.querySelector('#preloader'),
    form = document.querySelector('form'),
    input_fields = document.querySelectorAll('input');


// SECTION MENU BURGER
// Clic sur le bouton de menu
btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('ouvert');
    ligne.classList.toggle('active');
    menu.classList.toggle('menu-visible');
    tabs.classList.toggle('active');
});
// Clic sur un élément de menu
home.addEventListener('click', () => {
    menu.classList.toggle('menu-visible');
    ligne.classList.toggle('active');
    tabs.classList.toggle('active');
    btnMenu.classList.toggle('ouvert');
});
cvdownload.addEventListener('click', () => {
    menu.classList.toggle('menu-visible');
    ligne.classList.toggle('active');
    tabs.classList.toggle('active');
    btnMenu.classList.toggle('ouvert');
});
allItemNav.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('menu-visible');
        ligne.classList.toggle('active');
        tabs.classList.toggle('active');
        btnMenu.classList.toggle('ouvert');
    })
});

// Loader au chargement du site
window.addEventListener('load', () => {
    const fadeOutEffect = setInterval(() => {
        preloader.classList.add('hide');
        clearInterval(fadeOutEffect);
    }, 1000);
});


// Animation typewriter accueil
const txtAnim = document.querySelector('.txt-animation');
let typewriter = new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 20
})

typewriter
    .pauseFor(1000)
    .changeDelay(20)
    .typeString('Je m\'appelle <strong>Charles Cazal</strong>, et je suis <br>')
    .typeString('<strong> Développeur Full-Stack</strong>')
    .pauseFor(1000)
    .deleteChars(10)
    .typeString('<span style="color: #27ae60;"><strong> CSS</strong></span>')
    .pauseFor(1000)
    .deleteChars(3)
    .typeString('<span style="color: #EA39FF;"><strong> PhP</strong></span>')
    .pauseFor(1000)
    .deleteChars(3)
    .typeString('<span style="color: midnightblue;"><strong> React</strong></span>')
    .pauseFor(1000)
    .deleteChars(6)
    .typeString('<span style="color: #ff6910;"><strong> JavaScript</strong></span>')
    .start();

// SECTION FORMULAIRE DE CONTACT
// Animation contact
for (let i = 0; i < input_fields.length; i++) {
    let field = input_fields[i];

    field.addEventListener('input', (e) => {
        if (e.target.value !== '') {
            e.target.parentNode.classList.add('animation');
        } else if (e.target.value == '') {
            e.target.parentNode.classList.remove('animation');
        }
    })
}
// Envoi mail par formulaire de contact
emailjs.init({ publicKey: "bacOkN5u4y3w6k5HT" });
form.addEventListener("submit", (e) => {
    e.preventDefault();
    emailjs.sendForm('contact_service', 'contact_form', 'form')
        .then(() => {
            console.log('Success');
        }, (error) => {
            console.log('Fail: ', error);
        })
});

// SECTION TRI PORTFOLIO
portFilter.forEach((li) => {
    li.addEventListener('click', (e) => {
        portFilter.forEach((li) => {
            li.classList.remove('active');
        });
        li.classList.add('active');
        portBox.forEach((box) => {
            box.classList.remove('active');
        });
        if (e.currentTarget.dataset.profile === 'all') {
            portBox.forEach((box) => {
                box.classList.add('active');
            });
        } else {
            // Selectionne toutes les box qui ont le même dataset et ajoute .active
            document.querySelectorAll('.' + e.currentTarget.dataset.profile).forEach((el) => {
                el.classList.add('active');
            });
        }
    });
});

// SKILLBARS
let progress = document.querySelectorAll('.skill-bar span'),
    spans = document.querySelectorAll('.skill-title span');
progress.forEach((prog) => {
    prog.style.width = prog.dataset.width;
});
spans.forEach((span) => {
    span.style.left = span.dataset.num;
    span.style.opacity = '1';
    span.style.visibility = 'visible';
})



/*



// Anim GSAP + Scrollmagic accueil
const navbar = document.querySelector('.nav-gauche');
const titre = document.querySelector('h1');
const btn = document.querySelectorAll('.btn-acc');
const btnMedias = document.querySelectorAll('.media');
const btnRondAccueil = document.querySelector('.btn-rond');
const TL1 = gsap.timeline({ paused: true });

TL1
    .to(navbar, { left: '0px', ease: Power3.easeOut, duration: 0.6 })
    .from(titre, { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4 })
    .staggerFrom(btn, 1, { opacity: 0 }, 0.2, '-=0.30')
    .staggerFrom(btnMedias, 1, { opacity: 0 }, 0.2, '-=0.75')
    .from(btnRondAccueil, {y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4}, '-=1')

window.addEventListener('load', () => {
    TL1.play();
})

// Animation Scrollmagic GSAP presentation
const presContainer = document.querySelector('.presentation');
const titrePres = document.querySelector('.titre-pres');
const presGauche = document.querySelector('.pres-gauche');
const listePres = document.querySelectorAll('.item-liste');

const tlpres = new TimelineMax();

tlpres
    .from(titrePres, { y: -200, opacity: 0, duration: 0.6 })
    .from(presGauche, { y: -20, opacity: 0, duration: 0.6 }, '-=0.5')
    .staggerFrom(listePres, 1, { opacity: 0 }, 0.2, '-=0.5');

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: presContainer,
    triggerHook: 0.5,
    reverse: false
})
    .setTween(tlpres)
    .addTo(controller)


//Animation Portfolio
const pfCtnr = document.querySelector('.portfolio');
const titrePF = document.querySelector('.titre-port');
const itemPF = document.querySelectorAll('.vague1');

const tlPF = new TimelineMax();

tlPF
    .from(titrePF, { y: -50, opacity: 0, duration: 0.5 })
    .staggerFrom(itemPF, 1, { opacity: 0 }, 0.2, '-=0.5')

const scene2 = new ScrollMagic.Scene({
    triggerElement: pfCtnr,
    triggerHook: 0.5,
    reverse: false
})
    .setTween(tlPF)
    .addTo(controller)

//vague 2
const itemPF2 = document.querySelectorAll('.vague2');

const tlPF2 = new TimelineMax();

tlPF2
    .staggerFrom(itemPF2, 1, { opacity: 0 }, 0.2, '-=0.5')

const scene3 = new ScrollMagic.Scene({
    triggerElement: itemPF,
    triggerHook: 0.3,
    reverse: false
})
    .setTween(tlPF2)
    .addTo(controller)

//vague 3
const itemPF3 = document.querySelectorAll('.vague3');

const tlPF3 = new TimelineMax();

tlPF3
    .staggerFrom(itemPF3, 1, { opacity: 0 }, 0.2, '-=0.5')

const scene4 = new ScrollMagic.Scene({
    triggerElement: itemPF2,
    triggerHook: 0.3,
    reverse: false
})
    .setTween(tlPF3)
    .addTo(controller)


//Animations Compétences
const sectionComp = document.querySelector('.section-range');
const titreComp = document.querySelector('.titre-exp');
const allLabel = document.querySelectorAll('.label-skill');
const allPourcent = document.querySelectorAll('.number-skill');
const allBarres = document.querySelectorAll('.barre-skill');
const allShadowBarres = document.querySelectorAll('.barre-grise');

const tlComp = new TimelineMax();

tlComp
    .from(titreComp, { opacity: 0, duration: 0.6 })
    .staggerFrom(allLabel, 0.5, { y: -50, opacity: 0 }, 0.1, '-=0.5')
    .staggerFrom(allPourcent, 0.5, { y: -10, opacity: 0 }, 0.1, '-=1')
    .staggerFrom(allShadowBarres, 0.5, { y: -10, opacity: 0 }, 0.1, '-=1')
    .staggerFrom(allBarres, 0.5, { y: -10, opacity: 0 }, 0.1, '-=1');

const scene5 = new ScrollMagic.Scene({
    triggerElement: sectionComp,
    reverse: false
}).setTween(tlComp).addTo(controller);

 */