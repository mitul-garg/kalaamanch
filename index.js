// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// modal

// Get the modal
var modal = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
btn[0].onclick = function() {
    modal[0].style.display = "block";
}

btn[1].onclick = function() {
    modal[1].style.display = "block";
}
btn[2].onclick = function() {
  modal[2].style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
    modal[0].style.display = "none";
}

span[1].onclick = function() {
    modal[1].style.display = "none";
}
span[2].onclick = function() {
  modal[2].style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// modal ends

// typing effect
var left = "KALAA"
var right = "MANCH"
var leftName = document.getElementById('leftName')
var rightName = document.getElementById('rightName')
var i = 0;
function printName() {
  setTimeout(function(){
    leftName.innerHTML += left[i] + " <br> "
    rightName.innerHTML += right[i] + " <br> "
    i++;
    if (i<=5) {
      printName()
    }
    else {
      leftName.innerHTML = ""
      rightName.innerHTML = ""
      i = 0
      printName()
    }
  }, 1000)
}
printName();
console.log(document.getElementsByClassName('events'))