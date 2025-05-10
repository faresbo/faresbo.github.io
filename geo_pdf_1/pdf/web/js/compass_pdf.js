


function initDrawCompass(data) {

    last_svg_draw[0].appendChild(data);
    const svg = last_svg_draw[0];
    /*
    const rectt = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rectt.setAttribute('x',  0); // X position
    rectt.setAttribute('y',  50); // Y position
    rectt.setAttribute('width', 5); // Width of the rectangle
    rectt.setAttribute('height', 5); // Height of the rectangle
    rectt.setAttribute('fill', 'blue'); // Fill color
    last_svg_draw[0].appendChild(rectt);
    */

    
}// 
window.initDrawCompass = initDrawCompass;






function moveDrawCompass(a,b,c, TargetId) {

    var ofimp = 0;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const paramValue = urlParams.get('p');
if( paramValue == "2" ){
    ofimp = $(parent.document).find("#rightPane")[0].getBoundingClientRect().left;
}

 
 var rect_ =last_svg_draw[0].getBoundingClientRect();
    
 //   let offsetX =( x - rect_.left ) - ofimp;
 //   let offsetY = y - rect_.top;
//
  
let currentX =(  a[1] - rect_.left )  - ofimp;
let currentY =( a[2] - rect_.top) - 50 ;

let startX =  (  a[9] - rect_.left )  - ofimp;
let startY = (a[10] - rect_.top) - 50  ;




var da =  [
    "M", currentX / Ss,currentY / Ss, 
    "A",a[4] / Ss ,a[5] / Ss,
    0,a[7] / 1 ,a[8] / 1,
    (startX / Ss ), (startY / Ss)
].join(" ");

 
$("#"+TargetId+"child")[0].setAttribute("d", da);
   
/*
     const svg = last_svg_draw[0];
    const rectt = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rectt.setAttribute('x',  currentX); // X position
    rectt.setAttribute('y',  currentY - 50); // Y position
    rectt.setAttribute('width', 5); // Width of the rectangle
    rectt.setAttribute('height', 5); // Height of the rectangle
    rectt.setAttribute('fill', 'blue'); // Fill color
    last_svg_draw[0].appendChild(rectt);
    
    */
}// 
window.moveDrawCompass = moveDrawCompass;






















