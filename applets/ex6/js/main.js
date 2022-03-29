var grammar = '#JSGF V1.0; grammar colors; public <color> = Amélie |  est |  une |  fille  |  elle |  a |  9 |  ans  |  elle |  est |  en |  3è |  année  |  mario |  est |  un |  garçon  |  il |  a |  8 |  ans  |  Il |  est |  en |  2è |  année  |  amélie |  et |  mario |  sont |  dans |  la |  même |  école  |  dans  |  la |  classe |  d’amélie  |  il y a |  une |  maîtresse  |  dans |  la |  classe |  mario  |  il y a |  un |  maître ;'
var recognition = new window.webkitSpeechRecognition()
var speechRecognitionList = new window.webkitSpeechGrammarList()
speechRecognitionList.addFromString(grammar, 1)
recognition.grammars = speechRecognitionList


 

//recognition.continuous = false;
recognition.lang = 'fr-FR';
  
    var content = '';
    recognition.continuous = true
    recognition.onstart = function (){
        console.log('Voice Recognition is on')
    }
    recognition.onspeechend = function (){
        console.log('No Activity');
        $(".playreco").show();
        $(".stopereco").hide();

    }
    recognition.onerror = function (event){
        console.log('Try Again');
        console.log(event);
         $(".playreco").show();
        $(".stopereco").hide();
    }
    recognition.onresult = function(event) {
   
    };

$(document).ready(function () {

 


$(document).on("click",".stopereco",function  (argument) {
  recognition.stop();
})

$(document).on("click",".playreco",function  (argument) {
   console.log("sppech statrt");
  recognition.start();
var ind = 0;
recognition.onresult = function(event) {
        var current = event.resultIndex;
        //console.log( event.results );
        var transcript = event.results[current][0].transcript;
        var confidence = event.results[current][0].confidence;
         content +=' '+ transcript;
         transcript = transcript.toLowerCase()
         //console.log(transcript);
        var arrytranscript = transcript.split(' ');
        console.log("liste detect word!");
        console.log(arrytranscript);
        console.log("liste possiblle word!");
        console.log($("#textcontent span").eq(ind).attr("posAns"));
        for (var i = 0; i < arrytranscript.length; i++) {
         if( $("#textcontent span").eq(ind).attr("posAns").includes(arrytranscript[i]) ){
          console.log("includes");
          ind+=1;
         } 
        };

/*
         for (var i = 0; i < arrytranscript.length; i++) {
          var list_possible_ans = $("#textcontent span").eq(ind).attr("posAns").split(",");
          //console.log(list_possible_ans);
          
          for (var ipa = 0; ipa < list_possible_ans.length; ipa++) {
            console.log(ind);
            console.log( $("#textcontent span").eq(ind).text() ,
             list_possible_ans[ipa],arrytranscript[i].trim() );

            if( list_possible_ans[ipa].trim() == arrytranscript[i].trim() || $("#textcontent span").eq(ind).text() ==  arrytranscript[i].trim() ){
              console.log("i found the go to next word");
              ind+=1;
              break;
            }
          };

          //console.log( $("#textcontent span").eq(ind).text() );
          //console.log( arrytranscript[i].trim() );
            
         }//end loop over arryspeech result
*/
/*
$(".speak-text").eq(3).addClass("hero");


var ind = 3;
    recognition.onresult = function(event) {
        var current = event.resultIndex;
        //console.log( event.results );
        var transcript = event.results[current][0].transcript;
        var confidence = event.results[current][0].confidence;
         content +=' '+ transcript;
         transcript = transcript.toLowerCase()
         console.log(transcript);
        var arrytranscript = transcript.split(' ');
         for (var i = 0; i < arrytranscript.length; i++) {
                 

              if(  $(".speak-text").eq(ind).text().trim().replace("une",1) ==  arrytranscript[i].trim()
             ||   $(".speak-text").eq(ind).text().trim() == arrytranscript[i].trim() 
              //|| $(".speak-text.hero").text().trim().replace("une ",1) == transcript.trim() 
                || $(".speak-text").eq(ind).text().trim().replace("petite",'petit') == arrytranscript[i].trim()
              ){
              console.log("goods");
                $(".speak-text").eq(ind).css("border-bottom","5px solid green");
               ind+=1;
               if ($(".speak-text").eq(ind).text().trim().length == 0 ) { 
                ind+=1
               };
              //$(".speak-text.hero").next().addClass("hero");
            }


         };//loop arrytranscript
        
        

   
*/
setInterval(function(){
console.log()
  for (var iv = 0; iv <  ind; iv++) {
    console.log($("#textcontent span").eq(iv).text())
    $("#textcontent span").eq(iv).css("background","yellow").css("color","black")
  };
/*
  //transform:translateY(-4px);     box-shadow: 0px 0px 5px blue;
  //console.log($(".speak-text").css('box-shadow'));
  if( $("#textcontent span").eq(ind).css('border-bottom').includes('none') ){
    $("#textcontent span").eq(ind).css('border-bottom','5px solid gold')
  }else{
    $("#textcontent span").eq(ind).css('border-bottom','none')
  }

  */
},500)

 };
 })// click...



$(document).on("click",'#btn-reset',function(e){
    e.stopPropagation();  
    $("#modal-winner").hide();
    $("#car1").css("left","0.5%");
    $("#car2").css("left","0.5%");
});
 

$(document).on("click",'.read-question',function(e){
    //let playSound = () => new Audio().play()
new Audio("mp3/q3.mp3").play();
});
 


 

$(document).on("click",'.btn-speech',function(e){
       $(".running-speech").hide();
      $(".btn-speech").show();

if( recognition ){
  recognition.stop();
}
    

var tdthis = $(this)
$(".parent-speech-ex").css("box-shadow","none");

console.log( recognition )
    recognition.start();
if( !recognition ){

}


 recognition.onresult = function(event) {
$(".parent-speech-ex").css("box-shadow","none");

  var current = event.resultIndex;
  //console.log( event.results );
  var transcript = event.results[current][0].transcript;
  var confidence = event.results[current][0].confidence;
   content +=' '+ transcript;
   transcript = transcript.toLowerCase()
   console.log(transcript);
   if(transcript.includes(tdthis.attr("mot") ) ){
    console.log("coorect answer!");
    recognition.stop();
    tdthis.next().hide();
    tdthis.show()
    tdthis.next().next().html(tdthis.attr("corans"))
    tdthis.next().next().css("color","#15ff2e");

   }
};


recognition.onstart = function (){
    $(".parent-speech-ex").css("box-shadow","none");

    tdthis.next().next().html('___')
    tdthis.next().next().css("color","rgba(255,255,255,0.3)");

    console.log('Voice Recognition is on');
    tdthis.hide();
    console.log('start speech');
    tdthis.next().show();


    }
    recognition.onspeechend = function (){
        console.log('No Activity');
    }
    recognition.onerror = function (event){
      $(".running-speech").hide();
      $(".btn-speech").show();
        console.log(event);
        alert("Erreur speech to text: "+event.message)
    }











});
 
$(document).on("click",'.running-speech',function(e){

$(".parent-speech-ex").css("box-shadow","none");

$(this).hide();
//console.log('start speech');
$(this).prev().show();


});





$(document).on("click",".read-moX",function  (argument) {
  
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
console.log(voices);
msg.voice = voices[0]; 

/*
msg.volume = 1; // From 0 to 1
msg.rate = 1; // From 0.1 to 10
msg.pitch = 2; // From 0 to 2
*/
msg.text = $(this).html();
msg.lang = 'fr';
speechSynthesis.speak(msg);

})// click...

 


init();
function init ( e ) {

setTimeout(function  (argument) {
   window.dispatchEvent(new Event('resize'));

}, 500);// body...

 

setTimeout(function  (argument) {
   window.dispatchEvent(new Event('resize'));

}, 1000);// body...

setTimeout(function  (argument) {
   window.dispatchEvent(new Event('resize'));

}, 3000);// body...

 


var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("mode");
console.log(c);
if( c == "auto" ){
$(".auto").show();
$(".send").hide();
}else{

$(".auto").hide();
$(".send").show();
}
    $(".btn-go-mode").hide();



}// init...
 


$(document).on("click",".btn-verifier",function  (argument) {
 
      $(".running-speech").hide();
      $(".btn-speech").show();
 if( SpeechRecogntion ){
  recognition.stop();
 }
var nbr_good = 0;
var nbr_tot = $(".btn-speech").length;
for (var i = 0; i < $(".btn-speech").length; i++) {
  console.log( $(".btn-speech").eq(i).next().next().html() , $(".btn-speech").eq(i).attr("corans") );
  if( $(".btn-speech").eq(i).next().next().html() == $(".btn-speech").eq(i).attr("corans")  ){
     $(".btn-speech").eq(i).parent().css("box-shadow","0 0 10px green");
   

    nbr_good+=1;
  }else{
 
    $(".btn-speech").eq(i).parent().css("box-shadow","0 0 10px red");
  }
};


})// btn-verifier...



$(document).on("click",".btn-Envoyer",function  (argument) {
  

      $(".running-speech").hide();
      $(".btn-speech").show();
 if( SpeechRecogntion ){
  recognition.stop();
 }

 
 
var nbr_good = 0;
var nbr_tot = $(".btn-speech").length;
for (var i = 0; i < $(".btn-speech").length; i++) {
  
  if( $(".btn-speech").eq(i).attr("myans") == $(".btn-speech").eq(i).attr("ans")  ){
    nbr_good+=1;
  }else{
 
   }
};

console.log("Votre score est: "+nbr_good);


})// btn-Envoyer...



 })//end ready







function adjustLine(from, to, line){

  var fT = from.offsetTop  + from.offsetHeight/2;
  var tT = to.offsetTop    + to.offsetHeight/2;
  var fL = from.offsetLeft + from.offsetWidth/2;
  var tL = to.offsetLeft   + to.offsetWidth/2;
  
  var CA   = Math.abs(tT - fT);
  var CO   = Math.abs(tL - fL);
  var H    = Math.sqrt(CA*CA + CO*CO);
  var ANG  = 180 / Math.PI * Math.acos( CA/H );

  if(tT > fT){
      var top  = (tT-fT)/2 + fT;
  }else{
      var top  = (fT-tT)/2 + tT;
  }
  if(tL > fL){
      var left = (tL-fL)/2 + fL;
  }else{
      var left = (fL-tL)/2 + tL;
  }

  if(( fT < tT && fL < tL) || ( tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)){
    ANG *= -1;
  }
  top-= H/2;

  line.style["-webkit-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-moz-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-ms-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-o-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-transform"] = 'rotate('+ ANG +'deg)';
  line.style.top    = top+'px';
  line.style.left   = left+'px';
  line.style.height = H + 'px';
}



