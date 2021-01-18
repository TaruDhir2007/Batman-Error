const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var maxDrops = 100;

var drops = [];

function preload(){
    
}

function setup(){
createCanvas(500, 500)  
engine = Engine.create();
world = engine.world; 
for(var i = 0; i < maxDrops; i++){
    drops.push(new Drop(random(1, 500), random(0, 400)))
    }    
}

function draw(){
    background(0);
    Engine.update(engine);

}   

