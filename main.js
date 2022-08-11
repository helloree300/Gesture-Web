var prediction1="";
var prediction2="";

Webcam.set({
    width:350, height:300, image_format:"png",png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log("ml5version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ElE5End6i/model.json",modelloaded);

function modelloaded(){
    console.log("model has loaded");
}



function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotresults);
}