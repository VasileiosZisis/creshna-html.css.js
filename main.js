const header = document.querySelector('header');

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const animation = document.querySelectorAll('.animation');

const modalEle = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-content');
const close = document.querySelector('.close');
const modalIMG = document.querySelectorAll('.modal-IMG');

const mybutton = document.querySelector('.arrow-top');

// NAVBAR STICKY    
window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 0);
});

// HAMBURGER MENU
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// NO DRAGGING
window.ondragstart = () => {
     return false; 
    }

// ANIMATION
observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
        entry.target.classList.add('animate');
        }
    })
})
  
animation.forEach(path => {
    observer.observe(path);
})

// MODAL BOX
modalIMG.forEach(item => {
   item.addEventListener("click", event => {
      modalEle.style.display = "block";
      modalImage.src = event.target.src;
      document.body.style.overflow = "hidden";
   });
});

close.addEventListener("click", () => {
   modalEle.style.display = "none";
   document.body.style.overflow = "visible";
});

// SLIDER
var elms = document.getElementsByClassName( 'splide' );
for ( var i = 0, len = elms.length; i < len; i++ ) {
	new Splide( elms[ i ], {
  type   : 'slide',
  perMove: 1,
  perPage: 4,
  breakpoints: {
		500: {
			perPage: 1,
		},
	},
  fixedHeight: '300px',
  fixedWidth: '300px'
  } ).mount();
}

// BACK TO TOP
$(document).ready(function($) {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 900) {
        $(mybutton).fadeIn('slow');
    } else {
          $(mybutton).fadeOut('slow');
    }
  });
$(mybutton).click(function(){
  $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });
});
  
//SMOOTH SCROLL
$(document).ready(function() {
  $("nav a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
  
      var hash = this.hash;
  
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });
});