function preload(){
zombie_img=loadImage("images/zombie.png")
shooter_img=loadImage("images/shooter.png")
enemy_img=loadImage("images/enemy.png")
bullet_img=loadImage("images/bullet.png")
}
function setup(){
createCanvas(displayWidth-20,displayHeight-40);
zombie=createSprite(100,100);
zombie.addImage(zombie_img);
shooter=createSprite(200,200);
shooter.addImage(shooter_img);
enemy=createSprite(300,200);
enemy.addImage(enemy_img);
bullet=createSprite(200,300);
bullet.addImage(bullet_img);
}
function draw(){
 background("black")
 drawSprites();
}