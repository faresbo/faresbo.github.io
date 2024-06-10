

var iframe = "hello";

setInterval(function (params) {

    var rect = $(document).find("#PointercompassPencil")[0].getBoundingClientRect();
    var x = rect.right;
    var y = rect.top;
   var imp = "leftframe";
   var ofimp = 0;
    if( x <  $(document).find("#rightPane")[0].getBoundingClientRect().left){
      //console.log("1");
      imp = "leftframe";
    }else{
      imp = "rightframe";
    }
  //  console.log( imp );





    
}, 1000);



/*
$(document).ready(function() {
    const elements = document.getElementsByClassName("myframe");
    // Access the first element
    const firstElement = elements[0];
    // Loop through all elements
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      //console.log(element);
      element.contentWindow.childFunction();
      // Do something with the element
    }
});
*/








$(document).ready(function () {
var paper, DrawPathArray, DrawingBox;
var stroke = 2;

//initPaperRaphael();




$("#rule").hide();

setTimeout(function() {}, 1000);








$(document).on("click",".btn-ruler",function (params) {
    
    $(this).toggleClass("active");
    $("#rule").toggle();
    $("#rule").css("top","20%");
    $("#rule").css("left","20%");

})//end btn-ruler


$("#wrap-meniCompass").hide();



$(document).on("click",".btn-compass",function (params) {

    $(this).toggleClass("active");
    $("#wrap-meniCompass").toggle();

})//end btn-ruler







 
 


//initPaperRaphael();
function initPaperRaphael() {
    paper = Raphael($(".swiper-slide-active .paper")[0], $(".paper").width(), $(".paper").height());
    $(".swiper-slide-active .paper svg").css("position","fixed");
    $(".swiper-slide-active .paper svg").css("top","0");
    $(".swiper-slide-active .paper svg").css("left","0");
    $(".swiper-slide-active .paper svg").css("background","red");
    $(".swiper-slide-active .paper svg").css("width","100%");
    $(".swiper-slide-active .paper svg").css("height","100%");
    $(".swiper-slide-active .paperr svg").attr("width","");
    $(".swiper-slide-active .paper svg").attr("height","");
    paper.setViewBox(0,0,613,792,true);

    var combinedHTML = "";
    $(".swiper-slide-active .paper svg").each(function () {
        combinedHTML += $(this).html();
    });
    $(".swiper-slide-active .paper svg").not(':first').remove();
    $(".swiper-slide-active .paper svg").html(combinedHTML);
    
}//end initPaperRaphael()



$("#rule").rotatable({
        wheelRotate : false,
        handle:$("#handel-rotate-rule"),
        start: function( event, ui ) {
        $("#foo").css("pointer-events","none");

        },         
        rotate: function( event, ui ) {
        },         
        stop: function( event, ui ) {
        $("#foo").css("pointer-events","all");

        },
        //rotationCenterX: 50, //default in percent
        //rotationCenterY: 0    
});




var recoupLeft, recoupTop;
$('#rule').draggable({ 
    stack : ".toolGeo",    
    handel:"#handel-drag-rule",
    cancel:".nodrag",
    start: function (event, ui) {
        $("#foo").css("pointer-events","none");

        var left = parseInt($(this).css('left'),10);
        left = isNaN(left) ? 0 : left;
        var top = parseInt($(this).css('top'),10);
        top = isNaN(top) ? 0 : top;
        recoupLeft = left - ui.position.left;
        recoupTop = top - ui.position.top;
        $(this).attr("recoupLeft",recoupLeft);
        $(this).attr("recoupTop",recoupTop);
    },
    drag: function (event, ui) {
        ui.position.left += parseInt($(this).attr("recoupLeft"));
        ui.position.top += parseInt($(this).attr("recoupTop"));
    },
    stop : function  () {
      $(this).css("left",parseFloat($(this).css("left")) / ($(this).parent().width() / 100)+"%");  
      $(this).css("top",parseFloat($(this).css("top")) / ($(this).parent().height() / 100)+"%");      
      $(this).css("width",$('#rule').attr("orW"));  
      $(this).css("height","10%"); 
      $("#foo").css("pointer-events","all");
      
    } 
});



$("#slider-resize-rule").on('mousedown touchstart', function () {
    resetOriginRule();
});

$("#slider-origin").on('mouseup touchend', function () {
     updateOriginRule();
});


$("#slider-drawer,#slider-origin,#slider-resize-rule").on('mouseup touchend', function () {
    $('#rule').draggable("enable");   
});
$("#slider-drawer,#slider-origin,#slider-resize-rule").on('mousedown touchstart', function () {
    $('#rule').draggable("disable");   
});

$('#slider-drawer').on('input', function(e) {

    var valueOfInput = parseFloat(e.target.value);
    $('#helper-pointer-drawer').css("left",+valueOfInput+"%");
});




updateOriginRule();
$('#slider-origin').on('input', function(e) {
    var valueSR = $("#slider-resize-rule").val();
    $(this).val(Math.max( 1, $(this).val()));
    $(this).val(Math.min( valueSR-10, $(this).val()));
    var valueOfInput = parseFloat(e.target.value);
    //var percent = ((valueOfInput * 20.4) / 20.02);
    var pad = (valueOfInput * $("#box-pointer-origin").width())/100 ;
    $('#box-pointer-origin').css("left","calc("+valueOfInput+"% - "+pad+"px)");
});



$("#slider-resize-rule").val(50);
var percent = ((50 * 20.4) / 20.02);
    $('#rule').width((percent-((percent * 3)/100))+3 + '%');
    $("#handel-rotate-rule").css("right",Math.abs((((percent * 3)/100))-3)*3 +5+"%");
    $('#rule').attr("orW",(percent-((percent * 3)/100))+3+'%');


$('#slider-resize-rule').on('input', function(e) {
    $(this).val(Math.max( 30, $(this).val()));
    var valueOfInput = parseFloat(e.target.value);
    var percent = ((valueOfInput * 20.4) / 20.02);
    $('#rule').width((percent-((percent * 3)/100))+3 + '%');
    $("#handel-rotate-rule").css("right",Math.abs((((percent * 3)/100))-3)*3 +5+"%");
    $('#rule').attr("orW",(percent-((percent * 3)/100))+3+'%');
});



function updateOriginRule () {
    var pI = $("#helper-pointer-left")[0].getBoundingClientRect();
    pIX = pI.right;
    pIY = pI.top;
    var pP = $("#helper-pointer-origin")[0].getBoundingClientRect();
    pPX = pP.right;
    pPY = pP.top;
    var dist = Math.sqrt( Math.pow((pIX-pPX), 2) + Math.pow((pIY-pPY), 2) );
    var inioft = $("#rule").offset().top;
    var iniofl = $("#rule").offset().left;
    $("#rule").css("transform-origin",dist+"px 0% 0px");
    var newoft = $("#rule").offset().top;
    var newofl = $("#rule").offset().left;
    var distop  =inioft-newoft;
    var disleft =iniofl-newofl;
    $("#rule").css("top",parseFloat($("#rule").css("top"))+(distop)+"px");
    $("#rule").css("left",parseFloat($("#rule").css("left"))+(disleft)+"px");
    $("#rule").css("left",parseFloat($("#rule").css("left")) / ($("#rule").parent().width() / 100)+"%");  
    $("#rule").css("top",parseFloat($("#rule").css("top")) / ($("#rule").parent().height() / 100)+"%");     
}//end updtateOriginRule


function initSliderOrigin () {
    $("#slider-origin").val(1);
    var valueOfInput = parseFloat($("#slider-origin").val());
    var pad = (valueOfInput * $("#box-pointer-origin").width())/100 ;
    $('#box-pointer-origin').css("left","calc("+valueOfInput+"% - "+pad+"px)");
}//end initSliderOrigin ()

var todrawrule = 0;
$("#slider-drawer").on('mousedown touchstart', function () {
    DrawPathArray = new Array();
    todrawrule = 0;
});
var svg = document.getElementById('svgElement');

$('#slider-drawer').on('input', function(e) {
    var valueOfInput = parseFloat(e.target.value);
    var rect = $("#helper-pointer-drawer")[0].getBoundingClientRect();
    var x = rect.right;
    var y = rect.top;
    var strokeRule = 3; 
    
    if( todrawrule == 0 ){ 
    const newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    //newLine.setAttribute('id', 'hh');
    newLine.setAttribute('x1', ''+x);
    newLine.setAttribute('y1', ''+y);
    newLine.setAttribute('x2', ''+x);
    newLine.setAttribute('y2', ''+y);
    newLine.setAttribute('class', 'x');
    newLine.setAttribute('stroke', color);
    newLine.setAttribute('stroke-width', size);
    svg.appendChild(newLine);
    todrawrule = 1;
    }
    else{

        
        
const lastLine = svg.querySelector('line:last-of-type');
 lastLine.setAttribute('x2', x);
lastLine.setAttribute('y2', y);
        
 
    }


    


});












function generateUniqueId() {
    return 'id-' + Date.now() + '-' + Math.floor(Math.random() * 1000000);
}




































$('#slider-resize-compass').on('input', function(e) {
    var valueOfInput = parseFloat(e.target.value);
    $("#wrap-compass-dessin").css("transform","rotate("+(valueOfInput/2)+"deg)");
    $("#compassPencil").css("transform","rotate("+(-valueOfInput)+"deg)");
    $("#wrap-compass").css("transform","rotate("+(valueOfInput/2)+"deg)");
});

$('#slider-resize-compass').on("mouseup touchend", function(e) {
    var pI = $("#PI")[0].getBoundingClientRect();
    pIX = pI.right;
    pIY = pI.top;
    var pP = $("#PointercompassPencil")[0].getBoundingClientRect();
    pPX = pP.right;
    pPY = pP.top;
    var dist = Math.sqrt( Math.pow((pIX-pPX), 2) + Math.pow((pIY-pPY), 2) );
    $("#meniCompass").width(parseInt(dist / (zoomFactor/100)) );
    var valueOfInput = parseFloat(e.target.value);
    var objetTopleftper45 ={
    "0":{"top":-44,"left":22},
    "1":{"top":-47,"left":23},
    "2":{"top":-47,"left":23},
    "3":{"top":-47,"left":23},
    "4":{"top":-47,"left":24},
    "5":{"top":-47,"left":24},
    "6":{"top":-47,"left":24},
    "7":{"top":-47,"left":24},
    "8":{"top":-47,"left":24},
    "9":{"top":-49,"left":26},
    "10":{"top":-49,"left":26},
    "11":{"top":-49,"left":26},
    "12":{"top":-49,"left":28},
    "13":{"top":-49,"left":28},
    "14":{"top":-49,"left":28},
    "15":{"top":-49,"left":28},
    "16":{"top":-49,"left":28},
    "17":{"top":-49,"left":28},
    "18":{"top":-49,"left":28},
    "19":{"top":-49,"left":28},
    "20":{"top":-49,"left":28},
    "21":{"top":-49,"left":33},
    "22":{"top":-49,"left":33},
    "23":{"top":-49,"left":33},
    "24":{"top":-49,"left":33},
    "25":{"top":-49,"left":33},
    "26":{"top":-49,"left":33},
    "27":{"top":-49,"left":33},
    "28":{"top":-49,"left":33},
    "29":{"top":-49,"left":33},
    "30":{"top":-49,"left":33},
    "31":{"top":-49,"left":33},
    "32":{"top":-49,"left":33},
    "33":{"top":-49,"left":36},
    "34":{"top":-49,"left":36},
    "35":{"top":-49,"left":36},
    "36":{"top":-49,"left":36},
    "37":{"top":-49,"left":36},
    "38":{"top":-49,"left":39},
    "39":{"top":-49,"left":39},
    "40":{"top":-49,"left":39},
    "41":{"top":-49,"left":39},
    "42":{"top":-49,"left":39},
    "43":{"top":-49,"left":39},
    "44":{"top":-49,"left":39},
    "45":{"top":-51,"left":41},

    "46":{"top":-51,"left":41},
    "47":{"top":-51,"left":41},
    "48":{"top":-51,"left":41},
    "49":{"top":-51,"left":41},
    "50":{"top":-51,"left":41},
    "51":{"top":-51,"left":41},
    "52":{"top":-51,"left":41},
    "53":{"top":-51,"left":41},
    "54":{"top":-51,"left":41},
    "55":{"top":-51,"left":41},
    "56":{"top":-51,"left":41},
    "57":{"top":-51,"left":41},
    "58":{"top":-51,"left":41},
    "59":{"top":-51,"left":41},
    "60":{"top":-51,"left":41},

    "61":{"top":-51,"left":41},
    "62":{"top":-51,"left":41},
    "63":{"top":-51,"left":41},
    "64":{"top":-51,"left":41},
    "65":{"top":-51,"left":41},
    "66":{"top":-51,"left":41},
    "67":{"top":-51,"left":41},
    "68":{"top":-51,"left":41},
    "69":{"top":-51,"left":41},
    "70":{"top":-51,"left":41},

    "71":{"top":-51,"left":41},
    "72":{"top":-51,"left":41},
    "73":{"top":-51,"left":41},
    "74":{"top":-51,"left":41},
    "75":{"top":-51,"left":41},
    "76":{"top":-51,"left":41},
    "77":{"top":-51,"left":41},
    "78":{"top":-51,"left":41},
    "79":{"top":-51,"left":41},

    "80":{"top":-51,"left":41},
    "81":{"top":-51,"left":41},
    "82":{"top":-51,"left":41},
    "83":{"top":-51,"left":41},
    "84":{"top":-51,"left":41},

    "85":{"top":-48,"left":35},
    "86":{"top":-48,"left":35},
    "87":{"top":-48,"left":35},
    "88":{"top":-48,"left":35},
    "89":{"top":-48,"left":35},

    "90":{"top":-48,"left":35},
    "91":{"top":-48,"left":35},
    "92":{"top":-48,"left":35},
    "93":{"top":-48,"left":35},
    "94":{"top":-48,"left":35},
    "95":{"top":-48,"left":35},
    "96":{"top":-48,"left":35},
    "97":{"top":-48,"left":35},
    "98":{"top":-48,"left":35},
    "99":{"top":-48,"left":35},
    "100":{"top":-48,"left":35},
    "101":{"top":-48,"left":35},

    "102":{"top":-45,"left":32},
    "103":{"top":-45,"left":32},
    "104":{"top":-45,"left":32},
    "105":{"top":-45,"left":32},
    "106":{"top":-45,"left":32},

    "107":{"top":-43,"left":25},
    "108":{"top":-43,"left":25},
    "109":{"top":-43,"left":25},
    "110":{"top":-43,"left":25},
    "111":{"top":-43,"left":25},
    "112":{"top":-43,"left":25},
    "113":{"top":-43,"left":25},
    "114":{"top":-43,"left":25},
    "115":{"top":-43,"left":25},
    "116":{"top":-43,"left":25},
    "117":{"top":-43,"left":25},
    "118":{"top":-43,"left":25},

    "119":{"top":-41,"left":22},
    "120":{"top":-41,"left":22},
    "121":{"top":-41,"left":22},
    "122":{"top":-41,"left":22},
    "123":{"top":-41,"left":22},
    "124":{"top":-39,"left":18},
    "125":{"top":-39,"left":18},
    "126":{"top":-39,"left":18},
    "127":{"top":-42,"left":14},
    "128":{"top":-42,"left":14},
    "129":{"top":-42,"left":14},
    "130":{"top":-40,"left":11},
    "131":{"top":-40,"left":11},
    "132":{"top":-40,"left":11},
    "133":{"top":-40,"left":11},
    "133":{"top":-40,"left":11},
    "134":{"top":-40,"left":11},
    "135":{"top":-40,"left":11},
    "136":{"top":-37,"left":6},
    "137":{"top":-37,"left":6},
    "138":{"top":-37,"left":1},
    "139":{"top":-37,"left":1},
    "140":{"top":-35,"left":1},
    "141":{"top":-35,"left":1},
    "142":{"top":-35,"left":-5},
    "143":{"top":-35,"left":-5},
    "144":{"top":-35,"left":-5},
    "145":{"top":-35,"left":-5},
    "146":{"top":-35,"left":-12},
    "147":{"top":-35,"left":-12},
    "148":{"top":-35,"left":-12},
    "149":{"top":-35,"left":-12},
    "150":{"top":-31,"left":-12},
    "151":{"top":-31,"left":-14},
    "152":{"top":-31,"left":-14},
    "153":{"top":-31,"left":-14},
    "154":{"top":-31,"left":-18},
    "155":{"top":-31,"left":-18},
    "156":{"top":-31,"left":-18},
    "157":{"top":-31,"left":-21},
    "158":{"top":-31,"left":-21},
    "159":{"top":-29,"left":-25},
    "160":{"top":-29,"left":-25},
    "161":{"top":-29,"left":-25},
    "162":{"top":-27,"left":-30},
    "163":{"top":-27,"left":-30},
    "164":{"top":-27,"left":-33},
    "165":{"top":-27,"left":-33},
    "166":{"top":-27,"left":-38},
    "167":{"top":-27,"left":-38},
    "168":{"top":-27,"left":-38},
    "169":{"top":-27,"left":-38},
    "170":{"top":-26,"left":-42},
    "171":{"top":-26,"left":-42},
    "172":{"top":-26,"left":-42},
    "173":{"top":-24,"left":-48},
    "174":{"top":-24,"left":-48},
    "175":{"top":-24,"left":-52},
    "176":{"top":-24,"left":-52},
    "177":{"top":-22,"left":-56},
    "178":{"top":-22,"left":-56},
    "179":{"top":-22,"left":-56},
    "180":{"top":-21,"left":-60},
    }
    $("#slider-resize-compass").css("right","");
    $("#slider-resize-compass").css("left",objetTopleftper45[valueOfInput].left);
    $("#slider-resize-compass").css("top",objetTopleftper45[valueOfInput].top);
});




var recoupLeft, recoupTop;
$('#wrap-meniCompass').draggable({ 
    //stack : ".toolGeo", 
   // handel : ".handel-drag-compass",
    //cancel:".noDraggable",
    start: function (event, ui) {
        $("#foo").css("pointer-events","none");
        var left = parseInt($(this).css('left'),10);
        left = isNaN(left) ? 0 : left;
        var top = parseInt($(this).css('top'),10);
        top = isNaN(top) ? 0 : top;
        recoupLeft = left - ui.position.left;
        recoupTop = top - ui.position.top;
        $(this).attr("recoupLeft",recoupLeft );
        $(this).attr("recoupTop",recoupTop);
    },
    drag: function (event, ui) {
        ui.position.left += parseInt($(this).attr("recoupLeft"));
        ui.position.top += parseInt($(this).attr("recoupTop")); 
    },
    stop: function( event, ui ) {
      $('#wrap-meniCompass').css("width", "auto");
      $('#wrap-meniCompass').css("height", "auto");
      $(this).css("left",parseFloat($(this).css("left")) / ($(this).parent().width() / 100)+"%");  
      $(this).css("top",parseFloat($(this).css("top")) / ($(this).parent().height() / 100)+"%");  
      $("#foo").css("pointer-events","all");

    }

    });









var startX;
var startY;
var centreX;
var centreY;
var radiusC;
var arcSweep = 0;
var flagD = 0;
var angleStart,prevAngle,a,angleCurrent,ArcAngle,oldDirRot,oldDirRot;
var  difference;
var TargetId;
var line;
var startStaticsX;
var startStaticsY;
var countChangeAngle;
var last_Angle = [];
var hieghtOfCompass;
var comrect;
var  translatePathX,translatePathY,cY,cX;
$("#wrap-meniCompass").rotatable({
        handle:$(".HandelrotateComapss"),
        start: function( event, ui ) {
            $("#foo").css("pointer-events","none");

            $("body").addClass("drawmode");
            $("#ArrowSDirect").hide();
            $("#ArrowSInDirect").hide();
            countChangeAngle = 0;
            $("#wrap-meniCompass").attr("DirRot","no");
            var rectstartDraw = $("#PP")[0].getBoundingClientRect();

            startX = rectstartDraw.right;
            startY = rectstartDraw.top;
            var rectIb = $("#PI")[0].getBoundingClientRect();
            centreX = rectIb.right;
            centreY = rectIb.top;
            var rectDr = $("#PP")[0].getBoundingClientRect();
            DrawerX = rectDr.right;
            DrawerY = rectDr.top;
            cY = centreY   /// (zoomFactor/100) ////- $(".swiper-slide-active .paper").offset().top;
            cX = centreX /// (zoomFactor/100) //- $(".swiper-slide-active .paper").offset().left;
            translatePathX = cX - centreX;
            translatePathY = cY - centreY;
            radiusC = $("#meniCompass").width();
            $(this).attr("typeR",$(event.currentTarget).attr("typeR"));
            TargetId = uniqueid();
 
         /*    DrawPathArray = new Array();
            line =paper.path();
            line.attr({"stroke": "black","stroke-width": 2.5,"fill" : "none"});        
            line.node.id=TargetId;
            */
 
            const svgNS = "http://www.w3.org/2000/svg";

// Create a new path element
const newPath = document.createElementNS(svgNS, "path");

// Set the attributes for the new path element
newPath.setAttribute("style", "-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill: none; stroke: "+$(document).find(".btn-color.active div").css("background-color")+";");
newPath.setAttribute("d", "");
newPath.setAttribute("stroke-width", $(document).find(".btn-size.active .box-size").html());
newPath.setAttribute("id", TargetId);
newPath.setAttribute("class", "x");
newPath.setAttribute("transform", "");

// Append the new path element to the existing SVG element
$("#svgElement")[0].appendChild(newPath);

var rect = $(document).find("#PointercompassPencil")[0].getBoundingClientRect();
var x = rect.right;
var y = rect.top;
var imp = "leftframe";
var ofimp = 0;
if( x <  $(document).find("#rightPane")[0].getBoundingClientRect().left){
  //console.log("1");
  imp = "leftframe";
}else{
  imp = "rightframe";
}
newPath.setAttribute("id", TargetId+"child");

const iframe = document.getElementById(""+imp);
iframe.contentWindow.initDrawCompass( newPath );

 



        },         
        rotate: function( event, ui ) {
            if($(this).attr("typeR") == "d"){
           if ( ui.angle.start < 0 ) {
              ui.angle.start += (2 * Math.PI);
            }
             angleStart = Math.round( ui.angle.start * (180/Math.PI));
             prevAngle = $("#wrap-meniCompass").attr("prevangle");
            if ( prevAngle < 0 ) {
              prevAngle += (2 * Math.PI);
            }
             prevAngle = Math.round( prevAngle * (180/Math.PI));
           if ( ui.angle.current < 0 ) {
              ui.angle.current += (2 * Math.PI);
            }
            angleCurrent = Math.round( ui.angle.current * (180/Math.PI));
          if ( angleCurrent != prevAngle){
            countChangeAngle+=1;
          }
            var el = $("#wrap-meniCompass")[0];
            var st = window.getComputedStyle(el, null);
            var tr = st.getPropertyValue("-webkit-transform") ||
                     st.getPropertyValue("-moz-transform") ||
                     st.getPropertyValue("-ms-transform") ||
                     st.getPropertyValue("-o-transform") ||
                     st.getPropertyValue("transform") ||
                     "FAIL";
            var values = tr.split('(')[1].split(')')[0].split(',');
            var a = values[0];
            var b = values[1];
            var c = values[2];
            var d = values[3];
            var scale = Math.sqrt(a*a + b*b);
            var sin = b/scale;
            var anglFC = Math.round(Math.atan2(b, a)* (180/Math.PI));
            anglFC = Raphael.rad(anglFC);
            if ( anglFC < 0 ) {
              anglFC += (2 * Math.PI);
            }
            anglFC = Math.round( anglFC * (180/Math.PI));
            difference = anglFC - angleStart;
            while (difference < -180) difference += 360;
            while (difference > 180) difference -= 360;
            difference = Raphael.rad(difference);
            if ( difference < 0 ) {
              difference += (2 * Math.PI);
            }
             difference = Math.round( difference * (180/Math.PI));
            a = angleCurrent - prevAngle;
            a = (a + 180) % 360 - 180;
            if ( a > 0 ){
                if ($("#wrap-meniCompass").attr("DirRot") == "no"){
                    $("#wrap-meniCompass").attr("DirRot","direct");
                }  
            }//end sens direct
            if ( a < 0 ){                
                if ($("#wrap-meniCompass").attr("DirRot") == "no"){
                    $("#wrap-meniCompass").attr("DirRot","indirect");
                } 
            }//end sens indirect
            var sensRot = $("#wrap-meniCompass").attr("DirRot");
            if (sensRot == "direct"){
                $("#ArrowSDirect").show();
                flagD = 0;
                if( a<0 && a > -200 ){
                    ui.angle.current = Raphael.rad(prevAngle);
                }
                if ( difference >= 180 ){
                    arcSweep = 1;
                }else{
                    arcSweep = 0;
                }
            }
            else
            if (sensRot == "indirect"){
               $("#ArrowSInDirect").show();
                flagD = 1;
                arcSweep = 0;
                if(a>0){
                    ui.angle.current = Raphael.rad(prevAngle);
                    angleCurrentStatic = prevAngle;
                }  
                if ( difference >= 180 ){
                    arcSweep = 0;
                }else{
                    arcSweep = 1;
                }          
            }
                if ( difference == 0){
                    arcSweep = 0;
                }                
                if ( difference == 180){
                    arcSweep = 0;
                } 
                var rectcurrentDraw = $("#PP")[0].getBoundingClientRect();
                currentX = rectcurrentDraw.right;
                currentY = rectcurrentDraw.top; 
                if(countChangeAngle < 25 && arcSweep == 1){
                    return;
                }
                var da = [
                    "M", currentX,currentY, 
                    "A",radiusC,radiusC,
                    0,arcSweep,flagD,
                    (startX), (startY)
                ].join(" ");

               // if(document.getElementById(TargetId) !== null){
                
               var rect = $(document).find("#PointercompassPencil")[0].getBoundingClientRect();
               var x = rect.right;
               var y = rect.top;
               var imp = "leftframe";
               var ofimp = 0;
               if( x <  $(document).find("#rightPane")[0].getBoundingClientRect().left){
                 //console.log("1");
                 imp = "leftframe";
               }else{
                 imp = "rightframe";
               }
                

               const iframe = document.getElementById(""+imp);
               iframe.contentWindow.moveDrawCompass( [  "M", currentX,currentY,   "A",radiusC,radiusC,  0,arcSweep,flagD,  (startX), (startY)  ], translatePathX , translatePathY , TargetId   );


               //console.log([  "M", currentX,currentY,   "A",radiusC,radiusC,  0,arcSweep,flagD,  (startX), (startY)  ], translatePathX , translatePathY  );
                //$("#"+TargetId)[0].setAttribute("d", da);
                //$("#"+TargetId)[0].setAttribute("transform", "translate("+translatePathX+" "+translatePathY+")");

               // } 
//$(".swiper-slide-active .paper").append('<div class="testdraw" style="width:5px;height:5px;position:absolute;top:'+currentY+'px;left:'+currentX+'px;background:orange;"></div>');
                if (difference > 358  && difference != 0 && sensRot == "direct" && countChangeAngle > 25){
                    ui.angle.current = Raphael.rad(prevAngle);
                    angleCurrentStatic = prevAngle;
                    //$("#"+TargetId).remove();
                    //drawCircle(centreX,centreY,radiusC);
                }                   
                if (difference < 2  && difference != 0 && sensRot == "indirect" && countChangeAngle > 25){
                    ui.angle.current = Raphael.rad(prevAngle);
                    //$("#"+TargetId).remove();
                    //drawCircle(centreX,centreY,radiusC);
                }    
            }//end if draw mode
        },         
        stop: function( event, ui ) {
        $("#foo").css("pointer-events","all");

           $("body").removeClass("drawmode");
          $("#ArrowSDirect").hide();
          $("#ArrowSInDirect").hide();
        },
});









function drawCircle(cx,cy,r) {
cx = cx / (zoomFactor/100) - $(".swiper-slide-active .paper").offset().left;
cy = cy / (zoomFactor/100) - $(".swiper-slide-active .paper").offset().top;
var circle = paper.circle(cx, cy, r);
circle.attr({"stroke": "black","stroke-width": 2.5,"fill" : "none"});
}









function uniqueid(){
    var idstr=String.fromCharCode(Math.floor((Math.random()*25)+65));
    do {                
        var ascicode=Math.floor((Math.random()*42)+48);
        if (ascicode<58 || ascicode>64){
            idstr+=String.fromCharCode(ascicode);    
        }                
    } while (idstr.length<32);
    return (idstr);
}//end  uniqueid();




function resetOriginRule () {

    initSliderOrigin();
    var pI = $("#helper-pointer-left")[0].getBoundingClientRect();
    pIX = pI.right;
    pIY = pI.top;
    var pP = $("#helper-pointer-origin")[0].getBoundingClientRect();
    pPX = pP.right;
    pPY = pP.top;
    var dist = Math.sqrt( Math.pow((pIX-pPX), 2) + Math.pow((pIY-pPY), 2) );

    var inioft = $("#rule").offset().top;
    var iniofl = $("#rule").offset().left;
    $("#rule").css("transform-origin",dist+"px 0% 0px");
    var newoft  = $("#rule").offset().top;
    var newofl  = $("#rule").offset().left;
    var distop  =inioft-newoft;
    var disleft =iniofl-newofl;
    $("#rule").css("top",parseFloat($("#rule").css("top"))+(distop)+"px");
    $("#rule").css("left",parseFloat($("#rule").css("left"))+(disleft)+"px");
    $("#rule").css("left",parseFloat($("#rule").css("left")) / ($("#rule").parent().width() / 100)+"%");  
    $("#rule").css("top",parseFloat($("#rule").css("top")) / ($("#rule").parent().height() / 100)+"%");

}//end updtateOriginRule






function initSliderOrigin () {
    $("#slider-origin").val(1);
    var valueOfInput = parseFloat($("#slider-origin").val());
    var pad = (valueOfInput * $("#box-pointer-origin").width())/100 ;
    $('#box-pointer-origin').css("left","calc("+valueOfInput+"% - "+pad+"px)");
}//end initSliderOrigin ()


















})//end ready
