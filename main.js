const header = document.querySelector('header');
const animation = document.querySelectorAll('.animation');
const modalEle = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-content');
const close = document.querySelector('.close');
const modalIMG = document.querySelectorAll('.modalIMG')

window.ondragstart = () => {
     return false; 
    }

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
const slider = document.querySelector('.photosGrid');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});

// BACK TO TOP
$(document).ready(function($){
    $(window).scroll(function(){
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