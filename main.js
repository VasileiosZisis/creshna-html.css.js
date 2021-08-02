const modalEle = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-content');
const close = document.querySelector('.close');
const modalIMG = document.querySelectorAll('.modal-IMG');

// TRANSITION
const transitionEl = document.querySelector('.transition');

window.onload = () => {
  setTimeout(() => {
transitionEl.classList.remove('is-active');
  },500)
}

// SPLIDE
var elms = document.getElementsByClassName( 'splide' );
for ( var i = 0, len = elms.length; i < len; i++ ) {
	new Splide( elms[ i ], {
        padding: {
            left : '4rem',
            right:0,
        },
        type      : 'slide',
        perPage   : 4,
        perMove   : 1,
        height: '290px',
        breakpoints: {
          1530: {
            perPage: 3,
          },
          950: {
            perPage: 2,
          },
          680: {
            perPage: 1,
          },
          500: {
            perPage: 1,
            padding: {
              left : '1rem',
              right:0,
          },
          },
        }
    }).mount();
}

// MODAL IMG
modalIMG.forEach(item => {
    item.addEventListener("click", event => {
       modalEle.style.display = "block";
       modalImage.src = event.target.src;
       document.body.style.overflow = "hidden";
    });
  });
  window.onclick = function(event) {
   if (event.target === modalEle) {
     modalEle.style.display = "none";
     document.body.style.overflow = "visible";
   }
  }
  close.addEventListener("click", () => {
    modalEle.style.display = "none";
    document.body.style.overflow = "visible";
  });