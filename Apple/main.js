x = 0;
y = 0;

draw_apple = "";
apple="";
to_number=0;
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
  to_number=Number(content);
  if(Number.isInteger(to_number)){
    draw_apple="set";
  }
  
}

function setup() {
 canvas=createCanvas(900,600)
}

function draw() {
  if(draw_apple == "set")
  {
    
    for(i=1;i<=to_number;i++){
      x=Math.floor(Math.random()*900);
      y=Math.floor(Math.random()*600);
      image(apple,x,y,30,30); 
    }
  
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
function preload(){
  apple=loadImage("apple.png");
}