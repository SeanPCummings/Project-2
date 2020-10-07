/*eslint-disable*/

// global faceParts object
let faceParts = null;

// face loop
function faceLoop(){
    //for loop or look into a array.map()
    for(let i = 0; i < faceParts.length; i++){
        let faceSVG = '<svg version="1.1" viewBox="0 0 100 100" width="80" height="80">';
        faceSVG += '<image xlink:href="/images/pumpkinthumb.png" width="100" height="100"></image>';
        faceSVG += '<g><path style="fill:#000000;stroke:none" d="' + faceParts[i].Eye.assetPath + '"></g>';
        faceSVG += '<g><path style="fill:#000000;stroke:none" d="' + faceParts[i].Nose.assetPath + '"></g>';
        faceSVG += '<g><path style="fill:#000000;stroke:none" d="' + faceParts[i].Mouth.assetPath + '"></g>';
        faceSVG += '</svg>';
        const faceBtn = $('<button>').addClass('btn btn-primary btn-rounded btn-md ml-4 editorBtns').attr("data-index", i).html(faceSVG);
        $("#galleryThumbs").append(faceBtn);
    }
}


//builds gallery thumbnails
function buildThumbnails(){
    faceLoop();
}

//run startUp at ready
$(document).ready(function () {
    startUp();
});

// ajax call to get faceparts
function startUp(){
    const userId = $(".mainContainer").data("userid");
    $.ajax({
        type: "GET",
        url: "/api/gallery/" + userId,    
        success: function(response) {
            console.log(response);
            faceParts = response;
            buildThumbnails();
            setUpClickEvents();
        }
    });
}




////////CLICK EVENTS FOR GALLERY PAGE///////////
function setUpClickEvents() {

    //on click for edit button
    $('#editBtn').on('click', function (event) {
        event.preventDefault();
        console.log("Edit button clicked");
    });

    //on click for download button
    $('#downloadBtn').on('click', function (event) {
        event.preventDefault();
        console.log("Download button clicked");
    });

    // on click for thumbnails
    $('.editorBtns').on('click', function (event) {
        event.preventDefault();
        const target = event.currentTarget;
        const index = target.dataset.index;
        
        $('#eyespath').attr('d', faceParts[index].Eye.assetPath); 
        $('#nosepath').attr('d', faceParts[index].Nose.assetPath);           
        $('#mouthpath').attr('d', faceParts[index].Mouth.assetPath);           

    });
}