class Form{

constructor(){
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
}



display(){
    this.title.html("Hurdle Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        playerName = this.input.value();
        playerCount += 1;
          updateCount(playerCount);
        this.greeting.html("Hello " + playerName);
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      updateName(playerName);
    })
    if(playerCount === 4){
       // background("green");
        this.greeting.html("Hello " + playerName);
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        gameState = 1;
        updateState(gameState);
        this.title.hide();
        this.greeting.hide();
        camera.position.x = displayWidth/2 + 200;
        camera.position.y = 
        track.display();
       
       }

    this.reset.mousePressed(()=>{
        
      updateCount(0);
      updateState(0);

    })
}

};