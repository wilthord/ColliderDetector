
AABB = function(iniMin, iniMax){
    this.min = Vector(iniMin.x, iniMin.y);
    this.max = Vector(iniMax.x, iniMax.y);
}

AABB.prototype.constructor = AABB;

AABB.testColision = function(a, b){
    if(a.max.x < b.min.x || a.min.x > b.max.x){
        return 0;
    }
    if(a.max.y < b.min.y || a.min.y > b.max.y){
        return 0;
    }

    return 1;
}