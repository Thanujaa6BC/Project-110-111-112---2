Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snap() {
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = "<img id = 'captured_image' src = "+data_uri+"/>"
    });
}

console.log("ml5 version :",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fNddqVlpO/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model initialized");
}

prediction1 = "";
prediction2 = "";

function speak(){
var synth = window.SpeechSynthesis;
spk1 = "the first prediction is" + prediction1;
spk2 = "the second prediction is" + prediction2;

var utterthis = new SpeechSynthesisUtterance(spk1 + spk2);
synth.speak(utterthis);
}