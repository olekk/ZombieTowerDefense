function Laser (_x, _y, _tower){
    this.x = _x;
    this.y = _y;
    this.tower = _tower;
    this.r = 0;
}

Laser.prototype.list = new Array(0);

Laser.prototype.create = function (_x, _y, _tower) {
    Laser.prototype.list.push(new Laser(_x, _y, _tower));
}

Laser.prototype.draw = function () {
    ctx.strokeStyle = "rgba(28, 131, 210, 0.25)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.stroke();

}

Laser.prototype.drawAll = function () { 
    for (var i = 0; i < Laser.prototype.list.length; i++){
        Laser.prototype.list[i].draw();
    }
}

Laser.prototype.update = function (DeltaTime) {
    this.r += 100*DeltaTime;
    
    for(var i = 0; i < Enemy.prototype.list.length; i++){
        
        var length = Math.sqrt(Math.pow(this.x - Enemy.prototype.list[i].x, 2) + Math.pow(this.y - Enemy.prototype.list[i].y, 2));
        
        if (Math.abs(length - this.r) < 5){
            Enemy.prototype.list[i].slap(0.1);
        }
    }
    
}

Laser.prototype.updateAll = function (DeltaTime) {
    for (var i = 0; i < Laser.prototype.list.length; i++){
        Laser.prototype.list[i].update(DeltaTime);
        
        if(Laser.prototype.list[i].r > TowerDD.prototype.list[Laser.prototype.list[i].tower].reach){
            Laser.prototype.list.splice(i, 1);
            i--;
        }
    }
}

