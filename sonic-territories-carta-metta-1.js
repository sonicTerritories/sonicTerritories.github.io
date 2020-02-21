var myBody = document.getElementsByTagName("body");

/*function success() {
    myBody[0].style.backgroundColor = "#000000";
    console.log("hiiiii");
}*/

var text_area;
var compassHeading;
var filterFreq;
var timer;
var timeinseconds;
var mic;
var recorder;
var soundFile;
var soundFileString;
var state;
var recordButton;
var playButton;
var backgroundColor;
var cnv;

function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    text_area = document.getElementById("compass_content");
    state = 0;
    mic = new p5.AudioIn();
    mic.start();
    recorder = new p5.SoundRecorder();
    recorder.setInput(mic);
    soundFile = new p5.SoundFile();
    soundFileString = JSON.stringify(soundFile);
    print('um');

//IDK what text_area part means??//
    backgroundColor = color(100, 50, 150);
//    text_area.innerHTML = "";

//BUTTONS
    recordButton = createButton('press + hold to record');
    recordButton.position(windowWidth/2, windowHeight/2);
    recordButton.mousePressed(rec);
    recordButton.mouseReleased(stop);
    playButton = createButton('play');
    playButton.position (windowWidth/2-10,windowHeight/2-10);
    playButton.mousePressed(play);
        
}
    
function rec(){
    if (mic.enabled) {
        recorder.record(soundFile);
        text('Recording!', 20, 20);
    }
}

function stop(){
    recorder.stop();
    text('Stopped', 20, 20); 
}

function play(){
    let soundFileString = JSON.stringify(soundFile);
    console.log(soundFileString, 'success!');
    soundFile.play(); //play the result
}
       
function draw(){
    backgroundColor.setRed(128 + 128 * sin(millis() / 1000));
  background(backgroundColor);
};

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
};

