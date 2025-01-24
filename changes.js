function init(){
    document.getElementById("characterbox").style.height = "650px";
    document.getElementById("muscleSliderDiv").style.display = "block";
    heightChanged();
}

var currentBodyType = "neutral"; //init

//amputation
var amputatedArmNoProsthetic = false;
var amputatedLegNoProsthetic = false;
var amputatedArmWithProsthetic = false;
var amputatedLegWithProsthetic = false;
//low vision & blind
var blindNoGlassesNoCane = false;
var blindWithGlassesNoCane = false;
var blindNoGlassesWithCane = false;
//low hearing & deaf
var deafNoHearingAids = false;
var deafWithHearingAids = false;
//dwarfism
var dwarfismNoWheelchair = false;
var paralysisNoWheelchair = false;

function masculineBodyType(){
    //set var to masculine
    currentBodyType = "masculine";    
    var charImg = document.getElementById("characterImage");
    //if muscles can appear (no disabilities)
    if(document.getElementById("muscleSliderDiv").style.display == "block"){
        var muscles = document.getElementById("muscleSlider").value;
        if(muscles == 1) {charImg.src = "images/MAIN/character_masculine.png";}
        else if(muscles == 2) {charImg.src = "images/Muscles/character_masculine_muscle2.png";}
        else {charImg.src = "images/Muscles/character_masculine_muscle3.png";}
    }
    //disabilities present
    if(amputatedArmNoProsthetic){charImg.src="images/Amputation/character_masculine_amputatedArm.png"}
    if(amputatedArmWithProsthetic){charImg.src="images/Amputation/character_masculine_amputatedArm_prosthetic.png"}
    if(amputatedLegNoProsthetic){charImg.src="images/Amputation/character_masculine_amputatedLeg.png"}
    if(amputatedLegWithProsthetic){charImg.src="images/Amputation/character_masculine_amputatedLeg_prosthetic.png"}
}

function feminineBodyType(){
    //set var to neutral
    currentBodyType = "feminine";
    var charImg = document.getElementById("characterImage");
    //if muscles can appear (no disabilities)
   // if(document.getElementById("muscleSliderDiv").style.display == "block"){
        var muscles = document.getElementById("muscleSlider").value;
        if(muscles == 1) {charImg.src = "images/MAIN/character_feminine.png";}
        else if(muscles == 2) {charImg.src = "images/Muscles/character_feminine_muscle2.png";}
        else {charImg.src = "images/Muscles/character_feminine_muscle3.png";}
   // }
    //disabilities present
    if(amputatedArmNoProsthetic){charImg.src="images/Amputation/character_Feminine_amputatedArm.png"}
    if(amputatedArmWithProsthetic){charImg.src="images/Amputation/character_Feminine_amputatedArm_prosthetic.png"}
    if(amputatedLegNoProsthetic){charImg.src="images/Amputation/character_Feminine_amputatedLeg.png"}
    if(amputatedLegWithProsthetic){charImg.src="images/Amputation/character_Feminine_amputatedLeg_prosthetic.png"}
    
}

function neutralBodyType(){
    //set var to neutral
    currentBodyType = "neutral";
    var charImg = document.getElementById("characterImage");
    //if muscles can appear (no disabilities)
    if(document.getElementById("muscleSliderDiv").style.display == "block"){
        var muscles = document.getElementById("muscleSlider").value;
        if(muscles == 1) {charImg.src = "images/MAIN/character_neutral.png";}
        else if(muscles == 2) {charImg.src = "images/Muscles/character_neutral_muscle2.png";}
        else {charImg.src = "images/Muscles/character_neutral_muscle3.png";}
    }
    //disabilities present
    if(amputatedArmNoProsthetic){charImg.src="images/Amputation/character_neutral_amputatedArm.png"}
    if(amputatedArmWithProsthetic){charImg.src="images/Amputation/character_neutral_amputatedArm_prosthetic.png"}
    if(amputatedLegNoProsthetic){charImg.src="images/Amputation/character_neutral_amputatedLeg.png"}
    if(amputatedLegWithProsthetic){charImg.src="images/Amputation/character_neutral_amputatedLeg_prosthetic.png"}

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
    var currentBoxWeight = document.getElementById("characterbox").clientWidth;

    if(newWeightSliderValue > currentWeightSliderValue) { //fatter 
        var difference = newWeightSliderValue - currentWeightSliderValue; //steps

        document.getElementById("characterImage").style.width = currentWeight + 75*difference + "px"; //set new weight

        var newWidth = parseInt(document.getElementById("characterImage").style.width);
        newMarginLEFT = (-newWidth/2)+parseInt(currentBoxWeight)/2;

        document.getElementById("characterImage").style.marginLeft = newMarginLEFT + "px"; //set new margin       
    }
    if(newWeightSliderValue < currentWeightSliderValue){ //thinner
        var difference = currentWeightSliderValue - newWeightSliderValue; //steps

        document.getElementById("characterImage").style.width = currentWeight - 75*difference + "px"; //set new weight

        var newWidth = parseInt(document.getElementById("characterImage").style.width);
        newMarginLEFT = (-newWidth/2)+parseInt(currentBoxWeight)/2;

        document.getElementById("characterImage").style.marginLeft = newMarginLEFT + "px"; //set new margin
    }
    currentWeightSliderValue = newWeightSliderValue; 
}

//var currentMuscleSliderValue = 1;

function musclesChanged(){
    if(currentBodyType == "feminine") {feminineBodyType();}
    else if(currentBodyType == "masculine") {masculineBodyType();}
    else{neutralBodyType();}

    // var newMuscleSliderValue = document.getElementById("muscleSlider").value;
    // var image = document.getElementById("characterImage");
    // var newSrcValue;

    // if(newMuscleSliderValue > currentMuscleSliderValue) { //bigger
    //     var steps = Math.abs(newMuscleSliderValue - currentMuscleSliderValue);

    //     if(steps == 1 && currentMuscleSliderValue == 1){ // none to middle
    //         if(currentBodyType == "feminine"){ newSrcValue = "images/prototype_character_MAIN_Feminine_M2.png"}
    //         else if(currentBodyType == "masculine"){ newSrcValue = "images/prototype_character_MAIN_masculine_M2.png"}
    //         else { newSrcValue = "images/prototype_character_MAIN_neutral_M2.png"};
    //     }  
    //     else{ //middle or none to max
    //         if(currentBodyType == "feminine"){ newSrcValue = "images/prototype_character_MAIN_Feminine_M3.png"}  
    //         else if(currentBodyType == "masculine"){ newSrcValue = "images/prototype_character_MAIN_masculine_M3.png"}
    //         else { newSrcValue = "images/prototype_character_MAIN_neutral_M3.png"}; 
    //     }
    // }
    // if(newMuscleSliderValue < currentMuscleSliderValue){ //smaller
    //     var steps = Math.abs(currentMuscleSliderValue - newMuscleSliderValue);

    //     if(steps == 1 && currentMuscleSliderValue == 3){ //max to middle
    //         if(currentBodyType == "feminine"){ newSrcValue = "images/prototype_character_MAIN_Feminine_M2.png" }
    //         else if(currentBodyType == "masculine"){ newSrcValue = "images/prototype_character_MAIN_masculine_M2.png"}
    //         else { newSrcValue = "images/prototype_character_MAIN_neutral_M2.png"};
    //     }
    //     else{ //middle or max to none
    //         if(currentBodyType == "feminine"){ newSrcValue = "images/prototype_character_MAIN_Feminine.png" }
    //         else if(currentBodyType == "masculine"){ newSrcValue = "images/prototype_character_MAIN_masculine.png"}
    //         else { newSrcValue = "images/prototype_character_MAIN_neutral.png"};
    //     }   
    // }

    // image.src = newSrcValue;
    // currentMuscleSliderValue = newMuscleSliderValue;
}

function skinColorChanged(){
    var skinColorSlider = document.getElementById("skinColorSlider");
    if(skinColorSlider.value == 1) {document.getElementById("characterImage").style.backgroundColor = ' #ffe5c8';}
    if(skinColorSlider.value == 2) {document.getElementById("characterImage").style.backgroundColor = ' #ffdabe';}
    if(skinColorSlider.value == 3) {document.getElementById("characterImage").style.backgroundColor = ' #ffceb4';}
    if(skinColorSlider.value == 4) {document.getElementById("characterImage").style.backgroundColor = ' #ffc3aa';}
    if(skinColorSlider.value == 5) {document.getElementById("characterImage").style.backgroundColor = ' #f0b8a0';}
    if(skinColorSlider.value == 6) {document.getElementById("characterImage").style.backgroundColor = ' #e9b78a';}
    if(skinColorSlider.value == 7) {document.getElementById("characterImage").style.backgroundColor = ' #e1ac96';}
    if(skinColorSlider.value == 8) {document.getElementById("characterImage").style.backgroundColor = ' #d2a18c';}
    if(skinColorSlider.value == 9) {document.getElementById("characterImage").style.backgroundColor = ' #c39582';}
    if(skinColorSlider.value == 10) {document.getElementById("characterImage").style.backgroundColor = ' #b48a78';}
    if(skinColorSlider.value == 11) {document.getElementById("characterImage").style.backgroundColor = ' #c5845c';}
    if(skinColorSlider.value == 12) {document.getElementById("characterImage").style.backgroundColor = ' #a57e6e';}
    if(skinColorSlider.value == 13) {document.getElementById("characterImage").style.backgroundColor = ' #967264';}
    if(skinColorSlider.value == 14) {document.getElementById("characterImage").style.backgroundColor = ' #87675a';}
    if(skinColorSlider.value == 15) {document.getElementById("characterImage").style.backgroundColor = ' #785c50';}
    if(skinColorSlider.value == 16) {document.getElementById("characterImage").style.backgroundColor = ' #695046';}
    if(skinColorSlider.value == 17) {document.getElementById("characterImage").style.backgroundColor = ' #5a453c';}
    if(skinColorSlider.value == 18) {document.getElementById("characterImage").style.backgroundColor = ' #4b3932';}
    if(skinColorSlider.value == 19) {document.getElementById("characterImage").style.backgroundColor = ' #593b2b';}
    if(skinColorSlider.value == 20) {document.getElementById("characterImage").style.backgroundColor = ' #3c2e28';}
}

function saveValues(){
    sessionStorage.setItem("screen1Height", document.getElementById("characterbox").style.height);
    sessionStorage.setItem("screen1marginTOP", document.getElementById("characterbox").style.marginTop);
    sessionStorage.setItem("screen1marginLEFT", document.getElementById("characterImage").style.marginLeft);
    sessionStorage.setItem("screen1WidthImg", document.getElementById("characterImage").style.width);
    sessionStorage.setItem("screen1WidthBox", document.getElementById("characterbox").style.width);
    sessionStorage.setItem("screen1Img", document.getElementById("characterImage").src);
    sessionStorage.setItem("screen1Skincolor", document.getElementById("characterImage").style.backgroundColor);
    sessionStorage.setItem("screen1Name", document.getElementById("nameField").value);

    // console.log("SAVED. height: " + screen1_height);
    // console.log("width:" + screen1_width);
    // console.log("src: " + screen1_img);
    // console.log("color " +screen1_skincolor);      
}   

function loadFaceScreen(){
    // console.log("RECEIVED. height: " + getHeight);
    // console.log("width:" + getWidth);
    // console.log("src: " + getSrc);
    // console.log("color " +getColor);

    var charBox = document.getElementById("characterbox2");
    var charImg = document.getElementById("characterImage2");

    charBox.style.height = sessionStorage.getItem('screen1Height');
    charBox.style.width = sessionStorage.getItem('screen1WidthBox');
    charImg.style.width = sessionStorage.getItem('screen1WidthImg');
    charImg.src = sessionStorage.getItem('screen1Img');
    charBox.style.marginTop = sessionStorage.getItem('screen1marginTOP');
    charImg.style.marginLeft = sessionStorage.getItem('screen1marginLEFT');
    charImg.style.backgroundColor = sessionStorage.getItem('screen1Skincolor');      
}

function loadfinalScreen() {
    document.getElementById("nameTag").innerHTML = sessionStorage.getItem('screen1Name');
}


const addStyles = (el, styles) => Object.assign(el.style, styles);

function eyesChosen(eyeNumber){
    var charBox = document.getElementById("characterbox2");
    var charImg = document.getElementById("characterImage2");
    var topImg = document.getElementById("overlayImg");
    var topImg2 = document.getElementById("overlayImg2");
    if(eyeNumber == 1){
        topImg.src = "images/TEST.png";
        topImg2.src = "images/TEST.png";
    }
    var absoluteX1 = 465 / 2 - 30;
    var absoluteX2 = 465 / 2 ;
    var absoluteY = parseInt(charBox.style.height) / 5;
    // console.log(sessionStorage.getItem('screen1WidthImg'));
    // topImg.style.position = "absolute";

    // topImg.style.top = absoluteY + "px";
    // topImg.style.height = "15px";
    // topImg.style.width = "15px";

    addStyles(topImg, {
        position: "absolute",
        top: absoluteY + "px",
        left: absoluteX1 + "px",
        height: "20px",
        width: "20px"
    });

    addStyles(topImg2, {
        position: "absolute",
        top: absoluteY + "px",
        left: absoluteX2 + "px",
        height: "20px",
        width: "20px"
    });
    // .position = ;
    // topImg2.style.top = absoluteY + "px";
    // topImg2.style.height = "15px";
    // topImg2.style.width = "15px";
    // topImg.style.zIndex = 1;
}

function changeEyeColor() {
    document.getElementById("overlayImg").style.backgroundColor = "green";
}


function disabilitySelected(){
    //helper variables
    var helpingAidsSection = document.getElementById("helpingAidsSection");
    var muscleSliderDiv = document.getElementById("muscleSliderDiv");
    var bodyTypeDiv = document.getElementById("bodyTypeDiv");
        //helping aids checkboxes
    var helpingAidGlasses = document.getElementById("helpingAidGlasses");
    var helpingAidCane = document.getElementById("helpingAidCane");
    var helpingAidHearingAids = document.getElementById("helpingAidHearingAids");
    var helpingAidProsthetic = document.getElementById("helpingAidProsthetic");
    var helpingAidWheelchair = document.getElementById("helpingAidWheelchair");
        //disability checkboxes
    var caneLabel = document.getElementById("caneLabel");
    var glassesLabel = document.getElementById("glassesLabel");
    var hearingLabel = document.getElementById("hearingLabel");
    var prostheticLabel = document.getElementById("prostheticLabel");
    var wheelchairLabel = document.getElementById("wheelchairLabel");
    var charImage = document.getElementById("characterImage");

    //change menu
    document.getElementById("none").checked ? helpingAidsSection.style.display = "none" : helpingAidsSection.style.display = "block";
    document.getElementById("none").checked ? muscleSliderDiv.style.display = "block" : muscleSliderDiv.style.display = "none";

    (document.getElementById("lowVision").checked || document.getElementById("blind").checked) ? glassesLabel.style.display = "block" : glassesLabel.style.display = "none";
    (document.getElementById("lowVision").checked || document.getElementById("blind").checked) ? caneLabel.style.display = "block" : caneLabel.style.display = "none";
    (document.getElementById("lowHearing").checked || document.getElementById("deaf").checked) ? hearingLabel.style.display = "block" : hearingLabel.style.display = "none";
    (document.getElementById("amputationArm").checked || document.getElementById("amputationLeg").checked) ? prostheticLabel.style.display = "block" : prostheticLabel.style.display = "none";
    (document.getElementById("amputationLeg").checked || document.getElementById("dwarfism").checked || document.getElementById("paralysis").checked) ? wheelchairLabel.style.display = "block" : wheelchairLabel.style.display = "none";

    helpingAidWheelchair.checked ? bodyTypeDiv.style.display = "none" : bodyTypeDiv.style.display = "block";

    //change to correct images
    if(document.getElementById("amputationArm").checked){ //amputated arm
        resetValues();
        //set & update disability variables
        if(helpingAidProsthetic.checked){amputatedArmWithProsthetic = true} 
        else {amputatedArmWithProsthetic = false; amputatedArmNoProsthetic = true;}
    } 
    if(document.getElementById("amputationLeg").checked){ //amputated arm
        resetValues();
        //set & update disability variables
        if(helpingAidProsthetic.checked){amputatedLegWithProsthetic = true} 
        else {amputatedLegWithProsthetic = false; amputatedLegNoProsthetic = true;}
    } 
    if(document.getElementById("none").checked){ resetValues();} 

    if(currentBodyType == "neutral"){neutralBodyType();} else if(currentBodyType == "feminine"){feminineBodyType();}else{masculineBodyType();} //call body type functions



//     //amputation
// const amputatedArmNoProsthetic = false;
// const amputatedLegNoProsthetic = false;
// const amputatedArmWithProsthetic = false;
// const amputatedLegWithProsthetic = false;
// //low vision & blind
// const blindNoGlassesNoCane = false;
// const blindWithGlassesNoCane = false;
// const blindNoGlassesWithCane = false;
// //low hearing & deaf
// const deafNoHearingAids = false;
// const deafWithHearingAids = false;
// //dwarfism
// const dwarfismNoWheelchair = false;
// const paralysisNoWheelchair = false;
}

function resetValues() {
    //reset disability variable values
    amputatedArmNoProsthetic = false; 
    amputatedArmWithProsthetic = false; 
    amputatedLegNoProsthetic = false; 
    amputatedLegWithProsthetic = false; 
    blindNoGlassesNoCane = false;
    blindWithGlassesNoCane = false;
    blindNoGlassesWithCane = false;
    deafNoHearingAids = false;
    deafWithHearingAids = false;
    dwarfismNoWheelchair = false;
    paralysisNoWheelchair = false;
}


// function helpingAidsSelected(){
//     var bodyTypeDiv = document.getElementById("bodyTypeDiv");
//     //helping aids checkboxes
//     var helpingAidGlasses = document.getElementById("helpingAidGlasses");
//     var helpingAidCane = document.getElementById("helpingAidCane");
//     var helpingAidHearingAids = document.getElementById("helpingAidHearingAids");
//     var helpingAidProsthetic = document.getElementById("helpingAidProsthetic");
//     var helpingAidWheelchair = document.getElementById("helpingAidWheelchair");

//     helpingAidWheelchair.checked ? bodyTypeDiv.style.display = "none" : bodyTypeDiv.style.display = "block";

// }