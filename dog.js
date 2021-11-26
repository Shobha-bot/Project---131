function preload(){
    img = loadImage('mona.jpg');
    console.log("loaded image");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center;

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function draw(){
    image(img, 0, 0, 640, 420);
}

function modelLoaded(){
    console.log("Model Loaded");
    var status = true;
    objectDetector.detect(img, gotResults);   
}

function gotResults(error, results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);   
    }
}