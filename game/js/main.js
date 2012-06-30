window.onload = function(){

  function Character(x, y){
    var chara = this
    this.ready = false;
    this.x = x;
    this.y = y;
    this.dude = new Image();
    this.dude.src = "images/person.png";
    this.dude.onload = function(){
      chara.ready = true;
    }
  }
  
  Character.prototype.draw = function(context){
    if(this.ready){
      context.drawImage(this.dude, this.x, this.y);
    };
  };

  Character.prototype.update = function(context){
  }

  // http://nokarma.org/2011/02/02/javascript-game-development-the-game-loop/index.html
  var Game = {};

  Game.fps = 30;

  Game.initialize = function() {
    this.entities = [];
    this.context = document.getElementById("gamearea").getContext("2d");
  };

  Game.draw = function(){
    this.context.clearRect(0,0,480,320); 
    for(var i = 0; i < this.entities.length; i++){
      this.entities[i].draw(this.context);
    }
  };

  Game.update = function(){
    this.entities[0].update(this.context); 
  };

  Game.addPlayer = function(x, y){
    Game.entities.push(new Character(x, y));
  };

  Game.run = (function(){
    var loops = 0, skipTicks = 1000 / Game.fps, 
        maxFrameSkip = 10, 
        nextGameTick = (new Date).getTime();

    return function() {
      loops = 0;

      while ((new Date).getTime() > nextGameTick && loops < maxFrameSkip) {
        Game.update();
        nextGameTick += skipTicks;
        loops++;
      }

      Game.draw();
    };
  })();



  Game.initialize();
  Game.addPlayer(30, 30);
  Game.addPlayer(90, 90);
  Game.addPlayer(30, 90);
  Game.addPlayer(90, 30);

  Game._intervalId = setInterval(Game.run, 0);

};
