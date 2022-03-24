/*
$.ajax({
url:'index.3html',
success: function (data){
//console.log(data);

var text = data;


var urlMatchingRegex = /(?:url\(|<(?:link|script|img)[^>]+(?:src|href)\s*=\s*)(?!['"]?(?:data|http))['"]?([^'"\)\s>]+)/g;
var m = text.match(urlMatchingRegex);
console.log(m);

var text2 =  text.replace(urlMatchingRegex, function(fullMatch, url) { 
  console.log(fullMatch); 
  return "url("+"bloburl"+")";
});




}
});


*/


$(document).on("click","#logo",async function (e) {
  window.location.reload(true);
});

$(document).on("click",".topbutton",async function (e) {
  $('#openFileDialog').trigger('click'); 
});


var oz ;
var file;

$(document).on("click","#click2",function  () {
  //$("body").append('<iframe src="index.html" />');

});

$(document).on("click","#click",function  () {
  alert("good try");
  //$("html").html('<img src="icons/login.png" />');
  //$("body").append('<iframe src="index.html" />');
  //console.log(obj_urls["icons/login.png"]);
  //$("body").append('<img src="icons/login.png?'+obj_urls["icons/login.png"]+'" />');
  //navigator.serviceWorker.controller.postMessage("obj_urls");

});




function onChooseFile(event, onLoadFileHandler) {
    if (typeof window.FileReader !== 'function')
        throw ("The file API isn't supported on this browser.");
    let input = event.target;
    if (!input)
        throw ("The browser does not properly implement the event object");
    if (!input.files)
        throw ("This browser does not support the `files` property of the file input.");
    if (!input.files[0])
        return undefined;
    file = input.files[0];
    //console.log(file);
console.log("*********");

    unpack(file);

}

var indexjson;
var obj_urls ={};
async function unpack (file) {
console.log("*********");
  var uid = crc32(file.name);
  indexjson = await getIndexJson(file); 
  for (var key in indexjson) {
    //console.log(key);
    //console.log(indexjson[key]);
    var s = oz+indexjson[key].offset;
    var e = s+indexjson[key].size;
    var blob = file.slice(s,e);
    var objectURL = URL.createObjectURL(blob);
    //console.log(objectURL);
    //console.log();
    //console.log(key);
    if(key.includes(".png")){
        //$("body").append('<img src="'+objectURL+'" alt="" />')
    }
    //obj_urls["pdh_reader/"+uid+"/"+key] = objectURL;
    obj_urls[key] = objectURL;
  }//looop object
  
//console.log(obj_urls);



for (var k in obj_urls) {  
    //console.log(obj_urls[k]);
if (k.includes(".css")){
        var baseurl = "";
        if(k.includes("/")){
          baseurl = k.substring(0,k.lastIndexOf("/")+1)  
        }
        //console.log(baseurl);
        var textcss = await gettextcss(obj_urls[k],baseurl); 
}

}

//console.log(obj_urls["index.html"]);

if(obj_urls["index.html"]){
    var texthtml = await gettexthtml(obj_urls["index.html"]); 
  
}















  //navigator.serviceWorker.controller.postMessage(obj_urls);

  //console.log(obj_urls);
  //$("#show-file").html(`<iframe src="pdh_reader/`+uid+`/index.html" frameborder="0"></iframe>`);




}// unpack...








function gettextcss (url,baseurl) {


return new Promise(resolve => {
//console.log("text2");
//console.log(url);

$.ajax({
url:url,
dataType: 'text',

success: function (data){

var text = data;
//console.log(text);
var urlMatchingRegex = /(?:url\(|<(?:link|script|img)[^>]+(?:src|href)\s*=\s*)(?!['"]?(?:data|http))['"]?([^'"\)\s>]+)/g;
var m = text.match(urlMatchingRegex);

var text2 =  text.replace(urlMatchingRegex, function(fullMatch, url) { 
  //console.log(fullMatch); 
var fullMatch_1 = fullMatch.substring(1+fullMatch.lastIndexOf('/'),fullMatch.length);

var oriurl = fullMatch.substring(1+fullMatch.lastIndexOf('('),fullMatch.length)

/*
var fullMatch_3 = oriurl;
if( !fullMatch_3.includes("..") ){
fullMatch_3= baseurl+oriurl;
}
*/
oriurl =  oriurl.replace('../','');
oriurl.replace('../../','');
var newurltext = fullMatch.substring(0,fullMatch.lastIndexOf('(')) +"("+ obj_urls[oriurl] ;

/*
console.log(fullMatch_1); 
console.log(oriurl); 
console.log(obj_urls[oriurl]);
console.log(obj_urls);
*/
//.replace('../','');

//console.log(oriurl); 
//console.log(newurltext); 


  return newurltext;
});
//console.log(text2);
var mystring = text2;
var myblob = new Blob([mystring], {
    type: 'text/css'
});
window.URL.revokeObjectURL(url);
var myblob_objectURL = URL.createObjectURL(myblob);

//console.log(url);
/*
console.log(myblob_objectURL);
console.log(obj_urls);
console.log();
*/
/*
var absoluteurlfile = url;
console.log(baseurl);
console.log(url);
console.log(objectKeyByValue(obj_urls,url)[0]);
*/
//revoke this link
//genrate link for new file

//console.log("html");
obj_urls[objectKeyByValue(obj_urls,url)[0]] = myblob_objectURL;

resolve("true");


}//end suceess ajax

});

});//end promise//end proms


}// gettextcss...




function gettexthtml (url) {

return new Promise(resolve => {


//console.log(url);

$.ajax({
url:url,
dataType: 'text',

success: function (data){

var text = data;
//console.log(data)
var urlMatchingRegex = /(?:url\(|<(?:link|script|img)[^>]+(?:src|href)\s*=\s*)(?!['"]?(?:data|http))['"]?([^'"\)\s>]+)/g;
var m = text.match(urlMatchingRegex);

var text2 =  text.replace(urlMatchingRegex, function(fullMatch, url) { 
  //console.log(fullMatch);
  var oriurl = fullMatch.substring(1+fullMatch.lastIndexOf('"'),fullMatch.length)
  var newurltext =  fullMatch.substring(0,fullMatch.lastIndexOf('"'))+'"'+ obj_urls[oriurl] ;
  //console.log(oriurl);

  return newurltext;
});
//console.log(text2);
var mystring = text2;
var myblob = new Blob([mystring], {
    type: 'text/html'
});
window.URL.revokeObjectURL(url);
var myblob_objectURL = URL.createObjectURL(myblob);

//console.log(url);
/*console.log(myblob_objectURL);
console.log(obj_urls);
console.log();
*/
obj_urls[objectKeyByValue(obj_urls,url)[0]] = myblob_objectURL;

//revoke this link
//genrate link for new file

resolve("true");
$("body").append('<iframe src="'+myblob_objectURL+'" />');

}//end suceess ajax

});

});//end promise//end proms


}// gettexthtml...


function getIndexJson (file) {
return new Promise(resolve => {

/**/
var reader = new FileReader();
        reader.onloadend = function() {

            var s = this.result.toString();
            //console.log(s);
            var header_size = parseInt(s);

            var reader = new FileReader();
            reader.onloadend = function() {
                var offset_zero = header_size + 20;
                oz = offset_zero;
                //console.log(offset_zero);
                //console.log(this.result);

                var filesJson = JSON.parse(this.result);
                var filesize = offset_zero+filesJson["file-size"]
                filesJson = filesJson["files"];
                filesJson["getdata"] = {
                  "offset" : filesize-offset_zero,
                  "size"   : file.size-filesize
                }
                //console.log(filesize);
                //console.log(file.size);

                //console.log(filesJson);
                resolve(filesJson,offset_zero);

            };
        var blob = file.slice(20,header_size+20);
        reader.readAsText(blob);

        };
var blob = file.slice(12,20);
reader.readAsText(blob,"UTF-8");





});//end promise
}//getIndexJson()


var crc32=function(r){for(var a,o=[],c=0;c<256;c++){a=c;for(var f=0;f<8;f++)a=1&a?3988292384^a>>>1:a>>>1;o[c]=a}for(var n=-1,t=0;t<r.length;t++)n=n>>>8^o[255&(n^r.charCodeAt(t))];return(-1^n)>>>0};









window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
function onInitFs(fs) {
  console.log('Opened file system: ' + fs.name);
}

window.requestFileSystem(window.TEMPORARY, 5*1024*1024 /*5MB*/, onInitFs, errorHandler);



function errorHandler(e) {
  var msg = '';

  switch (e.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      msg = 'QUOTA_EXCEEDED_ERR';
      break;
    case FileError.NOT_FOUND_ERR:
      msg = 'NOT_FOUND_ERR';
      break;
    case FileError.SECURITY_ERR:
      msg = 'SECURITY_ERR';
      break;
    case FileError.INVALID_MODIFICATION_ERR:
      msg = 'INVALID_MODIFICATION_ERR';
      break;
    case FileError.INVALID_STATE_ERR:
      msg = 'INVALID_STATE_ERR';
      break;
    default:
      msg = 'Unknown Error';
      break;
  };

  console.log('Error: ' + msg);
}


function objectKeyByValue (obj, val) {
  return Object.entries(obj).find(i => i[1] === val);
}

