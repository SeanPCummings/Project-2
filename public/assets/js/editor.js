/*eslint-disable*/

// global faceParts object
let faceParts = null;

// current face data for upload
let currentFace = {
    EyeId: 1,
    NoseId: 1,
    MouthId: 1,
    name: ""
};

//functions to loop through images 
function eyesLoop(){
    //for loop or look into a array.map()
    for(let i = 0; i < faceParts.eyes.length; i++){
        const eyeSVG = '<svg version="1.1" viewBox="0 0 100 100" width="80" height="80"><g><path style="fill:#000000;stroke:none" id="eyespath" d="' + faceParts.eyes[i].assetPath + '"></g></svg>';
        const eyeBtn = $('<button>').addClass('btn btn-primary btn-rounded btn-md ml-4 editorBtns').attr("data-index", i).attr("data-type", "eyes").html(eyeSVG);
        $("#eyesNav").append(eyeBtn);
    }
}

function noseLoop(){
    //for loop or look into a array.map()
    for(let i = 0; i < faceParts.nose.length; i++){
        const noseSVG = '<svg version="1.1" viewBox="0 0 100 100" width="80" height="80"><g><path style="fill:#000000;stroke:none" id="nosepath" d="' + faceParts.nose[i].assetPath + '"></g></svg>';
        const noseBtn = $('<button>').addClass('btn btn-primary btn-rounded btn-md ml-4 editorBtns').attr("data-index", i).attr("data-type", "nose").html(noseSVG);
        $("#noseNav").append(noseBtn);
    }
}

function mouthLoop(){
    for(let i = 0; i < faceParts.mouth.length; i++){
        const mouthSVG = '<svg version="1.1" viewBox="0 0 100 100" width="80" height="80"><g><path style="fill:#000000;stroke:none" id="mouthpath" d="' + faceParts.mouth[i].assetPath + '"></g></svg>';
        const mouthBtn = $('<button>').addClass('btn btn-primary btn-rounded btn-md ml-4 editorBtns').attr("data-index", i).attr("data-type", "mouth").html(mouthSVG);
        $("#mouthNav").append(mouthBtn);
    }
}

// builds thumbnails
function buildThumbnails(){
    eyesLoop();
    noseLoop();
    mouthLoop();
}

//function to reset stencil
function resetPumpkin(){
    $('#eyespath').attr('d', faceParts.eyes[0].assetPath);
    $('#nosepath').attr('d', faceParts.nose[0].assetPath);
    $('#mouthpath').attr('d', faceParts.mouth[0].assetPath);
}

//function to set pumpkin from gallery by id
function setPumpkin(){
    const pumpkinId = $(".mainContainer").data("pumpkinid");
    if (pumpkinId == 0) {return;}
    $.ajax({
        type: "GET",
        url: "/api/pumpkin/" + pumpkinId,    
        success: function(response) {
            console.log(response);
            currentFace.EyeId = response.EyeId;  
            currentFace.NoseId = response.NoseId;  
            currentFace.MouthId = response.MouthId;  

            // search faceParts for matching ids, then set face vector data
            for (let i = 0; i < faceParts.eyes.length; i++){
                if (currentFace.EyeId == faceParts.eyes[i].id){
                    $('#eyespath').attr('d', faceParts.eyes[i].assetPath);
                    break;
                }
            }

            for (let i = 0; i < faceParts.nose.length; i++){
                if (currentFace.NoseId == faceParts.nose[i].id){
                    $('#nosepath').attr('d', faceParts.nose[i].assetPath);
                    break;
                }
            }

            for (let i = 0; i < faceParts.mouth.length; i++){
                if (currentFace.MouthId == faceParts.mouth[i].id){
                    $('#mouthpath').attr('d', faceParts.mouth[i].assetPath);
                    break;
                }
            }
        }
    });
}

//save pumpkin
function savePumpkin() {
    // Send the POST request.
    $.ajax("/api/saveface", {
        type: "POST",
        data: {val: JSON.stringify(currentFace)}
    }).then(
        function() {
        // Reload the page
        location.reload();
        }
    );
}

//run startUp at ready
$(document).ready(function () {
    startUp();
});

// ajax call to get faceparts
function startUp(){
    $.ajax({
        type: "GET",
        url: "/api/faceparts",    
        success: function(response) {
            console.log(response);
            faceParts = response;
            buildThumbnails();
            resetPumpkin();
            setPumpkin();
            setUpClickEvents();
        }
      });
}

////////CLICK EVENTS FOR EDITOR PAGE///////////
function setUpClickEvents(){
    //on click for eyes
    // show items for eyes
    $('#eyesBtn').on('click', function (event) {
        event.preventDefault();
        $("#eyesNav").removeClass("hide");
        $("#noseNav").addClass("hide");
        $("#mouthNav").addClass("hide");
    });

    //on click for nose
    //show items for nose
    $('#noseBtn').on('click', function (event) {
        event.preventDefault();
        $("#noseNav").removeClass("hide");
        $("#eyesNav").addClass("hide");
        $("#mouthNav").addClass("hide");
    });

    //on click for mouth
    //show items for mouth
    $('#mouthBtn').on('click', function (event) {
        event.preventDefault();
        $("#mouthNav").removeClass("hide");
        $("#noseNav").addClass("hide");
        $("#eyesNav").addClass("hide");
    });

    //on click for save button
    $('#saveBtn').on('click', function (event) {
        event.preventDefault();
        const userid = parseInt(event.currentTarget.dataset.userid);
        let name = $("#designName").val().trim();
        currentFace.name = name;
        currentFace.UserId = userid;
        savePumpkin();
        $('.alert').hide().show();
    });

    // on click for thumbnails
    $('.editorBtns').on('click', function (event) {
        event.preventDefault();
        const target = event.currentTarget;
        const index = target.dataset.index;
        const type = target.dataset.type;
      
        switch (type) {
          case 'eyes': $('#eyespath').attr('d', faceParts.eyes[index].assetPath); 
          // active face part
          currentFace.EyeId = faceParts.eyes[index].id;  
          break;
          case 'nose': $('#nosepath').attr('d', faceParts.nose[index].assetPath);           
          currentFace.NoseId = faceParts.nose[index].id;  
          break;
          case 'mouth': $('#mouthpath').attr('d', faceParts.mouth[index].assetPath);           
          currentFace.MouthId= faceParts.mouth[index].id;  
          break;
        }
    });
}





