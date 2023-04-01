previous_result="";
function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet', modelloaded);
}
function modelloaded() {
  console.log("model is loaded");

}
function draw() {
  image(video, 0, 0, 300, 300);
  classifier.classify(video,gotresults);
}
function gotresults(error, results) {
  if (error) {
    console.log(error);

  }
  else {
   
    label=results[0].label;
    confidence=results[0].confidence;
    if((results[0].confidence > 0.5) && (previous_result != results[0].label)){
      console.log(results);
      previous_result=results[0].label;
      document.getElementById("result_object_name").innerHTML=results[0].label;
      document.getElementById("result_object_accaracy").innerHTML=results[0].confidence;

    }
  }
}

