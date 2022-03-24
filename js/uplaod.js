var client_id = "600683488016-nos8dbhn1fokenpo4i3qje9hpg04eouf.apps.googleusercontent.com";
var client_secret = "ZkQ5Rork52H1GPvBCoGpL5_v";



async function uplaodDrive () {

	var t = await getToken ();
	var ref = await uploadFilleToDrive__REF ();
	var fd = await uploadFilleToDrive (ref, file.slice(0,filesizebrut));
	var idf = await publicShare (fd);
	//console.log(idf)
	var selfurl = idf.selfLink.split( '/' );
	selfurl = selfurl[ selfurl.length - 3 ];
	//console.log(selfurl[ selfurl.length - 3 ]);
	var url = await getFileurl (selfurl);

return new Promise(resolve => {
	resolve(url.webContentLink);
});//end promise

}// uplaodDrive ()...



function getFileurl (id) {

return new Promise(resolve => {

fetch("https://www.googleapis.com/drive/v3/files/"+id+"?fields=*", {
  headers: {
    Accept: "application/json",
    Authorization: "Bearer "+localStorage.getItem('access_token'),
  }
}).then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    if ('error' in myJson){
          resolve("error+login");

        }else{    
          resolve(myJson);
        }

  }).catch(function(error) {
      resolve("error+connexion");
  });



});//end promise
} // getFileurl...






function publicShare (idFile) {
return new Promise(resolve => {


fetch("https://www.googleapis.com/drive/v2/files/"+idFile+"/permissions", {
  body: "{\"role\":\"writer\",\"type\":\"anyone\"}",
  headers: {
    Accept: "application/json",
      Authorization: "Bearer "+localStorage.getItem('access_token'),
    "Content-Type": "application/json"
  },
  method: "POST"
}).then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    if ('error' in myJson){
          resolve("error+login");
        }else{    
          resolve(myJson);
        }

  }).catch(function(error) {
    resolve("error+connexion")
  });



});//end promise
} // shareFileDrive...

function uploadFilleToDrive (refFile,file) {


return new Promise(resolve => {

fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable&upload_id="+refFile, {
    headers: {
      Authorization: "Bearer "+localStorage.getItem('access_token'),
    //"Content-Length": file.size,
    },
    method: "PUT",
    'body':file

  })
  
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {  
    if ('error' in myJson){
      resolve("error+login");
    }else{    
      resolve(myJson.id);
    }

  }).catch(function(error) {
      resolve("error+connexion")
  });


});//end promise
} // uploadFilleToDrive...


function uploadFilleToDrive__REF () {
var name = "file.pdh";	
return new Promise(resolve => {
fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable", {
    headers: {
      Authorization: "Bearer "+localStorage.getItem('access_token'),
    "Content-Type": "application/json",    

    },
    method: "POST",
    body: "{\"name\":\""+name+"\",\"appProperties\": {\"sendVia\": \"pdh_reader\"}}",
  })
  .then(function(response) {

    var ref_file = null; 
    for (var pair of response.headers.entries()) {
      if( pair[0] == "x-guploader-uploadid" ){
         //console.log( pair[1]);
         ref_file = pair[1];      
      }
    }
    if(ref_file){
      resolve(ref_file);
    }else{
      resolve("error+login");
    }
  }).catch(function(error) {
    resolve("error+conextion")
});
});//end promise
}//uploadFilleToDrive__REF




function getToken () {

return new Promise(resolve => {
  
fetch('https://www.googleapis.com/oauth2/v4/token?client_id=600683488016-nos8dbhn1fokenpo4i3qje9hpg04eouf.apps.googleusercontent.com&client_secret=ZkQ5Rork52H1GPvBCoGpL5_v&grant_type=refresh_token&refresh_token=1/bAL2ts6PEb9fy50nC4vzcoZvLhSV_difw9PapCS7Uyw', {
      method: "POST",
      
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    if ('error' in myJson){
      resolve("error+login");
    }else{
      localStorage.setItem("access_token",myJson.access_token);
      resolve(myJson.access_token); 
    }


  }).catch(function(error) {
    resolve("error+error+conextion");
});

});//end promise

}//end getToken
