function init(){
    document.getElementById("characterbox").style.height = "650px";
    heightChanged();
}

function masculineBodyType(){
    document.getElementById("characterImage").src = "images/prototype_character_MAIN_masculine.png";
}

function feminineBodyType(){
    document.getElementById("characterImage").src = "images/prototype_character_MAIN_Feminine.png";
}

function neutralBodyType(){
    document.getElementById("characterImage").src = "images/prototype_character_MAIN_neutral.png";
}

var currentHeightSliderValue = 7;
var marginTOP = 20;
var currentWeightSliderValue = 5;
var marginLEFT = 0;

function heightChanged(){
    var newHeightSliderValue = document.getElementById("heightSlider").value;
    var currentHeight = document.getElementById("characterbox").clientHeight;

    if(newHeightSliderValue > currentHeightSliderValue) { //bigger 
        var difference = newHeightSliderValue - currentHeightSliderValue; //steps
        newMarginTOP = marginTOP - 30*difference;

        document.getElementById("characterbox").style.height = currentHeight + 50*difference + "px"; //set new height
        document.getElementById("characterbox").style.marginTop = newMarginTOP + "px"; //set new height       
    }
    if(newHeightSliderValue < currentHeightSliderValue){ //smaller
        var difference = currentHeightSliderValue - newHeightSliderValue; //steps
        newMarginTOP = marginTOP + 30*difference;

        document.getElementById("characterbox").style.height = currentHeight - 50*difference + "px"; //set new height
        document.getElementById("characterbox").style.marginTop = newMarginTOP + "px"; //set new height
    }

    currentHeightSliderValue = newHeightSliderValue; 
    marginTOP = newMarginTOP;
}

function weightChanged(){
    var newWeightSliderValue = document.getElementById("weightSlider").value;
    var currentWeight = document.getElementById("characterImage").clientWidth;

    if(newWeightSliderValue > currentWeightSliderValue) { //fatter 
        var difference = newWeightSliderValue - currentWeightSliderValue; //steps

        document.getElementById("characterImage").style.width = currentWeight + 75*difference + "px"; //set new weight

        var newWidth = parseInt(document.getElementById("characterImage").style.width);
        newMarginLEFT = (-newWidth/2)+465/2;

        document.getElementById("characterImage").style.marginLeft = newMarginLEFT + "px"; //set new margin       
    }
    if(newWeightSliderValue < currentWeightSliderValue){ //thinner
        var difference = currentWeightSliderValue - newWeightSliderValue; //steps

        document.getElementById("characterImage").style.width = currentWeight - 55*difference + "px"; //set new weight

        var newWidth = parseInt(document.getElementById("characterImage").style.width);
        newMarginLEFT = (-newWidth/2)+465/2;

        document.getElementById("characterImage").style.marginLeft = newMarginLEFT + "px"; //set new margin
    }
    currentWeightSliderValue = newWeightSliderValue; 
}


function skinColorChanged(){
    var skinColorSlider = document.getElementById("skinColorSlider");
    if(skinColorSlider.value == 1) {document.getElementById("characterImage").style.backgroundColor = ' #ffe5c8';}
    if(skinColorSlider.value == 2) {document.getElementById("characterImage").style.backgroundColor = ' #ffdabe';}
    if(skinColorSlider.value == 3) {document.getElementById("characterImage").style.backgroundColor = ' #ffceb4';}
    if(skinColorSlider.value == 4) {document.getElementById("characterImage").style.backgroundColor = ' #ffc3aa';}
    if(skinColorSlider.value == 5) {document.getElementById("characterImage").style.backgroundColor = ' #f0b8a0';}
    if(skinColorSlider.value == 6) {document.getElementById("characterImage").style.backgroundColor = ' #e1ac96';}
    if(skinColorSlider.value == 7) {document.getElementById("characterImage").style.backgroundColor = ' #d2a18c';}
    if(skinColorSlider.value == 8) {document.getElementById("characterImage").style.backgroundColor = ' #c39582';}
    if(skinColorSlider.value == 9) {document.getElementById("characterImage").style.backgroundColor = ' #b48a78';}
    if(skinColorSlider.value == 10) {document.getElementById("characterImage").style.backgroundColor = ' #a57e6e';}
    if(skinColorSlider.value == 11) {document.getElementById("characterImage").style.backgroundColor = ' #967264';}
    if(skinColorSlider.value == 12) {document.getElementById("characterImage").style.backgroundColor = ' #87675a';}
    if(skinColorSlider.value == 13) {document.getElementById("characterImage").style.backgroundColor = ' #785c50';}
    if(skinColorSlider.value == 14) {document.getElementById("characterImage").style.backgroundColor = ' #695046';}
    if(skinColorSlider.value == 15) {document.getElementById("characterImage").style.backgroundColor = ' #5a453c';}
    if(skinColorSlider.value == 16) {document.getElementById("characterImage").style.backgroundColor = ' #4b3932';}
    if(skinColorSlider.value == 17) {document.getElementById("characterImage").style.backgroundColor = ' #3c2e28';}
    if(skinColorSlider.value == 18) {document.getElementById("characterImage").style.backgroundColor = ' #593b2b';}
    if(skinColorSlider.value == 19) {document.getElementById("characterImage").style.backgroundColor = ' #e9b78a';}
    if(skinColorSlider.value == 20) {document.getElementById("characterImage").style.backgroundColor = ' #c5845c';}
}

