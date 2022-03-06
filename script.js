var level = 1;



var emojis = ['🐱','🐕','😀','❌','☹','😀🐕','😀🐱','😡','☹🐕','😡🐱','🪕','🐱❤🐕','✨more comeing soon✨'];
var ansers = ['cat','dog','happy face','x','sad face','happy dog','happy cat','mad face','sad dog','mad cat','banjo','cat loves dog','o'];








fail_snd = new Audio("fail.mp3");
win_snd = new Audio("win.wav");

function win(){
  var myCanvas = document.createElement('canvas');
  document.getElementById("div").appendChild(myCanvas);

var myConfetti = confetti.create(myCanvas, {
  resize: true,
  useWorker: true
});
myConfetti({
  particleCount: 100,
  spread: 160
  // any other options from the global
  // confetti function
});
}

window.alert("❓instructions: type what text you think matchs the emoji(s). no symbels,upercase leters,numbers. ✨have fun✨ ");
function start(){
document.getElementById("text").textContent = emojis[level-1];
document.title = 'emoji guess level: 1';}

function enter(){
  if(document.getElementById("inp").value == ansers[level-1]){
    next();
  }
  else{
    fail();
  }
}

function next(){
  win_snd.play();
  level +=1;
  document.getElementById("text").textContent = emojis[level-1];
  document.getElementById("inp").value = "";
  document.title = "emoji guess level: "+level;
  document.getElementById("level").textContent = "level: "+level;
  //win();
}

function fail(){
  fail_snd.play();
  shake();
  document.getElementById("inp").value = "";
}


function shake(){
  text = document.getElementById("text");
  text.classList.remove("shake_test");
  void text.offsetWidth;
  text.classList.add("shake_test");
  text = document.getElementById("inp");
  text.classList.remove("shake_test");
  void text.offsetWidth;
  text.classList.add("shake_test");
  text = document.getElementById("btn");
  text.classList.remove("shake_test");
  void text.offsetWidth;
  text.classList.add("shake_test");
}


 
//submit form when 'Enter' key is pressed while in myInputID.
document.getElementById("inp").addEventListener("keyup", function(event) {
if (event.keyCode === 13) {

 enter();
}
});
