let smoothing, bins, amplitude, bars, factor, radius, exponent, strokeWidth, affinity, colour; //locally stored values
let frameID = 0; //counter for animating the loading animation when a new song is uploaded
let ctx; //global canvas

function preload(){

    const inputElement = document.getElementById('sounds');
    
    inputElement.onchange = function(event){
            
        let fileList = inputElement.files;
        
        frameID = 0;
        sound.stop();
        sound = loadSound(fileList[fileList.length-1]);
        sound.amp(parseFloat(amplitude));
        //console.log("loggers");
        //load sound

        //console.log(sound);
    }
    
    getStorage(); //sets variables from previous page

    sound = loadSound('./sounds/one summers day.wav');
}

function keyPressed(){

    const ui = document.getElementById('ui');

    if(ui.style.display == "none"){ ui.style.display = "block";}else{ui.style.display = "none";}

}

function getStorage(){
    smoothing = localStorage.getItem("SMOOTHING");
    bins = Math.pow(2, localStorage.getItem("BINS"));
    amplitude = localStorage.getItem("AMPLITUDE");
    bars = localStorage.getItem("BARS");
    factor = localStorage.getItem("FACTOR");
    radius = localStorage.getItem("RADIUS");
    exponent = localStorage.getItem("EXPONENT");
    strokeWidth = localStorage.getItem("STROKEWEIGHT");
    affinity = localStorage.getItem("AFFINITY");
    colour = localStorage.getItem("COLOUR");
}

function setup(){
    ctx = createCanvas(window.innerWidth,window.innerHeight);
    ctx.mouseClicked(togglePlay);
    fft = new p5.FFT(smoothing, bins);
    sound.amp(parseFloat(amplitude));
}

function draw(){
    let bass = affinity*fft.getEnergy("bass");

    background(bass*bass/5000); //uses bass squares so its only sensitive at higher amplitudes

    let spectrum = fft.analyze();

    spectrum.splice(bars, bins-bars); 

    noStroke();

    //variables for drawing circlular spectrum
    let dtheta = (Math.PI)/spectrum.length, angleOffset = -Math.PI/6;
    let x1 = window.innerWidth/2, y1 = window.innerHeight/2;
    let angle, x2, y2, x3, y3, magnitude; //factor = number of pixels that 0-255 volume gets mapped to, exponent = coefficient of exaggeration of the spectrum graph
    //

    stroke(200);
    strokeWeight(strokeWidth);

    for (let i = 0; i < spectrum.length; i++){

        magnitude = ((Math.pow(spectrum[i], exponent) * factor)/Math.pow(255, exponent)) + (radius * (1 + bass/510)); //magnitude = frequency volume ^ exponent / 255 ^ exponent
        
        angle = dtheta * i;

        //work out line endpoints (the +- dtheta/2 bit is so both halves line up correctly)
        x2 = Math.cos(angleOffset + angle + dtheta/2) * magnitude + x1; 
        y2 = Math.sin(angleOffset + angle + dtheta/2) * magnitude + y1;
        x3 = Math.cos(angleOffset - angle - dtheta/2) * magnitude + x1; 
        y3 = Math.sin(angleOffset - angle - dtheta/2) * magnitude + y1;

        line(x1, y1, x2, y2);
        line(x1, y1, x3, y3);

        //let x = map(i, 0, spectrum.length, 0, width);
        //let h = -height + map(spectrum[i] * spectrum[i], 0, 255 * 255, height, 0);
        //rect(x, height, width / spectrum.length, h)
    }

    fill(colour);
    circle(x1, y1, radius * (2 + bass/255));

    let waveform = fft.waveform();
    noFill();
    beginShape();
    strokeWeight(2);

    let scale = 0;

    for (let i = 0; i < waveform.length; i++){

        scale = 0.5 * Math.sin((i*Math.PI)/waveform.length) + 0.5;

        let x = map(i, 0, waveform.length, x1 - (radius*(1 + bass/510)), x1 + (radius*(1 + bass/510)));
        let y = map(waveform[i] * scale, -1, 1,  (height/2) - (radius * (2 + bass/255)), (height/2) + (radius * (2 + bass/255)));
        vertex(x,y);
    }
    endShape();

    if(!sound.isLoaded()){loading(radius * (1 + bass/510));}
}
  
function loading(radius){
    stroke(255);
    strokeWeight(10);
    arc(window.innerWidth/2, window.innerHeight/2, radius*2, radius*2, Math.sin(frameID/50)*2+frameID/10, frameID/10+Math.PI);
    noFill();
    frameID++;
}

function togglePlay() {
    if (sound.isPlaying()) {
      sound.pause();
    } else {
      sound.play();
    }
}