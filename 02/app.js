

function pro(){
    var result = 0;

  while(true){
    var num;
    num = prompt("더할 숫자를 입력해 주세요");

    if(num != false){
      num = parseInt(num);
      result+=num;
  }else{
      break;
    }
  }
  alert(result);
}

pro();