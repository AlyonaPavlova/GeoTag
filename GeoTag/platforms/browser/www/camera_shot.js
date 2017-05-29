var pictureSource;   // picture source
var destinationType; // sets the format of returned value
var showFlag = 0;
// Wait for PhoneGap to connect with the device
//
document.addEventListener("deviceready",onDeviceReady,false);
// PhoneGap is ready to be used!
//
function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
    StatusBar.overlaysWebView(false);
}
// Called when a photo is successfully retrieved
//
function onPhotoFileSuccess(imageData) {
//            // Get image handle
//            console.log(JSON.stringify(imageData));
    // Get image handle
    //
    if (showFlag === 0) {
        var smallImage = document.getElementById('smallImage');
        // Unhide image elements
        //
        smallImage.style.display = 'block';
        // Show the captured photo
        // The inline CSS rules are used to resize the image
        //
        smallImage.src = imageData;
    } else if (showFlag === 1){
        var smallImage = document.getElementById('smallImage1');
        smallImage.style.display = 'block';
        smallImage.src = imageData;
    } else if (showFlag === 2){
        var smallImage = document.getElementById('smallImage2');
        smallImage.style.display = 'block';
        smallImage.src = imageData;
    }
    showFlag++;
    showPhoto()
}
// A button will call this function
//
function capturePhoto() {
    navigator.camera.getPicture(onPhotoFileSuccess, onFail, { quality: 100, destinationType: Camera.DestinationType.FILE_URI });
}

function onFail(message) {
    alert('Failed because: ' + message);
}

$(document).ready();
// function showPhoto() {
//     $('#add_photo').click(function () {
//         // $('#to_classificator_page').text($(this).text());
//         alert ('We show you flag ' + showFlag);
//     })}

function showPhoto() {
    $("#photos").after("<h1>HELLO WORLD</h1>");
    // $('#photos').append('<div id="jssor_1" style="position:relative;margin:0 auto;top:0px;left:0px;width:1300px;height:900px;overflow:hidden;visibility:hidden; align-content: center">\
    // <div data-u="slides" style="cursor:default;position:relative;top:0px;left:0px;width:1300px;height:900px;overflow:hidden; align-content: center">\
    // <div>\
    // <img id="smallImage" src="" />\
    // </div>\
    // <div>\
    // <img id="smallImage1" src="" />\
    // </div>\
    // <div>\
    // <img id="smallImage2" src="" />\
    // </div>\
    // </div>\
    // <div data-u="navigator" class="jssorb05" style="bottom:16px;right:16px;" data-autocenter="1">\
    // <div data-u="prototype" style="width:16px;height:16px;"></div>\
    // </div>\
    // <span data-u="arrowleft" class="jssora22l" style="top:0px;left:8px;width:40px;height:58px;" data-autocenter="2"></span>\
    // <span data-u="arrowright" class="jssora22r" style="top:0px;right:8px;width:40px;height:58px;" data-autocenter="2"></span>\
    // </div>')
}
