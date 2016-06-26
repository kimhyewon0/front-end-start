function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function printCards(){
  cards.forEach(function(card){
    $wrap.append('<div class="card close" num="'+card+'">\
    <div class="front">  </div> \
    <div class="back">'+ card +'</div></div>');
  });
}

function addEvent(){

  $wrap.on('click', '.card', function(event){

    var $target = $(event.currentTarget);
    var num = $target.attr('num');
    openCard($target);

    console.log('click card!', num);
    
    if (flag === true){
        $target.removeClass('close');
        $target.addClass('open');
        $firstCard = $target;
        flag = false;
    }
    else {
                $target.removeClass('close');
        $target.addClass('open');
        $secondCard = $target;


        if ($firstCard.attr('num')===$secondCard.attr('num')) {
            failFlag = true;

            count += 1
            if (count ===4) {
                    alert("끝!")
            }

        }else{
            setTimeout("relocationCard($firstCard, $secondCard);",500);
            failFlag = true;

        }
    }

});
}


function relocationCard(firstCard,secondCard){
    firstCard.removeClass('open');
    firstCard.addClass('close');
    
    secondCard.removeClass('open');
    secondCard.addClass('close');
}



function openCard($target){
    $target.removeClass('close');
    $target.addClass('open');
}
function closeCard($target){
    $target.removeClass('open');
    $target.addClass('close');
}

var count = 0;
var cards = [1,2,3,4, 1,2,3,4];
var $wrap = $('.wrap');
var flag = true;
var $firstCard;
var $secondCard;

//init
shuffle(cards);
console.log(cards)
printCards();
addEvent();