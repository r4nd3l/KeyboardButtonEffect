// Default DevCorner JavaScript Setting
// Get the modal
var modal = document.getElementById('_myModal');

// Get the button that opens the modal
var btn = document.getElementById("_myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("_close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// control the snake
document.addEventListener("keydown", button_down);
document.addEventListener("keyup", button_up);

function button_down(event){
  let key = event.keyCode;

  if(key == 38){
    console.log("up");
    document.getElementsByTagName("kbd")[0].style.cssText = "border:1px solid var(--lg-); color: var(--gr2-);"
  }else if(key == 37){
    console.log("left");
    document.getElementsByTagName("kbd")[1].style.cssText = "border:1px solid var(--lg-); color: var(--gr2-);"
  }else if(key == 40){
    console.log("down");
    document.getElementsByTagName("kbd")[2].style.cssText = "border:1px solid var(--lg-); color: var(--gr2-);"
  }else if(key == 39){
    console.log("right");
    document.getElementsByTagName("kbd")[3].style.cssText = "border:1px solid var(--lg-); color: var(--gr2-);"
  }
}

function button_up(event){
  let key = event.keyCode;

  if(key == 38){
    console.log("up_back");
    document.getElementsByTagName("kbd")[0].style.cssText = "border:1px solid grey; color: var(--gr-);"
  }else if(key == 37){
    console.log("left_back");
    document.getElementsByTagName("kbd")[1].style.cssText = "border:1px solid grey; color: var(--gr-);"
  }else if(key == 40){
    console.log("down_back");
    document.getElementsByTagName("kbd")[2].style.cssText = "border:1px solid grey; color: var(--gr-);"
  }else if(key == 39){
    console.log("right_back");
    document.getElementsByTagName("kbd")[3].style.cssText = "border:1px solid grey; color: var(--gr-);"
  }
}




















// END
