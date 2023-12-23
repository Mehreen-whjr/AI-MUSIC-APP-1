function preload() {
    musicFile1 = loadSound('music.mp3');
    musicFil21 = loadSound('music2.mp3');
  }
function setup() {
    createCanvas(windowWidth, windowHeight);
    center();
    webcam = createCapture(VIDEO);
    webcam.hide();
  }
function draw() {
    background(0);
    image(webcam, 0, 0, width, height);
  }