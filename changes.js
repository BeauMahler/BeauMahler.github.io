function init(){
    document.getElementById("characterbox").style.height = "650px";
    heightChanged();
}

var currentBodyType = "neutral";

function masculineBodyType(){
    currentBodyType = "masculine";
    document.getElementById("characterImage").src = "images/prototype_character_MAIN_masculine.png";
    document.getElementById("muscleSlider").value = 1; //reset muscles
    currentMuscleSliderValue = 1;
}

function feminineBodyType(){
    currentBodyType = "feminine";
    document.getElementById("characterImage").src = "images/prototype_character_MAIN_Feminine.png";
    document.getElementById("muscleSlider").value = 1; //reset muscles
    currentMuscleSliderValue = 1;
}

function neutralBodyType(){
    currentBodyType = "neutral";
    document.getElementById("characterImage").src = "images/prototype_character_MAIN_neutral.png";
    document.getElementById("muscleSlider").value = 1; //reset muscles
    currentMuscleSliderValue = 1;
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

        document.getElementById("characterImage").style.width = currentWeight - 75*difference + "px"; //set new weight

        var newWidth = parseInt(document.getElementById("characterImage").style.width);
        newMarginLEFT = (-newWidth/2)+465/2;

        document.getElementById("characterImage").style.marginLeft = newMarginLEFT + "px"; //set new margin
    }
    currentWeightSliderValue = newWeightSliderValue; 
}

var currentMuscleSliderValue = 1;

function musclesChanged(){
    var newMuscleSliderValue = document.getElementById("muscleSlider").value;
    var image = document.getElementById("characterImage");
    var newSrcValue;

    if(newMuscleSliderValue > currentMuscleSliderValue) { //bigger
        var steps = Math.abs(newMuscleSliderValue - currentMuscleSliderValue);

        if(steps == 1 && currentMuscleSliderValue == 1){ // none to middle
            if(currentBodyType == "feminine"){ newSrcValue = "images/prototype_character_MAIN_Feminine_M2.png"}
            else if(currentBodyType == "masculine"){ newSrcValue = "images/prototype_character_MAIN_masculine_M2.png"}
            else { newSrcValue = "images/prototype_character_MAIN_neutral_M2.png"};
        }  
        else{ //middle or none to max
            if(currentBodyType == "feminine"){ newSrcValue = "images/prototype_character_MAIN_Feminine_M3.png"}  
            else if(currentBodyType == "masculine"){ newSrcValue = "images/prototype_character_MAIN_masculine_M3.png"}
            else { newSrcValue = "images/prototype_character_MAIN_neutral_M3.png"}; 
        }
    }
    if(newMuscleSliderValue < currentMuscleSliderValue){ //smaller
        var steps = Math.abs(currentMuscleSliderValue - newMuscleSliderValue);

        if(steps == 1 && currentMuscleSliderValue == 3){ //max to middle
            if(currentBodyType == "feminine"){ newSrcValue = "images/prototype_character_MAIN_Feminine_M2.png" }
            else if(currentBodyType == "masculine"){ newSrcValue = "images/prototype_character_MAIN_masculine_M2.png"}
            else { newSrcValue = "images/prototype_character_MAIN_neutral_M2.png"};
        }
        else{ //middle or max to none
            if(currentBodyType == "feminine"){ newSrcValue = "images/prototype_character_MAIN_Feminine.png" }
            else if(currentBodyType == "masculine"){ newSrcValue = "images/prototype_character_MAIN_masculine.png"}
            else { newSrcValue = "images/prototype_character_MAIN_neutral.png"};
        }   
    }

    image.src = newSrcValue;
    currentMuscleSliderValue = newMuscleSliderValue;
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

let screen1_height;
let screen1_width;
let screen1_img;
let screen1_skincolor;

function saveValues(){
    screen1_height = document.getElementById("characterbox").style.height;
   // screen1_boxwidth = document.getElementById("characterbox").style.width;
    screen1_width = document.getElementById("characterImage").style.width;
    screen1_img = document.getElementById("characterImage").src;
    screen1_marginTOP = document.getElementById("characterbox").style.marginTop;
    screen1_marginLEFT = document.getElementById("characterImage").style.marginLeft;
    screen1_skincolor = document.getElementById("characterImage").style.backgroundColor;

    sessionStorage.setItem("screen1Height", screen1_height);
    sessionStorage.setItem("screen1marginTOP", screen1_marginTOP);
    sessionStorage.setItem("screen1marginLEFT", screen1_marginLEFT);
    sessionStorage.setItem("screen1Width", screen1_width);
    sessionStorage.setItem("screen1Img", screen1_img);
    sessionStorage.setItem("screen1Skincolor", screen1_skincolor);

    console.log("SAVED. height: " + screen1_height);
    console.log("width:" + screen1_width);
    console.log("src: " + screen1_img);
    console.log("color " +screen1_skincolor);      
}   

function loadFaceScreen(){
    // console.log("RECEIVED. height: " + getHeight);
    // console.log("width:" + getWidth);
    // console.log("src: " + getSrc);
    // console.log("color " +getColor);

    var charBox = document.getElementById("characterbox2");
    var charImg = document.getElementById("characterImage2");

    charBox.style.height = sessionStorage.getItem('screen1Height');
    charImg.style.width = sessionStorage.getItem('screen1Width');
    charImg.src = sessionStorage.getItem('screen1Img');
    charBox.style.marginTop = sessionStorage.getItem('screen1marginTOP');
    charImg.style.marginLeft = sessionStorage.getItem('screen1marginLEFT');
    charImg.style.backgroundColor = sessionStorage.getItem('screen1Skincolor');      
}
