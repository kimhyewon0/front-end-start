var todayPhoto = [
      {"img":"http://icon.daumcdn.net/w/c/12/05/82877085750988319.jpeg"}
     ,{"img":"http://icon.daumcdn.net/w/c/12/05/82876693901189319.jpeg"}
     ,{"img":"http://icon.daumcdn.net/w/c/12/05/82876307459008319.jpeg"}
     ,{"img":"http://icon.daumcdn.net/w/c/12/05/81730673405131839.jpeg"}
     ,{"img":"http://icon.daumcdn.net/w/c/12/05/81728759258718839.jpeg"}
     ,{"img":"http://icon.daumcdn.net/w/c/12/05/81728404408992839.jpeg"}
     ,{"img":"http://icon.daumcdn.net/w/c/12/05/81728227037306839.jpeg"}
     ,{"img":"http://icon.daumcdn.net/w/c/12/05/81727815537682839.jpeg"}
 ];

 var wrap = document.getElementById('wrap');
 var prevBtn = document.getElementById('prevBtn');
 var nextBtn = document.getElementById('nextBtn');
 var pageCount = document.getElementById('pageCount');

 var page = 1;
 var startIndex = 0;
 var endIndex = 3;

 function showImageList(imageList, start, end){
   var str = '';
   for(var i=start; i<end; i++){
     if(!imageList[i]){
       break;
     }
     console.log(page, i);
     str += '<img src="'+todayPhoto[i].img+'"> ';
   }
   wrap.innerHTML = str;
   pageCount.innerHTML = page;
 }



 prevBtn.addEventListener('click', function(){
   console.log('prev')
    if(page === 3) {

     startIndex = 3;
     endIndex = 6;
     page = 2;

     showImageList(todayPhoto, startIndex, endIndex);

   }
   else if(page === 2){

     startIndex = 0;
     endIndex = 3;
     page = 1;

     showImageList(todayPhoto, startIndex, endIndex);

   }

 });

 nextBtn.addEventListener('click', function(){
   console.log('next')

   if(page === 1) {

     startIndex = 3;
     endIndex = 6;
     page = 2;

     showImageList(todayPhoto, startIndex, endIndex);

   }
   else if(page === 2){

     startIndex = 6;
     endIndex = 9;
     page = 3;

     showImageList(todayPhoto, startIndex, endIndex);

   }

 });

 showImageList(todayPhoto, startIndex, endIndex);
