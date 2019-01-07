function Point(_x, _y) {
    this.x = _x;
    this.y = _y;
    
}

Point.prototype.list = new Array(0);

Point.prototype.spawn = function (_x, _y) {
   
    Point.prototype.list.push(new Point(_x, _y))

}