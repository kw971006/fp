let img;
let sd, d, s, v, b, g, g2;
let amplitude;
let amplituded;
let amplitudes;
let amplitudev;
let amplitudeb;
let amplitudeg;
let value = 0;
var colors = ["#0B3954","#BFD7EA","#FF6663","#E0FF4F","#048A81"]

function preload(){
  img = loadImage('stage.png');
  sd = loadSound('song.mp3');
  g2 = loadSound('mr.mp3');
  d = loadSound('drum.mp3');
  s = loadSound('solo.mp3');
  v = loadSound('vocal.mp3');
  b = loadSound('bass.mp3');
  g = loadSound('guitar.mp3');
  dd = loadImage('drum.png');
  vv = loadImage('vocal.png');
  bb = loadImage('bass.png');
  gg = loadImage('guitar.png');
  ddg = loadImage('drumg.png');
  bbg = loadImage('bassg.png');
  ggg = loadImage('guitarg.png');
  g2.disconnect();d.disconnect();g.disconnect();b.disconnect();s.disconnect();v.disconnect();
}
function setup() {
  createCanvas(679, 345);
  fft = new p5.FFT();
  
  
  amplitude = new p5.Amplitude();
  amplitude.setInput(sd);
  amplitudeg2 = new p5.Amplitude();
  amplitudeg2.setInput(g2);
  amplituded = new p5.Amplitude();
  amplituded.setInput(d);
  amplitudes = new p5.Amplitude();
  amplitudes.setInput(s);
  amplitudev = new p5.Amplitude();
  amplitudev.setInput(v);
  amplitudeb = new p5.Amplitude();
  amplitudeb.setInput(b);
  amplitudeg = new p5.Amplitude();
  amplitudeg.setInput(g);
  
}

function draw() {
        background(img);
		let level = amplitude.getLevel();
        let lvd = amplituded.getLevel();
        let lvs = amplitudes.getLevel();
        let lvv = amplitudev.getLevel();
        let lvb = amplitudeb.getLevel();
        let lvg = amplitudeg.getLevel();
        let spectrum = fft.analyze();
        image(ddg, 296, 170,98, 57);
        if(lvd > 0){
        image(dd, 296, 170,98, 57)
        }
        
        push();
        translate(396, 215)
        rotate(-PI / 7.0);
        image(bbg, 0, 0,90, 25.5);
        if(lvg > 0){
        image(bb, 0, 0,90, 25.5)
        }
        pop();
        
        push();
        translate(196, 215)
        rotate(-PI / 7.0);
        image(ggg, 0,0,90, 27.825);
        if(lvg > 0){
        image(gg, 0,0,90, 27.825)
        }
        pop();
        if(lvv > 0.05){
          push();
          blendMode(SCREEN);
          fill(255,255,255,100);
          ellipse(338.5, 255,50,30)
          pop();
        }
        image(vv, 326, 175,22.9,85.4);
        
        
        push();
        translate(width/2+100,height*2/3);
        blendMode(SCREEN);
        fill(11,57,84,100);
        rotate(radians(frameCount));
		ellipse(width/20,height/20, 40+level*100, 40+level*100);
        pop();
        
        push();
        translate(width/2-100,height*2/3);
        blendMode(SCREEN);
        fill(11,57,84,100);
        rotate(radians(125-frameCount));
		ellipse(width/20,height/20, 40+level*100, 40+level*100);
        pop();
       
        push();
        translate(width/2+70,height*2/3-30);
        blendMode(SCREEN);
        fill(255,102,99,100);
        rotate(radians(-frameCount));
		ellipse(width/20,height/20, 60+level*50, 60+level*50);
        pop();
        
        push();
        translate(width/2-70,height*2/3-30);
        blendMode(SCREEN);
        fill(255,102,99,100);
        rotate(radians(frameCount+125));
		ellipse(width/20,height/20, 60+level*50, 60+level*50);
        pop();
}
function mousePressed(){
  if(value === 0) {
  sd.play();
    
  g2.play();
  d.play();
  g.play();
  v.play();
  b.play();
  s.play();
    
  }
}
function mousePressed() {
  if (sd.isPlaying()) {
    
    
  sd.stop();
    
  g2.stop();
  d.stop();
  g.stop();
  v.stop();
  b.stop();
  s.stop();
    
  
  } else {
    sd.play();
    sd.setVolume(0.5);
    g2.play();
  d.play();
  g.play();
  v.play();
  b.play();
  s.play();
  }
}
