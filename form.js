class Form{
    constructor(){}

    display(){

        //title
        var title = createElement('h2');
        title.html("Multi-Player Car Racing Game");
        title.position(300,0);

        //input
        var input = createInput("Name");
        input.position(300,160);
        
        //button
        var button = createButton('play');
        button.position(350,200);

        button.mousePressed(function(){
            //whenever you press button input and button will hide(not be displayed)
            input.hide();
            button.hide();

            //name
            var name = input.value();
            //playerCount = playerCount + 1;
            playerCount += 1; 
            player.update(name);
            player.updateCount(playerCount);
            
            //greeting
            var greeting = createElement('h3');
            greeting.html("Hello!" + name);
            greeting.position(300,160);

        })
    }
}