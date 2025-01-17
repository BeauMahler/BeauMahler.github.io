function init(){

}

// function changeText() {
//     var text = document.getElementById("text");
//     console.log("clicked");
    
//     text.innerHTML = "Button is clicked";
// }

function masculineBodyType(){
    document.getElementById("characterImage").src = "images/prototype_character_MAIN_masculine.png";
}

function feminineBodyType(){
    document.getElementById("characterImage").src = "images/prototype_character_MAIN_Feminine.png";
}

function neutralBodyType(){
    document.getElementById("characterImage").src = "images/prototype_character_MAIN_neutral.png";
}


currentHeightSliderValue = 5;
var marginTOP;

function heightChanged(){
    var heightSlider = document.getElementById("heightSlider");
    newHeightSliderValue = heightSlider.value;

    if(newHeightSliderValue > currentHeightSliderValue) { //bigger 
        var difference = newHeightSliderValue - currentHeightSliderValue //steps
        var currentHeight = document.getElementById("characterImage").clientHeight.toString();
        // var currentMargin = document.getElementById("characterbox").marginTop.toString();

        document.getElementById("characterImage").style.height = currentHeight + 10*difference + "px"; //set new height

       // document.getElementById("characterImage").style.zoom = 0.5*difference;
        //document.getElementById("characterImage").style.height = currentHeight + "px"; //set new height
        // document.getElementById("characterImage").style.marginTop = currentMargin + 10*difference + "px"; //set new height

        currentHeightSliderValue = newHeightSliderValue; 
    }
    if(newHeightSliderValue < currentHeightSliderValue){ //smaller
        var difference = currentHeightSliderValue - newHeightSliderValue //steps
        marginTOP = document.getElementById("characterbox").style.marginTop.toString();
        var currentHeight = document.getElementById("characterbox").clientHeight.toString();

        document.getElementById("characterbox").style.height = currentHeight - 50*difference + "px"; //set new height
        document.getElementById("characterbox").style.marginTop = (marginTOP + 50) + "px"; //set new height

        currentHeightSliderValue = newHeightSliderValue; 
    }
}


function skinColorChanged(){
    var skinColorSlider = document.getElementById("skinColorSlider");
    if(skinColorSlider.value == 1) {document.getElementById("characterbox").style.backgroundColor = ' #ffe5c8';}
    if(skinColorSlider.value == 2) {document.getElementById("characterbox").style.backgroundColor = ' #ffdabe';}
    if(skinColorSlider.value == 3) {document.getElementById("characterbox").style.backgroundColor = ' #ffceb4';}
    if(skinColorSlider.value == 4) {document.getElementById("characterbox").style.backgroundColor = ' #ffc3aa';}
    if(skinColorSlider.value == 5) {document.getElementById("characterbox").style.backgroundColor = ' #f0b8a0';}
    if(skinColorSlider.value == 6) {document.getElementById("characterbox").style.backgroundColor = ' #e1ac96';}
    if(skinColorSlider.value == 7) {document.getElementById("characterbox").style.backgroundColor = ' #d2a18c';}
    if(skinColorSlider.value == 8) {document.getElementById("characterbox").style.backgroundColor = ' #c39582';}
    if(skinColorSlider.value == 9) {document.getElementById("characterbox").style.backgroundColor = ' #b48a78';}
    if(skinColorSlider.value == 10) {document.getElementById("characterbox").style.backgroundColor = ' #a57e6e';}
    if(skinColorSlider.value == 11) {document.getElementById("characterbox").style.backgroundColor = ' #967264';}
    if(skinColorSlider.value == 12) {document.getElementById("characterbox").style.backgroundColor = ' #87675a';}
    if(skinColorSlider.value == 13) {document.getElementById("characterbox").style.backgroundColor = ' #785c50';}
    if(skinColorSlider.value == 14) {document.getElementById("characterbox").style.backgroundColor = ' #695046';}
    if(skinColorSlider.value == 15) {document.getElementById("characterbox").style.backgroundColor = ' #5a453c';}
    if(skinColorSlider.value == 16) {document.getElementById("characterbox").style.backgroundColor = ' #4b3932';}
    if(skinColorSlider.value == 17) {document.getElementById("characterbox").style.backgroundColor = ' #3c2e28';}
    if(skinColorSlider.value == 18) {document.getElementById("characterbox").style.backgroundColor = ' #593b2b';}
    if(skinColorSlider.value == 19) {document.getElementById("characterbox").style.backgroundColor = ' #e9b78a';}
    if(skinColorSlider.value == 20) {document.getElementById("characterbox").style.backgroundColor = ' #c5845c';}
}

