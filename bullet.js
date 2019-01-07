function Bullet (_x, _y, _ID, _tower, _dmg) {
    this.x = _x;
    this.y = _y;
    this.ID = _ID;
    this.tower = _tower;
    this.damage = _dmg
    //Jego początkowy X, Y, ID (numer na tablicy) wroga do którego zmierza, nr na tablicy wieży z której wychodzi, obrażenia jakie zadaje
    
    this.dirX = 0;
    this.dirY= 0;
    this.lengthFromTower = 0;
    this.length = 50;
    
    //jego kierunek w X, Y, odległośc jaką pokonał od wieży, odległość jaka go dzieli od przeciwnika
    
   
}

Bullet.prototype.list = new Array(0);

Bullet.prototype.create = function (_x, _y, _ID, _tower, _dmg) {
    Bullet.prototype.list.push(new Bullet(_x, _y, _ID, _tower, _dmg));
}

Bullet.prototype.update = function (DeltaTime) {
    
    if (Enemy.prototype.list.length > this.ID){
        this.dirX += Enemy.prototype.list[this.ID].x - this.x;
        this.dirY += Enemy.prototype.list[this.ID].y - this.y;
    }
   // aktualizuje kierunek
    
   this.length = Math.sqrt(this.dirX * this.dirX + this.dirY * this.dirY);
   //aktualizuje odległośc od przecinika
    
    if(this.length != 0){
        this.dirX /= this.length;
		this.dirY /= this.length;
        
	} 
    else {
		this.dirX = 0;
		this.dirY = 0;
        
    }
    //dzieli kierunek przez odległośc, żeby iśc cały czas z tą samą prędkością 
    
    this.x += this.dirX*DeltaTime*150; 
	this.y += this.dirY*DeltaTime*150;
    
    //aktualizuje położenie
    
    this.lengthFromTower = Math.sqrt((TowerDD.prototype.list[this.tower].x - this.x) * (TowerDD.prototype.list[this.tower].x - this.x) + (TowerDD.prototype.list[this.tower].y - this.y) * (TowerDD.prototype.list[this.tower].y - this.y) );
    
    //aktualizuje odległośc od wieży z której pochodzi
}
Bullet.prototype.updateAll = function (DeltaTime) {
    for (var i = 0; i < Bullet.prototype.list.length; i++){
        Bullet.prototype.list[i].update(DeltaTime);
        
        if (Bullet.prototype.list[i].lengthFromTower >= TowerDD.prototype.list[Bullet.prototype.list[i].tower].reach || Bullet.prototype.list[i].length <= 10 ){
            if (Bullet.prototype.list[i].length <= 10){
                if (Enemy.prototype.list.length > Bullet.prototype.list[i].ID){
                     Enemy.prototype.list[Bullet.prototype.list[i].ID].slap(Bullet.prototype.list[i].damage);
                }
                
            Bullet.prototype.list.splice(i, 1);
            i--
            }
        
            //Usuwa pociski które wyszły po za obręb wieży lub trafiły w przeciwnika oraz zadaje obrażenia przeciwnikowi
        }
        
        
    }
 }


Bullet.prototype.draw = function () {
    ctx.drawImage(Bullet.image, 0, 0, Bullet.image.width, Bullet.image.height,  this.x, this.y, 20, 20);
    
}

Bullet.prototype.drawAll = function () {
    for (var i = 0; i < Bullet.prototype.list.length; i++){
        Bullet.prototype.list[i].draw();
    }
}