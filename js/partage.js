
var apiKey = 'AIzaSyDcrDHsmOzrZkoDKNz9gaymw6DJhXMwA1A';
var discoveryDocs =  ['https://www.googleapis.com/discovery/v1/apis/classroom/v1/rest']
var clientId = '193239953749-j45d7adkrjbiemsmavg86loobjkceltt.apps.googleusercontent.com';
// for student var scopes = 'https://www.googleapis.com/auth/classroom.coursework.me https://www.googleapis.com/auth/classroom.coursework.students';

var scopes = 'https://www.googleapis.com/auth/classroom.courses https://www.googleapis.com/auth/classroom.coursework.students';

$(document).on("click",".gc-modal #ok.active",async function (e) {

if ($("#cours option").length < 1){
  alert("No courses found!");
  return; 
}
var courseID = $(".gc-modal #cours :selected").val();
var file_url ='http://localhost:8000/index.html?url=https://drive.google.com/uc?export=download&id=1SQGRiVUEIDBH4C4ofwqAp7RSJLO8LNU_';
var titre =$(".gc-modal #titre-devoir").val();
//console.log(titre);
if (titre.trim() <= 0){
  alert("SVP, ajouter un titre!");
  return;
}

if (!courseID){
  alert("SVP, ajouter une classe a votre Google Classroom!");
  return;
}

$(".loading-overlay").show();
$(".loading-overlay span").show();

$(this).removeClass("active");
$(".loading-overlay .msg").html('Creation de devoir').show();
var file_url = 'http://localhost:8000/index.html?url=' + await uplaodDrive ();
var cw = await createCoursWork (courseID,file_url,titre);
//var mcw = await modifiyCoursWork (courseID,cw.result.id,file_url);
//console.log(cw);
//console.log(cw.result.id);
alert("modifier coursework");
$(this).addClass("active");
$(".loading-overlay .msg").html('Devoir a été créé avec succès sur google classroom! <button class="detail-btn" url="'+cw.result.alternateLink+'">Voir devoir</button>').show();
$(".loading-overlay span").hide();
})

$(document).on("click",".gc-modal #close",async function (e) {
$(".gc-modal").hide();
$(".loading-overlay").html(`<div class="msg"  style="display:none;">Creation de devoir</div> 
            <div class="loading"><span>.</span><span>.</span><span>.</span></div></div>`)
$(".gc-modal #titre-devoir").val("");
})




$(document).on("click",".detail-btn",async function (e) {
window.open($(this).attr("url"));
})                                                                                                                                                                                                                                                                                                                                                                   



$(document).on("click","#paratge",async function (e) {
$(".gc-modal").show();
gapi.load('client:auth2', initClient);
//$(".gc-modal").show();
})                                                                                                                                                                                                                                                                                                                                                                   


                                                                                                                                                                   


async function modifiyCoursWork (courseID,courseworkID,file_url) {

return new Promise(resolve => {
   gapi.client.classroom.courses.courseWork.patch({
      "courseId": courseID,
      "id": courseworkID,      
      "updateMask": "state",
      "resource": {
        "state": "PUBLISHED",

        "materials": [
          {
            "link": {
              "url": file_url+"fffffffff",
              
            }
          }
        ]
      }
    })
.then(function(response) {
  // Handle the results here (response.result has the parsed body).
  //console.log("Response", response);
  resolve(response);
})
});//end promise
}//modifiyCoursWork




async function createCoursWork (courseID,file_url,titre) {

return new Promise(resolve => {
   gapi.client.classroom.courses.courseWork.create({
      "courseId": courseID,
      "resource": {
        "title": titre,
        "workType": "ASSIGNMENT",
        "state": "PUBLISHED",
        
        "materials": [
          {
            "link": {
              "url": file_url,
              "title": "document pdh!",
              "thumbnailUrl": "http://icons.iconarchive.com/icons/graphicloads/long-shadow-documents/256/document-file-icon.png"
            }
          }
        ]
        
      }
    })
.then(function(response) {
  // Handle the results here (response.result has the parsed body).
  //console.log("Response", response);
  resolve(response);
})
});//end promise
}//createCoursWork





function getCoures () {
console.log("getCoures");
return new Promise(resolve => {
  gapi.client.classroom.courses.list({
  }).then(function(response) {
    $(".gc-modal").show();
    $(".loading-overlay span").show();
    //$("#cours").html('<option value="" disabled selected >Choisir un cours</option>');
    $("#cours").html('');
    console.log(response.result.courses);
    for (var i = 0; i < response.result.courses.length; i++) {
      if(response.result.courses[i].courseState == "ACTIVE" && response.result.courses[i].teacherFolder){
             //console.log(response.result.courses[i]);
             $("#cours").append('<option value="'+response.result.courses[i].id+'">'+response.result.courses[i].name+'</option>')
 
      }
      //getStudentAss(response.result.courses[i].id);
    };
    $('.loading-overlay').hide();
  })
  .catch(function(error) { 
    if( error = "403" ){
      //alert("Request had insufficient authentication scopes.");
      var options = new gapi.auth2.SigninOptionsBuilder(
      {'scope': 'https://www.googleapis.com/auth/classroom.coursework https://www.googleapis.com/auth/classroom.coursework.students'});
      //options.setScope('https://www.googleapis.com/auth/contacts.readonly');

      googleUser = gapi.auth2.getAuthInstance().currentUser.get();
      googleUser.grant(options).then(
      function(success){
        console.log(JSON.stringify({message: "success", value: success}));
      },
      function(fail){
        alert(JSON.stringify({message: "fail", value: fail}));
      });
    }
  })



});//end promise
}//getCoures


function initClient() {
  gapi.client.init({
      apiKey: apiKey,
      discoveryDocs: discoveryDocs,
      clientId: clientId,
      scope: scopes
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  });
}//


function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    console.log(isSignedIn);
    console.log("user logged in");
    getCoures ();
  } else {
    console.log("user logged out");
    gapi.auth2.getAuthInstance().signIn();
  }
}           

