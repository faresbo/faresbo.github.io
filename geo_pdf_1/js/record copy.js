

 console.log( "Record!" );

 var __dirname = 'C:\Users\Fares.Bouali\Downloads\nwjs_helper_recorder_online';

var fs = require("fs");
//const {shell} = require('electron') // deconstructing assignment
var { spawn } = require("child_process");
var __path = require('path');
const { createWriteStream } = require('fs');
const { exec } = require('child_process');

let ffmpegProcess;
var ffmpegPath = __path.join(__dirname, '..', '..', 'ffmpeg.exe');
var ffmpegPath = 'ffmpeg.exe';


if (!fs.existsSync("output")) {
  fs.mkdirSync("output");
}

 var output = "output";


 var folderName = require("os").homedir() + "/Documents/Helper/";
 if (!fs.existsSync(folderName)) {
   fs.mkdirSync(folderName);
 }
 var folderName = require("os").homedir() + "/Documents/Helper/videos/";
 if (!fs.existsSync(folderName)) {
   fs.mkdirSync(folderName);
 }




let isRecording = false; // Flag to track if recording is in progress
let recordedChunks = []; // Array to store recorded audio chunks
var multirecordedChunk = [];
let mediaRecorder; // MediaRecorder object
var end_record = false;
var audioFiles = [];
 let audioStream; // Variable to hold the audio stream




 $(document).on("click",".btn-folder",function  (argument) {
  const command = 'explorer "'+require("os").homedir()+'\\Documents\\Helper\\videos\\"';
   exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error opening folder: ${error}`);
      return;
    }
    console.log(`Folder opened successfully`);
  });


/*
  var folderName = require('os').homedir()+'/Documents/LB/';
 var fs = require("fs");
 // Check if the directory exists
 if (!fs.existsSync(folderName)) {
   // Create the directory
   fs.mkdirSync(folderName);
 }
     //shell.showItemInFolder('filepath') // Show the given file in a file manager. If possible, select the file.
     //shell.openPath(require('os').homedir()+'\\Documents\\LB') // Open the given file in the desktop's default manner.
   */

 })// body...
 
 




 $(document).on("click", "#btn-add-record.start", async function (e) {//record ui

 



 });




 $(document).on("click", "#btn-add-record-pause", function (argument) {

  console.log("btn-add-record-pause");
  ffmpegProcess.stdin.setEncoding("utf8");
  ffmpegProcess.stdin.write("q");

  mediaRecorder.stop(); // Stop recording
  audioStream.getTracks().forEach(track => track.stop()); // Stop the audio stream


   $(this).hide().next().show(); 
  $("#btn-add-record").removeClass("anim-record");
  $("#btn-add-record").removeClass("start");
  $("#btn-add-record").removeClass("stop");

})

 

$(document).on("click", "#btn-add-record-play", function (argument) {
  console.log("Resume record");
  $("#btn-add-record").addClass("start");
  $("#btn-add-record.start").trigger("click");
  $("#btn-add-record").removeClass("start");
  $(this).hide();
  $(this).prev().show();
  })
  







 $(document).on("click", "#btn-add-record-stop", function (e) {
  $("#btn-add-record").hide();
  $(".loader-record").show();
  ffmpegProcess.stdin.setEncoding("utf8");
  ffmpegProcess.stdin.write("q");

if( mediaRecorder.state != "inactive" ){
  mediaRecorder.stop(); // Stop recording
  audioStream.getTracks().forEach(track => track.stop()); // Stop the audio stream
}

  $("#btn-add-record").removeClass("anim-record");
  $(".btn-pause-play").hide();
  $(this).removeClass("stop").addClass("start");
  //console.log("Final to finish the record!");
  $("#btn-add-record").removeClass("stop").addClass("start");

  setTimeout(() => {

    finFinalRecord();
   
  }, 5000);


})






$(document).on("click", "#btn-add-record.start", async function (e) {//record video






if (  $("#btn-add-record-stop").css("display") == "none" ){
    var a = await deleteAllFiles();
    var lisfiles =  fs.readdirSync(output);
    console.log(lisfiles);
    if( lisfiles.length > 0 ){
      window.location.reload();
return;

    }


}

$("#btn-add-record-pause").show();
 $("#btn-add-record-stop").show();
 $("#btn-add-record").addClass("anim-record");
 $("#btn-add-record-play").hide();
 


 var name_out_file = new Date().toJSON().slice(0, 19).replace("T", "-").split("-").join("_").split(":").join("_") +"";
  console.log( output, name_out_file  );

////var ffmpegArgs = [ '-f', 'gdigrab',               '-framerate', '30',            '-video_size', '1920x1080',   '-i', 'desktop',               '-c:v', 'libx264',            '-preset', 'ultrafast',       '-pix_fmt', 'yuv420p',       __path.join(output, name_out_file + '.mp4')  ];
//var ffmpegArgs = [ '-f', 'gdigrab',               '-framerate', '30',            '-video_size', '1366x768',   '-i', 'desktop',               '-c:v', 'libx264',            '-preset', 'ultrafast',       '-pix_fmt', 'yuv420p',       __path.join(output, name_out_file + '.mp4')  ];
var ffmpegArgs = [
  '-f', 'gdigrab',               // Grabbing input from the desktop
  '-framerate', '30',            // Setting the frame rate
  '-video_size', '1920x1080',    // Setting the video size
  '-i', 'desktop',               // Input is the desktop screen
  '-c:v', 'libx264',             // Using the H.264 codec
  '-preset', 'ultrafast',        // Setting the encoding preset
  '-pix_fmt', 'yuv420p',         // Setting the pixel format
  output +"/"+ name_out_file + '.mov'  // Output file path with .mov extension
];

console.log( ffmpegArgs );


ffmpegProcess = spawn(ffmpegPath, ffmpegArgs);
console.log( ffmpegProcess );
ffmpegProcess.on('exit', (code, signal) => {
  if (signal) {
      console.log(`ffmpeg process was killed with signal: ${signal}`);
  } else if (code !== 0) {
      console.log(`ffmpeg process exited with code: ${code}`);
  } else {
      console.log('ffmpeg process finished successfully.');
  }
});


  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioStream = stream; // Store the stream
    mediaRecorder = new MediaRecorder(stream);
    recordedChunks = [];
    mediaRecorder.addEventListener('dataavailable', (event) => {
        if (event.data.size > 0) {
            recordedChunks.push(event.data);
        }
    });
    mediaRecorder.addEventListener('stop',async () => {
      const audioBlob = new Blob(recordedChunks, { type: 'audio/wav' });
      var name_out_file = new Date().toJSON().slice(0, 19).replace("T", "-").split("-").join("_").split(":").join("_") +"";
      const fileStream = createWriteStream(    output +"/"+ name_out_file+'.wav'   );
      fileStream.write(Buffer.from(await audioBlob.arrayBuffer()));
      fileStream.end();
      console.log('Audio saved!');
      if( end_record  ){
        finRecord();
      }
  });
    mediaRecorder.start(); // Start recording
 } catch (error) {
    console.error('Error accessing microphone:', error);
}

})//end Start record

 




 





















async function finFinalRecord (){



//console.log( "command" );
var files = fs.readdirSync(output);

console.log( files );
return
const mp4Files = files.filter(file => __path.extname(file) === '.mp4');

for (let indexv = 0; indexv < mp4Files.length; indexv++) {
  console.log( mp4Files[indexv] );
  //ffmpeg -i input.mp4 -c copy output_fixed.mp4
  var command = `ffmpeg.exe -i ${ output+"/"+mp4Files[indexv] } -c copy ${  output+"/"+mp4Files[indexv].substring(0,(mp4Files[indexv].length - 4) ) }_.mp4`;
  var d = await excuteFFMPEG   ( command ) 
   console.log( d );

  
}


const fileLines = mp4Files.map(file => `file '${file}'`);
const filePath = __path.join(output, 'mylistv.txt');
fs.writeFileSync(filePath, fileLines.join('\n'));
var wavFiles = files.filter(file => __path.extname(file) === '.wav');

//console.log( wavFiles )
for (let index = 0; index < wavFiles.length; index++) {
 var command = `ffmpeg.exe -i ${ output+"/"+wavFiles[index] } -codec:a libmp3lame -qscale:a 2 ${  output+"/"+wavFiles[index].substring(0,(wavFiles[index].length - 4) ) }.mp3`;
 var d = await excuteFFMPEG   ( command ) 
  console.log( d );
}

 
var d = await excuteFFMPEG   ( 'ffmpeg.exe -f concat -safe 0 -i output/mylistv.txt -c copy output/output.mp4' ) 
console.log("I generate the output.mp4 file");


var files = fs.readdirSync(output);
while (!files.includes("output.mp4")) {
  await sleep(1000);
  files = fs.readdirSync(output);
  console.log("wait until file exist!"); 
}


var files = fs.readdirSync(output);
var wavFiles_ = files.filter(file => __path.extname(file) === '.mp3');
const fileLines__ = wavFiles_.map(file => `file '${file}'`);
const filePath_ = __path.join(output, 'mylista.txt');
fs.writeFileSync(filePath_, fileLines__.join('\n'));

var d = await excuteFFMPEG   ( 'ffmpeg.exe -f concat -safe 0 -i '+output+'/mylista.txt -c copy '+output+'/output.mp3' ) 
console.log("I generate the output.mp3 file");



var files = fs.readdirSync(output);
while (!files.includes("output.mp3")) {
  await sleep(1000);
  files = fs.readdirSync(output);
  console.log("wait until file exist!"); 
}

 

var d = await excuteFFMPEG   ( `ffmpeg.exe -i ${ output+"/output.mp4"}  -i ${ output+"/output.mp3"} -c:v copy -c:a aac ${ output+"/merged.mp4" } ` ) 
console.log("I generate the desired file");

const filePath__ = output+"/merged.mp4";




var files = fs.readdirSync(output);
while (!files.includes("merged.mp4")) {
  await sleep(1000);
  files = fs.readdirSync(output);
  console.log("wait until file exist!"); 
}


 
 



fs.renameSync(   output+"/merged.mp4"  , folderName+new Date().toJSON().slice(0, 19).replace("T", "-").split("-").join("_").split(":").join("_") +""+".mp4"   );

$(".loader-record").hide();
$("#btn-add-record").show();




}//end finFinalRecord








const excuteFFMPEG = ( cmd ) => {
return new Promise((resolve, reject) => {

  
exec(  cmd  , (err, stdout, stderr) => {
  if (err) {
    console.log(err);
   resolve(`exec error: ${err}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  resolve(`stderr: ${stderr}`);
});



})//end excuteFFMPEG
}//end excuteFFMPEG


const fss = require('fs').promises;
 




 
const deleteAllFiles = () => {
  return new Promise((resolve, reject) => {
      // Path to the directory
      const directoryPath = output;

      // Read all files in the directory
      fs.readdir(directoryPath, function(err, files) {
          if (err) {
              reject("Unable to scan directory: " + err);
              return;
          } 

          // Delete all files in the directory synchronously
          files.forEach(file => {
              try {
                  fs.unlinkSync(__path.join(directoryPath, file));
                  console.log(`Successfully deleted file: ${file}`);
              } catch (err) {
                  console.error(`Error deleting file ${file}: ${err}`);
              }
          });

          // Resolve when all files are deleted
          resolve("All files deleted successfully.");
      });
  });
};
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}