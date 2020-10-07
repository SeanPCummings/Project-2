/*eslint-disable*/


function buildThumbnails(){

}

//run startUp at ready
$(document).ready(function () {
    startUp();
});

// ajax call to get faceparts
function startUp(){
    $.ajax({
        type: "GET",
        url: "/api/gallery",    
        success: function(response) {
            console.log(response);
            //faceParts = response;
            buildThumbnails();
            setUpClickEvents();
        }
    });
}




////////CLICK EVENTS FOR GALLERY PAGE///////////
function setUpClickEvents() {

    // onclick for "my stencils"
    $('#myStencils').on('click', function (event) {
        event.preventDefault();
        console.log("My Stencil Button clicked");
    });


    //on click "all stencils"
    $('#allStencils').on('click', function (event) {
        event.preventDefault();
        console.log("All stencil button clicked button clicked");
    });

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
}