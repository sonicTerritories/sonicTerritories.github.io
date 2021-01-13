var myBody = document.getElementsByTagName("body");

/*access token:  */
/*function success() {
    myBody[0].style.backgroundColor = "#000000";
    console.log("hiiiii");
}*/

var text_area;
var compassHeading;
var filter;
var freq;

var state;
var mic;
var recorder;
var soundX;
var soundNorth;
var soundEast;
var soundSouth;
var soundWest;
var stringNorth;
var stringEast;
var stringSouth;
var stringWest;

var looper;

var recordButton;
var playButton;
var loopButton;
var stopLoopButton;
var compassFilterButton;
var toggleCompassFilterButton;

var backgroundColor;
var cnv;

function setup() {
    //COMPASS
    window.addEventListener('deviceorientation', function(e) {
    var alpha = e.alpha;
        if(e.webkitCompassHeading){
            compassHeading = e.webkitCompassHeading;
        } else compassHeading = 360 - alpha;
        }); 

    cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    text_area = document.getElementById("compass_content");
    backgroundColor = color(100, 50, 150);

    state = 0;
    mic = new p5.AudioIn();
    mic.start();
    recorder = new p5.SoundRecorder();
    recorder.setInput(mic);
    soundX = new p5.SoundFile();
    soundNorth = new p5.SoundFile();
    soundEast = new p5.SoundFile();
    soundSouth = new p5.SoundFile();
    soundWest = new p5.SoundFile();
//BUTTONS
    recordButton = createButton('press + hold to record');
    recordButton.mousePressed(rec);
    recordButton.mouseReleased(stop);
    playButton = createButton('play');
    playButton.mousePressed(play);
    loopButton = createButton('loop');
    loopButton.mousePressed(loops);
    stopLoopButton = createButton('stop');
    stopLoopButton.mousePressed(stop);
    compassFilterButton = createButton('compass filter');
    compassFilterButton.mousePressed(compassFilter);
    toggleCompassFilterButton = createButton('toggle filter');
    toggleCompassFilterButton.mousePressed(toggleCompassFilter);

    looper = new p5.SoundLoop();

    filter = new p5.BandPass();     
};
    
function rec(){
    if (mic.enabled) {
        recorder.record(soundX);
    }
};

function stop(){
    recorder.stop();
    text('Stopped', 20, 20); 
};

function play(){
    let stringNorth = JSON.stringify(soundX);
    //console.log(soundFileString, 'success!');
    soundX.play(); //play the result
};
   
function loops(){
    looper = new p5.SoundLoop(function(timefromnow){soundX.play(1)},1);
    looper.start();
};

function compassFilter(){
    let stringNorth = JSON.stringify(soundX);
    soundX.connect(filter);
    soundX.play();
};

function toggleCompassFilter(){
    let stringNorth = JSON.stringify(soundX);
    soundX.connect(filter);
    soundX.play();
    filter.toggle();
};

function stopLoops(){
    if (looper.isPlaying) {
    looper.stop();
  } else if (soundX.isPlaying) {
    soundX.stop();
  }
    console.log('loop stopped');
};

function draw(){
    backgroundColor.setRed(128 + 128 * sin(millis() / 1000));
    background(backgroundColor);
    playButton.position (displayWidth/2,displayHeight/2+60);
    recordButton.position(displayWidth/2-45, displayHeight/2);
    loopButton.position (displayWidth/2-45,displayHeight/2+120);
    stopLoopButton.position (displayWidth/2+45,displayHeight/2+120);
    compassFilterButton.position (displayWidth/2-45,displayHeight/2+180);
    toggleCompassFilterButton.position (displayWidth/2+45,displayHeight/2+180);
    

    let stringCompass = JSON.stringify(compassHeading)
    console.log(stringCompass);
    freq = stringCompass*40+800
    filter.freq(freq);
    filter.res(40);
};

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
};

/*compass activations 
   if(compassHeading >= 355 || compassHeading <=5){

    };

    if(compassHeading >= 5 && compassHeading <=31){
 
    };

    if(compassHeading >= 31 && compassHeading <=41){
    };

    if(compassHeading >= 41 && compassHeading <=67){
    };

    if(compassHeading >= 67 && compassHeading <=77){
    };

    if(compassHeading >= 77 && compassHeading <=103){
    };

    if(compassHeading >= 103 && compassHeading <=113){
    };

    if(compassHeading >= 113 && compassHeading <=139){
    };

    if(compassHeading >= 139 && compassHeading <=149){
    };

    if(compassHeading >= 149 && compassHeading <=175){
    };

    if(compassHeading >= 175 && compassHeading <=185){
    };

    if(compassHeading >= 185 && compassHeading <=211){
    };

    if(compassHeading >= 211 && compassHeading <=221){
    };

    if(compassHeading >= 221 && compassHeading <=247){
    };

    if(compassHeading >= 247 && compassHeading <=257){
    };

    if(compassHeading >= 257 && compassHeading <=283){
    };

    if(compassHeading >= 283 && compassHeading <=288){
    };

    if(compassHeading >= 288 && compassHeading <=319){
    };

    if(compassHeading >=319 && compassHeading <=329){

    };*/