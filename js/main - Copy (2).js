
$(document).on("click","#save",async function (e) {

var obj = document.getElementById('hero').contentWindow.window.pdh_api_keys_ls;
//console.log(obj);

var ls = document.getElementById('hero').contentWindow.window.localStorage;

if( !oz )
  return;

var arblob = [];
var obj = ls.keys();
for (var key in obj) {
  if (obj.hasOwnProperty(key)) {
      var k = obj[key];
      var v = ls.getItem(obj[key]);
      //console.log(obj[key] + " -> " + localStorage.getItem(obj[key])); 
      if(k.length > 0){

          var bk =  new Blob([k]);
          var bkl =  new Blob([addpadzero12(bk.size)]);
          arblob.push(bkl);
          arblob.push(bk);
          var bv =  new Blob([v]);
          var bvl =  new Blob([addpadzero12(bv.size)]);
          arblob.push(bvl);
          arblob.push(bv);
      }


  }
}

var ab = new Blob(arblob);


var blob = file.slice(0,filesizebrut);
var bb = new Blob([blob, ab]);
saveAs(bb,file.name);



//var ab = new Blob(arblob);
//saveAs(ab,"file.txt");


  




//console.log(obj);

return;
var blob = file.slice(0,filesizebrut);
saveAs(blob,file.name);

var obj = {
  "key1":"val1",
  "key10":"val10",
  "key100":"val100",
  "key1000":"val100",
  "key1000":"val1000",
}

var arblob = [];
//var blob = new Blob();
//console.log(obj);

for (var key in obj) {
  if (obj.hasOwnProperty(key)) {
      console.log(key + " -> " + obj[key]);
      if(obj[key].length > 0){
          var bk =  new Blob([key]);
          var bkl =  new Blob([bk.size]);
          arblob.push(bkl);
          arblob.push(bk);
          var bv =  new Blob([obj[key]]);
          var bvl =  new Blob([bv.size]);
          arblob.push(bvl);
          arblob.push(bv);
      }
  }
}

var ab = new Blob(arblob);
saveAs(ab,"file.txt");

/*
return;
console.log(file);
var blob = file.slice(12,20);

var bb = new Blob([blob, blob]);

saveAs(bb,file.name);
*/
});


$(document).on("click","#logo",async function (e) {
  window.location.reload(true);
});

$(document).on("click","#open",async function (e) {
  $('#openFileDialog').trigger('click'); 
});


var oz ;
var file;
var filesizebrut;

function addpadzero12(num) {
    var s = num+"";
    while (s.length < 12) s = "0" + s;
    return s;
}

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
    unpack(file);

}

var indexjson;
var obj_urls ={};
async function unpack (file) {
  if(!file.name.endsWith(".pdh")){
    alert("File type not supported!");
    return;
  }
  var uid = crc32(file.name);
  indexjson = await getIndexJson(file); 
  for (var key in indexjson) {
    var s = oz+indexjson[key].offset;
    var e = s+indexjson[key].size;
    var blob = file.slice(s,e);
    var objectURL = URL.createObjectURL(blob);
    obj_urls[key] = objectURL;
  }
  



    for (var k in obj_urls) {  
      if (k.includes(".css")){
          var baseurl = "";
          if(k.includes("/")){
            baseurl = k.substring(0,k.lastIndexOf("/")+1)  
          }
          var textcss = await parseCss(obj_urls[k],baseurl); 
      }
    }
    if(obj_urls["index.html"]){
        var texthtml = await parseHtml(obj_urls["index.html"]);   
    }
}// unpack...

function parseCss (url,baseurl) {


return new Promise(resolve => {
$.ajax({
url:url,
dataType: 'text',
success: function (data){

var text = data;
var urlMatchingRegex = /(?:url\(|<(?:link|script|img)[^>]+(?:src|href)\s*=\s*)(?!['"]?(?:data|http))['"]?([^'"\)\s>]+)/g;
    text =  text.replace(urlMatchingRegex, function(fullMatch, url) { 
        var oriurl = fullMatch.substring(1+fullMatch.lastIndexOf('('),fullMatch.length)
        oriurl =  oriurl.replace('../','').replace('../../','');
        var newurltext = fullMatch.substring(0,fullMatch.lastIndexOf('(')) +"("+ obj_urls[oriurl] ;
        return newurltext;
    });
var myblob = new Blob([text], {
    type: 'text/css'
});
window.URL.revokeObjectURL(url);
var myblob_objectURL = URL.createObjectURL(myblob);

obj_urls[objectKeyByValue(obj_urls,url)[0]] = myblob_objectURL;
resolve("true");
}//end suceess ajax

});

});//end promise


}// parseCss()




function parseHtml (url) {

return new Promise(resolve => {
$.ajax({
url:url,
dataType: 'text',

success: function (data){

var text = data;
var urlMatchingRegex = /(?:url\(|<(?:link|script|img)[^>]+(?:src|href)\s*=\s*)(?!['"]?(?:data|http))['"]?([^'"\)\s>]+)/g;
  text =  text.replace(urlMatchingRegex, function(fullMatch, url) { 
    var oriurl = fullMatch.substring(1+fullMatch.lastIndexOf('"'),fullMatch.length)
    var newurltext =  fullMatch.substring(0,fullMatch.lastIndexOf('"'))+'"'+ obj_urls[oriurl] ;
    return newurltext;
  });


////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
 text = `<script>
delete window.localStorage;

var pdh_storage = {};
//var pdh_api_keys_ls = {};
var localStorage = {

        setItem : function ( k, v ){

               if(v){

                }else{
                    v ="";
                }
                var myblob = new Blob([v], {
                type: 'text/plain'
                });
                v = URL.createObjectURL(myblob);
 
                pdh_api_keys_ls[k] = v;

        },        
        getItem : function ( k ){
            var v = pdh_api_keys_ls[k];
                v = getData(v); 
            return v;
        },       
        removeItem : function ( k ){
            //revokeUrl
            delete pdh_api_keys_ls[k];
        }, 
        clear : function ( k ){
            //revoke all URL
            pdh_api_keys_ls={}; 

        },      
        key : function (k){
            return Object.keys(pdh_api_keys_ls)[k];

        },      
        keys : function (){
            return Object.keys(pdh_api_keys_ls);

        },

};

Object.defineProperty(localStorage, "length", {
    get: function() {
         return Object.keys(pdh_api_keys_ls).length;
    },
    enumerable : true,
    set: undefined
});



function getData (url) {
    if(!url)
      return null;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);  // synchronous request
    xhr.send(null);
    if (xhr.status === 200) {
        return  xhr.responseText;
    } else {
    return  null;
    }
}// get data from  blob url...


</script>`+text;
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//console.log(file.size);
//console.log(filesizebrut);
var data_ls = {};
if (file.size >= filesizebrut ){
  findLocalStorage(filesizebrut);
}

var data_ls_text = `
<script>
var data_ls = `+JSON.stringify(data_ls)+`
console.log(data_ls);
var pdh_api_keys_ls = data_ls;
</script>  
`;



text = data_ls_text+text;
var myblob = new Blob([text], {
    type: 'text/html'
});
window.URL.revokeObjectURL(url);
var myblob_objectURL = URL.createObjectURL(myblob);
obj_urls[objectKeyByValue(obj_urls,url)[0]] = myblob_objectURL;
resolve("true");





function findLocalStorage (cur_pos) {
  var end_file = false;
  //console.log(cur_pos);
  var key_length = blobToString(file.slice(cur_pos,cur_pos+12));
  key_length = parseInt(key_length);
  if(key_length){
    //console.log(key_length);
    if(file.size >= key_length + cur_pos + 12 ){
        var key_data = blobToString(file.slice(cur_pos+12,cur_pos+12+key_length));
        console.log(key_data);
    }
  }
  cur_pos = cur_pos + 12 + key_length; 
  var val_length = blobToString(file.slice(cur_pos,cur_pos+12));
  val_length = parseInt(val_length);
  if(val_length){
    if(file.size >= val_length + cur_pos + 12 ){
        var val_data = blobToString(file.slice(cur_pos+12,cur_pos+12+val_length));
        console.log(val_data);
    }
  }
  

  cur_pos = cur_pos + 12 + val_length; 
  if( file.size > cur_pos + 24){
      appendLS(key_data,val_data);
      findLocalStorage (cur_pos);
  }else{
    //console.log(data_ls);
    //alert("end file");
  }





};

function appendLS (k,v) {
  var myblob = new Blob([v], {
  type: 'text/plain'
  });
  v = URL.createObjectURL(myblob);
  data_ls[k] = v;
}


function blobToString(b) {
    var u, x;
    u = URL.createObjectURL(b);
    x = new XMLHttpRequest();
    x.open('GET', u, false); // although sync, you're not fetching over internet
    x.send();
    URL.revokeObjectURL(u);
    return x.responseText;
}
$("#canvas").html('<iframe id="hero" width="100%" height="100%" src="'+myblob_objectURL+'" />');

}//end suceess ajax

});

});//end promise//end proms


}// parseHtml...


function getIndexJson (file) {
return new Promise(resolve => {
var reader = new FileReader();
        reader.onloadend = function() {

            var s = this.result.toString();
            var header_size = parseInt(s);
            var reader = new FileReader();
            reader.onloadend = function() {
                var offset_zero = header_size + 20;
                oz = offset_zero;

                if(!IsJsonString(this.result)){
                  alert("Error file parse!");
                  return;
                }
                var filesJson = JSON.parse(this.result);
                var filesize = offset_zero+filesJson["file-size"];
                filesizebrut = filesize;
                filesJson = filesJson["files"];
                filesJson["getdata"] = {
                  "offset" : filesize-offset_zero,
                  "size"   : file.size-filesize
                }
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

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}