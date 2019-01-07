        function isGlued() {
            var h = TowerDD.prototype.list[5].x;
            var g = TowerDD.prototype.list[5].y;
            var f = Enemy.prototype.list[IDnearest].x;
            var e = Enemy.prototype.list[IDnearest].y;
            var odl = Math.sqrt(Math.pow(Math.abs(h - f))+Math.pow(Math.abs(g - e)));
            

            function glue () {
            if (odl < 1) isGlued=true;
            else isGlued=false;
            }
        };

