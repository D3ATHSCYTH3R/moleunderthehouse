function preload(){

}
function setup(){
canvas=createCanvas(600,425);
canvas.center();
canvas.position(187,130);
video=createCapture(VIDEO);
video.size(600,425);
video.hide();
pn=ml5.poseNEt(video, ml);
pn.on('pose', n);

}
function draw(){
image(video, 0, 0, 600, 425);
}
function ts(){
    save(mustache.png);
}
function ml(){
    console.log("posenet initialized");
}
function n(results){
    if(results.length>0){
        console.log(results);
        console.log("nose-x="+results[0].pose.nose.x);
        console.log("nose-y="+results[0].pose.nose.y);
    }
}