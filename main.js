var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function late(){
    
}
var mousex = 0;
var mousey = 0;
var latestTime = Date.now();
var clickX =0;
var clickY =0;

var mouseDown = false;
var mouseUp = false;

var anotherContains = true;
var lastDragged = null;
var TLDL = 0;

var IDnearest = 0;

var wieza0 = [];
var wieza1 = [];
var wieza2 = [];
var wieza3 = [];
var wieza4 = [];
var wieza5 = [];

var test = ["siema", "raz", "dwa", "trzy"];

var zombie0 = [];
var zombie1 = [];
var zombie2 = [];
var zombie3 = [];
var zombie4 = [];
var zombie5 = [];
var zombie5 = [];

var hearth = [];
var moneyImg = [];
var end = [];

var fala = 0;

var money = 100;
var life = 20;
var score = 0;

var wave = 0;

var started =0;


var Enemys = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0],
    [2, 2, 2],
    [3, 3, 3, 3, 3, 3],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1],
    [3, 3, 3, 3, 4, 4, 4],
    [2, 2, 4, 4, 3, 3, 4, 2],
    [3, 3, 3, 2, 2, 4, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 3, 4]
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    
    
];
                                       //<<<<<<<<


Bullet.image = new Image();
Bullet.image.src = "pocisk1.png"

wieza0.image = new Image();
wieza0.image.src = 'wieza1.png';

wieza1.image = new Image();
wieza1.image.src = 'wieza0.png';

wieza2.image = new Image();
wieza2.image.src = 'wieza2.png';

wieza3.image = new Image();
wieza3.image.src = 'wieza3.png';

wieza4.image = new Image();
wieza4.image.src = 'przeszkoda1.png';

wieza5.image = new Image();
wieza5.image.src = 'przeszkoda2.png';

zombie0.image = new Image();
zombie0.image.src = 'zombie0.png';

zombie1.image = new Image();
zombie1.image.src = 'zombie1.png';

zombie2.image = new Image();
zombie2.image.src = 'zombie2.png';

zombie3.image = new Image();
zombie3.image.src = 'zombie3.png';

zombie4.image = new Image();
zombie4.image.src = 'zombie4.png';

zombie5.image = new Image();
zombie5.image.src = 'zombie4.png';

map = new Image();
map.src = "map.png";

Menu.image = new Image();
Menu.image.src = 'menu.png';

Castle.image = new Image();
Castle.image.src = 'castle.png';

hearth.image = new Image();
hearth.image.src = 'hearth.png';

moneyImg.image = new Image();
moneyImg.image.src = 'money.png';

end.image = new Image();
end.image.src = 'end.png'
var ref = setInterval(refresh,15);



function start() {
    
   
    Point.prototype.spawn(75,325);
    //Point.prototype.spawn(475,525);
    Point.prototype.spawn(225,325);
    Point.prototype.spawn(225 ,75 );
    Point.prototype.spawn(375 ,75 );
    Point.prototype.spawn(375, 225 );
    Point.prototype.spawn(575,225 );
    Point.prototype.spawn(575,75 );
    Point.prototype.spawn( 725,75 );
    Point.prototype.spawn( 725,325);
    Point.prototype.spawn(325,325);
    Point.prototype.spawn(325,900 );
    
    
	//kropki są ułożone na środku każdego zakrętu

    for (var i = 0; i<6; i++){
    TowerDD.prototype.create(i);
}
    
    ref
    setInterval(TowerDD.prototype.shotAll0,1000);
    setInterval(TowerDD.prototype.shotAll1,2000);
    setInterval(TowerDD.prototype.shotAll2,500);
    setInterval(TowerDD.prototype.shotAll3,780);
    
}


    

function refresh() {
    
   for ( var i = 0; i<Enemy.prototype.list.length; i++){
       
   }
   
       ctx.clearRect(0,0,canvas.width, canvas.height);
       if(Enemy.prototype.list.length > 0) score += 0.01;
        ctx.drawImage(map, 0, 0);
        var now = Date.now();
        var DeltaTime = (now - latestTime)/1000;
        if (DeltaTime > 1500) DeltaTime = 1500;
        stefan = Enemy.prototype.list[0];
        andrzej = TowerDD.prototype.list[0];
        mietek = Bullet.prototype.list[0];


        Menu();


        TowerDD.prototype.updateAll(DeltaTime);
        TowerDD.prototype.drawAll();
        //TowerDD.prototype.updateAll();
        Enemy.prototype.updateAll(DeltaTime);
        Enemy.prototype.drawAll();

        Bullet.prototype.updateAll(DeltaTime);
        Bullet.prototype.drawAll();

        Bullet8.prototype.updateAll(DeltaTime);
        Bullet8.prototype.drawAll();

        Laser.prototype.updateAll(DeltaTime);
        Laser.prototype.drawAll();


        Castle();

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(life, 340, 540);
        ctx.fillText(money, 340, 580);
        ctx.drawImage(hearth.image, 400, 520);
        ctx.drawImage(moneyImg.image, 395, 550);
        ctx.fillText("SCORE: "+Math.floor(score)+"", 600, 30);


       if (Enemy.prototype.list.length != 0) document.getElementById("newfall").disabled = true;
        else document.getElementById("newfall").disabled = false;

        latestTime = now;
   
    if (life <= 0){
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        document.getElementById("mute").style.zIndex = "-1";
        document.getElementById("newfall").style.zIndex = "-1";
        ctx.drawImage(end.image, 0, 0);
        ctx.font = "40px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(Math.floor(score), 130, 450);
       
        clearInterval(ref);
        
    }
    
}

function newFall() {
    var i = wave;
    if (Enemy.prototype.list.length == 0){
        for (var o = 0; o< Enemys[i].length; o++){
            Enemy.prototype.spawn(Enemys[i][o], o*-90 )
            
            
        }
        wave++;
    }
    
}

function playAgain(){
    fala = 0;
    money = 100;
    life = 20;
    score = 0;
    wave = 0;
    mousex = 0;
    mousey = 0;

    clickX =0;
    clickY =0;
    mouseDown = false;
    mouseUp = false;

    anotherContains = true;
    lastDragged = null;
    TLDL = 0;

    IDnearest = 0;
    started =0;
    
    document.getElementById("mute").style.zIndex = "1";
    document.getElementById("newfall").style.zIndex = "1";
    
    TowerDD.prototype.list.length = 0;
    Bullet.prototype.list.length = 0;
    Bullet8.prototype.list.length = 0;
    Laser.prototype.list.length = 0;
    Enemy.prototype.list.length = 0;
    
    start();
    
}

canvas.addEventListener("mousemove",function(event){
    mousex = event.clientX ;  
    mousey = event.clientY ;
});

canvas.addEventListener("mousedown",function(event){
    mouseDown = true;
    clickX = event.clientX -10;
    clickY = event.clientY +40;
    
});

canvas.addEventListener("mouseup",function(){
    mouseDown = false;
    mouseUp = true;
    if (life <= 0) {
        
        playAgain();
        ref = setInterval(refresh, 15);
    }
    var TypeLastDragged = new Array (0);
    for (var i = 0; i < TowerDD.prototype.list.length; i++){
        if (TowerDD.prototype.list[i].isDragged && TowerDD.prototype.list[i].can) money -= TowerDD.prototype.list[i].cost;
        TowerDD.prototype.list[i].isDragged = false;
        TowerDD.prototype.list[i].isClicked = false;
        if (TowerDD.prototype.list[i].type == lastDragged){
            TypeLastDragged.push(TowerDD.prototype.list[i]);
            TLDL = TypeLastDragged.length;
           
            
        }
        
        if (!TowerDD.prototype.list[i].can){
            TowerDD.prototype.list.splice(i, 1);
            i--;
        }
       
         }
     if(TypeLastDragged[TypeLastDragged.length-1].y != 540){
                TowerDD.prototype.create(lastDragged);
                TypeLastDragged.push(TowerDD.prototype.list[TowerDD.prototype.list.length-1]);
                
                //tu jest takie gówno, że nawet tego nie komentuję
            }
    TypeLastDragged.length = 0;
    
    
    
});



//zapisz do zmiennej typ wieży którą przenosisz, onmouse Up skopiuj typ który jest w zmiennnejs





