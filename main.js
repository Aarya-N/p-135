function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas= createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video,modelLodded);
    poseNet.on('pose',gotPoses);
}  

function modelLodded() {
    console .log('PoseNet Is Initialized!');
}

function draw() {
    background('#969A97');
}

function gotPoses(results) {
    if(results.length > 0)
    {
       console.log(results);
    }

}