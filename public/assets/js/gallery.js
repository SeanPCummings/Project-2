/*eslint-disable*/

// global faceParts object
let faceParts = null;
let currentFaceId = 0;

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
        const faceBtn = $('<button>').addClass('btn btn-primary btn-rounded btn-md ml-4 editorBtns').attr("data-index", i).attr('title', faceParts[i].name).html(faceSVG);
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
        window.location.href = "/editor/" + currentFaceId;
    });
    
    //on click for new pumpkin button
    $('#newPumpkinBtn').on('click', function (event) {
        event.preventDefault();
        window.location.href = "/editor";
    });

    //on click for download button
    $('#downloadBtn').on('click', function (event) {
        event.preventDefault();
        window.location.href = "/stencil/" + currentFaceId;
    });

    // on click for thumbnails for gallery
    $('.editorBtns').on('click', function (event) {
        event.preventDefault();
        const target = event.currentTarget;
        const index = target.dataset.index;

        // active button
        $(".editorBtns").removeClass("actively");
        target.classList.add("actively");

        // pumpkin face path data
        $('#eyespath').attr('d', faceParts[index].Eye.assetPath); 
        $('#nosepath').attr('d', faceParts[index].Nose.assetPath);           
        $('#mouthpath').attr('d', faceParts[index].Mouth.assetPath);  
        
        currentFaceId = faceParts[index].id;
        console.log(currentFaceId);

    });
}