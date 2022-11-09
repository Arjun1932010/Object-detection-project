status="";
function preload(){
    img=loadImage("background.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status=Detecting Objects";
}
function modelLoaded(){
    console.log("Model loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}