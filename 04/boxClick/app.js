var scoreGrade=0;
var score = document.getElementById('scoreIs');
var stageGrade=0;
var stage = document.getElementById('stageIs');
    
    
var boxDivide = document.getElementById('allBox');
var boxes = "<div class=\"box\"></div>";
var before = null;
var change = null;

function ChangeBox(){
    var random=0;
    random=Math.floor(Math.random() * 90);
    change = document.getElementById('box'+random);


    if(before != null){
      before.setAttribute("class","box")
    }

      before = change;
      change.setAttribute("class","redbox");


}//랜덤으로 박스만들기

boxDivide.addEventListener('click',function(target){

  var present = change.getAttribute("id");
  var click = target.srcElement.getAttribute("id");

  if(present == click){
    scoreGrade++;
    score.innerHTML=scoreGrade;
      if(scoreGrade%10==0){
          stageGrade++;
          stage.innerHTML=stageGrade;
      
      }
  }
});

    

var process = setInterval(ChangeBox,1500);
// gameStart();