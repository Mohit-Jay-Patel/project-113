var tint_img='';
var video='';
function preload(){

}
function setup(){
var canvas= createCanvas(640,480);
canvas.position(110,250);
 video=createCapture(VIDEO);
video.hide();
}
function draw(){
image(video,50,40,500,380);
tint(tint_img);

fill(0,0,225);
circle(40,40,70);
circle(600,40,70);
circle(40,440,70);
circle(600,440,70);

fill(200,0,0);
rect(26,72,25,333);
rect(586.5,72,25,333);
rect(70,30,498,25);
rect(70,425,498,25);

}

function take_snapshot(){
    save('photo.png');
}