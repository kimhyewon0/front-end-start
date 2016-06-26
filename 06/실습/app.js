var apikey ='8af4b50d6672c977ebcaf361b9f4108a';
var pageNum = 0;
var msg = document.getElementById('userInput');
var listTemplate = document.getElementById('listTemplate');
var searchBtn = document.getElementById('search');

searchBtn.addEventListener('click',getValue);

function addValue(){
    pageNum++;
    getValue(event);
};

    var userMsg = 'test';
    var apiurl = 'https://apis.daum.net/search/web?&q='+userMsg+'&apikey='+apikey+'&output=json&pageno='+pageNum;

function getValue(event){
    var userMsg = msg.value;
//    alert(msg.value);



//    console.log(apiurl)4

    
}

getJSON(apiurl,function(res){
   console.log(res); });
