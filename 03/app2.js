

var board = document.getElementById("board");
var colorBlack = "<div class=\"black\"></div>";
var colorWhite = "<div class=\"white\"></div>";

        for(var i=0; i<4; i++){
            for(var j=0; j<4; j++){
            // TODO : 여기에 필요한 코드를 작성해주세요.
                if((i+j)%2==0)
                    board.innerHTML += colorBlack;
                else
                    board.innerHTML += colorWhite;
          
      }
         board.innerHTML += "<br>";
}


var color;

board.addEventListener("mousedown",function(event){
            color = event.target.className;
            event.target.className = "red"
    });

board.addEventListener("mouseup", function(event){
	event.target.className = color;
});
