  class Form{
  constructor(){
      this.input = createInput("").attribute("placeholder", "Enter your name");
      this.playButton = createButton("START");
      this.titleImg = createImg("", "game titleAAA");
      this.greeting = createElement("h2");
        this.creatorText=createElement("h3")
  }
  setElementPos(){
  this.playButton.position(width/2-200,height/2+100)
  this.input.position(width/2-50,height/2+100)
  this.creatorText.position(10,700)
  this.titleImg.position(width/2-250,height/2-440)
  }
  hide() {
      this.greeting.hide();
      this.playButton.hide(); 
      this.input.hide();
      this.titleImg.hide();
    }

  setElementsStyle() {
      this.titleImg.class("gameTitle");
      this.input.class("customInput");
      this.playButton.class("customButton");
      this.playButton
    } 

  handleMousePressed() {
      this.playButton.mousePressed(() => {
        this.input.hide();
        this.playButton.hide();
        player.count += 1
        player.name = this.input.value();
        var message = `
        Hello ${this.input.value()}
        </br>wait for another player to join...`;
        
        
      });
    }
  foundText(){
      var message1=`By Aarav </br> Thanks to SNEHA MAM`
  this.creatorText.html(message1)
  }
    display() {
      this.setElementPos();
      this.setElementsStyle();
  this.handleMousePressed()
      this.foundText()
    }

    

  }