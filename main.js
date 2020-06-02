/*eslint-env browser*/
/*jslint browser: true*/



var modal = document.getElementById("myModal");
var i;

var img = document.getElementsByClassName("modalIMG");
var modalImg = document.getElementById("showIMG");

for (i = 0; i < img.length; i++) {
    img[i].onclick = function () {

        modal.style.display = "block";
        modalImg.src = this.src;
        document.body.style.overflow = "hidden";
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = "visible";
}
// Close the modal when user clicks outside the image
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "visible";
    }
}