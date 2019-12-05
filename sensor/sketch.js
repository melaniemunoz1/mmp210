var serial;
var portName = "/dev/tty.usbmodemFA131";
var sensorValue;
var faceSize = 400;
var x = 300;
var y = 600;

function setup() {
    createCanvas(640, 360);

    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);

    serial.open(portName);
}

function serverConnected() {
    console.log('connected to server.');
}

function portOpen() {
    console.log('the serial port open.');
}

function portClose() {
    console.log('The serial port close.');
}

function serialError() {
    console.log("error");
}

function serialEvent() {
    var currentString = serial.readLine();
    trim(currentString);
    if (!currentString) {
        return;
    }
    sensorValue = currentString;
}

function draw() {
    background("pink");
    fill(150, 100);
    stroke("white");
    strokeWeight(10);
    circle(x, y - 400, 100); //left eye

    faceSize = map(sensorValue, 21, 25, 350, 100);
    console.log(sensorValue, faceSize)

    ellipse(faceSize, x + 100, y + 200, y + 100);
    circle(x + 200, x - 100, y - 550); //right eye

    fill("lightblue");
    triangle()

    circle(x + 100, y - 300, y - 550);

    arc(faceSize, faceSize + 50, x - 230, x - 200, 0, PI + QUARTER_PI);
}
