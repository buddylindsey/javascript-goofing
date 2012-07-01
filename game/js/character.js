function Character(x, y){
  this.x = x;
  this.y = y;
  this.dude = new Image();
  this.dude.src = "images/person.png";
}

Character.prototype.draw = function(context){
  if(this.dude.complete){
    context.drawImage(this.dude, this.x, this.y);
  };
};

Character.prototype.update = function(context){
  if (Key.isDown(Key.UP)) this.moveUp();
  if (Key.isDown(Key.LEFT)) this.moveLeft();
  if (Key.isDown(Key.DOWN)) this.moveDown();
  if (Key.isDown(Key.RIGHT)) this.moveRight();
}

Character.prototype.moveUp = function(){
  this.y -= 2;
};
Character.prototype.moveDown = function(){
  this.y += 2;
};
Character.prototype.moveLeft = function(){
  this.x -= 2;
};
Character.prototype.moveRight = function(){
  this.x += 2;
};
