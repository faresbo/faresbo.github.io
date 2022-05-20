let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  // check;
check = true;
if(  check ){

$("body").append(`<div id="modal" class="modal is-active" style="    z-index: 99999999999999999999999;">
  <div class="modal-background" style="background:black;"></div>
  <div class="modal-content">
    <div class="box">
      <article class="media">
         Cette version ne fonctionne pas sur mobile ou tablette!  
      </article>
    </div>
  </div>
 </div>`);

}  



 var sommaire_book = [
{
  titre:'FAISONS CONNAISSANCE !',
  start:1,
  end:11,
},
{
  titre:'GAI, GAI L’ÉCOLIER',
  start:12,
  end:17,
},
{
  titre:'MA FAMILLE ET ... MOI',
  start:18,
  end:22,
},
{
  titre:'UN TOIT AU-DESSUS DE LA TÊTE',
  start:23,
  end:28,
},
{
  titre:'VEUX-TU JOUER AVEC MOI ?',
  start:29,
  end:33,
},
{
  titre:'SOYONS PROPRES !',
  start:34,
  end:39,
},
{
  titre:'À TABLE !',
  start:40,
  end:44,
},
{
  titre:'ALLÔ, DOCTEUR !',
  start:45,
  end:50,
},
{
  titre:'LA SEMAINE DES DUPRÉ',
  start:51,
  end:68,
},
{
  titre:'LA CAMPAGNE QUEL PLAISIR !',
  start:69,
  end:86,
},
{
  titre:'POUSSE, POUSSE TON CHARIOT',
  start:87,
  end:104,
},
{
  titre:'BONNE FÊTE !',
  start:105,
  end:122,
},
{
  titre:'VEUX-TU M’AIDER ?',
  start:123,
  end:138,
},
{
  titre:'VIVE LES VACANCES.',
  start:139,
  end:155,
},
{
  titre:'UN CONTE POUR RÊVER.',
  start:156,
  end:160,
}
];

 



var liste_module_book = ''
for (var bi = 0; bi < sommaire_book.length; bi++) {
  ////console.log( sommaire_book[bi] );
  liste_module_book += '<option value="'+sommaire_book[bi].titre+'" start="'+sommaire_book[bi].start
                    +'"  end="'+sommaire_book[bi].end
                    +'" >'+sommaire_book[bi].titre+'</option>'
};
$("#liste_module_book").html( liste_module_book );

$('#liste_module_book').multiselect({
    columns: 1,
    placeholder: 'Tous les modules',
    search: true,
 });
  
$('#liste_type_enrichi').multiselect({
    columns: 1,
    placeholder: 'Tous les types',
    search: true,
 });





 















var data_fonts_tetxt = [];
for (var it = 0; it < data_text.length; it++) {
  ////console.log( JSON.parse(data_text[it]) )
  var data_fontsfonts = JSON.parse(data_text[it])[0].fonts
  ////console.log(data_fontsfonts);
  for (var ifon = 0; ifon < data_fontsfonts.length; ifon++) {
    data_fontsfonts[ifon]

    data_fonts_tetxt.push({
        color: data_fontsfonts[ifon].color,
        family: data_fontsfonts[ifon].family,
        fontspec: data_fontsfonts[ifon].fontspec,
        size: data_fontsfonts[ifon].size
    })

  };
};

 
var pdf_page_height = JSON.parse(data_text[0])[0].height; 
var pdf_page_width = JSON.parse(data_text[0])[0].width; 

var book_settings = {
	pages:161,
	width:pdf_page_width,
	height:pdf_page_height,
}



function getContetpage12 (argument) {
 var mykok = [{"mot":"\nle petit ","ind":"t0","start":"0","end":"0.5972834429824556","x":"47.960339943342774%","y":"22.0563025210084%"},{"mot":" benoÃ®t ","ind":"t1","start":"0.6247063048245618","end":"1.1258810855263137","x":"59.57507082152974%","y":"22.21638655462185%"},{"mot":"\n\nle petit ","ind":"t2","start":"2.7116740131578925","end":"3.244885014619879","x":"38.61189801699717%","y":"25.735294117647058%"},{"mot":" benoÃ®t ","ind":"t3","start":"3.244885014619879","end":"3.7460597953216337","x":"47.39376770538244%","y":"26.10546218487395%"},{"mot":"\ncompte ","ind":"t4","start":"4.082440113304091","end":"4.359361348684206","x":"38.328611898017%","y":"29.209663865546222%"},{"mot":" jusquâ€™Ã  ","ind":"t5","start":"4.359361348684206","end":"4.812481798245608","x":"48.81019830028329%","y":"28.739495798319332%"},{"mot":" trois.","ind":"t6","start":"4.812481798245608","end":"5.185511695906427","x":"58.44192634560906%","y":"29.317226890756306%"},{"mot":"\nla petite ","ind":"t7","start":"5.922344773391807","end":"6.487591995614007","x":"38.328611898017%","y":"33.6764705882353%"},{"mot":" alice ","ind":"t8","start":"6.487591995614007","end":"7.0208029970759975","x":"48.52691218130312%","y":"33.20903361344538%"},{"mot":"\ncompte ","ind":"t9","start":"7.036821107456114","end":"7.68215888157892","x":"37.762039660056665%","y":"35.890126050420164%"},{"mot":" jusquâ€™Ã  ","ind":"t10","start":"7.68215888157892","end":"8.071206889619859","x":"48.52691218130312%","y":"36.260504201680675%"},{"mot":" six.","ind":"t11","start":"8.071206889619859","end":"8.556363559941495","x":"58.1586402266289%","y":"36.20798319327731%"},{"mot":"\nmon ","ind":"t12","start":"8.556363559941495","end":"9.714280866228046","x":"36.342209631728046%","y":"39.93970588235294%"},{"mot":" frÃ¨re ","ind":"t13","start":"9.714280866228046","end":"10.087310763888865","x":"43.42776203966006%","y":"40.09978991596638%"},{"mot":" vincent ","ind":"t14","start":"10.087310763888865","end":"10.732648538011672","x":"52.492917847025495%","y":"40.04726890756302%"},{"mot":"\ncompte ","ind":"t15","start":"10.732648538011672","end":"11.458076864035062","x":"37.47875354107649%","y":"42.94117647058823%"},{"mot":" jusquâ€™Ã  ","ind":"t16","start":"11.458076864035062","end":"12.01282931093648","x":"48.52691218130312%","y":"43.51890756302521%"},{"mot":" cent. ","ind":"t17","start":"12.01282931093648","end":"12.481967870878","x":"59.008498583569406%","y":"43.25903361344538%"},{"mot":"\nmon ","ind":"t18","start":"12.481967870878","end":"13.864138722486185","x":"36.06232294617564%","y":"47.200630252100844%"},{"mot":" cousin ","ind":"t19","start":"13.864138722486185","end":"14.335607699888792","x":"44.277620396600575%","y":"47.3609243697479%"},{"mot":" Ã©mile ","ind":"t21","start":"18.260438646350664","end":"14.73041577176096","x":"53.05949008498584%","y":"47.25840336134454%"},{"mot":"\ncompte ","ind":"t22","start":"15.117237619982552","end":"15.488087041884814","x":"37.47875354107649%","y":"49.726890756302524%"},{"mot":" jusquâ€™Ã  ","ind":"t23","start":"15.504021287812678","end":"15.82706797193135","x":"49.093484419263454%","y":"50.09978991596638%"},{"mot":" mille.\n","ind":"t24","start":"15.818344440808616","end":"17.95789516070391","x":"59.57507082152974%","y":"50.260084033613445%"}]


 var mykokhtml = '';
//whithe help of this i drag to produse mytok obj
 for (var i = 0; i < mykok.length; i++) {
  ////console.log( mykok[i] );
  mykokhtml+=`<img id="Mot_`+parseInt( mykok[i].start * 100 )+`"class="mydraghand" ind='t`+i+`' start='`+mykok[i].start+`' end='`+mykok[i].end+`' title="`+mykok[i].mot+`" 
  style="display:none;position: absolute; 
    top: `+mykok[i].y+`;
    left: `+mykok[i].x+`;
    width: 20px;
    height: auto;" src="icons/hand.png"  draggable="false" width="76px" height="auto" class="" alt="">
  `
};
 


var html=`
 
<div onclick="playmusic ( )" class="play playprev"
 style="background: white;
    zoom: 2;
    margin-left: calc(50% - 24px);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
    position: absolute;
    top: 17.5%;
    left: -6%;
    zoom: 1;cursor: pointer;">
   <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
   viewBox="0 0 24 24" width="24px" 
   fill="#446cb3"><path d="M0 0h24v24H0V0z" 
   fill="none"></path>
   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></svg>

  </div>


<button onClick="" style="position:absolute;top:10%;left:10%;    position: absolute;
    top: 25%;
    left: 13%;display:none;">Play</button> 
<audio id="audio" controls style="display:none;">
   <source src="audio/p12.mp3" type="audio/mpeg" ontimeupdate='updateTrackTime(this);'>
</audio>

<div> 
`+mykokhtml+`
</div>  
<style>
.kok-spot{
display:block;
}
.speak-text:hover{
border-bottom:5px solid yellow;
cursor:default;
}
</style>
<script>



/**/


function pusemusic ( ) {

var audio = document.getElementById("audio");
audio.pause();
  $(".playprev").html('<svg xmlns="http://www.w3.org/2000/svg" height="24px"  viewBox="0 0 24 24" width="24px"  fill="#446cb3"><path d="M0 0h24v24H0V0z" fill="none"></path> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></svg>');
    //$(".mydraghand").hide();
$(".playprev").attr("onClick",'playmusic()');

}
function playmusic ( ) {

  
 $(".playprev").html('<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#446cb3"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M9,16h2V8H9V16z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8 s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z M13,16h2V8h-2V16z"/></g></g></svg>');
$(".playprev").attr("onClick",'pusemusic()');


var audio = document.getElementById("audio");
audio.play();

 

$(audio).on("ended", function  (argument) {
   clearInterval(myInterval);
    $(".playprev").html('<svg xmlns="http://www.w3.org/2000/svg" height="24px"  viewBox="0 0 24 24" width="24px"  fill="#446cb3"><path d="M0 0h24v24H0V0z" fill="none"></path> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></svg>');
    $(".mydraghand").hide();

});// ended...

    $(".mydraghand").hide();
  time = 0;

   var myInterval = setInterval(function () {
 
      time = Math.floor(audio.currentTime * 100);
      //console.log(audio.length)
      var thismot = $("#Mot_"+time);
      if( thismot ){
        thismot.prevAll().hide();
        thismot.show();
      }
      thismot.show(); 
  }, 1)


}// playaudio...

 
</script> 
`;

  return html
}// page7...



function getContetpage7 (argument) {
var mykok = [{ "mot":"une","ind":"t0","start":"0",
               "end":"0.29514676781002624",
               "x":"29.525065963060687%",
               "y":"29.019607843137255%"},
{"mot":" petite","ind":"t1","start":"0.3155662104221637","end":"0.5806590534300786","x":"39.55145118733509%","y":"29.03921568627451%"},{"mot":" automobile","ind":"t2","start":"0.6858477902374663","end":"1.356668618073878","x":"57.229551451187334%","y":"28.666666666666664%"},{"mot":" une","ind":"t3","start":"2.5287716853561997","end":"2.838945415567288","x":"33.74327176781003%","y":"33.98039215686274%"},{"mot":" petite","ind":"t4","start":"2.838945415567288","end":"3.224253957783646","x":"40.07915567282322%","y":"34%"},{"mot":" automobile","ind":"t5","start":"3.224253957783646","end":"4.135506184036945","x":"52.74406332453826%","y":"34.21568627450981%"},{"mot":"\nqui","ind":"t6","start":"4.135506184036945","end":"4.535841688654358","x":"32.95514511873351%","y":"38.549019607843135%"},{"mot":" courait","ind":"t7","start":"4.535841688654358","end":"4.8760693436675515","x":"41.6622691292876%","y":"38.37019607843137%"},{"mot":" de","ind":"t8","start":"4.8760693436675515","end":"5.111108261873356","x":"48.522427440633244%","y":"38.19607843137255%"},{"mot":" ville","ind":"t9","start":"5.111108261873356","end":"5.286039330474938","x":"54.32717678100264%","y":"38.411764705882355%"},{"mot":" en","ind":"t10","start":"5.286039330474938","end":"5.460970399076522","x":"60.3957783641161%","y":"38.627450980392155%"},{"mot":" ville","ind":"t11","start":"5.460970399076522","end":"5.906386790897102","x":"65.66939313984169%","y":"38.64705882352941%"},{"mot":" ou","ind":"t12","start":"5.936440715699212","end":"6.291695333113461","x":"32.95514511873351%","y":"42.588235294117645%"},{"mot":" va-t-elle?","ind":"t13","start":"6.36917799075801","end":"6.859675269781754","x":"40.60686015831135%","y":"42.411764705882355%"},{"mot":" a parid,","ind":"t14","start":"7.145187555401807","end":"7.921197120045608","x":"36.912928759894456%","y":"46.549019607843135%"},{"mot":"a paris.","ind":"t15","start":"8.326925104874103","end":"9.238177331127401","x":"50.105540897097626%","y":"46.568627450980394%"}];
var mykokhtml = '';
//whithe help of this i drag to produse mytok obj
 for (var i = 0; i < mykok.length; i++) {
  ////console.log( mykok[i] );
  mykokhtml+=`<img id="Mot_`+parseInt( mykok[i].start * 100 )+`"class="mydraghand" ind='t`+i+`' start='`+mykok[i].start+`' end='`+mykok[i].end+`' title="`+mykok[i].mot+`" 
  style="display:none;position: absolute; 
    top: `+mykok[i].y+`;
    left: `+mykok[i].x+`;
    width: 20px;
    height: auto;" src="icons/hand.png"  draggable="false" width="76px" height="auto" class="" alt="">
  `
};
 


var html=`
 
<div onclick="playmusic ( )" class="play playprev"
 style="background: white;
    zoom: 2;
    margin-left: calc(50% - 24px);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
    position: absolute;
    top: 24.7%;
    left: -23%;
    zoom: 1;cursor: pointer;">
   <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
   viewBox="0 0 24 24" width="24px" 
   fill="#446cb3"><path d="M0 0h24v24H0V0z" 
   fill="none"></path>
   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></svg>

  </div>


<button onClick="" style="position:absolute;top:10%;left:10%;    position: absolute;
    top: 25%;
    left: 13%;display:none;">Play</button> 
<audio id="audio" controls style="display:none;">
   <source src="audio/p7.mp3" type="audio/mpeg" ontimeupdate='updateTrackTime(this);'>
</audio>

<div> 
`+mykokhtml+`
</div>  
<style>
.kok-spot{
display:block;
}
.speak-text:hover{
border-bottom:5px solid yellow;
cursor:default;
}
</style>
<script>



/**/


function pusemusic ( ) {

var audio = document.getElementById("audio");
audio.pause();
  $(".playprev").html('<svg xmlns="http://www.w3.org/2000/svg" height="24px"  viewBox="0 0 24 24" width="24px"  fill="#446cb3"><path d="M0 0h24v24H0V0z" fill="none"></path> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></svg>');
    //$(".mydraghand").hide();
$(".playprev").attr("onClick",'playmusic()');

}
function playmusic ( ) {

  
 $(".playprev").html('<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M9,16h2V8H9V16z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8 s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z M13,16h2V8h-2V16z"/></g></g></svg>');
$(".playprev").attr("onClick",'pusemusic()');


var audio = document.getElementById("audio");
audio.play();

 

$(audio).on("ended", function  (argument) {
   clearInterval(myInterval);
    $(".playprev").html('<svg xmlns="http://www.w3.org/2000/svg" height="24px"  viewBox="0 0 24 24" width="24px"  fill="#446cb3"><path d="M0 0h24v24H0V0z" fill="none"></path> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></svg>');
    $(".mydraghand").hide();

});// ended...

    $(".mydraghand").hide();
  time = 0;

   var myInterval = setInterval(function () {
 
      time = Math.floor(audio.currentTime * 100);
      //console.log(audio.length)
      var thismot = $("#Mot_"+time);
      if( thismot ){
        thismot.prevAll().hide();
        thismot.show();
      }
      thismot.show(); 
  }, 1)


}// playaudio...

 
</script> 
`;

  return html
}// page7...




























































localStorage.clear()
var __scale = 1;
var old_scale = 1; 
setInterval(function () {
////console.log("setIntenvall update!");
////console.log($(".layer-book").width() , pdf_page_width)
var s = $(".mypagecontent").parent().width() / 1334
if( old_scale !=  s ){

old_scale = s;
////console.log( s );
//$(".layer-text").css("transform",'scale('+s+')');
var s2 = (s* 0.6955) / 0.443028; 
$("#scale_page").html(`


.page-scale-factor{
 transform :  scale(`+s+`); 
 transform-origin: 0 0;
}
.page-scale-factor2{
 transform :  scale(`+s2+`); 
 transform-origin: 0 0;
}


`);

}//end diff
__scale = s;
 
}, 1000);




 $(document).on("mouseup touchend",'.page-draw',function(e){
    ////console.log('Update ls');
    ////console.log();
    localStorage.setItem('annotation-page-svg-'+$(this).attr("id"), $(this).html() );
});

setInterval(function () {

var w = $(".page-draw").width();
var s = w / 1334;
//$(".page-draw .stage_draw").css("transform",'scale('+s+')')
 

}, 300);
////////////////

async function loadContent ( page, pageElement ) {

var karaok7 = ``
if( page == 7 ){
karaok7 = getContetpage7();
}//end page7


var karaok12= ``
if( page == 12 ){
karaok12 = getContetpage12();
}//end page7


//var contentLayerText = getContentLayerText(page);
var contentLayerText = '';
//var contentLayerAnnotate = await getContentLayerAnnotate(page);
var contentLayerEnrichi = await getContentLayerEnrichi(page);
////console.log(contentLayerAnnotate)




var html=`  
 <div class="layer-0 layer-book layer-text page-scale-factor2" style="
    position:absolute;top:0;left:0;background:;
    width:850px;height:1147px;">
      `+contentLayerText+`
    </div><!--End layer text-->
   <div class="layer-book page-draw" id="`+page+`" style="position:absolute;top:0;left:0;background:transparent;width:100%;height:100%;">
       <svg  class="stage_draw_svg page-scale-factor" style="overflow: hidden;
    position: absolute;
    left: 0px;
    top: 0;
    background:;
     width: 1334px;
    height: 1800px;
    transform-origin: 0 0;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"    viewBox="0 0 1334 1800" preserveAspectRatio="xMidYMid meet"><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></desc>  <defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"> <marker id="triangle_000" viewBox="0 0 10 10" refX="1" refY="5" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto"> <path d="M 0 0 L 10 5 L 0 10 z" fill="#000"/> </marker>  <marker id="triangle_2AA9C9" viewBox="0 0 10 10" refX="1" refY="5" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto"> <path d="M 0 0 L 10 5 L 0 10 z" fill="#2AA9C9"/> </marker> <marker id="triangle_18af0a" viewBox="0 0 10 10" refX="1" refY="5" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto"> <path d="M 0 0 L 10 5 L 0 10 z" fill="#18af0a"/> </marker> <marker id="triangle_fe0002" viewBox="0 0 10 10" refX="1" refY="5" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto"> <path d="M 0 0 L 10 5 L 0 10 z" fill="#fe0002"/> </marker>
       </defs> 
       </svg>
 

<div class=" layer-0 container-text-annotate">
</div><!--End container-text-annotate-->

<div class="layer-0 container-elm-enrichi">
`+karaok7+`
`+karaok12+`
 `+contentLayerEnrichi+`
</div><!--End container-text-annotate-->


</div><!--End page draw-->
`;
  if( localStorage.getItem('annotation-page-svg-'+page) ){  
     html = ` <div class="page-draw" id="`+page+`" style="position:absolute;top:0;left:0;background:transparent;width:100%;height:100%;">
               `+localStorage.getItem('annotation-page-svg-'+page)+`
               </div><!--End page draw-->`;
  }//return page annotate ls
 


pageElement.find('.mypagecontent').append( html );

  var w = $(".page-draw").width();
 var s = w / 1334;
 //$(".page-draw .stage_draw").css("transform",'scale('+s+')');

 //var html=``+page;
//pageElement.find('.mypagecontent').append( html );
}// loadContent...







function getContentLayerEnrichi ( page ) {
return new Promise( async resolve => {
////console.log( page );
var html = ``;
for (var i = 0; i < hosted_enrichi.length; i++) {
  if( hosted_enrichi[i] ){
    if( hosted_enrichi[i].page == page ){
      ////console.log("Load hir!");
      var bkg = '#b4b4b4';
      if( hosted_enrichi[i].active ){
          bkg = 'rgb(255, 102, 0)';
      }

 
html+=`
<div  blank="`+hosted_enrichi[i].blank+`" w="`+hosted_enrichi[i].w+`" h="`+hosted_enrichi[i].h+`" top_="`+hosted_enrichi[i].top+`" left_="`+hosted_enrichi[i].left+`" page="`+hosted_enrichi[i].page+`" shared="`+hosted_enrichi[i].active+`" 
uniqueid="`+hosted_enrichi[i].id+`" id="`+hosted_enrichi[i].id+`" 
style="top:`+hosted_enrichi[i].top+`%;left:`+hosted_enrichi[i].left+`%;background:`+bkg+`;position:absolute;" 
class="anchor anchor-`+hosted_enrichi[i].type+`"
 title="`+unescape(atob(hosted_enrichi[i].titre))+`" url="`+(hosted_enrichi[i].data)+`"></div>`

    }//end this page
  }
};


resolve(html);



  });
}// getContentLayerEnrichi...





async function getContentLayerAnnotate (page) {
  return new Promise( async resolve => {

var html = ``;
var keys = await localforagekKeys();
////console.log( keys );
for (var i = 0; i < keys.length; i++) {
  
  if ( keys[i].includes("elm-annotate-audio_FR3_"+page) ){
    var v = await localforageGetItem ( keys[i]  );
    ////console.log( v );
    html+=`<div key="`+keys[i]+`" id="`+v.id+`" style="top:`+v.top+`%;left:`+v.left+`%;background:rgb(255, 102, 0);
    position:absolute;" class="anchor anchor-audio-annotate  " title="" 
    url=""></div>`;
  }//end if

  
  if ( keys[i].includes("elm-annotate-note_FR3_"+page) ){
    var v = await localforageGetItem ( keys[i]  );
    ////console.log( v );
    html+=`<div key="`+keys[i]+`" id="`+v.id+`" style="top:`+v.top+`%;left:`+v.left+`%;background:rgb(255, 102, 0);
    position:absolute;" class="anchor anchor-note-annotate  " title="" 
    url=""></div>`;
  }//end if




};//end 
resolve(html) ;
})

} // getContentLayerAnnotate...

function localforagekKeys (  ) {
  return new Promise( async resolve => {
localforage.keys().then(function(keys) {
    // An array of all the key names.
    resolve(keys);
}).catch(function(err) {
    // This code runs if there were any errors
    resolve(err);
});
  })  
}// localforagekKeys...



function getContentLayerText ( p ) {
 
     ////console.log( p );
     ////console.log( JSON.parse(data_text[p-1]) );

var text_html = '';
var obj_text =   (JSON.parse(data_text[p-1]));
var textarray = ( obj_text[0].text );
////console.log( textarray );
////console.log( obj_text );
for (var it = 0; it < textarray.length; it++) {
var text_font =  textarray[it].font;
text_font =  data_fonts_tetxt[text_font];
var z = ( 30 + ( (textarray[it].width / obj_text[0].width) * 100) );

var t = (128 * (parseInt( textarray[it].top ) )) / 94;
var l = (314 * (parseInt( textarray[it].left ) )) / 196 ;
t = t / __scale;
l = l / __scale;
 
t = parseInt( textarray[it].top );
l = parseInt( textarray[it].left );
////console.log( textarray[it].data );
  text_html += `
  <div class="text speak-text" style=" transform: translate(2px, -15px);
  position:absolute;font-family:'`+text_font.family+`';
  font-size:`+(parseInt(text_font.size)+4.4)+`px;
  top:`+ t +`px;
  left:`+ l +`px;
  opacity:0;
  ">`+( textarray[it].data )+` </div>
  `;
  ////console.log( textarray[it] );
  //Things[it]
};
 

return text_html ;

 
} // getContentLayerText...
function encode_utf8( s ){
    return unescape( encodeURIComponent( s ) );
} 


function utf8Decode(utf8String) {
    if (typeof utf8String != 'string') throw new TypeError('parameter ‘utf8String’ is not a string');
    // note: decode 3-byte chars first as decoded 2-byte strings could appear to be 3-byte char!
    const unicodeString = utf8String.replace(
        /[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,  // 3-byte chars
        function(c) {  // (note parentheses for precedence)
            var cc = ((c.charCodeAt(0)&0x0f)<<12) | ((c.charCodeAt(1)&0x3f)<<6) | ( c.charCodeAt(2)&0x3f);
            return String.fromCharCode(cc); }
    ).replace(
        /[\u00c0-\u00df][\u0080-\u00bf]/g,                 // 2-byte chars
        function(c) {  // (note parentheses for precedence)
            var cc = (c.charCodeAt(0)&0x1f)<<6 | c.charCodeAt(1)&0x3f;
            return String.fromCharCode(cc); }
    );
    return unicodeString;
}




var lastposX = 0;
var lastposY = 0;
$(document).on("mousemove touchmove",'.page-draw',function(e){
	/*
	var x =  e.clientX - $(this).offset().left;
	var y =  e.clientY - $(this).offset().top;
	x     = x / instance.getTransform().scale;
	y     = y / instance.getTransform().scale;
	x =(( (x  ) / parseFloat($(this).css("width")))*100 );   
	y =(( (y  ) / parseFloat($(this).css("height")))*100 );  
	lastposX = x;
	lastposY = y;
	////console.log(x,y)
	*/
});


var utterance = new SpeechSynthesisUtterance();


var SpeechRecogntion = window.webkitSpeechRecognition;
    var recognition = new window.SpeechRecogntion();
    
  
    var content = '';
    recognition.continuous = true
    recognition.onstart = function (){
        //////console.log('Voice Recognition is on')
    }
    recognition.onspeechend = function (){
        //////console.log('No Activity');
    }
    recognition.onerror = function (event){
        //////console.log('Try Again');
        //////console.log(event);
    }
    recognition.onresult = function(event) {
   
    };


$(window).click(function() {
  //Hide the menus if visible
$(".app-ressources").removeClass("is-active")
$("#mesressources").hide();
//$(".thumbnails").hide();

});

$(document).on("click touchstart",".app-ressources,#mesressources",function  (event) {
	event.stopPropagation();
})// click touchstart...

$(document).on("click touchstart",".thumbnails,#btn-header-thumbnails",function  (event) {
	event.stopPropagation();
})// click touchstart...

 

$(document).on("click touchstart",".header-btn",function  (e) {

if( !$(this).hasClass("app-ressources") ){

}

})	

$(document).on("change","#mesressources select",function  (e) {


var pages = [];
var pages_ = [];
for (var ipp = 0; ipp < 160; ipp++) {
	pages_.push(ipp);
};//


var t = $("#liste_module_book").val();
////console.log(t)
if( !t ){
	t = [];
	pages = pages_;
}
for (var it = 0; it < t.length; it++) {
	
	for (var iw = 0; iw < sommaire_book.length; iw++) {
		if(  sommaire_book[iw].titre == t[it] ){
			for (var ip = sommaire_book[iw].start; ip <= sommaire_book[iw].end  ; ip++) {
				pages.push(ip);
			};
		}
	};

};//end for
var type_enrichi = $("#liste_type_enrichi").val();

////console.log( type_enrichi );
if( !type_enrichi ){
	type_enrichi =  ['video', 'audio', 'yt', 'app', 'link-page', 'link'];
}

////console.log(pages);
////console.log(type_enrichi);
	
var html = ``;
for (var i = 0; i < hosted_enrichi.length; i++) {
  if( hosted_enrichi[i] ){
       //////console.log("Load hir!");
      var bkg = '#b4b4b4';
      if( hosted_enrichi[i].active ){
          bkg = 'rgb(255, 102, 0)';
      }
      ////console.log( hosted_enrichi[i].page );
       if( pages.includes(parseFloat(hosted_enrichi[i].page) ) && type_enrichi.includes(hosted_enrichi[i].type) ){

   

	html+=`
	<div class="item-ressource ITMRSanchor-`+hosted_enrichi[i].type+` " blank="`+hosted_enrichi[i].blank+`" w="`+hosted_enrichi[i].w+`" 
	h="`+hosted_enrichi[i].h+`" top_="`+hosted_enrichi[i].top+`" 
	left_="`+hosted_enrichi[i].left+`" page="`+hosted_enrichi[i].page+`" 
	shared="`+hosted_enrichi[i].active+`" 
	uniqueid="`+hosted_enrichi[i].id+`" id="`+hosted_enrichi[i].id+`" 
	title="`+unescape(atob(hosted_enrichi[i].titre))+`" url="`+(hosted_enrichi[i].data)+`"
	 >
		<div class="item-activite-thumbnail">
	<div style="background:`+bkg+`;z-index:0;" class="RSanchor RSanchor-`+hosted_enrichi[i].type+`" title="" url=""></div>
	    </div>
	<div class="item-activite-content">
	      <p class="title-activite">`+unescape(atob(hosted_enrichi[i].titre))+`</p>
	      <p class="description-activite" style="text-align: left;">
	      	 <span class="tag">page.`+hosted_enrichi[i].page+`</span>
	      </p>
	</div>
	</div>`
   }//end if page and type


   }
};


$("#itmes-ressources").html(html);
$(".ms-options-wrap input").attr("placeholder","Chercher")

})//endliste_module_book


$(document).on("click touchstart",".app-ressources",async function  (e) {
$(this).toggleClass("is-active");
if( $(this).hasClass("is-active") ){
var userinfo = await getUserInfo();
 var objelm = [{"id":"_6in644gti1648550408041","type":"yt","data":"PGlmcmFtZSB3aWR0aD0iNTYwIiBoZWlnaHQ9IjMxNSIgc3JjPSJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9GU2VtS2FCRlBsQSIgdGl0bGU9IllvdVR1YmUgdmlkZW8gcGxheWVyIiBmcmFtZWJvcmRlcj0iMCIgYWxsb3c9ImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmUiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4=","titre":"RXhlbXBsZSB2aWRlbyB5b3V0dWJl","top":"60.5095541","left":"2.40549828","page":"1","active":true,"w":"76.19","h":"38.45","_id":"5042c53a-b955-449f-b24c-7c53113eb167"},{"id":"_ha8rsmd5j1648551074109","type":"link-page","data":"10","titre":"QWxsZXIgYSBsYSBwYWdlIDEw","top":"47.9617834","left":"11.2972508","page":"1","active":true,"w":"0.00","h":"0.00","_id":"44cf4a4e-f7c7-422b-b11c-a6ae1d5a4bd1"},{"id":"_ae3qxjc8q1648551090430","type":"link","data":"https://www.google.com/","titre":"QWxsZXIgYSBsYSBwYWdlIGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20v","top":"54.1401273","left":"11.3402061","page":"1","active":true,"w":"0.00","h":"0.00","_id":"0dedaa5c-dce2-488b-9161-3f8acf3a05d6"},{"id":"_rgzc1cizz1648550285185","type":"video","data":"aHR0cDovL2NvbW1vbmRhdGFzdG9yYWdlLmdvb2dsZWFwaXMuY29tL2d0di12aWRlb3MtYnVja2V0L3NhbXBsZS9CaWdCdWNrQnVubnkubXA0","titre":"RXhhbXBsZSB2aWTpb3MgTVA0","top":"47.8108581","left":"3.07328605","page":"1","active":true,"w":"75.03","h":"53.11","blank":false,"_id":"9266c12b-8dbf-4a78-ba6f-31b34b647a12"},{"id":"_jpcoo1hwh1648550368548","type":"audio","data":"aHR0cCUzQS8vZWNvbGUuZWR1bmV0LnRuL2ZyMy9maWxlcy9wYWdlQ29uZmlnL1AxMC5tcDM=","titre":"RXhhbXBsZSUyMGF1ZGlvJTIwbXAz","top":"54.0127388","left":"2.57731958","page":"1","active":true,"w":"37.51","h":"13.61","blank":false,"_id":"cccb5b1a-f042-4635-96d1-59e61a9649d2"},{"id":"_4v3n170ut1648566468910","type":"app","data":"aHR0cHM6Ly9mYXJlc2JvLmdpdGh1Yi5pby9hcHBsZXRzL2V4My9pbmRleC5odG1s","titre":"RXhlcmNpY2UgRHJhZyBhbmQgRHJvcA==","top":"6.04203152","left":"45.7683229","page":"13","active":true,"w":"79.49","h":"73.08","blank":false,"_id":"3a51c45a-3226-470f-a7a0-f6831513e732"},{"id":"_prj2m5a891648566565877","type":"app","data":"aHR0cHM6Ly9mYXJlc2JvLmdpdGh1Yi5pby9hcHBsZXRzL2V4NC9pbmRleC5odG1s","titre":"UmVsaWUgcGFyIHVuZSBmbOhjaGUu","top":"5.51663747","left":"46.0047277","page":"14","active":true,"w":"79.49","h":"73.08","blank":false,"_id":"158c2c3a-9c60-4a59-afb3-7d36b3341a3b"},{"id":"_84zqtegjm1648566660253","type":"app","data":"aHR0cHM6Ly9mYXJlc2JvLmdpdGh1Yi5pby9hcHBsZXRzL2V4NS9pbmRleC5odG1s","titre":"RXhlcmNpY2UgZGUgcmVjb25uYWlzc2FuY2Ugdm9jYWxlLg==","top":"54.5534150","left":"51.6784884","page":"13","active":true,"w":"79.49","h":"73.08","blank":false,"_id":"064673cd-2e76-49d2-93ee-8692563a29ef"},{"id":"_gpzguy9sh1648566771422","type":"app","data":"aHR0cHM6Ly9mYXJlc2JvLmdpdGh1Yi5pby9hcHBsZXRzL2V4Ni9pbmRleC5odG1s","titre":"RXhlcmNpY2UgZGUgcmVjb25uYWlzc2FuY2Ugdm9jYWxlIChNb2RlIHRleHQp","top":"16.9877408","left":"13.9479905","page":"17","active":true,"w":"81.40","h":"77.37","blank":false,"_id":"e2974bb1-a0aa-474c-a065-fdf68c18b23f"},{"id":"_6cjxqzldx1648566888023","type":"app","data":"aHR0cHM6Ly9mYXJlc2JvLmdpdGh1Yi5pby9hcHBsZXRzL2V4Ny9pbmRleC5odG1s","titre":"RXhlcmNpY2UgZW5yZWdpc3RyZW1lbnQgdm9jYWxl","top":"26.0945709","left":"4.96453900","page":"17","active":true,"w":"81.51","h":"76.48","blank":false,"_id":"ece0980b-4d04-4164-8e0a-d2e8b283f0af"}];
	prepareRessources( userinfo , objelm )
	 $("#mesressources").show();
}//end hasClass
else{
	 $("#mesressources").hide();
}
})//end




$(document).on("click touchstart","#btn-book-text-select",function  (e) {

$(this).toggleClass("is-active");
if( $(this).hasClass("is-active") ){
	instance.pause(); 
}//end hasClass
else{
	instance.resume(); 
}

})//end



$(document).on("click touchstart","#btn-book-zoom-out",function  (e) {
instance.smoothZoom($('.book').width()/2, $('.book').height()/2, 0.5);
})//end


 $(document).on("click touchstart","#btn-book-zoom-in",function  (e) {
instance.smoothZoom($('.book').width()/2, $('.book').height()/2, 1.5);
})//end
 

$(document).on("keypress",".input-current-page",function  (e) {
	if(e.which === 13){
		$('.book').turn('page', $(this).val());
	}//end if
})
 

$(document).on("click touchstart","#home-page",function  (argument) {
	$('.book').turn('page', 1);
})// #home-page...

$(document).on("click touchstart","#sommaire-page",function  (argument) {
	$('.book').turn('page', 3);
})// #home-page...

$(document).on("click touchstart","#prev-page",function  (argument) {
  $('.book').turn('previous');
})// #home-page...

$(document).on("click touchstart","#next-page",function  (argument) {
	$('.book').turn('next');	
})// #home-page...


$(document).on("click touchstart","#btn-header-thumbnails",function  (argument) {
	$(".thumbnails").toggle();
	if( $("#btn-header-thumbnails").hasClass("is-active") ){
		$("#btn-header-thumbnails").removeClass("is-active");
	}else{
		$("#btn-header-thumbnails").addClass("is-active");

				$('.thumbnails').animate({
					scrollLeft: $(".thumbnails .item-thumbnails.active").offset().left 
				}, 0);
	}
})// #home-page...


$(document).on("click touchstart",".close-thumbnails",function  (argument) {
	$(".thumbnails").hide();
 	$("#btn-header-thumbnails").removeClass("is-active"); 
})// #home-page...

$(document).on("click touchstart",".item-thumbnails",function  (argument) {
$('.book').turn('page', $(this).index());
	$(".thumbnails").hide();
 	$("#btn-header-thumbnails").removeClass("is-active"); 
/*	
	$(".thumbnails").hide();
 	$("#btn-header-thumbnails").removeClass("is-active");
*/	 
})// #home-page...


 

//////console.log( book_settings );
//Calcule (widthpage img / heightpage) * 2

var hosted_enrichi = [];

'use strict';
var module = {
ratio:( book_settings.width / book_settings.height ) * 2,
init:   function (id) {

    var me = this;
    // if older browser then don't run javascript
    if (document.addEventListener) {
        this.el = document.getElementById(id);
        this.resize();
        this.plugins();
        // on window resize, update the plugin size
        window.addEventListener('resize', function (e) {
            var size = me.resize();
            $(me.el).turn('size', size.width, size.height);
        });
    }
},
resize: function () {
    // reset the width and height to the css defaults
    this.el.style.width = '';
    this.el.style.height = '';
    var width = this.el.clientWidth,
        height = Math.round(width / this.ratio),
        padded = Math.round(document.body.clientHeight * 0.9);
    // if the height is too big for the window, constrain it
    if (height > padded) {
        height = padded;
        width = Math.round(height * this.ratio);
    }
    // set the width and height matching the aspect ratio
    this.el.style.width = width + 'px';
    this.el.style.height = height + 'px';
    return {
        width: width,
        height: height
    };
},
plugins: function () {
    // run the plugin
    $(this.el).turn({
		gradients: true,
		acceleration: true,
		display: "double",//single
		duration: 1000,
		elevation: 100,
		pages: book_settings.pages,
	when: {
		turning: function(event, page, view) {
			instance.smoothZoom($('.book').width()/2, $('.book').height()/2, 0.1);

			if( page == 1){
				$('.book').css('transform' , 'translate3d(-25%, 0px, 0px)');
				$('.book').css('box-shadow' , 'none');    
			}else{
			    $('.book').css('transform' , 'translate3d(0px, 0px, 0px)');
			    $('.book').css('box-shadow' , '0 0 20px rgba(0,0,0,0.5)');    
			}
			var book = $(this),
			currentPage = book.turn('page'),
			pages = book.turn('pages');
			//$(".input-current-page").val($('.book').turn('page')  );
 			// Update the current URI
			Hash.go('page/' + page).update();
			// Show and hide navigation buttons
			//disableControls(page);
			
		},
		turned: function(event, page, view) {

 
			$(".page-wrapper").removeClass("Intheviewport");
			var numpage =  ( $('#book').turn('page') );
			if( numpage % 2 ){
 				$(".p"+numpage).addClass("Intheviewport");
				if( numpage > 1 ){
					$(".p"+(numpage - 1)).addClass("Intheviewport");
				}
			}else{
				$(".p"+numpage).addClass("Intheviewport");
				$(".p"+(numpage + 1)).addClass("Intheviewport");
 			}
 		    if ( [numpage,numpage-1,numpage+1].includes( parseInt($(this).attr("id")) )  ){
 		    }





		$(".page-draw").droppable({
		        accept: '.chi-elm',
		        drop: function(event, ui) {
		          var numpage =  ( $('#book').turn('page') );
		          //console.log(numpage)
		          if ( [numpage,numpage-1,numpage+1].includes( parseInt($(this).attr("id")) )  ){
		               var type_enrichi = $(ui.helper)['context'].id;
		               var x =  event.clientX - $(this).offset().left;
						var y =  event.clientY - $(this).offset().top;
						x = x - 20;
						y = y - 20;
						x     = x / instance.getTransform().scale;
						y     = y / instance.getTransform().scale;
						x =(( (x  ) / parseFloat($(this).css("width")))*100 );   
						y =(( (y  ) / parseFloat($(this).css("height")))*100 );  
						lastposX = x;
						lastposY = y;
						////console.log(  )
						dropElmEnrich(type_enrichi , x , y ,(this) , $(this).attr('id') );
		         }//end if this page not next page
		        }//end drop
		    });

			//////console.log( page );
			$(".thumbnails .item-thumbnails").removeClass("active");
			$(".thumbnails .item-thumbnails").eq($('.book').turn('page')).addClass("active");
			$('.thumbnails .page-'+$('.book').turn('page')).
				parent().
				removeClass('current');
			$('.thumbnails .page-'+page).
				parent().
				addClass('current');
				////console.log()
				$('.thumbnails').animate({
					scrollLeft: $(".thumbnails .item-thumbnails.active").offset().left 
				}, 0);
			 $(".input-current-page").val($('.book').turn('page')  );
			//////console.log( page );
			if( page == 1){
				$('.book').css('transform' , 'translate3d(-25%, 0px, 0px)');
				$('.book').css('box-shadow' , 'none');    
			}else{
			    $('.book').css('transform' , 'translate3d(0px, 0px, 0px)');
			    $('.book').css('box-shadow' , '0 0 20px rgba(0,0,0,0.5)');    
			}
			return;
			//disableControls(page);
			$(this).turn('center');
			if (page==1) { 
				$(this).turn('peel', 'br');
			}




		},
		missing: function (event, pages) {
			// Add pages that aren't in the magazine
			for (var i = 0; i < pages.length; i++)
				addPage(pages[i], $(this));
		}
	}




/*
	// Duration in millisecond
	// Hardware acceleration
	acceleration: !isChrome(),
	// Enables gradients
	gradients: true,
	// Auto center this flipbook
	//autoCenter: true,
	// Elevation from the edge of the flipbook when turning a page
	elevation: 100,
	// The number of pages
	pages: 8,
*/





    });
    // hide the body overflow
    document.body.className = 'hide-overflow';
}
};


$(document).on("mousemove",".p1",function  ( e ) {
if( !$(".p1 .page-draw").hasClass("ui-droppable") ){
 var numpage =  ( $('#book').turn('page') );

		
			$(".page-draw").droppable({
		        accept: '.chi-elm',
		        drop: function(event, ui) {
		          var numpage =  ( $('#book').turn('page') );
		          //console.log(numpage)
		          if ( [numpage,numpage-1,numpage+1].includes( parseInt($(this).attr("id")) )  ){
		               var type_enrichi = $(ui.helper)['context'].id;
		               var x =  event.clientX - $(this).offset().left;
						var y =  event.clientY - $(this).offset().top;
						x = x - 20;
						y = y - 20;
						x     = x / instance.getTransform().scale;
						y     = y / instance.getTransform().scale;
						x =(( (x  ) / parseFloat($(this).css("width")))*100 );   
						y =(( (y  ) / parseFloat($(this).css("height")))*100 );  
						lastposX = x;
						lastposY = y;
						////console.log(  )
						dropElmEnrich(type_enrichi , x , y ,(this) , $(this).attr('id') );
		         }//end if this page not next page
		        }//end drop
		    });


}//end alrady dropable
		if( numpage == 1 ){}

})// body...



$(".thumbnails").html(`<div class="close-thumbnails">x</div>`);
for (var ith = 1; ith < book_settings.pages ; ith++) {
$(".thumbnails").append(`
 <div class="item-thumbnails">
 	<img src="thumbnail/`+ith+`.jpg"  draggable="false" width="76" height="100" class="" alt="">
 	<p style="width:100%;text-align:center;">`+ith+`</p>
 </div>
`);

};
$(".thumbnails .item-thumbnails").eq($('.book').turn('page')).addClass("active");
 
 Myinit ( )
async function Myinit ( ) {


var userinfo = await getUserInfo();
setUpProfile (userinfo);


 var ad = true; 
if( userinfo == 'error' ){
	     	 ad = false
}else{
    //alert("not Invited user!");
    var usertype = userinfo.name.type;
    //////console.log( usertype );
    if( usertype != "admin"){
    	 ad = false
    }//
}//user not connected


/**/
 hosted_enrichi =   [{"id":"_6in644gti1648550408041","type":"yt","data":"PGlmcmFtZSB3aWR0aD0iNTYwIiBoZWlnaHQ9IjMxNSIgc3JjPSJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9GU2VtS2FCRlBsQSIgdGl0bGU9IllvdVR1YmUgdmlkZW8gcGxheWVyIiBmcmFtZWJvcmRlcj0iMCIgYWxsb3c9ImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmUiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4=","titre":"RXhlbXBsZSB2aWRlbyB5b3V0dWJl","top":"60.5095541","left":"2.40549828","page":"1","active":true,"w":"76.19","h":"38.45","_id":"5042c53a-b955-449f-b24c-7c53113eb167"},{"id":"_ha8rsmd5j1648551074109","type":"link-page","data":"10","titre":"QWxsZXIgYSBsYSBwYWdlIDEw","top":"47.9617834","left":"11.2972508","page":"1","active":true,"w":"0.00","h":"0.00","_id":"44cf4a4e-f7c7-422b-b11c-a6ae1d5a4bd1"},{"id":"_ae3qxjc8q1648551090430","type":"link","data":"https://www.google.com/","titre":"QWxsZXIgYSBsYSBwYWdlIGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20v","top":"54.1401273","left":"11.3402061","page":"1","active":true,"w":"0.00","h":"0.00","_id":"0dedaa5c-dce2-488b-9161-3f8acf3a05d6"},{"id":"_rgzc1cizz1648550285185","type":"video","data":"aHR0cDovL2NvbW1vbmRhdGFzdG9yYWdlLmdvb2dsZWFwaXMuY29tL2d0di12aWRlb3MtYnVja2V0L3NhbXBsZS9CaWdCdWNrQnVubnkubXA0","titre":"RXhhbXBsZSB2aWTpb3MgTVA0","top":"47.8108581","left":"3.07328605","page":"1","active":true,"w":"75.03","h":"53.11","blank":false,"_id":"9266c12b-8dbf-4a78-ba6f-31b34b647a12"},{"id":"_jpcoo1hwh1648550368548","type":"audio","data":"aHR0cCUzQS8vZWNvbGUuZWR1bmV0LnRuL2ZyMy9maWxlcy9wYWdlQ29uZmlnL1AxMC5tcDM=","titre":"RXhhbXBsZSUyMGF1ZGlvJTIwbXAz","top":"54.0127388","left":"2.57731958","page":"1","active":true,"w":"37.51","h":"13.61","blank":false,"_id":"cccb5b1a-f042-4635-96d1-59e61a9649d2"},{"id":"_4v3n170ut1648566468910","type":"app","data":"aHR0cHM6Ly9mYXJlc2JvLmdpdGh1Yi5pby9hcHBsZXRzL2V4My9pbmRleC5odG1s","titre":"RXhlcmNpY2UgRHJhZyBhbmQgRHJvcA==","top":"6.04203152","left":"45.7683229","page":"13","active":true,"w":"79.49","h":"73.08","blank":false,"_id":"3a51c45a-3226-470f-a7a0-f6831513e732"},{"id":"_prj2m5a891648566565877","type":"app","data":"aHR0cHM6Ly9mYXJlc2JvLmdpdGh1Yi5pby9hcHBsZXRzL2V4NC9pbmRleC5odG1s","titre":"UmVsaWUgcGFyIHVuZSBmbOhjaGUu","top":"5.51663747","left":"46.0047277","page":"14","active":true,"w":"79.49","h":"73.08","blank":false,"_id":"158c2c3a-9c60-4a59-afb3-7d36b3341a3b"},{"id":"_84zqtegjm1648566660253","type":"app","data":"aHR0cHM6Ly9mYXJlc2JvLmdpdGh1Yi5pby9hcHBsZXRzL2V4NS9pbmRleC5odG1s","titre":"RXhlcmNpY2UgZGUgcmVjb25uYWlzc2FuY2Ugdm9jYWxlLg==","top":"54.5534150","left":"51.6784884","page":"13","active":true,"w":"79.49","h":"73.08","blank":false,"_id":"064673cd-2e76-49d2-93ee-8692563a29ef"},{"id":"_gpzguy9sh1648566771422","type":"app","data":"aHR0cHM6Ly9mYXJlc2JvLmdpdGh1Yi5pby9hcHBsZXRzL2V4Ni9pbmRleC5odG1s","titre":"RXhlcmNpY2UgZGUgcmVjb25uYWlzc2FuY2Ugdm9jYWxlIChNb2RlIHRleHQp","top":"16.9877408","left":"13.9479905","page":"17","active":true,"w":"81.40","h":"77.37","blank":false,"_id":"e2974bb1-a0aa-474c-a065-fdf68c18b23f"},{"id":"_6cjxqzldx1648566888023","type":"app","data":"aHR0cHM6Ly9mYXJlc2JvLmdpdGh1Yi5pby9hcHBsZXRzL2V4Ny9pbmRleC5odG1s","titre":"RXhlcmNpY2UgZW5yZWdpc3RyZW1lbnQgdm9jYWxl","top":"26.0945709","left":"4.96453900","page":"17","active":true,"w":"81.51","h":"76.48","blank":false,"_id":"ece0980b-4d04-4164-8e0a-d2e8b283f0af"}];

 var newhostedobj = [];
 for (var iv = 0; iv < hosted_enrichi.length; iv++) {
 	//////console.log( hosted_enrichi[iv] );
 	//console.log(ad);
 	if( !ad ){
 		if( hosted_enrichi[iv].active ){
 			newhostedobj.push(hosted_enrichi[iv])
 			 
 		}
 	}else{
		newhostedobj.push(hosted_enrichi[iv])
 	}
 };
hosted_enrichi  = newhostedobj
 prepareRessources ( userinfo , hosted_enrichi)

module.init('book');

if(localStorage.getItem("histo_page")){}


if( location.hash.indexOf("page/") ){
	//////console.log( location.hash.substring(6,location.hash.length) );
	$('.book').turn('page', location.hash.substring(6,location.hash.length)  );
}//end page
		


		
}// Myinit...


function setUpProfile (userinfo) {

 
//////console.log(userinfo);
if( userinfo == 'error' ){
	$(".app-icon-login").html(`<svg  style="transform: translateY(3px) scale(0.9);" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><g><rect fill="none" height="24" width="24"/></g><g><path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z"/></g></svg>`);
	$(".app-icon-login").attr("title","Se connecter");
	//alert("Invited user!");
}else{
    //alert("not Invited user!");
    var usertype = userinfo.name.type;
    //////console.log( usertype );
    if( usertype == "admin"){
    	$(".app-icon-login").html(`<svg  style="transform: translateY(3px) scale(0.9);" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"/></g></svg>`);
    	$(".app-icon-login").attr("title","Déconnexion");
    	$("#parent-elms-enrichi").show();
    }//



}//user not connected
	
$(".app-icon-login").show();
$(".app-icon-login").hide();

}// body...




async function prepareRessources ( userinfo , objelm ) {

 
 var ad = true; 
if( userinfo == 'error' ){
	     	 ad = false
}else{
    //alert("not Invited user!");
    var usertype = userinfo.name.type;
    //////console.log( usertype );
    if( usertype != "admin"){
    	 ad = false
    }//
}//user not connected

 hosted_enrichi = objelm;
  var newhostedobj = [];
 for (var iv = 0; iv < hosted_enrichi.length; iv++) {
 
 	if( !ad ){
 		if( hosted_enrichi[iv].active ){
 			newhostedobj.push(hosted_enrichi[iv])   
 		}
 	}else{
 		 	newhostedobj.push(hosted_enrichi[iv])

 	}
 };


hosted_enrichi  = newhostedobj


var html = ``;
for (var i = 0; i < hosted_enrichi.length; i++) {
  if( hosted_enrichi[i] ){
       //////console.log("Load hir!");
      var bkg = '#b4b4b4';
      if( hosted_enrichi[i].active ){
          bkg = 'rgb(255, 102, 0)';
   }
html+=`
<div class="item-ressource ITMRSanchor-`+hosted_enrichi[i].type+` " blank="`+hosted_enrichi[i].blank+`" w="`+hosted_enrichi[i].w+`" 
h="`+hosted_enrichi[i].h+`" top_="`+hosted_enrichi[i].top+`" 
left_="`+hosted_enrichi[i].left+`" page="`+hosted_enrichi[i].page+`" 
shared="`+hosted_enrichi[i].active+`" 
uniqueid="`+hosted_enrichi[i].id+`" id="`+hosted_enrichi[i].id+`" 
title="`+unescape(atob(hosted_enrichi[i].titre))+`" url="`+(hosted_enrichi[i].data)+`"
 >
	<div class="item-activite-thumbnail">
<div style="background:`+bkg+`;z-index:0;" class="RSanchor RSanchor-`+hosted_enrichi[i].type+`" title="" url=""></div>
    </div>
<div class="item-activite-content">
      <p class="title-activite">`+unescape(atob(hosted_enrichi[i].titre))+`</p>
      <p class="description-activite" style="text-align: left;">
      	 <span class="tag">page.`+hosted_enrichi[i].page+`</span>
      </p>
</div>
</div>`

   }
};


$("#itmes-ressources").html(html);
$(".ms-options-wrap input").attr("placeholder","Chercher")

}// prepareRessources...



/**/


//zoom



// some of the possible values:
let topLeft = {x: 0, y: 0};
let topRight = {x: 1, y: 0};
let bottomLeft = {x: 0, y: 1};
let bottomRight = {x: 1, y: 1};
let centerCenter = {x: 0.5, y: 0.5};
// just grab a DOM element
var element = document.querySelector('.rel')
	// And pass it to panzoom
	var instance = panzoom(element,{
	transformOrigin: centerCenter,
	maxZoom: 3,
	minZoom: 1,  bounds: true,
	boundsPadding: 1.0,

})

let origin = instance.getTransformOrigin(); // {x: 0.5, y: 0.5}
instance.setTransformOrigin(bottomRight); // now it is topLeft
instance.setTransformOrigin(null); // remove transform origin
instance.setTransformOrigin(centerCenter); // now it is topLeft


$(document).on("dblclick",".page-wrapper",function  ( e ) {
	//alert("reset zoom")
})// .page-wrapper...

 
/*
 * 
*/

async function dropElmEnrich ( type_enrichi , x , y , page_container , numpage ) {
var unique_id = ( getID ()+new Date().getTime() );


if( type_enrichi == 'btn-video-enrechi' ){
	var elm_to_append = `<div top_="`+y+`" left_="`+x+`" page="`+numpage+`" shared="false" uniqueid="`+unique_id+`" id="`+unique_id+`" style="top:`+y+`%;left:`+x+`%;background:#b4b4b4;position:absolute;" class="anchor anchor-video" title="" url=""></div>`;
	elm_to_append = $(elm_to_append).draggable({stop: function( event, ui ) {var l = ( 100 * parseFloat($(this).css("left")) / parseFloat($(this).parent().css("width")) )+ "%" ;var t = ( 100 * parseFloat($(this).css("top")) / parseFloat($(this).parent().css("height")) )+ "%" ;$(this).css("left" , l);$(this).css("top" , t); $(this).css("width" , '7%');$(this).css("height" , '4%'); }});
	$(page_container).append(elm_to_append);
}//end if btn-video-enrechi


if( type_enrichi == 'btn-yt-enrechi' ){
	var elm_to_append = `<div top_="`+y+`" left_="`+x+`" 
	page="`+numpage+`" 
	shared="false" uniqueid="`+unique_id+`" 
	id="`+unique_id+`" 
	style="top:`+y+`%;left:`+x+`%;background:#b4b4b4;position:absolute;" 
	class="anchor anchor-yt" 
	title="" url=""></div>`;
	elm_to_append = $(elm_to_append).draggable({stop: function( event, ui ) {var l = ( 100 * parseFloat($(this).css("left")) / parseFloat($(this).parent().css("width")) )+ "%" ;var t = ( 100 * parseFloat($(this).css("top")) / parseFloat($(this).parent().css("height")) )+ "%" ;$(this).css("left" , l);$(this).css("top" , t); $(this).css("width" , '7%');$(this).css("height" , '4%'); }});
	$(page_container).append(elm_to_append);
}//end if btn-yt-enrechi




if( type_enrichi == 'btn-app-enrechi' ){
	var elm_to_append = `<div top_="`+y+`" left_="`+x+`" 
	page="`+numpage+`" 
	shared="false" uniqueid="`+unique_id+`" 
	id="`+unique_id+`" 
	style="top:`+y+`%;left:`+x+`%;background:#b4b4b4;position:absolute;" 
	class="anchor anchor-app" 
	title="" url=""></div>`;
	elm_to_append = $(elm_to_append).draggable({stop: function( event, ui ) {var l = ( 100 * parseFloat($(this).css("left")) / parseFloat($(this).parent().css("width")) )+ "%" ;var t = ( 100 * parseFloat($(this).css("top")) / parseFloat($(this).parent().css("height")) )+ "%" ;$(this).css("left" , l);$(this).css("top" , t); $(this).css("width" , '7%');$(this).css("height" , '4%'); }});
	$(page_container).append(elm_to_append);
}//end if btn-yt-enrechi



if( type_enrichi == 'btn-link-page-enrechi' ){
	var elm_to_append = `<div top_="`+y+`" left_="`+x+`" 
	page="`+numpage+`" 
	shared="false" uniqueid="`+unique_id+`" 
	id="`+unique_id+`" 
	style="top:`+y+`%;left:`+x+`%;background:#b4b4b4;position:absolute;" 
	class="anchor anchor-link-page" 
	title="" url=""></div>`;
	elm_to_append = $(elm_to_append).draggable({stop: function( event, ui ) {var l = ( 100 * parseFloat($(this).css("left")) / parseFloat($(this).parent().css("width")) )+ "%" ;var t = ( 100 * parseFloat($(this).css("top")) / parseFloat($(this).parent().css("height")) )+ "%" ;$(this).css("left" , l);$(this).css("top" , t); $(this).css("width" , '7%');$(this).css("height" , '4%'); }});
	$(page_container).append(elm_to_append);
}//end if btn-yt-enrechi


if( type_enrichi == 'btn-link-enrechi' ){
	var elm_to_append = `<div top_="`+y+`" left_="`+x+`" 
	page="`+numpage+`" 
	shared="false" uniqueid="`+unique_id+`" 
	id="`+unique_id+`" 
	style="top:`+y+`%;left:`+x+`%;background:#b4b4b4;position:absolute;" 
	class="anchor anchor-link" 
	title="" url=""></div>`;
	elm_to_append = $(elm_to_append).draggable({stop: function( event, ui ) {var l = ( 100 * parseFloat($(this).css("left")) / parseFloat($(this).parent().css("width")) )+ "%" ;var t = ( 100 * parseFloat($(this).css("top")) / parseFloat($(this).parent().css("height")) )+ "%" ;$(this).css("left" , l);$(this).css("top" , t); $(this).css("width" , '7%');$(this).css("height" , '4%'); }});
	$(page_container).append(elm_to_append);
}//end if btn-yt-enrechi





if( type_enrichi == 'btn-audio-enrechi' ){
	var elm_to_append = `<div top_="`+y+`" left_="`+x+`" page="`+numpage+`" shared="false" uniqueid="`+unique_id+`" id="`+unique_id+`" 
	style="top:`+y+`%;left:`+x+`%;background:#b4b4b4;position:absolute;" class="anchor anchor-audio" title="" url=""></div>`;
	elm_to_append = $(elm_to_append).draggable({stop: function( event, ui ) {var l = ( 100 * parseFloat($(this).css("left")) / parseFloat($(this).parent().css("width")) )+ "%" ;var t = ( 100 * parseFloat($(this).css("top")) / parseFloat($(this).parent().css("height")) )+ "%" ;$(this).css("left" , l);$(this).css("top" , t); $(this).css("width" , '7%');$(this).css("height" , '4%'); }});
	$(page_container).append(elm_to_append);
}//end if btn-video-enrechi


 

/*
if( type_enrichi == 'btn-audio-enrechi' ){
	var mykey = 'elm-annotate-audio_'+'FR3_'+numpage+unique_id;
	var elm_to_append = `<div  key = "`+mykey+`" id="`+unique_id+`" style="top:`+y+`%;left:`+x+`%;background:rgb(255, 102, 0);position:absolute;" 
	class="anchor anchor-audio-annotate" title="" url=""></div>`;
	elm_to_append = $(elm_to_append).draggable({stop: function( event, ui ) {var l = ( 100 * parseFloat($(this).css("left")) / parseFloat($(this).parent().css("width")) )+ "%" ;var t = ( 100 * parseFloat($(this).css("top")) / parseFloat($(this).parent().css("height")) )+ "%" ;$(this).css("left" , l);$(this).css("top" , t); $(this).css("width" , '7%');$(this).css("height" , '4%'); }});
	$(page_container).append(elm_to_append);
	 
	await localforageSetItem('elm-annotate-audio_'+'FR3_'+numpage+unique_id,{
	    id:unique_id,
	    top: y,
	    left: x,
	    data: null,
	    page: numpage,
 	});

}//end if btn-video-enrechi
*/ 

if( type_enrichi == 'btn-note-enrechi' ){
	////console.log("i drop a note")
	var mykey = 'elm-annotate-note_'+'FR3_'+numpage+unique_id;
	var elm_to_append = `<div  key = "`+mykey+`" id="`+unique_id+`" 
	style="top:`+y+`%;left:`+x+`%;background:rgb(255, 102, 0);position:absolute;" 
	class="anchor anchor-note-annotate" title="" url=""></div>`;
	elm_to_append = $(elm_to_append).draggable({stop: function( event, ui ) {var l = ( 100 * parseFloat($(this).css("left")) / parseFloat($(this).parent().css("width")) )+ "%" ;var t = ( 100 * parseFloat($(this).css("top")) / parseFloat($(this).parent().css("height")) )+ "%" ;$(this).css("left" , l);$(this).css("top" , t); $(this).css("width" , '7%');$(this).css("height" , '4%'); }});
	$(page_container).append(elm_to_append);
	 
	await localforageSetItem('elm-annotate-note_'+'FR3_'+numpage+unique_id,{
	    id:unique_id,
	    top: y,
	    left: x,
	    data: null,
	    page: numpage,
 	});

}//end if btn-video-enrechi
 


}// dropElmEnrich...

function addPage(page, book) {

	var id, pages = book.turn('pages');
	var element = $('<div />', {});
	if (book.turn('addPage', element, page)) {
		if(page > 1){
		  element.html('<div class="gradient"></div><div class="loader"></div>');
		}else{

		  element.html('<div style="box-shadow:0 0 10px rgba(0,0,0,0.5);position: absolute;top: 3px;left: 3px;'
		  	+'width:calc( 100% - 6px); height: calc(100% - 6px);" class=" "></div><div class="loader"></div>');
		}
		// Load the page

		loadPage(page, element);
	}

}

function loadPage(page, pageElement) {
	// Create an image element
	var img = $('<img />');
	img.mousedown(function(e) {
		e.preventDefault();
	});
	img.load(function() {
		// Set the size
		$(this).css({width: '100%', height: '100%'});
		// Add the image to the page after loaded
		$(this).appendTo(pageElement);
		// Remove the loader indicator
		pageElement.find('.loader').remove();

	});

	// Load the page

	img.attr('src', 'pages/' +  page + '.jpg');
	pageElement.append(`<div class="mypagecontent" style="position:absolute;top:0;left:0;width:100%;height:100%;"></div>`);
	loadContent(page, pageElement);
	//loadRegions(page, pageElement);

}

// Zoom in / Zoom out

function zoomTo(event) {

		setTimeout(function() {
			if ($('.magazine-viewport').data().regionClicked) {
				$('.magazine-viewport').data().regionClicked = false;
			} else {
				if ($('.magazine-viewport').zoom('value')==1) {
					$('.magazine-viewport').zoom('zoomIn', event);
				} else {
					$('.magazine-viewport').zoom('zoomOut');
				}
			}
		}, 1);

}



// Load regions

function loadRegions(page, element) {

	$.getJSON('pages/'+page+'-regions.json').
		done(function(data) {

			$.each(data, function(key, region) {
				addRegion(region, element);
			});
		});
}//loadRegions

// Add region

function addRegion(region, pageElement) {
	var reg = $('<div />', {'class': 'region  ' + region['class']}),
		options = $('.magazine').turn('options'),
		pageWidth = options.width/2,
		pageHeight = options.height;
		reg.css({
			top: Math.round(region.y/pageHeight*100)+'%',
			left: Math.round(region.x/pageWidth*100)+'%',
			width: Math.round(region.width/pageWidth*100)+'%',
			height: Math.round(region.height/pageHeight*100)+'%'
		}).attr('region-data', $.param(region.data||''));
		reg.appendTo(pageElement);
}//end addRegion

// Process click touchstart on a region

function regionClick(event) {

	var region = $(event.target);

	if (region.hasClass('region')) {

		$('.magazine-viewport').data().regionClicked = true;
		
		setTimeout(function() {
			$('.magazine-viewport').data().regionClicked = false;
		}, 100);
		
		var regionType = $.trim(region.attr('class').replace('region', ''));

		return processRegion(region, regionType);

	}

}

// Process the data of every region

function processRegion(region, regionType) {

	data = decodeParams(region.attr('region-data'));

	switch (regionType) {
		case 'link' :

			window.open(data.url);

		break;
		case 'zoom' :

			var regionOffset = region.offset(),
				viewportOffset = $('.magazine-viewport').offset(),
				pos = {
					x: regionOffset.left-viewportOffset.left,
					y: regionOffset.top-viewportOffset.top
				};

			$('.magazine-viewport').zoom('zoomIn', pos);

		break;
		case 'to-page' :

			$('.magazine').turn('page', data.page);

		break;
	}

}

// Load large page

function loadLargePage(page, pageElement) {
	
	var img = $('<img />');

	img.load(function() {

		var prevImg = pageElement.find('img');
		$(this).css({width: '100%', height: '100%'});
		$(this).appendTo(pageElement);
		prevImg.remove();
		
	});

	// Loadnew page
	
	img.attr('src', 'pages/' +  page + '-large.jpg');
}

// Load small page

function loadSmallPage(page, pageElement) {
	
	var img = pageElement.find('img');

	img.css({width: '100%', height: '100%'});

	img.unbind('load');
	// Loadnew page

	img.attr('src', 'pages/' +  page + '.jpg');
}

// http://code.google.com/p/chromium/issues/detail?id=128488

function isChrome() {

	return navigator.userAgent.indexOf('Chrome')!=-1;

}

function disableControls(page) {
		if (page==1)
			$('.previous-button').hide();
		else
			$('.previous-button').show();
					
		if (page==$('.magazine').turn('pages'))
			$('.next-button').hide();
		else
			$('.next-button').show();
}

// Set the width and height for the viewport

function resizeViewport() {

	var width = $(window).width(),
		height = $(window).height(),
		options = $('.magazine').turn('options');

	$('.magazine').removeClass('animated');

	$('.magazine-viewport').css({
		width: width,
		height: height
	}).
	zoom('resize');


	if ($('.magazine').turn('zoom')==1) {
		var bound = calculateBound({
			width: options.width,
			height: options.height,
			boundWidth: Math.min(options.width, width),
			boundHeight: Math.min(options.height, height)
		});

		if (bound.width%2!==0)
			bound.width-=1;

			
		if (bound.width!=$('.magazine').width() || bound.height!=$('.magazine').height()) {

			$('.magazine').turn('size', bound.width, bound.height);

			if ($('.magazine').turn('page')==1)
				$('.magazine').turn('peel', 'br');

			$('.next-button').css({height: bound.height, backgroundPosition: '-38px '+(bound.height/2-32/2)+'px'});
			$('.previous-button').css({height: bound.height, backgroundPosition: '-4px '+(bound.height/2-32/2)+'px'});
		}

		$('.magazine').css({top: -bound.height/2, left: -bound.width/2});
	}

	var magazineOffset = $('.magazine').offset(),
		boundH = height - magazineOffset.top - $('.magazine').height(),
		marginTop = (boundH - $('.thumbnails > div').height()) / 2;

	if (marginTop<0) {
		$('.thumbnails').css({height:1});
	} else {
		$('.thumbnails').css({height: boundH});
		$('.thumbnails > div').css({marginTop: marginTop});
	}

	if (magazineOffset.top<$('.made').height())
		$('.made').hide();
	else
		$('.made').show();

	$('.magazine').addClass('animated');
	
}


// Number of views in a flipbook

function numberOfViews(book) {
	return book.turn('pages') / 2 + 1;
}

// Current view in a flipbook

function getViewNumber(book, page) {
	return parseInt((page || book.turn('page'))/2 + 1, 10);
}

function moveBar(yes) {
	if (Modernizr && Modernizr.csstransforms) {
		$('#slider .ui-slider-handle').css({zIndex: yes ? -1 : 10000});
	}
}

function setPreview(view) {

	var previewWidth = 112,
		previewHeight = 73,
		previewSrc = 'pages/preview.jpg',
		preview = $(_thumbPreview.children(':first')),
		numPages = (view==1 || view==$('#slider').slider('option', 'max')) ? 1 : 2,
		width = (numPages==1) ? previewWidth/2 : previewWidth;

	_thumbPreview.
		addClass('no-transition').
		css({width: width + 15,
			height: previewHeight + 15,
			top: -previewHeight - 30,
			left: ($($('#slider').children(':first')).width() - width - 15)/2
		});

	preview.css({
		width: width,
		height: previewHeight
	});

	if (preview.css('background-image')==='' ||
		preview.css('background-image')=='none') {

		preview.css({backgroundImage: 'url(' + previewSrc + ')'});

		setTimeout(function(){
			_thumbPreview.removeClass('no-transition');
		}, 0);

	}

	preview.css({backgroundPosition:
		'0px -'+((view-1)*previewHeight)+'px'
	});
}

// Width of the flipbook when zoomed in

function largeMagazineWidth() {
	
	return 2214;

}

// decode URL Parameters

function decodeParams(data) {

	var parts = data.split('&'), d, obj = {};

	for (var i =0; i<parts.length; i++) {
		d = parts[i].split('=');
		obj[decodeURIComponent(d[0])] = decodeURIComponent(d[1]);
	}

	return obj;
}

// Calculate the width and height of a square within another square

function calculateBound(d) {
	
	var bound = {width: d.width, height: d.height};

	if (bound.width>d.boundWidth || bound.height>d.boundHeight) {
		
		var rel = bound.width/bound.height;

		if (d.boundWidth/rel>d.boundHeight && d.boundHeight*rel<=d.boundWidth) {
			
			bound.width = Math.round(d.boundHeight*rel);
			bound.height = d.boundHeight;

		} else {
			
			bound.width = d.boundWidth;
			bound.height = Math.round(d.boundWidth/rel);
		
		}
	}
		
	return bound;
}





function getUserInfo ( ) {
   return new Promise( async resolve => {
    fetch('/getUserName')
    .then((response) => {
      //resolve(response);
      return response.json();
    })
    .then((myJson) => {
      resolve(myJson);
    }).catch((error) => {
      //////console.error('Error:', error);
      resolve("error");
    });
  })  
}// getUserName



function listRowsDB ( ) {
   return new Promise( async resolve => {
    fetch('/enrichi.json')
    .then((response) => {
      //resolve(response);
      return response.json();
    })
    .then((myJson) => {
      resolve(myJson);
    }).catch((error) => {
      //////console.error('Error:', error);
      resolve("error");
    });
  })  
}// listRowsDB





function getID () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};




$(".chi-elm").draggable({
  helper: 'clone', 
  start: function( event, ui ) {
      var elm = $(ui.helper)['context'];
      $(ui.helper).css('opacity',0);
      var celm = $(elm).clone( true );
      $("#helper-clones").html( 
      celm.removeClass('ui-draggable ui-draggable-handle ui-draggable-dragging')
      .attr('id',"showmzhelper")
      .css("position","absolute")
      .css("zoom","1")
      .css("opacity","1") );
    },
   drag: function( event, ui ) { 
     $("#showmzhelper").css("top",(event.clientY-20)+"px")
     $("#showmzhelper").css("left",(event.clientX - 20 )+"px") 
    },
    stop:function( event, ui ) { 
      $("#showmzhelper").remove();
    },
});

$(document).on("click touchstart",".item-ressource",function  (argument) {
  $("#mesressources").hide();
})// body...

$(document).on("click touchstart",".anchor",async function  (argument) {
  $(".edit-video-book-reader").hide();
  $(".edit-audio-book-reader").hide();
  $(".edit-yt-book-reader").hide();
  $(".edit-app-book-reader").hide();
  $(".edit-link-page-book-reader").hide();
  $(".edit-link-book-reader").hide();


var userinfo = await getUserInfo();

 var ad = true; 
if( userinfo == 'error' ){
         ad = false
}else{
    //alert("not Invited user!");
    var usertype = userinfo.name.type;
    //////console.log( usertype );
    if( usertype != "admin"){
       ad = false
    }//
}//user not connected
if(  ad ){
  $(".edit-video-book-reader").show();
  $(".edit-audio-book-reader").show();
  $(".edit-yt-book-reader").show();
  $(".edit-app-book-reader").show();
  $(".edit-link-page-book-reader").show();
  $(".edit-link-book-reader").show();
}

       
})

$(document).on("mousedown touchstart",".anchor",function  (argument) {
        instance.pause();
})
$(document).on("mouseup touchend",".anchor",function  (argument) {
        instance.resume();
})


$(document).on("mousemove touchmove",".anchor",function  (argument) {
  if( !$(this).hasClass("ui-draggable") ){
    ////console.log("I can move the move!")
    $(this).draggable({
      drag:function  ( e,ui ) {

      
  var myTop = Math.round(ui.position.top / instance.getTransform().scale );
      var myLeft = Math.round(ui.position.left / instance.getTransform().scale );
      

 ui.position = {
    top: myTop,
    left: myLeft
  };
 
      },
      stop: function( event, ui ) {

var l = (((parseFloat( $(this).css("left") )
* instance.getTransform().scale ) / 
($(this).parent().width()*instance.getTransform().scale)) * 100)
var t = (((parseFloat( $(this).css("top") )
* instance.getTransform().scale ) / 
($(this).parent().parent().height()*instance.getTransform().scale)) * 100)

l= l+"%";
t= t+"%";
$(this).css("left" , l);
      $(this).css("top" , t);
      $(this).attr("top_" , t);
      $(this).attr("left_" , l);
      $(this).css("width" , '7%');
      $(this).css("height" , '4%'); 

/*
      var l = ( 100 * parseFloat(ui.position.left) / parseFloat($(this).parent().css("width")) )+ "%" ;
      var t = ( 100 * parseFloat( ui.position.top ) / parseFloat($(this).parent().parent().css("height")) )+ "%" ;
     
      l = parseFloat(l) /   instance.getTransform().scale + "%"
      t = parseFloat(t) /   instance.getTransform().scale + "%"
      
     
     */
     }}


     );
  }
})// click touchstart...





$(document).on("click touchstart",".btn-modal-delete-video",async function  ( ) {
  $(this).next().next().show();
  var uniqueid = $(this).parent().attr("uniqueid");
  ////console.log( uniqueid );
  $(this).parent().parent().parent().remove();
  $("[uniqueid="+uniqueid+"]").remove();
  $("#"+uniqueid).remove();
  /*
  $(this).parent().parent().closest(".modal").remove();
  */
  ////console.log("delete from server!");

var s = await removeRowDB({id:uniqueid});
////console.log(s);


}) // click touchstart...




$(document).on("click touchstart",".btn-modal-save-video", async function  (argument) {
 
var uniqueId = $(this).parent().attr("uniqueid");
var type_elm_enrichi = "video";
var url = $(this).parent().parent().find(".input-video-url").val();
url = btoa(url);
//////console.log(url);
var titre = $(this).parent().parent().find(".input-video-titre").val();
titre = btoa(titre);
var top = $("#"+uniqueId).attr("top_").substring(0,10);
var left = $("#"+uniqueId).attr("left_").substring(0,10);
var page =  $("#"+uniqueId).attr("page");
var active = $(this).parent().parent().find(".partage_public").is(":checked");
var blank = $(this).parent().parent().find(".blank").is(":checked");
//////console.log(blank)
  
var w = ((  $(".video-book-reader[uniqueid='"+uniqueId+"']").width()  / $(document).width()) * 100 ).toFixed(2);
var h = (( $(".video-book-reader[uniqueid='"+uniqueId+"']").height()   / $(document).height()) * 100 ).toFixed(2);

var s = await saveElmEnrichi({
                                id:uniqueId,
                                type:type_elm_enrichi,
                                data:url,
                                titre:titre,
                                top:top,
                                left:left,
                                page:page,
                                active:active,
                                w:w,
                                h:h,
                                blank : blank
                              });
//////console.log(s)
//////console.log("Save to server!")
$(this).next().next().show();

if( s != 'error' ){

 var uniqueid = $(this).parent().attr("uniqueid");
  //////console.log( uniqueid );
  $(this).parent().parent().parent().remove();
  $(".video-book-reader[uniqueid="+uniqueid+"]").remove();

  ////console.log(active);
     $("#"+uniqueid).attr("title", atob(titre) );
     //$("#"+uniqueid).attr("title", "dddddddddd" );
     ////console.log(  $("#"+uniqueid) );
     $("#"+uniqueid).attr("url",url);
     $("#"+uniqueid).attr("w",w);
     $("#"+uniqueid).attr("h",h); 

     $("#"+uniqueid).attr("blank",blank);
     $("#"+uniqueid).attr("shared",active);

  if( active == true){
     $("#"+uniqueid).css("background","#ff6600");
  }else{
         $("#"+uniqueid).css("background","#b4b4b4");

  }
 
 ////console.log($("#"+uniqueid))
}//end error
else{
  alert("Erreur de sauvegarde!")
   $(this).parent().parent().parent().remove();
  $(".video-book-reader[uniqueid="+uniqueid+"]").remove();
}
//////console.log(s);

}) // click touchstart...



$(document).on("click touchstart",".edit-video-book-reader",function  ( ) {
  var title = $(this).parent().parent().find(".title-header-book").html();
  var url =   $(this).attr("url");
  url = atob(url);
var idforhelpvalueyrl =  getID ();

  //////console.log(url)

  var uniqueid =  $(this).parent().parent().attr("uniqueid");
  var shared =  $(this).parent().parent().attr("shared");
  var blank =  $(this).parent().parent().attr("blank");
  ////console.log(blank)
  var str_check = '';
  if( shared == "true" ){
    str_check = "checked";
  }//end if
var ouvrir_str_check = '';
  if( blank == "true" ){
    ouvrir_str_check = "checked";
  }//end if ouvrir_str_check



  if( !url ){
    url = "";
  }
  $("body").append(`<div class="modal is-activ is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head" style="height:30px;">
      <p class="modal-card-title" style="font-size:16px;">Video:</p>
      <button class="delete" aria-label="close" onclick="$(this).parent().parent().parent().removeClass('is-active');"></button>
    </header>
    <section class="modal-card-body" style="position:relative;">
     <div class="field">
      <label class="label" style="font-size: 14px;">URL</label>
      <div class="control  ">
        <input class="input-video-url input is-" type="text" placeholder=" " value="" id="`+idforhelpvalueyrl+`" >
      </div>
      <p class="help is-danger help-input-name-student" style="display:none;">....</p>
    </div>
     <div class="field">
      <label class="label"  style="font-size: 14px;">Titre</label>
      <div class="control ">
        <input class="input-video-titre input is-" type="text" placeholder=" " value="`+title+`">
      </div>
      <p class="help is-danger help-input-titre" style="display:none;">....</p>
    </div>

    <label style="text-align: ;   font-size: 14px;" class="label is-">
      <input `+str_check+` style="transform: translateY(4px);zoom: 2;" class="checkbox partage_public " type="checkbox"> Partagé avec tout le monde. 
    </label>

  


</section>  <!-- section ... -->
    <footer class="modal-card-foot" uniqueid = "`+uniqueid+`"  >
      <button  style="position:absolute;top:10px;right: 139px;" class="button is-light   btn-modal-delete-video"  >Supprimer</button>
      <button  style="position:absolute;top:10px;right:10px;" class="button is-success btn-modal-save-video" >Enregistrer</button>
      <br> 
       <div class="loaderd" style="display:none;position: absolute;top: 0;left: 0;height: 100%;background: white;width: 100%;">
          <button class="button is-warning is-loading" style="    width: 100%;background-color: transparent;margin-top: 20px;">Loading</button>
        </div>
    </footer>
  </div>
</div>`);

$("#"+idforhelpvalueyrl).val(url);

})// click touchstart...

$(document).on("click touchstart",".anchor-video,.ITMRSanchor-video",function  (argument) {
var id =  getID ();
var title = $(this).attr("title");
////console.log( $(this) )
var w = $(this).attr("w");
var h = $(this).attr("h");
var url = $(this).attr("url");
var shared = $(this).attr("shared");
var blank = $(this).attr("blank");


var iframe = `<iframe style="background:white;" src="" 
title="" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 allowfullscreen></iframe>`;
//////console.log(url);
if( atob(url).includes("youtube")  ){
iframe = atob(url);
}


 $("body").append(`
<div blank = "`+blank+`" id="`+id+`" shared ="`+shared+`" uniqueid 
= "`+$(this).attr("uniqueid")+`"  class="video-book-reader"
 style="position: absolute;height:`+h+`%;width:`+w+`%;">
<div class="header-video-book-reader ">
    <p class="title-header-book">`+title+`</p>
    <div class="close-video-book-reader" style="" onclick="$(this).parent().parent().remove();">
     <svg style="transform: translate(-7px, 2px);" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>  
    </div>
    <div  url="`+url+`" class="edit-video-book-reader" style="display:non;" >
     <svg style="transform: translate(-7px, -1px);zoom:0.8;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"></path></svg>   
    </div>
    <div class="delete-video-book-reader" style="display:none;" >
      <svg  style="transform: translate(-7px, -1px);zoom:0.8;"xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
    </div>
</div> 
<video  controls="" style="background:black;" >
  <source  src="`+atob(url)+`" type="video/mp4">
      Your browser does not support the video tag.
</video>
</div><!--End detail-watch-video--> `);

  $("#"+id).attr("ww",w);
  $("#"+id).attr("hh",h);
  $( "#"+id ).draggable({
     handle: ".header-video-book-reader",
      start:function  (ui) {
            
        if( !$(this).hasClass("mmargin") ){
            $(this).addClass("mmargin");
            $(this).css("transform","none");
            $(this).css("margin-left",(($( "#"+id ).offset().left / $(document).width()) * 100) +"%");
            //$( "#"+id ).css("left",$( "#"+id ).offset().left+'px');
          }//end start
      },
     stop:function  (ui) {
      $(this).css("width",$(this).attr("ww")+"%" );
      $(this).css("height",$(this).attr("hh")+"%" );
     }
  }).resizable();
  $( "#"+id ).css("position",'absolute');

$("#"+id).find("iframe").attr("src",   atob(url)  );

//$( "#"+id ).css("left",$(this).offset().left+'px');
//watchVideo ( id )
 })// anchor-video...




function saveElmEnrichi (obj) {
  obj = JSON.stringify(obj);
  return new Promise( async resolve => {
    fetch('/insertRowDB?obj='+obj)
    .then((response) => {
      //resolve(response);
      return response.json();
    })
    .then((myJson) => {
      resolve(myJson);
    }).catch((error) => {
      //////console.error('Error:', error);
      resolve("error");
    });
  })  
}// saveElmEnrichi
function percentwidth(elem){
    var pa= elem.offsetParent || elem;
    return ((elem.offsetWidth/pa.offsetWidth)*100).toFixed(2)+'%';
}



function removeRowDB (obj) {
   obj = JSON.stringify(obj);

  return new Promise( async resolve => {
    fetch('/removeRowDB?obj='+obj)
    .then((response) => {
      //resolve(response);
      return response.json();
    })
    .then((myJson) => {
      resolve(myJson);
    }).catch((error) => {
      //////console.error('Error:', error);
      resolve("error");
    });
  })  
}// saveElmEnrichi











$(document).on("click touchstart",".btn-modal-delete-audio",async function  ( ) {


  $(this).next().next().show();
  var uniqueid = $(this).parent().attr("uniqueid");
  //console.log( uniqueid );
  $(this).parent().parent().parent().remove();
  $("[uniqueid="+uniqueid+"]").remove();
  $("#"+uniqueid).remove();
  /*
  $(this).parent().parent().closest(".modal").remove();
  */
  //console.log("delete from server!");
  var s = await removeRowDB({id:uniqueid});
  //console.log(s);


}) // click touchstart...




$(document).on("click touchstart",".btn-modal-save-audio", async function  (argument) {
 
var uniqueId = $(this).parent().attr("uniqueid");
var type_elm_enrichi = "audio";
var url = $(this).parent().parent().find(".input-audio-url").val();
url = btoa(escape(url));
////console.log(url);
var titre = $(this).parent().parent().find(".input-audio-titre").val();
titre = btoa(escape(titre));

//http://ecole.edunet.tn/fr3/files/pageConfig/P9.mp3

//voici mon école. c’est mon école.

var top = $("#"+uniqueId).attr("top_").substring(0,10);
var left = $("#"+uniqueId).attr("left_").substring(0,10);
var page =  $("#"+uniqueId).attr("page");
var active = $(this).parent().parent().find(".partage_public").is(":checked");
var blank = $(this).parent().parent().find(".blank").is(":checked");
//console.log(blank)
  
var w = ((  $(".audio-book-reader[uniqueid='"+uniqueId+"']").width()  / $(document).width()) * 100 ).toFixed(2);
var h = (( $(".audio-book-reader[uniqueid='"+uniqueId+"']").height()   / $(document).height()) * 100 ).toFixed(2);

var s = await saveElmEnrichi({
                                id:uniqueId,
                                type:type_elm_enrichi,
                                data:url,
                                titre:titre,
                                top:top,
                                left:left,
                                page:page,
                                active:active,
                                w:w,
                                h:h,
                                blank : blank
                              });
////console.log(s)
////console.log("Save to server!")
$(this).next().next().show();

if( s != 'error' ){

 var uniqueid = $(this).parent().attr("uniqueid");
  ////console.log( uniqueid );
  $(this).parent().parent().parent().remove();
  $(".audio-book-reader[uniqueid="+uniqueid+"]").remove();

     ////console.log(active);
     $("#"+uniqueid).attr("title", unescape(atob(titre)) );
     //$("#"+uniqueid).attr("title", "dddddddddd" );
     //console.log(  $("#"+uniqueid) );
     $("#"+uniqueid).attr("url",url);
     $("#"+uniqueid).attr("w",w);
     $("#"+uniqueid).attr("h",h); 

     $("#"+uniqueid).attr("blank",blank);
     $("#"+uniqueid).attr("shared",active);

  if( active == true){
     $("#"+uniqueid+".anchor-audio").css("background","#ff6600");
  }else{
         $("#"+uniqueid+".anchor-audio").css("background","#b4b4b4");

  }
 
 }//end error
else{
  alert("Erreur de sauvegarde!")
   $(this).parent().parent().parent().remove();
  $(".audio-book-reader[uniqueid="+uniqueid+"]").remove();
}
////console.log(s);
prepareRessources (  )
}) // click touchstart...



$(document).on("click touchstart",".edit-audio-book-reader",function  ( ) {
  var title = $(this).parent().parent().find(".title-header-book").html();
  var url =   $(this).attr("url");
  url = unescape(atob(url));
  var idforhelpvalueyrl =  getID ();
  ////console.log(url)
  var uniqueid =  $(this).parent().parent().attr("uniqueid");
  var shared =  $(this).parent().parent().attr("shared");
  var blank =  $(this).parent().parent().attr("blank");
  //console.log(blank)
  var str_check = '';
  if( shared == "true" ){
    str_check = "checked";
  }//end if
  var ouvrir_str_check = '';
  if( blank == "true" ){
    ouvrir_str_check = "checked";
  }//end if ouvrir_str_check
  if( !url ){
    url = "";
  }
  $("body").append(`<div class="modal is-activ is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head" style="height:30px;">
      <p class="modal-card-title" style="font-size:16px;">audio:</p>
      <button class="delete" aria-label="close" onclick="$(this).parent().parent().parent().removeClass('is-active');"></button>
    </header>
    <section class="modal-card-body" style="position:relative;">
     <div class="field">
      <label class="label" style="font-size: 14px;">URL</label>
      <div class="control  ">
        <input class="input-audio-url input is-" type="text" placeholder=" " value="" id="`+idforhelpvalueyrl+`" >
      </div>
      <p class="help is-danger help-input-name-student" style="display:none;">....</p>
    </div>
     <div class="field">
      <label class="label"  style="font-size: 14px;">Titre</label>
      <div class="control ">
        <input class="input-audio-titre input is-" type="text" placeholder=" " value="`+title+`">
      </div>
      <p class="help is-danger help-input-titre" style="display:none;">....</p>
    </div>

    <label style="text-align: ;   font-size: 14px;" class="label is-">
      <input `+str_check+` style="transform: translateY(4px);zoom: 2;" class="checkbox partage_public " type="checkbox"> Partagé avec tout le monde. 
    </label>

  


</section>  <!-- section ... -->
    <footer class="modal-card-foot" uniqueid = "`+uniqueid+`"  >
      <button  style="position:absolute;top:10px;right: 139px;" class="button is-light   btn-modal-delete-audio"  >Supprimer</button>
      <button  style="position:absolute;top:10px;right:10px;" class="button is-success btn-modal-save-audio" >Enregistrer</button>
      <br> 
       <div class="loaderd" style="display:none;position: absolute;top: 0;left: 0;height: 100%;background: white;width: 100%;">
          <button class="button is-warning is-loading" style="    width: 100%;background-color: transparent;margin-top: 20px;">Loading</button>
        </div>
    </footer>
  </div>
</div>`);

$("#"+idforhelpvalueyrl).val(url);

})// click touchstart...

$(document).on("click touchstart",".anchor-audio,.ITMRSanchor-audio",function  (argument) {


var id =  getID ();
var title = $(this).attr("title");
var w = $(this).attr("w");
var h = $(this).attr("h");
var url = $(this).attr("url");
var shared = $(this).attr("shared");
var blank = $(this).attr("blank");
var iframe = `<iframe style="background:white;" src="" 
title="" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 allowfullscreen></iframe>`;
if( unescape(atob(url)).includes("youtube")  ){
iframe = unescape(atob(url));
}


 $("body").append(`
<div blank = "`+blank+`" id="`+id+`" shared ="`+shared+`" uniqueid 
= "`+$(this).attr("uniqueid")+`"  class="audio-book-reader"
 style="position: absolute;height:`+h+`%;width:`+w+`%;">
<div class="header-audio-book-reader ">
    <p class="title-header-book">`+title+`</p>
    <div class="close-audio-book-reader" style="" onclick="$(this).parent().parent().remove();">
     <svg style="transform: translate(-7px, 2px);" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>  
    </div>
    <div  url="`+url+`" class="edit-audio-book-reader" style="display:non;" >
     <svg style="transform: translate(-7px, -1px);zoom:0.8;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"></path></svg>   
    </div>
    <div class="delete-audio-book-reader" style="display:none;" >
      <svg  style="transform: translate(-7px, -1px);zoom:0.8;"xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
    </div>
</div> 
<audio style="height: 45px;" controls="" >
  <source  src="`+unescape(atob(url))+`" type="audio/mp4">
      Your browser does not support the audio tag.
</audio>
</div><!--End detail-watch-audio--> `);

  $("#"+id).attr("ww",w);
  $("#"+id).attr("hh",h);
  $( "#"+id ).draggable({
     handle: ".header-audio-book-reader",
      start:function  (ui) {
              if( !$(this).hasClass("mmargin") ){
            $(this).addClass("mmargin");
            $(this).css("transform","none");
            $(this).css("margin-left",(($( "#"+id ).offset().left / $(document).width()) * 100) +"%");
            //$( "#"+id ).css("left",$( "#"+id ).offset().left+'px');
          }//end start
      },
     stop:function  (ui) {
      $(this).css("width",$(this).attr("ww")+"%" );
      $(this).css("height",$(this).attr("hh")+"%" );
     }
  }).resizable();
  $( "#"+id ).css("position",'absolute');

$("#"+id).find("iframe").attr("src",   unescape(atob(url))  );

//$( "#"+id ).css("left",$(this).offset().left+'px');
//watchVideo ( id )
 })// anchor-audio...




function saveElmEnrichi (obj) {
  obj = JSON.stringify(obj);
  return new Promise( async resolve => {
    fetch('/insertRowDB?obj='+obj)
    .then((response) => {
      //resolve(response);
      return response.json();
    })
    .then((myJson) => {
      resolve(myJson);
    }).catch((error) => {
      ////console.error('Error:', error);
      resolve("error");
    });
  })  
}// saveElmEnrichi
function percentwidth(elem){
    var pa= elem.offsetParent || elem;
    return ((elem.offsetWidth/pa.offsetWidth)*100).toFixed(2)+'%';
}



function removeRowDB (obj) {
   obj = JSON.stringify(obj);

  return new Promise( async resolve => {
    fetch('/removeRowDB?obj='+obj)
    .then((response) => {
      //resolve(response);
      return response.json();
    })
    .then((myJson) => {
      resolve(myJson);
    }).catch((error) => {
      ////console.error('Error:', error);
      resolve("error");
    });
  })  
}// saveElmEnrichi









 


$(document).on("click touchstart",".btn-modal-delete-yt",async function  ( ) {
  $(this).next().next().show();
  var uniqueid = $(this).parent().attr("uniqueid");
  //console.log( uniqueid );
  $(this).parent().parent().parent().remove();
  $("[uniqueid="+uniqueid+"]").remove();
  $("#"+uniqueid).remove();
  /*
  $(this).parent().parent().closest(".modal").remove();
  */
  //console.log("delete from server!");

var s = await removeRowDB({id:uniqueid});
//console.log(s);


}) // click touchstart...




$(document).on("click touchstart",".btn-modal-save-yt", async function  (argument) {
 
var uniqueId = $(this).parent().attr("uniqueid");
var type_elm_enrichi = "yt";
var url = $(this).parent().parent().find(".input-yt-url").val();
url = btoa(url);
////console.log(url);
var titre = $(this).parent().parent().find(".input-yt-titre").val();
titre = btoa(titre);
var top = $("#"+uniqueId).attr("top_").substring(0,10);
var left = $("#"+uniqueId).attr("left_").substring(0,10);
var page =  $("#"+uniqueId).attr("page");
var active = $(this).parent().parent().find(".partage_public").is(":checked");
  
var w = ((  $(".yt-book-reader[uniqueid='"+uniqueId+"']").width()  / $(document).width()) * 100 ).toFixed(2);
var h = (( $(".yt-book-reader[uniqueid='"+uniqueId+"']").height()   / $(document).height()) * 100 ).toFixed(2);

var s = await saveElmEnrichi({
                                id:uniqueId,
                                type:type_elm_enrichi,
                                data:url,
                                titre:titre,
                                top:top,
                                left:left,
                                page:page,
                                active:active,
                                w:w,
                                h:h,
                              });
////console.log(s)
////console.log("Save to server!")
$(this).next().next().show();

if( s != 'error' ){

 var uniqueid = $(this).parent().attr("uniqueid");
  ////console.log( uniqueid );
  $(this).parent().parent().parent().remove();
  $(".yt-book-reader[uniqueid="+uniqueid+"]").remove();

  //console.log(active);
     $("#"+uniqueid).attr("title", atob(titre) );
     $("#"+uniqueid).attr("url",url);
     $("#"+uniqueid).attr("w",w);
     $("#"+uniqueid).attr("h",h); 
     $("#"+uniqueid).attr("shared",active);

  if( active == true){

     $("#"+uniqueid).css("background","#ff6600");
  }else{
         $("#"+uniqueid).css("background","#b4b4b4");

  }
 

}//end error
////console.log(s);

}) // click touchstart...



$(document).on("click touchstart",".edit-yt-book-reader",function  ( ) {
  var title = $(this).parent().parent().find(".title-header-book").html();
  var url =   $(this).attr("url");
  url = atob(url);
var idforhelpvalueyrl =  getID ();

  ////console.log(url)

  var uniqueid =  $(this).parent().parent().attr("uniqueid");
  var shared =  $(this).parent().parent().attr("shared");
  var str_check = '';
  if( shared == "true" ){
    str_check = "checked";
  }//end if
  if( !url ){
    url = "";
  }
  $("body").append(`<div class="modal is-activ is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head" style="height:30px;">
      <p class="modal-card-title" style="font-size:16px;">Information video youtube</p>
      <button class="delete" aria-label="close" onclick="$(this).parent().parent().parent().removeClass('is-active');"></button>
    </header>
    <section class="modal-card-body" style="position:relative;">
     <div class="field">
      <label class="label" style="font-size: 14px;">Code integration youtube</label>
      <div class="control  ">
        <input class="input-yt-url input is-" type="text" placeholder=" " value="" id="`+idforhelpvalueyrl+`" >
      </div>
      <p class="help is-danger help-input-name-student" style="display:none;">....</p>
    </div>
     <div class="field">
      <label class="label"  style="font-size: 14px;">Titre</label>
      <div class="control ">
        <input class="input-yt-titre input is-" type="text" placeholder=" " value="`+title+`">
      </div>
      <p class="help is-danger help-input-titre" style="display:none;">....</p>
    </div>
    <label style="text-align: ;   font-size: 14px;" class="label is-">
      <input `+str_check+` style="transform: translateY(4px);zoom: 2;" class="checkbox partage_public " type="checkbox"> Partagé avec tout le monde. 
    </label>
</section>  <!-- section ... -->
    <footer class="modal-card-foot" uniqueid = "`+uniqueid+`"  >
      <button  style="position:absolute;top:10px;right: 139px;" class="button is-light   btn-modal-delete-yt"  >Supprimer</button>
      <button  style="position:absolute;top:10px;right:10px;" class="button is-success btn-modal-save-yt" >Enregistrer</button>
      <br> 
       <div class="loaderd" style="display:none;position: absolute;top: 0;left: 0;height: 100%;background: white;width: 100%;">
          <button class="button is-warning is-loading" style="    width: 100%;background-color: transparent;margin-top: 20px;">Loading</button>
        </div>
    </footer>
  </div>
</div>`);

$("#"+idforhelpvalueyrl).val(url);

})// click touchstart...

$(document).on("click touchstart",".anchor-yt,.ITMRSanchor-yt",function  (argument) {
var id =  getID ();
var title = $(this).attr("title");
var w = $(this).attr("w");
var h = $(this).attr("h");
var url = $(this).attr("url");
var shared = $(this).attr("shared");
var iframe = `<div style="width:560px;height:315px;"></div>`;
//console.log(url);
if( atob(url).includes("youtube")  ){

iframe = atob(url);
}

 $("body").append(`
<div  id="`+id+`" shared ="`+shared+`" uniqueid 
= "`+$(this).attr("uniqueid")+`"  class="yt-book-reader" 
style="position: absolute;height:`+h+`%;width:`+w+`%;">
<div class="header-yt-book-reader ">
    <p class="title-header-book">`+title+`</p>
    <div class="close-yt-book-reader" style="" onclick="$(this).parent().parent().remove();">
     <svg style="transform: translate(-7px, 2px);" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>  
    </div>
    <div  url="`+url+`" class="edit-yt-book-reader" style="display:non;" >
     <svg style="transform: translate(-7px, -1px);zoom:0.8;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"></path></svg>   
    </div>
    <div class="delete-yt-book-reader" style="display:none;" >
      <svg  style="transform: translate(-7px, -1px);zoom:0.8;"xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
    </div>
</div> 
`+iframe+`
</div><!--End detail-watch-yt--> `);

  $("#"+id).attr("ww",w);
  $("#"+id).attr("hh",h);

  $( "#"+id ).draggable({
     handle: ".header-yt-book-reader",
      start:function  (ui) { 
        if( !$(this).hasClass("mmargin") ){
            $(this).addClass("mmargin");
            $(this).css("transform","none");
            $(this).css("margin-left",(($( "#"+id ).offset().left / $(document).width()) * 100) +"%");
            //$( "#"+id ).css("left",$( "#"+id ).offset().left+'px');
          }//end start
      },
     stop:function  (ui) {
$(this).css("width",$(this).attr("ww")+"%" );
      $(this).css("height",$(this).attr("hh")+"%" );
     }
  }).resizable();
  $( "#"+id ).css("position",'absolute');
//$( "#"+id ).css("left",$(this).offset().left+'px');
//watchVideo ( id )
 })// anchor-yt...




function saveElmEnrichi (obj) {
  obj = JSON.stringify(obj);
  return new Promise( async resolve => {
    fetch('/insertRowDB?obj='+obj)
    .then((response) => {
      //resolve(response);
      return response.json();
    })
    .then((myJson) => {
      resolve(myJson);
    }).catch((error) => {
      ////console.error('Error:', error);
      resolve("error");
    });
  })  
}// saveElmEnrichi
function percentwidth(elem){
    var pa= elem.offsetParent || elem;
    return ((elem.offsetWidth/pa.offsetWidth)*100).toFixed(2)+'%';
}



function removeRowDB (obj) {
   obj = JSON.stringify(obj);

  return new Promise( async resolve => {
    fetch('/removeRowDB?obj='+obj)
    .then((response) => {
      //resolve(response);
      return response.json();
    })
    .then((myJson) => {
      resolve(myJson);
    }).catch((error) => {
      ////console.error('Error:', error);
      resolve("error");
    });
  })  
}// saveElmEnrichi










$(document).on("click touchstart",".btn-modal-delete-app",async function  ( ) {
  $(this).next().next().show();
  var uniqueid = $(this).parent().attr("uniqueid");
  //console.log( uniqueid );
  $(this).parent().parent().parent().remove();
  $("[uniqueid="+uniqueid+"]").remove();
  $("#"+uniqueid).remove();
  /*
  $(this).parent().parent().closest(".modal").remove();
  */
  //console.log("delete from server!");

var s = await removeRowDB({id:uniqueid});
//console.log(s);


}) // click touchstart...




$(document).on("click touchstart",".btn-modal-save-app", async function  (argument) {
 
var uniqueId = $(this).parent().attr("uniqueid");
var type_elm_enrichi = "app";
var url = $(this).parent().parent().find(".input-app-url").val();
url = btoa(url);
////console.log(url);
var titre = $(this).parent().parent().find(".input-app-titre").val();
titre = btoa(titre);
var top = $("#"+uniqueId).attr("top_").substring(0,10);
var left = $("#"+uniqueId).attr("left_").substring(0,10);
var page =  $("#"+uniqueId).attr("page");
var active = $(this).parent().parent().find(".partage_public").is(":checked");
var blank = $(this).parent().parent().find(".blank").is(":checked");
//console.log(blank)
  
var w = ((  $(".app-book-reader[uniqueid='"+uniqueId+"']").width()  / $(document).width()) * 100 ).toFixed(2);
var h = (( $(".app-book-reader[uniqueid='"+uniqueId+"']").height()   / $(document).height()) * 100 ).toFixed(2);

var s = await saveElmEnrichi({
                                id:uniqueId,
                                type:type_elm_enrichi,
                                data:url,
                                titre:titre,
                                top:top,
                                left:left,
                                page:page,
                                active:active,
                                w:w,
                                h:h,
                                blank : blank
                              });
////console.log(s)
////console.log("Save to server!")
$(this).next().next().show();

if( s != 'error' ){

 var uniqueid = $(this).parent().attr("uniqueid");
  ////console.log( uniqueid );
  $(this).parent().parent().parent().remove();
  $(".app-book-reader[uniqueid="+uniqueid+"]").remove();

  //console.log(active);
     $("#"+uniqueid).attr("title", atob(titre) );
     //$("#"+uniqueid).attr("title", "dddddddddd" );
     //console.log(  $("#"+uniqueid) );
     $("#"+uniqueid).attr("url",url);
     $("#"+uniqueid).attr("w",w);
     $("#"+uniqueid).attr("h",h); 

     $("#"+uniqueid).attr("blank",blank);
     $("#"+uniqueid).attr("shared",active);

  if( active == true){
     $("#"+uniqueid).css("background","#ff6600");
  }else{
         $("#"+uniqueid).css("background","#b4b4b4");

  }
 
 //console.log($("#"+uniqueid))
}//end error
else{
  alert("Erreur de sauvegarde!")
   $(this).parent().parent().parent().remove();
  $(".app-book-reader[uniqueid="+uniqueid+"]").remove();
}
////console.log(s);

}) // click touchstart...



$(document).on("click touchstart",".edit-app-book-reader",function  ( ) {
  var title = $(this).parent().parent().find(".title-header-book").html();
  var url =   $(this).attr("url");
  url = atob(url);
var idforhelpvalueyrl =  getID ();

  ////console.log(url)

  var uniqueid =  $(this).parent().parent().attr("uniqueid");
  var shared =  $(this).parent().parent().attr("shared");
  var blank =  $(this).parent().parent().attr("blank");
  //console.log(blank)
  var str_check = '';
  if( shared == "true" ){
    str_check = "checked";
  }//end if
var ouvrir_str_check = '';
  if( blank == "true" ){
    ouvrir_str_check = "checked";
  }//end if ouvrir_str_check



  if( !url ){
    url = "";
  }
  $("body").append(`<div class="modal is-activ is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head" style="height:30px;">
      <p class="modal-card-title" style="font-size:16px;">Information applet</p>
      <button class="delete" aria-label="close" onclick="$(this).parent().parent().parent().removeClass('is-active');"></button>
    </header>
    <section class="modal-card-body" style="position:relative;">
     <div class="field">
      <label class="label" style="font-size: 14px;">URL</label>
      <div class="control  ">
        <input class="input-app-url input is-" type="text" placeholder=" " value="" id="`+idforhelpvalueyrl+`" >
      </div>
      <p class="help is-danger help-input-name-student" style="display:none;">....</p>
    </div>
     <div class="field">
      <label class="label"  style="font-size: 14px;">Titre</label>
      <div class="control ">
        <input class="input-app-titre input is-" type="text" placeholder=" " value="`+title+`">
      </div>
      <p class="help is-danger help-input-titre" style="display:none;">....</p>
    </div>

    <label style="text-align: ;   font-size: 14px;" class="label is-">
      <input `+str_check+` style="transform: translateY(4px);zoom: 2;" class="checkbox partage_public " type="checkbox"> Partagé avec tout le monde. 
    </label>

    <label style="text-align: ;   font-size: 14px;" class="label is-">
      <input `+ouvrir_str_check+` style="transform: translateY(4px);zoom: 2;" class="checkbox blank " type="checkbox"> Ouvrir nouvelle page. 
    </label>


</section>  <!-- section ... -->
    <footer class="modal-card-foot" uniqueid = "`+uniqueid+`"  >
      <button  style="position:absolute;top:10px;right: 139px;" class="button is-light   btn-modal-delete-app"  >Supprimer</button>
      <button  style="position:absolute;top:10px;right:10px;" class="button is-success btn-modal-save-app" >Enregistrer</button>
      <br> 
       <div class="loaderd" style="display:none;position: absolute;top: 0;left: 0;height: 100%;background: white;width: 100%;">
          <button class="button is-warning is-loading" style="    width: 100%;background-color: transparent;margin-top: 20px;">Loading</button>
        </div>
    </footer>
  </div>
</div>`);

$("#"+idforhelpvalueyrl).val(url);

})// click touchstart...

$(document).on("click touchstart",".anchor-app,.ITMRSanchor-app",function  (e) {
  e.stopPropagation();
  e.preventDefault();
var id =  getID ();
var title = $(this).attr("title");
//console.log( $(this) )
var w = $(this).attr("w");
var h = $(this).attr("h");
var url = $(this).attr("url");
var shared = $(this).attr("shared");
var blank = $(this).attr("blank");


var iframe = `<iframe style="background:white;" src="" 
title="" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 allowfullscreen></iframe>`;
////console.log(url);
if( atob(url).includes("youtube")  ){
iframe = atob(url);
}


 $("body").append(`
<div blank = "`+blank+`" id="`+id+`" shared ="`+shared+`" uniqueid 
= "`+$(this).attr("uniqueid")+`"  class="app-book-reader"
 style="position: absolute;height:`+h+`%;width:`+w+`%;">
<div class="header-app-book-reader ">
    <p class="title-header-book">`+title+`</p>
    <div class="close-app-book-reader" style="" onclick="$(this).parent().parent().remove();">
     <svg style="transform: translate(-7px, 2px);" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>  
    </div>
    <div  url="`+url+`" class="edit-app-book-reader" style="display:non;" >
     <svg style="transform: translate(-7px, -1px);zoom:0.8;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"></path></svg>   
    </div>
    <div class="delete-app-book-reader" style="display:none;" >
      <svg  style="transform: translate(-7px, -1px);zoom:0.8;"xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
    </div>
</div> 
`+iframe+`
</div><!--End detail-watch-app--> `);
  $( "#"+id ).draggable({
     handle: ".header-app-book-reader",
      start:function  (ui) {
            $(this).attr("ww",$(this).width());
            $(this).attr("hh",$(this).height());
        if( !$(this).hasClass("mmargin") ){
            $(this).addClass("mmargin");
            $(this).css("transform","none");
            $(this).css("margin-left",(($( "#"+id ).offset().left / $(document).width()) * 100) +"%");
            //$( "#"+id ).css("left",$( "#"+id ).offset().left+'px');
          }//end start
      },
     stop:function  (ui) {
      $(this).css("width",$(this).attr("ww")+"px" );
      $(this).css("height",$(this).attr("hh")+"px" );
     }
  }).resizable();
  $( "#"+id ).css("position",'absolute');

$("#"+id).find("iframe").attr("src",   atob(url)  );

//$( "#"+id ).css("left",$(this).offset().left+'px');
//watchVideo ( id )
 })// anchor-app...




function saveElmEnrichi (obj) {
  obj = JSON.stringify(obj);
  return new Promise( async resolve => {
    fetch('/insertRowDB?obj='+obj)
    .then((response) => {
      //resolve(response);
      return response.json();
    })
    .then((myJson) => {
      resolve(myJson);
    }).catch((error) => {
      ////console.error('Error:', error);
      resolve("error");
    });
  })  
}// saveElmEnrichi
function percentwidth(elem){
    var pa= elem.offsetParent || elem;
    return ((elem.offsetWidth/pa.offsetWidth)*100).toFixed(2)+'%';
}



function removeRowDB (obj) {
   obj = JSON.stringify(obj);

  return new Promise( async resolve => {
    fetch('/removeRowDB?obj='+obj)
    .then((response) => {
      //resolve(response);
      return response.json();
    })
    .then((myJson) => {
      resolve(myJson);
    }).catch((error) => {
      ////console.error('Error:', error);
      resolve("error");
    });
  })  
}// saveElmEnrichi















$(document).on("click touchstart",".btn-modal-delete-link-page",async function  ( ) {
  $(this).next().next().show();
  var uniqueid = $(this).parent().attr("uniqueid");
  //console.log( uniqueid );
  $(this).parent().parent().parent().remove();
  $("[uniqueid="+uniqueid+"]").remove();
  $("#"+uniqueid).remove();
  /*
  $(this).parent().parent().closest(".modal").remove();
  */
  //console.log("delete from server!");

var s = await removeRowDB({id:uniqueid});
//console.log(s);


}) // click touchstart...




$(document).on("click touchstart",".btn-modal-save-link-page", async function  (argument) {
 
var uniqueId = $(this).parent().attr("uniqueid");
var type_elm_enrichi = "link-page";
var url = $(this).parent().parent().find(".input-link-page-url").val();
 ////console.log(url);
var titre = "Aller a la page "+url;
 var top = $("#"+uniqueId).attr("top_").substring(0,10);
var left = $("#"+uniqueId).attr("left_").substring(0,10);
var page =  $("#"+uniqueId).attr("page");
var active = $(this).parent().parent().find(".partage_public").is(":checked");
 
  
var w = ((  $(".link-page-book-reader[uniqueid='"+uniqueId+"']").width()  / $(document).width()) * 100 ).toFixed(2);
var h = (( $(".link-page-book-reader[uniqueid='"+uniqueId+"']").height()   / $(document).height()) * 100 ).toFixed(2);

var s = await saveElmEnrichi({
                                id:uniqueId,
                                type:type_elm_enrichi,
                                data:url,
                                titre: btoa(titre) ,
                                top:top,
                                left:left,
                                page:page,
                                active:active,
                                w:w,
                                h:h,
                               });
////console.log(s)
////console.log("Save to server!")
$(this).next().next().show();

if( s != 'error' ){

 var uniqueid = $(this).parent().attr("uniqueid");
  ////console.log( uniqueid );
  $(this).parent().parent().parent().remove();
  $(".link-page-book-reader[uniqueid="+uniqueid+"]").remove();

  //console.log(active);
     $("#"+uniqueid).attr("title", titre );
     //$("#"+uniqueid).attr("title", "dddddddddd" );
     //console.log(  $("#"+uniqueid) );
     $("#"+uniqueid).attr("url",url);
     $("#"+uniqueid).attr("w",w);
     $("#"+uniqueid).attr("h",h); 

      $("#"+uniqueid).attr("shared",active);

  if( active == true){
     $("#"+uniqueid).css("background","#ff6600");
  }else{
         $("#"+uniqueid).css("background","#b4b4b4");

  }
 
 }//end error
else{
  alert("Erreur de sauvegarde!")
   $(this).parent().parent().parent().remove();
  $(".link-page-book-reader[uniqueid="+uniqueid+"]").remove();
}
////console.log(s);

}) // click touchstart...


$(document).on("click touchstart",".anchor-link-page,.ITMRSanchor-link-page",async function  (argument) {



var userinfo = await getUserInfo();
 

 var ad = true; 
if( userinfo == 'error' ){
         ad = false
}else{
    //alert("not Invited user!");
    var usertype = userinfo.name.type;
    //////console.log( usertype );
    if( usertype != "admin"){
       ad = false
    }//
    ////console.log("ggg")
}//user not connected
    ////console.log(ad)


var uniqueid =  $(this).attr("id");
var id =  getID ();
var title = $(this).attr("title");
var w = $(this).attr("w");
var h = $(this).attr("h");
var url = $(this).attr("url");
var shared = $(this).attr("shared");
var blank = $(this).attr("blank");
//console.log( $(this) )
 var str_check = '';
  if( shared == "true" ){
    str_check = "checked";
  }//end if


if(!ad){
$('.book').turn('page', url );
return;
}



  $("body").append(`<div class="modal is-activ is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head" style="height:30px;">
      <p class="modal-card-title" style="font-size:16px;">Aller à la page:</p>
      <button class="delete" aria-label="close" onclick="$(this).parent().parent().parent().removeClass('is-active');"></button>
    </header>
    <section class="modal-card-body" style="position:relative;">
     <div class="field">
      <label class="label" style="font-size: 14px;">Numero page</label>
      <div class="control  ">
        <input class="input-link-page-url input is-" type="number" placeholder=" " value="`+url+`"  >
      </div>
      <p class="help is-danger help-input-name-student" style="display:none;">....</p>
    </div>
 
    <label style="text-align: ;   font-size: 14px;" class="label is-">
      <input `+str_check+` style="transform: translateY(4px);zoom: 2;" class="checkbox partage_public " type="checkbox"> Partagé avec tout le monde. 
    </label>
</section>  <!-- section ... -->
    <footer class="modal-card-foot" uniqueid = "`+uniqueid+`"  >
      <button  style="position:absolute;top:10px;right: 139px;" class="button is-light   btn-modal-delete-link-page"  >Supprimer</button>
      <button  style="position:absolute;top:10px;right:10px;" class="button is-success btn-modal-save-link-page" >Enregistrer</button>
      <br> 
       <div class="loaderd" style="display:none;position: absolute;top: 0;left: 0;height: 100%;background: white;width: 100%;">
          <button class="button is-warning is-loading" style="    width: 100%;background-color: transparent;margin-top: 20px;">Loading</button>
        </div>
    </footer>
  </div>
</div>`);



 })// anchor-link-page...




function saveElmEnrichi (obj) {
  obj = JSON.stringify(obj);
  return new Promise( async resolve => {
    fetch('/insertRowDB?obj='+obj)
    .then((response) => {
      //resolve(response);
      return response.json();
    })
    .then((myJson) => {
      resolve(myJson);
    }).catch((error) => {
      ////console.error('Error:', error);
      resolve("error");
    });
  })  
}// saveElmEnrichi
function percentwidth(elem){
    var pa= elem.offsetParent || elem;
    return ((elem.offsetWidth/pa.offsetWidth)*100).toFixed(2)+'%';
}



function removeRowDB (obj) {
   obj = JSON.stringify(obj);

  return new Promise( async resolve => {
    fetch('/removeRowDB?obj='+obj)
    .then((response) => {
      //resolve(response);
      return response.json();
    })
    .then((myJson) => {
      resolve(myJson);
    }).catch((error) => {
      ////console.error('Error:', error);
      resolve("error");
    });
  })  
}// saveElmEnrichi













$(document).on("click touchstart",".btn-modal-delete-link",async function  ( ) {
  $(this).next().next().show();
  var uniqueid = $(this).parent().attr("uniqueid");
  //console.log( uniqueid );
  $(this).parent().parent().parent().remove();
  $("[uniqueid="+uniqueid+"]").remove();
  $("#"+uniqueid).remove();
  /*
  $(this).parent().parent().closest(".modal").remove();
  */
  //console.log("delete from server!");

var s = await removeRowDB({id:uniqueid});
//console.log(s);


}) // click touchstart...




$(document).on("click touchstart",".btn-modal-save-link", async function  (argument) {
 
var uniqueId = $(this).parent().attr("uniqueid");
var type_elm_enrichi = "link";
var url = $(this).parent().parent().find(".input-link-url").val();
 ////console.log(url);
var titre = "Aller a la page "+url;
 var top = $("#"+uniqueId).attr("top_").substring(0,10);
var left = $("#"+uniqueId).attr("left_").substring(0,10);
var page =  $("#"+uniqueId).attr("page");
var active = $(this).parent().parent().find(".partage_public").is(":checked");
 
  
var w = ((  $(".link-book-reader[uniqueid='"+uniqueId+"']").width()  / $(document).width()) * 100 ).toFixed(2);
var h = (( $(".link-book-reader[uniqueid='"+uniqueId+"']").height()   / $(document).height()) * 100 ).toFixed(2);

var s = await saveElmEnrichi({
                                id:uniqueId,
                                type:type_elm_enrichi,
                                data:url,
                                titre: btoa(titre) ,
                                top:top,
                                left:left,
                                page:page,
                                active:active,
                                w:w,
                                h:h,
                               });
////console.log(s)
////console.log("Save to server!")
$(this).next().next().show();

if( s != 'error' ){

 var uniqueid = $(this).parent().attr("uniqueid");
  ////console.log( uniqueid );
  $(this).parent().parent().parent().remove();
  $(".link-book-reader[uniqueid="+uniqueid+"]").remove();

  //console.log(active);
     $("#"+uniqueid).attr("title", titre );
     //$("#"+uniqueid).attr("title", "dddddddddd" );
     //console.log(  $("#"+uniqueid) );
     $("#"+uniqueid).attr("url",url);
     $("#"+uniqueid).attr("w",w);
     $("#"+uniqueid).attr("h",h); 

      $("#"+uniqueid).attr("shared",active);

  if( active == true){
     $("#"+uniqueid).css("background","#ff6600");
  }else{
         $("#"+uniqueid).css("background","#b4b4b4");

  }
 
 }//end error
else{
  alert("Erreur de sauvegarde!")
   $(this).parent().parent().parent().remove();
  $(".link-book-reader[uniqueid="+uniqueid+"]").remove();
}
////console.log(s);

}) // click touchstart...


$(document).on("click touchstart",".anchor-link,.ITMRSanchor-link",async function  (argument) {

var uniqueid =  $(this).attr("id");
var id =  getID ();
var title = $(this).attr("title");
var w = $(this).attr("w");
var h = $(this).attr("h");
var url = $(this).attr("url");
var shared = $(this).attr("shared");
var blank = $(this).attr("blank");
//console.log( $(this) )
 var str_check = '';
  if( shared == "true" ){
    str_check = "checked";
  }//end if



var userinfo = await getUserInfo();
 

 var ad = true; 
if( userinfo == 'error' ){
         ad = false
}else{
    //alert("not Invited user!");
    var usertype = userinfo.name.type;
    //////console.log( usertype );
    if( usertype != "admin"){
       ad = false
    }//
    ////console.log("ggg")
}//user not connected
    ////console.log(ad)


if(!ad){
  window.open(url)
 return;
}


  $("body").append(`<div class="modal is-activ is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head" style="height:30px;">
      <p class="modal-card-title" style="font-size:16px;">Lien web:</p>
      <button class="delete" aria-label="close" onclick="$(this).parent().parent().parent().removeClass('is-active');"></button>
    </header>
    <section class="modal-card-body" style="position:relative;">
     <div class="field">
      <label class="label" style="font-size: 14px;">url</label>
      <div class="control  ">
        <input class="input-link-url input is-" type="text" placeholder=" " value="`+url+`"  >
      </div>
      <p class="help is-danger help-input-name-student" style="display:none;">....</p>
    </div>
 
    <label style="text-align: ;   font-size: 14px;" class="label is-">
      <input `+str_check+` style="transform: translateY(4px);zoom: 2;" class="checkbox partage_public " type="checkbox"> Partagé avec tout le monde. 
    </label>
</section>  <!-- section ... -->
    <footer class="modal-card-foot" uniqueid = "`+uniqueid+`"  >
      <button  style="position:absolute;top:10px;right: 139px;" class="button is-light   btn-modal-delete-link"  >Supprimer</button>
      <button  style="position:absolute;top:10px;right:10px;" class="button is-success btn-modal-save-link" >Enregistrer</button>
      <br> 
       <div class="loaderd" style="display:none;position: absolute;top: 0;left: 0;height: 100%;background: white;width: 100%;">
          <button class="button is-warning is-loading" style="    width: 100%;background-color: transparent;margin-top: 20px;">Loading</button>
        </div>
    </footer>
  </div>
</div>`);



 })// anchor-link...




function saveElmEnrichi (obj) {
  obj = JSON.stringify(obj);
  return new Promise( async resolve => {
    fetch('/insertRowDB?obj='+obj)
    .then((response) => {
      //resolve(response);
      return response.json();
    })
    .then((myJson) => {
      resolve(myJson);
    }).catch((error) => {
      ////console.error('Error:', error);
      resolve("error");
    });
  })  
}// saveElmEnrichi
function percentwidth(elem){
    var pa= elem.offsetParent || elem;
    return ((elem.offsetWidth/pa.offsetWidth)*100).toFixed(2)+'%';
}



function removeRowDB (obj) {
   obj = JSON.stringify(obj);

  return new Promise( async resolve => {
    fetch('/removeRowDB?obj='+obj)
    .then((response) => {
      //resolve(response);
      return response.json();
    })
    .then((myJson) => {
      resolve(myJson);
    }).catch((error) => {
      ////console.error('Error:', error);
      resolve("error");
    });
  })  
}// saveElmEnrichi









$(".header-btn-edit").show();

$(document).on("click touchstart",".close-login-iframe",function  ( e ) {
 
	$("#parent-iframe").hide();
	
})// click touchstart...

$(document).on("click touchstart",".app-icon-login",function  ( e ) {

	//console.log("fff")
	window.location.href='/logout'
	
})// click touchstart...
