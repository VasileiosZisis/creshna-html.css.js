const header = document.querySelector('header');

const hamMenu = document.querySelector(".hamMenu");
const links = document.querySelectorAll("nav li");
const mediaQuery = window.matchMedia('(min-device-width: 600px)');

const animation = document.querySelectorAll('.animation');

const modalEle = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-content');
const close = document.querySelector('.close');
const modalIMG = document.querySelectorAll('.modalIMG')

const slider = document.querySelectorAll('.photosGrid');
let isDown = false;
let startX;
let scrollLeft;

hamMenu.addEventListener("click", function onClick() {
  console.log(hamMenu);
  for (let i = 0; i < links.length; i++) {
    if(links[i].style.display === "none") {
      links[i].style.display = "flex";
    }
    else {
      links[i].style.display = "none";
    }
  }  
})

// NO DRAGGING
window.ondragstart = () => {
     return false; 
    }

// NAVBAR STICKY    
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);
});

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
slider.forEach(item => {
  item.addEventListener('mousedown', (e) => {
  isDown = true;
  // item.classList.add('active');
  startX = e.pageX - item.offsetLeft;
  scrollLeft = item.scrollLeft;
  })
});
 slider.forEach(item => {
   item.addEventListener('mouseleave', () => {
   isDown = false;
  //  item.classList.remove('active');
   })
});
 slider.forEach(item => {
   item.addEventListener('mouseup', () => {
   isDown = false;
  //  item.classList.remove('active');
   })
});
slider.forEach(item => {
  item.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - item.offsetLeft;
  const walk = (x - startX) * 1; //scroll-fast
  item.scrollLeft = scrollLeft - walk;
  })
});

// BACK TO TOP
$(document).ready(function($) {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
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
  $("a").on('click', function(event) {
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

function handleTabletChange(e) {
  if (e.matches) {
    for (let i = 0; i < links.length; i++) {
      links[i].style.display = "flex";
    }
  }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);