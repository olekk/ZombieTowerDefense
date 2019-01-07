function Bullet8 (_x, _y, _tower, _dmg, _nr) {
    this.x = _x;
    this.y = _y;
    this.tower = _tower;
    this.damage = _dmg
    this.number = _nr
    //Jego początkowy X, Y, nr na tablicy wieży z której wychodzi, obrażenia jakie zadaje, nr pocisku (żeby ustalić w którą stronę ma lecieć)
    
    this.dirX = 0;
    this.dirY= 0;
    this.lengthFromTower = 0;
    this.length = 50;
    
    //jego kierunek w X, Y, odległośc jaką pokonał od wieży, odległość jaka go dzieli od przeciwnika
    
   
}

Bullet8.prototype.list = new Array(0);

Bullet8.prototype.create = function (_x, _y, _tower, _dmg, _nr) {
    Bullet8.prototype.list.push(new Bullet8(_x, _y, _tower, _dmg, _nr));
   
}

Bullet8.prototype.update = function (DeltaTime) {
   
    switch (this.number){
        case 0:
            this.x += 00*DeltaTime;
            this.y += - 300*DeltaTime;
            break;
            
        case 1:
            this.x += 300*DeltaTime;
            this.y += 300*DeltaTime;
            break;
            
        case 2:
            this.x += 300*DeltaTime;
            this.y += 0*DeltaTime;
            break;
            
        case 3:
            this.x += 300*DeltaTime;
            this.y += -300*DeltaTime;
            break;
            
         case 4:
            this.x += 00*DeltaTime;
            this.y += 300*DeltaTime;
            break;
            
        case 5:
            this.x += -300*DeltaTime;
            this.y += -300*DeltaTime;
            break;
            
        case 6:
            this.x += -300*DeltaTime;
            this.y += 0*DeltaTime;
            break;
            
        case 7:
            this.x += -300*DeltaTime;
            this.y += 300*DeltaTime;
            break;
                       }
    
    this.lengthFromTower = Math.sqrt((TowerDD.prototype.list[this.tower].x - this.x) * (TowerDD.prototype.list[this.tower].x - this.x) + (TowerDD.prototype.list[this.tower].y - this.y) * (TowerDD.prototype.list[this.tower].y - this.y) );
    
    //aktualizuje odległośc od wieży z której pochodzi
}
Bullet8.prototype.updateAll = function (DeltaTime) {
    for (var i = 0; i < Bullet8.prototype.list.length; i++){
        
        Bullet8.prototype.list[i].update(DeltaTime);
        
        if (Bullet8.prototype.list[i].lengthFromTower >= TowerDD.prototype.list[Bullet8.prototype.list[i].tower].reach ){
             
            Bullet8.prototype.list.splice(i, 1);
            i--
            
            //Usuwa pociski które wyszły po za obręb wieży
        }
        else{
            for(var o = 0; o < Enemy.prototype.list.length; o++){
                if (Math.abs(Enemy.prototype.list[o].x - Bullet8.prototype.list[i].x) < 20 && Math.abs(Enemy.prototype.list[o].y - Bullet8.prototype.list[i].y) < 20){
                    Enemy.prototype.list[o].slap(Bullet8.prototype.list[i].damage)
                    Bullet8.prototype.list.splice(i, 1)
                    i--;
                }
            }
        }
        
        
        
        
    }
 }


Bullet8.prototype.draw = function () {
    ctx.drawImage(Bullet.image, 0, 0, Bullet.image.width, Bullet.image.height,  this.x, this.y, 20, 20);
    
}

Bullet8.prototype.drawAll = function () {
    for (var i = 0; i < Bullet8.prototype.list.length; i++){
        Bullet8.prototype.list[i].draw();
    }
}
