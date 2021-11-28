status = "";
objects = [];

function preload(){
    img = loadImage('car.jpg');
    console.log("loaded image");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center;

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function draw(){
    image(img, 0, 0, 640, 420);

    if (status != "") {
        for ( i = 0; i < objects.length; i++) {
            w = objects[i].width;
            h = objects[i].height;
            x = objects[i].x;
            y = objects[i].y;
            l = objects[i].label;

            document.getElementById("status").innerHTML = "Status: Detecting Objects";
            
            fill('#FF0000');          
            percent = Math.floor(objects[i].confidence * 100);
            text(l + " " + percent + "%", x, y);
            noFill();
            stroke('#FF0000');
            rect(x, y, w + 300, h + 200);
            console.log("object drawn");
            document.getElementById("status").innerHTML = "Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of Objects = " + objects[i].length;
        }
    }
}
function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResults);   
}

function gotResults(error, results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        objects = results;   
    }
}