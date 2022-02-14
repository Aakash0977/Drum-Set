var drumNumber = (document.querySelectorAll(".drum").length);
for (var i = 0; i < drumNumber; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click", buttonClick);
   
}

// button click
function buttonClick(){
    var buttoninnerHtml = this.innerHTML;
    makesound(buttoninnerHtml);
    makeAnimation(buttoninnerHtml) ;
 }
 
// key press
document.addEventListener("keypress", function(event){
    makesound(event.key);
    makeAnimation(event.key);
    
    }
);

function makesound(key){
    switch (key) {
        case "w":
            var audio = new Audio ("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio ("sounds/snare.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio ("sounds/tom-1.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio ("sounds/tom-2.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio ("sounds/tom-3.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio ("sounds/tom-4.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio ("sounds/crash.mp3");
            audio.play();
            break;
    
        default:
            console.log(buttoninnerHtml);
            break;
    }

}
 function makeAnimation (currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    activeButton.style.color = "yellow";
  setTimeout(function() {
    activeButton.style.color = "#DA0463";
      activeButton.classList.remove("pressed");
  }, 100);
 }