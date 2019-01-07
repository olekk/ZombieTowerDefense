function TowerDD (_type,) {
    this.type = _type;
    
    switch (this.type){
        case 0:
            this.x = 40;
            this.y = 540;
            this.reach = 150;
            this.onRoad = false;
            this.cost = 50;
            // this.image = wieza1.image;
            break;
            
        case 1:
            this.x = 90;
            this.y = 540;
            this.reach = 200;
            this.onRoad = false;
            this.cost = 100;
            //this.image = wieza1.image;
            break;
        case 2:
            this.x = 140;
            this.y = 540;
            this.reach = 300;
            this.onRoad = false;
            this.cost = 50;
            //this.image = wieza2.image;
            break;
            
        case 3:
            this.x = 190;
            this.y = 540;
            this.reach = 100;
            this.onRoad = false;
            this.cost = 200;
            //this.image = wieza3.image;
            break;
            
        case 4:
            this.x = 240;
            this.y = 540;
            this.reach = 40;
            this.onRoad = true;
            this.cost = 20;
            //this.image = wieza4.image;
            break;
            
        case 5:
            this.x = 290;
            this.y = 540;
            this.reach = 40;
            this.onRoad = true;
            this.cost = 30;
            //this.image = wieza5.image;
            break;
                     }
    
    
    this.contains = false;
    this.isDragged = false;
    this.startX = this.x;
    this.startY = this.y;
    this.clicked = false;
    this.can = true;
    this.isOnBF = false;
    this.cosinus = 0;
    this.nearest = 10000;
    this.IDnearest = 10;
    this.length = 0;
    this.DlengthX = 0;
    this.DlengthY = 0;
    this.number = -5;
    
}

TowerDD.prototype.list = new Array(0);

TowerDD.prototype.create = function (_type,){
    TowerDD.prototype.list.push(new TowerDD( _type));
}

TowerDD.prototype.draw = function () {
    
    ctx.save();
   /* ctx.translate(this.x+40, this.y+10)
    ctx.rotate(Math.acos(this.cosinus));*/
    //ctx.translate(20,20);
    
    ctx.translate(this.x, this.y);
    if (this.cosinus != 0  && this.isOnBF && (this.type == 0 || this.type == 1)){
        ctx.rotate((Math.acos(this.cosinus))*2);
        //console.log((Math.acos(this.cosinus)));
        
        //ZŁA POZYCJA STARTOWA OBROTU 
    }
    
    
    
    switch(this.type){
        case 0:
            ctx.drawImage(wieza0.image, 0, 0, wieza0.image.width, wieza0.image.height, -20, -20, 40, 40);
            break;
            
        case 1:
            ctx.drawImage(wieza1.image, 0, 0, wieza1.image.width, wieza1.image.height, -20, -20, 40, 40);
            break;
            
        case 2:
            ctx.drawImage(wieza2.image, 0, 0, wieza2.image.width, wieza2.image.height, -20, -20, 40, 40);
            break;
            
        case 3:
            ctx.drawImage(wieza3.image, 0, 0, wieza3.image.width, wieza3.image.height, -20, -20, 40, 40);
            break;
            
        case 4:
            ctx.drawImage(wieza4.image, 0, 0, wieza4.image.width, wieza4.image.height, -20, -20, 40, 40);
            break;
            
        case 5:
            ctx.drawImage(wieza5.image, 0, 0, wieza0.image.width, wieza0.image.height, -20, -20, 40, 40);
            break;
                    }
    
    ctx.restore();
}

TowerDD.prototype.drawAll = function () {
    for (var i = 0; i < TowerDD.prototype.list.length; i++){
        TowerDD.prototype.list[i].draw();
    }
}


TowerDD.prototype.update = function () {
     //console.log(this.IDnearest);
    
    for (var i = 0; i < TowerDD.prototype.list.length; i++){
        if (TowerDD.prototype.list[i].x == this.x && TowerDD.prototype.list[i].y == this.y) this.number = i;
        //sprawdza który numer w tablicy ma ta wieża
    }
    
    
    if(Enemy.prototype.list.length != 0){
        this.nearest = 1000;
         for (var i = 0; i < Enemy.prototype.list.length; i++){
             var distanse = Math.sqrt((this.x - Enemy.prototype.list[i].x)*(this.x - Enemy.prototype.list[i].x) + (this.y - Enemy.prototype.list[i].y) * (this.y - Enemy.prototype.list[i].y));
           
            if (distanse < this.nearest){
                this.nearest = distanse;
                this.IDnearest = i;
               
                //console.log(nearest);
            } 
        }
        
         if (Math.abs(this.x - Enemy.prototype.list[this.IDnearest].x) < Math.abs(this.y - Enemy.prototype.list[IDnearest].y)){
           this.cosinus = (this.x - Enemy.prototype.list[this.IDnearest].x) / this.nearest;
           // console.log( (Math.abs(this.x - Enemy.prototype.list[this.IDnearest].x)) / this.nearest);
            
            
        }
       else if (Math.abs(this.x - Enemy.prototype.list[this.IDnearest].x) >= Math.abs(this.y - Enemy.prototype.list[this.IDnearest].y)){
            this.cosinus = (this.y - Enemy.prototype.list[this.IDnearest].y) / this.nearest
            
        }

        
            this.DlengthX = Enemy.prototype.list[this.IDnearest].x - this.x;
            this.DlengthY = Enemy.prototype.list[this.IDnearest].y - this.y;
            this.length = Math.sqrt(this.DlengthX * this.DlengthX + this.DlengthY * this.DlengthY);
    }
    

            if ((Math.abs (this.x-20 - clickX+13) < 25) && (Math.abs(this.y - clickY+60) <25) && !this.isOnBF){
                this.clicked = true ;
            }
            else{
                this.clicked = false;
            }
        
            if ((Math.abs (this.x-20 - mousex+13) < 25) && (Math.abs(this.y-20 - mousey+20) <25) && mousey > 450 || this.isDragged){
                this.contains = true ;
            }
            else{
                this.contains = false;
            }
    //jeżeli wartość bezwględna różnicy położenia myszki a środka obrazka jest mniejsza niż 20 this.contains = true;
    
            /*if (TowerDD.prototype.list[0].contains || TowerDD.prototype.list[1].contains || TowerDD.prototype.list[2].contains || TowerDD.prototype.list[3].contains || TowerDD.prototype.list[4].contains || TowerDD.prototype.list[5].contains){
                
                //sprawdź powyższe pętlą 
            
            }
            else{
                document.body.style.cursor = 'default' ;
            }*/
    
            if(this.contains) document.body.style.cursor = 'pointer';
    
           //jeżeli któryś obrazek zawiera w sobie kursor, kursor zmienia się na pointer
    
            /*if(!mouseDown && this.clicked && this.y < 500 && !this.isDragged){
                TowerDD.prototype.create(this.startX, this.startY, this.type, this.copy);
                
            }*/
    
            if(mouseDown && this.clicked && !this.isOnBF && this.cost <= money){
                
                this.isDragged = true; 
                lastDragged = this.type;
                
            }
            
            
            if(this.isDragged){
                this.x = mousex ;
                this.y = mousey ;
                
                
                
                
                if ((this.x > Point.prototype.list[0].x - 40 && this.x < Point.prototype.list[0].x + 40 ) && (this.y  < Point.prototype.list[0].y + 40)){
                    
                    this.can = false;
                }
                
                else if ((this.x  > Point.prototype.list[0].x - 40 && this.x  < Point.prototype.list[1].x + 40) && (this.y  > Point.prototype.list[1].y - 40 && this.y  < Point.prototype.list[1].y + 40)){
                    this.can = false;
                }
                
                else if ((this.x > Point.prototype.list[1].x - 40 && this.x < Point.prototype.list[1].x + 40 ) && (this.y < Point.prototype.list[1].y + 40 && this.y  > Point.prototype.list[2].y -40)){
                    
                    this.can = false;
                }
                
                else if ((this.x > Point.prototype.list[2].x - 40 && this.x < Point.prototype.list[3].x + 40) && (this.y> Point.prototype.list[3].y - 40 && this.y  < Point.prototype.list[3].y + 40)){
                    this.can = false;
                }
                
                 else if ((this.x > Point.prototype.list[3].x - 40 && this.x < Point.prototype.list[3].x + 40 ) && (this.y  < Point.prototype.list[4].y + 40 && this.y  > Point.prototype.list[3].y -40)){
                    
                    this.can = false;
                }
                
                 else if ((this.x  > Point.prototype.list[4].x - 40 && this.x  < Point.prototype.list[5].x + 40) && (this.y > Point.prototype.list[5].y - 40 && this.y  < Point.prototype.list[5].y + 40)){
                    this.can = false;
                }
                
                  else if ((this.x> Point.prototype.list[5].x - 40 && this.x < Point.prototype.list[5].x + 40 ) && (this.y < Point.prototype.list[5].y + 40 && this.y > Point.prototype.list[6].y -40)){
                    
                    this.can = false;
                }
                
                 else if ((this.x > Point.prototype.list[6].x - 40 && this.x  < Point.prototype.list[7].x + 40) && (this.y  > Point.prototype.list[7].y - 40 && this.y  < Point.prototype.list[7].y + 40)){
                    this.can = false;
                }
                
                else if ((this.x > Point.prototype.list[7].x - 40 && this.x < Point.prototype.list[7].x + 40 ) && (this.y < Point.prototype.list[8].y + 40 && this.y  > Point.prototype.list[7].y -40)){
                    
                    this.can = false;
                }
                
                 else if ((this.x  > Point.prototype.list[9].x - 40 && this.x  < Point.prototype.list[8].x + 40) && (this.y  > Point.prototype.list[9].y - 40 && this.y  < Point.prototype.list[9].y + 40)){
                    this.can = false;
                }
                
                 else if ((this.x > Point.prototype.list[9].x - 40 && this.x < Point.prototype.list[9].x + 40 ) && (this.y  < Point.prototype.list[10].y + 40 && this.y  > Point.prototype.list[9].y -40)){
                    
                    this.can = false;
                }
               
                
                else{
                    this.can = true;
                }
                if (this.onRoad) this.can = !this.can;
                
                if(this.y > 460) this.can = false;
                
                for (var i = 0; i < TowerDD.prototype.list.length; i++){
                    if (TowerDD.prototype.list[i] != this){
                         if ((Math.abs(this.x - TowerDD.prototype.list[i].x) < 40) && (Math.abs(this.y - TowerDD.prototype.list[i].y) < 40)) this.can = false;
                    }
                   
                }
                
                if(this.can){
                    ctx.fillStyle = "rgba(128,255,0,0.5)";
                }
                else{
                    ctx.fillStyle = "rgba(255,0,0,0.5)";
                }
                
                if(!this.onRoad){
                      ctx.beginPath();
                    ctx.arc(this.x, this.y, this.reach, 0, 2 * Math.PI, false);
                   
                    ctx.fill();
                    ctx.lineWidth = 5;
                    ctx.strokeStyle = '#003300';
                    ctx.stroke();
                }
                else{
                    ctx.fillRect(this.x+-this.reach/2, this.y-this.reach/2, this.reach, this.reach);
                }
                
              
            }
            /*if (this.startX != this.x || this.startY != this.Y){
                TowerDD.prototype.create(this.startX.)
                //sprawdz czy zaden obiekt z tablicy za pomocą for nie jest na jego startowej  pozycji, jeśli nie to go tam skupiuj
            }*/
    
           /* for(var i = 0; i < TowerDD.prototype.list.length; i++){
                if(this.startX == TowerDD.prototype.list[i].x && this.startY == TowerDD.prototype.list[i].y)
            }*/
    
    
    if (!this.isDragged && this.y < 450){
                    this.isOnBF = true;
                }
                
   
      
}

TowerDD.prototype.updateAll = function () {
    anotherContains = true;
    for (var i = 0; i < TowerDD.prototype.list.length; i++){
        TowerDD.prototype.list[i].update();
        
        if (TowerDD.prototype.list[i].contains) anotherContains = (anotherContains && false);
        if(anotherContains) document.body.style.cursor = 'default';
        
    }
    
}

TowerDD.prototype.shot = function () {
   

    if (this.isOnBF && this.reach > this.length){
    switch (this.type){
        case 0:
            Bullet.prototype.create(this.x, this.y-20, this.IDnearest, this.number, 2);
            break;
            
        case 1:
            Bullet.prototype.create(this.x, this.y-20, this.IDnearest, this.number, 4);
            break;
        
        case 2:
            for (var i = 0; i < 8; i++){
               Bullet8.prototype.create(this.x-10, this.y-10, this.number, 0.25, i);
                
            }
            break;
            
        case 3:
            Laser.prototype.create(this.x, this.y, this.number)
                     }
            }
}
    


TowerDD.prototype.shotAll0 = function () {
    for (var i = 0; i < TowerDD.prototype.list.length; i++){
        if (Enemy.prototype.list.length > 0 && TowerDD.prototype.list[i].type == 0){
            TowerDD.prototype.list[i].shot();
        }
    }
}

TowerDD.prototype.shotAll1 = function () {
    for (var i = 0; i < TowerDD.prototype.list.length; i++){
        if (Enemy.prototype.list.length > 0 && TowerDD.prototype.list[i].type == 1){
            TowerDD.prototype.list[i].shot();
        }
    }
}

TowerDD.prototype.shotAll2 = function () {
    for (var i = 0; i < TowerDD.prototype.list.length; i++){
        if (Enemy.prototype.list.length > 0 && TowerDD.prototype.list[i].type == 2){
            TowerDD.prototype.list[i].shot();
            
        }
    }
}

TowerDD.prototype.shotAll3 = function () {
    for (var i = 0; i < TowerDD.prototype.list.length; i++){
        if (Enemy.prototype.list.length > 0 && TowerDD.prototype.list[i].type == 3){
            TowerDD.prototype.list[i].shot();
            
        }
    }
}





//TowerDD.prototype.list[0].


//(Math.abs(TowerDD.prototype.list[0].x - Enemy.prototype.list[TowerDD.prototype.list[0].IDnearest]).x) / TowerDD.prototype.list[0].nearest




    
    