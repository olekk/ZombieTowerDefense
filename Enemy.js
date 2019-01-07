function Enemy(_type, _y) {
    this.type = _type;
    this.x = 75;
    this.y = _y;
    this.dirY = 0;
    this.dirX = 0;
    this.point = 0;
	this.alpha = 1;
	this.varAlpha = 0.009;
    this.direction = 1;
    
    this.life = 20;
    this.money = 0;
    this.damage = 0;
    this.isGlued = false
    
    switch(this.type){
        case 0:
            this.life = 10;
            this.money = 5;
            this.damage = 1;
            break;
        case 1:
            this.life = 20;
            this.money = 7;
            this.damage = 1;
            break;
            
        case 2:
            this.life = 40;
            this.money = 10;
            this.damage = 10;
            break;
            
        case 3:
            this.life = 15;
            this.money = 6;
            this.damage = 4;
            break;
            
        case 4:
            this.life = 20;
            this.money = 8;
            this.damage = 5;
            break;
                    }
    
	
    
    
    
}
Enemy.prototype.slap = function (_dmg) {
    var dmg = _dmg
	this.life -= dmg;
	//this.varAlpha *= -1;
    if (this.alpha > 0.9) this.alpha -= 0.5;
    
}

Enemy.prototype.draw = function() {
        ctx.globalAlpha = this.alpha;
        //ctx.drawImage(Enemy.image, 0, 0, Enemy.image.width, Enemy.image.height, this.x-20, this.y-20, 40, 40);
        //ctx.fillStyle = "green";
        //ctx.fillRect(this.x - 20, this.y - 20, 40, 40);
       ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.direction*90*Math.PI / 180);
        
        switch(this.type){
            
            case 0:
                ctx.drawImage(zombie0.image, 0, 0, zombie0.image.width, zombie0.image.height, -20, -20, 40, 40);
                break;
                
            case 1:
                ctx.drawImage(zombie1.image, 0, 0, zombie1.image.width, zombie1.image.height, -20, -20, 40, 40);
                break;
                
            case 2:
                ctx.drawImage(zombie2.image, 0, 0, zombie2.image.width, zombie2.image.height, -20, -20, 40, 40);
                break;
                
            case 3:
                ctx.drawImage(zombie3.image, 0, 0, zombie3.image.width, zombie3.image.height, -20, -20, 40, 40);
                break;
                
            case 4:
                ctx.drawImage(zombie4.image, 0, 0, zombie4.image.width, zombie4.image.height, -20, -20, 40, 40);
                break;
                        }
   
         ctx.restore();
        ctx.globalAlpha = 1;
    }

Enemy.prototype.drawAll = function(){
    for(var i = 0; i<Enemy.prototype.list.length; i++){
        
        
        
        Enemy.prototype.list[i].draw();
        
	  
    }
}

Enemy.prototype.list = new Array(0);

Enemy.prototype.spawn = function (_type, _y){
    Enemy.prototype.list.push(new Enemy(_type, _y))
}


Enemy.prototype.update = function(DeltaTime){
    
   ctx.save();
    ctx.translate(this.x+50,this.y+50);
    ctx.rotate(90*Math.Pi/180);
    this.dirX += Point.prototype.list[this.point].x-this.x;
    this.dirY += Point.prototype.list[this.point].y-this.y;
    
   
    
    //var travelProgress = % odległości między punktami między którymi pokonuje trasę
    
    var length = Math.sqrt(this.dirX * this.dirX + this.dirY * this.dirY);
	
	if(length != 0) {
		this.dirX /= length;
		this.dirY /= length;
        
         if (this.dirX < 0.1 && this.dirY > 0) this.direction = 1;
        if (this.dirX > 0 && this.dirY < 0.1) this.direction = 0;
        if (this.dirX < 0 && this.dirY < 0.1) this.direction = 2;
        if (this.dirX < 0.1 && this.dirY < 0) this.direction = 3;
	} 
    else {
		this.dirX = 0;
		this.dirY = 0;
        
	}
    
   
        
    
    
    if(this.isGlued){
    this.x += this.dirX*DeltaTime*25; //50
    this.y += this.dirY*DeltaTime*25;
    }
    else{
    this.x += this.dirX*DeltaTime*50; //50
    this.y += this.dirY*DeltaTime*50;
        
    }
    
    //Mierzy wektor, dzieli przez odległość i nadaje kierunek. 
    
    if(length < 10 && this.point <= Point.prototype.list.length) this.point++;
	//Gdy przejdzie obok kropki przechodzi do następnej.
	
	this.alpha += this.varAlpha;
	if (this.alpha >= 1) this.alpha = 1;
	if (this.varAlpha <= 0) this.varAlpha *= -1;
    ctx.restore();
    
    this.isGlued = false;
    for (var i = 0; i < TowerDD.prototype.list.length; i++){
        if (TowerDD.prototype.list[i].type == 5 && TowerDD.prototype.list[i].isOnBF){
            if(Math.abs(this.x-TowerDD.prototype.list[i].x) < 20 && Math.abs(this.y-TowerDD.prototype.list[i].y) < 20){
              this.isGlued = true;  
            } 
            
        }
        else if(TowerDD.prototype.list[i].type == 4 && TowerDD.prototype.list[i].isOnBF){
            if(Math.abs(this.x-TowerDD.prototype.list[i].x) < 20 && Math.abs(this.y-TowerDD.prototype.list[i].y) < 20){
               this.slap(0.05);
            }
        }
    }
    //jeżeli znajduje się na kleju zmneijsza się jego prędkość 
}

Enemy.prototype.updateAll = function (DeltaTime){
     for(var i = 0; i<Enemy.prototype.list.length; i++){
        
         Enemy.prototype.list[i].update(DeltaTime);
         
         if (Enemy.prototype.list[i].y > 450 || Enemy.prototype.list[i].life <= 0) {
            if(Enemy.prototype.list[i].y > 450) life -= Enemy.prototype.list[i].damage;
             else{
                 money += Enemy.prototype.list[i].money;
                 score += Enemy.prototype.list[i].money;
             } 
            Enemy.prototype.list.splice(i, 1);
            i--;
			 
			 //Usuwa enemy, jeżeli wyszedł po za mapę.
            
        }
        
    }
}





