var serial;
var portName = "/dev/tty.usbmodemFD121";
var sensorValue;

function setup() {
    createCanvas(710, 400);
    serial = new p5.SerialPort();
    serial = new
    p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);

    serial.open(portName);
    background(102);
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

    stroke(255);
    if (sensorValue < 200 && sensorValue > 15) {
        strokeWeight(2);
        line(mouseX, mouseY, pmouseX, pmouseY)
    } else if (sensorValue > 200) {
        strokeWeight(30);
        line(mouseX, mouseY, pmouseX, pmouseY)
    }


}
