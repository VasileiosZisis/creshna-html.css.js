/*eslint-env browser*/
/*jslint browser: true*/

// Get the modal
var modal = document.getElementById("myModal");
var i;

var img = document.getElementsByClassName("modalIMG");
var modalImg = document.getElementById("showIMG");

for (i = 0; i < img.length; i++) {
    img[i].onclick = function () {

        modal.style.display = "block";
        modalImg.src = this.src;

    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}