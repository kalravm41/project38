const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var database;
var form;
var playerName;
var playerCount = 0;
var gameState = 0; 
var trackImg;
var track;
var player;


// function preload(){
//   trackImg = loadImage("track.png");
// }

function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;
  form = new Form();
  database = firebase.database();
  var playerCountRef = database.ref('playercount');
  playerCountRef.on("value",(data)=>{
    playerCount = data.val();
   })
   var playerCountRef = database.ref('playername');
   playerCountRef.on("value",(data)=>{
     playerName = data.val();
    });
    var playerstateRef = database.ref('gamestate');
    playerstateRef.on("value",(data)=>{
      gameState = data.val();
     });
     track = new Track(displayWidth/2,displayHeight/2,displayWidth-50);
     player = new Player(displayWidth/2,displayHeight/2,50,50);
}

function draw() {
  background(255,255,255);
  console.log(playerCount);
  Engine.update(engine);  
  form.display();  

if(keyIsDown(UP_ARROW)){
  player.display();
  player.body.position.y += 10;
  console.log(player.body.position);
}

  drawSprites();
}


function updateCount(count){
  database.ref('/').update({
    playercount: count
  });
}

function updateName(name){
  var playerIndex = "players/player" + playerCount;
  database.ref(playerIndex).set({
    playername : name
  });
}

function updateState(state){
  database.ref('/').update({
    gamestate: state
  });
}

