mustache_x -0;
mustache_y -0;

function preload(){
mustache = loadImage("m.png")
}

function setup(){
canvas = createCanvas(400,400);
canvas.center();
video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPose); 
}

function modelLoaded()
{
    console.log("model loaded");
}

function draw(){
image(video,0,0,400,400);
image(mustache,mustache_x,mustache_y, 30,40);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPose(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x: "+results[0].pose.nose.x);
        mustache_x = results[0].pose.nose.x - 30;
        console.log("nose y: "+results[0].pose.nose.y);
        mustache_y = results[0].pose.nose.y;
    }
}


