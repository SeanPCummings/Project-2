/*eslint-disable*/


//function to render users saved stencils

//function to render all premade db stencils










////////CLICK EVENTS FOR GALLERY PAGE///////////
$(document).ready(function () {

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
  
})