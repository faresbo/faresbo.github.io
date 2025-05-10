















/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////





var lastxforrule = 0;
var lastyforrule = 0;
var last_svg_draw = null;
$(document).on("pointermove",".stage_draw_svg",function (e) {
    lastxforrule = e.originalEvent.offsetX;
    lastyforrule = e.originalEvent.offsetY;
    last_svg_draw = $(this);
    //console.log(lastxforrule , lastyforrule);
    //console.log(last_svg_draw.attr("class"))
});
/**/

 
var todrawrule = 0;
var DrawPathArray = 0;
$(parent.document).find("#slider-drawer").on('mousedown touchstart', function () {
    DrawPathArray = new Array();
    todrawrule = 0;
});


$(parent.document).find('#slider-drawer').on('input', function(e) {
  
  var ofimp = 0;

  var rect = $(parent.document).find("#helper-pointer-drawer")[0].getBoundingClientRect();
  var x = rect.right;
  var y = rect.top;
  var imp = "0";
  var ofimp = 0;
  if( x <  $(parent.document).find("#rightPane")[0].getBoundingClientRect().left){
    //console.log("1");
    imp = "1";
  }else{
    imp = "2";

  }
  console.log( ofimp );

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const paramValue = urlParams.get('p');
if( paramValue+"" != imp+"" ){
  return;
}



  setTimeout(() => {



 color = ( $(parent.document).find('.btn-color.active div').css("background-color")  );
 size = ( $(parent.document).find('.btn-size.active div').html()  );
 var rect_ =last_svg_draw[0].getBoundingClientRect();

 var imp = "0";
 var ofimp = 0;

 var rect = $(parent.document).find("#helper-pointer-drawer")[0].getBoundingClientRect();
 var x = rect.right;
 var y = rect.top;
 if( x <  $(parent.document).find("#rightPane")[0].getBoundingClientRect().left){
   //console.log("1");
   imp = "1";
 }else{
   imp = "2";
   var ofimp = $(parent.document).find("#rightPane")[0].getBoundingClientRect().left;
 }


 
   //$(parent.document).find("#rule").css("pointer-events","none");
  var valueOfInput = parseFloat(e.originalEvent.target.value);
  var rect = $(parent.document).find("#helper-pointer-drawer")[0].getBoundingClientRect();
  var x = rect.right;
  var y = rect.top;

  const recttt = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  recttt.setAttribute('class',  "x"); // X position
  console.log( ofimp );
  recttt.setAttribute('x',  (  ( ( (x  ) - (rect_.left  ))  * 1) / Ss  )  - ofimp    )  ; // X position
  recttt.setAttribute('y',  (( y - rect_.top ) - 50 ) / Ss  ); // Y position
  recttt.setAttribute('width', 5); // Width of the rectangle
  recttt.setAttribute('height', 5); // Height of the rectangle
  recttt.setAttribute('fill', 'blue'); // Fill color
  //last_svg_draw[0].appendChild(recttt);

  const sv_g = last_svg_draw[0] ;

  if( todrawrule == 0 ){ 
    const newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    //newLine.setAttribute('id', 'hh');
    newLine.setAttribute('x1',   (  ( ( (x  ) - (rect_.left  ))  * 1) / Ss  )  - ofimp      );
    newLine.setAttribute('y1',   (( y - rect_.top ) - 50 ) / Ss  );
    newLine.setAttribute('x2',  (  ( ( (x  ) - (rect_.left  ))  * 1) / Ss  )  - ofimp      );
    newLine.setAttribute('y2',  (( y - rect_.top ) - 50 ) / Ss  );
    newLine.setAttribute('class', 'x');
    newLine.setAttribute('stroke', color);
    newLine.setAttribute('stroke-width', size);
    sv_g.appendChild(newLine);
    todrawrule = 1;
    }
    else{
  
        
        
  const lastLine = sv_g.querySelector('line:last-of-type');
  lastLine.setAttribute('x2',  (  ( ( (x  ) - (rect_.left  ))  * 1) / Ss  )  - ofimp      );
  lastLine.setAttribute('y2',(( y - rect_.top ) - 50 ) / Ss  );
        
  
    }


return



 var imp = 0;
 var ofimp = 0;
  if( x <  $(parent.document).find("#rightPane")[0].getBoundingClientRect().left){
    //console.log("1");
    imp = 1;
  }else{
    imp = 2;
    ofimp = $(parent.document).find("#rightPane")[0].getBoundingClientRect().left;
    //console.log("2");
  }
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const paramValue = urlParams.get('p');
  if( imp == paramValue ){
  }else{
    return;
  }
 //console.log( "I only run to the "+imp+" page!" );
 //console.log(last_svg_draw);
 //console.log( x );
 //console.log( $(parent.document).find("#rightPane")[0].getBoundingClientRect().left  );
  //$("body").append('<div style="position:fixed; width:5px; height:5px; background-color:red; top:'+(y-50)+'px; left:'+x+'px;"></div>');


//console.log(  last_svg_draw  );
 var rect_ =last_svg_draw[0].getBoundingClientRect();
 //console.log(  rect_  );
 let offsetX =( x - rect_.left ) - ofimp;
 let offsetY = y - rect_.top;


 const svg = last_svg_draw[0] ;
 const rectt = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
 // Set the attributes for the rectangle
 rectt.setAttribute('x', (offsetX - 0) * Ss); // X position
 rectt.setAttribute('y', (offsetY - 50) * Ss); // Y position
 rectt.setAttribute('width', 5); // Width of the rectangle
 rectt.setAttribute('height', 5); // Height of the rectangle
 rectt.setAttribute('fill', 'blue'); // Fill color
 // Append the rectangle to the SVG element
 //svg.appendChild(rectt);



 if( todrawrule == 0 ){ 
  const newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  //newLine.setAttribute('id', 'hh');
  newLine.setAttribute('x1', ''+(offsetX * Ss));
  newLine.setAttribute('y1', ''+(offsetY-50) * Ss);
  newLine.setAttribute('x2', ''+(offsetX * Ss));
  newLine.setAttribute('y2', ''+(offsetY - 50) * Ss);
  newLine.setAttribute('class', 'x');
  newLine.setAttribute('stroke', color);
  newLine.setAttribute('stroke-width', size);
  svg.appendChild(newLine);
  todrawrule = 1;
  }
  else{

      
      
const lastLine = svg.querySelector('line:last-of-type');
lastLine.setAttribute('x2', (offsetX * Ss ));
lastLine.setAttribute('y2', (offsetY-50) * Ss);
      

  }








//console.log(x ,  rect_.left);
//console.log(y ,  rect_.top);
 //console.log(offsetY);
//console.log( e.originalEvent  );
//console.log(  x,y  );
//console.log( last_svg_draw );
/*
  let elementAtPoint = document.elementFromPoint(x , y);
  let elementWithClass = elementAtPoint.closest(`.stage_draw_svg `);
  console.log( elementAtPoint );
 // Calculate the offset position
//console.log( offsetX, offsetY  )
  //console.log( x , y );
  //$(".swiper-slide-active .paper").offset().top;
*/



}, 10);


});

