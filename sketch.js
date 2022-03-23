var bg_img;
var bird,b_animation,gameOver,gameOverImg,resetbtn,resetbtn_img;

var form,game,canvas,witch_img,witch,cloud,cloud_img,red_ball,red_ball_img,bgSound,logoImg;
var witch,virus,virus_img,edges,ObstacleGrp,CloudsGrp,witchGrp,redBallGrp,virusGrp,jumpsound;
var player,playerCount=0;
var score = 0

var gameState = "play";

function preload(){
//bg_img = loadImage("assets/bg.png")
ab_animation =loadAnimation("./assets/bird1.png","./assets/bird2.png","./assets/bird1.png","./assets/bird3.png","./assets/bird4.png","./assets/bird5.png","./assets/bird6.png","./assets/bird7.png","./assets/bird8.png")
bg_img = loadImage("./assets/bg.jpg")
witch_img = loadImage("./assets/ob1.png")
cloud_img = loadImage("./assets/cloud1.png")
virus_img = loadImage("./assets/virus.png")
red_ball_img = loadImage("./assets/redbubble.png")
jumpsound = loadSound("jump.mp3")
bgSound = loadSound("bgmusic.mp3")
gameOverImg = loadImage("./assets/gameOver.png")
logoImg= loadImage("./assets/logo.png")
resetbtn_img = loadImage("reset.png")
}

function setup() {

  canvas = createCanvas(windowWidth,windowHeight)
    game = new Game()
    game.start()

}

function draw() {
 background(bg_img);  
if(player.count >= 1){
game.play()
}
}