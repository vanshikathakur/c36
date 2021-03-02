class Game{
    constructor(){}
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }
    
    update(state){
        // rootpath = /
        database.ref('/').update({gameState:state})
    }

    start(){
        if(gameState === 0){
            //Player is class and player is variable
            player = new Player();
            //game starts here
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}