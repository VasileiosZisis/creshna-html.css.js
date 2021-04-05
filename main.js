const header = document.querySelector('header');
const animation = document.querySelectorAll('.animation');

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