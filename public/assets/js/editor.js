/*eslint-disable*/
//global variable of images


const testFaceData = {
    eyes: [{
        id: 1,
        name: 'circle',
        d: 'm 30.163082,39.448378 c -3.961086,1.06e-4 -7.172211,3.211228 -7.172104,7.172314 -1.07e-4,3.961192 3.211018,7.172314 7.172104,7.17242 1.90224,0 3.726604,-0.755679 5.071619,-2.100697 1.345119,-1.345117 2.100697,-3.169478 2.100697,-5.071723 1.06e-4,-1.902238 -0.755578,-3.726492 -2.100697,-5.071617 -1.345015,-1.34501 -3.169379,-2.100697 -5.071619,-2.100697 z m 38.451692,0 c -1.902241,0 -3.726498,0.755687 -5.071618,2.100697 -1.345014,1.345125 -2.100698,3.169379 -2.100698,5.071617 0,1.902245 0.755684,3.726606 2.100698,5.071723 1.34512,1.345018 3.169377,2.100697 5.071618,2.100697 3.961192,-1.06e-4 7.17221,-3.211228 7.17221,-7.17242 0,-3.961086 -3.211018,-7.172208 -7.17221,-7.172314 z'
    },
    {
        id: 2,
        name: 'sad',
        d: 'm 40.508274,39.479255 c -1.603114,0.02337 -2.836569,5.923572 -6.785011,7.932283 -5.053859,2.571173 -12.641913,-2.207228 -10.015487,2.955435 2.276771,4.475507 7.258542,6.649372 11.837005,5.474092 -2.331613,2.256988 -7.496643,1.64032 -7.496643,1.64032 0,-1e-6 2.432679,1.953223 8.906746,-0.924111 6.474067,-2.877362 6.23436,-10.190773 6.23436,-10.190773 0,0 -0.01862,4.89e-4 -0.02728,5.86e-4 0.08168,-1.775434 -0.283942,-3.603688 -1.15242,-5.310821 -0.574527,-1.129364 -1.052401,-1.583539 -1.501274,-1.576996 z m 19.136238,0 c -0.448872,-0.0065 -0.926747,0.447632 -1.501273,1.576997 -0.868414,1.707006 -1.234216,3.535128 -1.152612,5.31044 -0.002,-1.4e-5 -0.01297,-1.95e-4 -0.01297,-1.95e-4 0,0 -0.239707,7.31341 6.234359,10.190772 6.474068,2.877363 8.906746,0.92411 8.906746,0.924111 0,0 -5.160488,0.618642 -7.491683,-1.635362 4.57324,1.164406 9.544498,-1.009731 11.818122,-5.47905 2.626425,-5.162663 -4.961627,-0.384261 -10.015488,-2.955436 -3.948441,-2.00871 -5.182087,-7.908914 -6.785202,-7.932282 z'
    }],
    nose: [{
        id: 1,
        name: 'Fat Chevron',
        d: 'm 49.289006,52.775781 c -1.830363,1.352183 -3.560814,4.726258 -3.666764,6.951195 l 3.720379,-2.377107 c 0,0 1.929466,1.58011 3.802032,2.271158 0,0 -1.045611,-5.426437 -3.855647,-6.845246 z'
    },
    {
        id: 2,
        name: 'Sharp Chevron',
        d: 'm 50.15698,52.068238 -5.803024,9.439059 5.731972,-3.745998 5.712882,3.605117 z'
    }],
    mouth: [{
        id: 1,
        name: 'Chomper',
        d: 'm 24.768169,65.96555 c 0,0 4.343927,13.031779 14.515073,16.210261 l 3.28443,-3.60228 3.70823,4.767724 3.92013,-5.085572 3.602281,4.661774 3.178483,-4.979622 3.81418,3.49633 c 0,0 11.760384,-4.767724 13.243673,-18.117351 l -5.297471,4.873674 -4.555825,-3.814179 -3.49633,6.462914 -4.873675,-4.449875 -4.661774,5.721268 -4.979625,-5.615319 -5.297471,4.979623 -4.873674,-5.403421 -3.920128,4.237977 z'
    },
    {
        id: 2,
        name: 'Gooey',
        d: 'm 50.3871,64.624213 c -1.57e-4,0.0019 -2.23e-4,0.0036 -3.81e-4,0.0055 -0.767582,9.328312 0.454355,13.274595 1.381111,14.883804 l 2.375221,-3.790665 1.769067,4.075051 c 1.017274,-1.383564 1.931159,-5.077087 1.681327,-14.158821 -2.277354,-0.624208 -4.696923,-0.987068 -7.206345,-1.014901 z m -2.599716,0.09175 c -2.444836,0.199726 -4.786937,0.711186 -6.974793,1.461793 0.02678,1.059689 -0.02242,2.457584 -0.172042,4.275892 -0.604202,7.342775 0.08871,9.99932 0.897598,10.856058 0.18303,-0.0469 0.367084,-0.0927 0.552178,-0.137522 l 1.2928,-4.585455 3.027535,3.634834 c 1.930882,-5.993659 1.31855,-15.289688 1.31855,-15.289688 0,0 0.02868,-0.106826 0.05817,-0.215912 z m 12.066651,1.643181 c -0.390997,2.958915 -1.1415,10.283988 0.244331,15.060042 0.05179,0.178493 0.09406,0.344246 0.129127,0.500108 1.095331,0.327454 2.14681,0.676783 3.152848,1.025771 3.18482,-3.706387 3.571609,-10.479374 3.608703,-12.783812 -0.620642,-0.455697 -1.270514,-0.892449 -1.947975,-1.306534 l -2.285195,2.742958 -1.296233,-4.599571 c -0.524568,-0.227057 -1.060042,-0.440313 -1.605606,-0.638962 z m -22.856332,1.439284 c -0.06702,0.03431 -0.134251,0.06844 -0.200843,0.103189 l -1.254082,4.488754 -2.059173,-2.46067 c -0.05989,0.04264 -0.119555,0.08537 -0.178909,0.128364 -1.204367,7.594554 0.03406,11.522321 1.325606,13.49678 1.057749,-0.392735 2.182565,-0.803376 3.373528,-1.198768 1.902837,-5.391915 -0.560129,-13.225691 -1.006127,-14.557649 z m 32.009888,4.003716 c -3.348968,8.305132 -1.384708,11.878862 -0.493431,12.954712 3.951862,1.309406 6.379509,1.536485 6.379509,-2.125739 0,-3.553161 -2.215329,-7.522472 -5.886078,-10.828973 z m -38.275909,0.381279 c -3.422728,3.227524 -5.472374,7.030099 -5.472374,10.447694 0,3.442285 2.0162,3.450114 5.412102,2.351378 1.923099,-4.113917 0.740552,-10.135988 0.06027,-12.799072 z'
    }]
};


//functions to loop through images 
function eyesLoop(){
    console.log(testFaceData);
    console.log(testFaceData.eyes.length);
    //for loop or look into a array.map()
    for(let i = 0; i < testFaceData.eyes.length; i++){
        console.log(testFaceData.eyes[i].name)

        const eyeSVG = '<svg version="1.1" viewBox="0 0 100 100" width="80" height="80"><g><path style="fill:#000000;stroke:none" id="eyespath" d="' + testFaceData.eyes[i].d + '"></g></svg>';

        var eyeBtn = $('<button>').addClass('btn btn-primary btn-rounded btn-md ml-4 editorBtns').attr("data-index", i).attr("data-type", "eyes").html(eyeSVG)

        
        $("#eyesNav").append(eyeBtn);
        
    }
    
}

function noseLoop(){
    console.log(testFaceData.nose)
    console.log(testFaceData.nose.length);
    //for loop or look into a array.map()
    for(let i = 0; i < testFaceData.nose.length; i++){
        console.log(testFaceData.nose[i].name)

        const noseSVG = '<svg version="1.1" viewBox="0 0 100 100" width="80" height="80"><g><path style="fill:#000000;stroke:none" id="nosepath" d="' + testFaceData.nose[i].d + '"></g></svg>';

        var noseBtn = $('<button>').addClass('btn btn-primary btn-rounded btn-md ml-4 editorBtns').attr("data-index", i).attr("data-type", "nose").html(noseSVG)

        
        $("#noseNav").append(noseBtn);

    }
}

function mouthLoop(){
    console.log(testFaceData.mouth)
    for(let i = 0; i < testFaceData.mouth.length; i++){
        console.log(testFaceData.mouth[i].name)

        const mouthSVG = '<svg version="1.1" viewBox="0 0 100 100" width="80" height="80"><g><path style="fill:#000000;stroke:none" id="mouthpath" d="' + testFaceData.mouth[i].d + '"></g></svg>';

        var mouthBtn = $('<button>').addClass('btn btn-primary btn-rounded btn-md ml-4 editorBtns').attr("data-index", i).attr("data-type", "mouth").html(mouthSVG)

        
        $("#mouthNav").append(mouthBtn);
    }
    
}


//function to save face stencil
// function savePumpkin(){
//     $('#saveBtn').on("submit", function(event) {
//         event.preventDefault();

//         let newStencil = {
//             pumpkin_name: $().val().trim(),

//         };
//         console.log(newStencil)
//         //send stencil to database
//         $.ajax("/api/pumpkin", {
//             type: "",
//             data: newStencil
//         }).then(function() {
//             console.log("Saved new stencil")
//             location.reload();
//         });
//     });

// }

// //function to reset stencil
// function resetPumpkin(){

// }

// $('#eyesBtn').on('click', function (event){
//     event.preventDefault();
//     $('#eyespath').attr('d', eyes);

// })


////////CLICK EVENTS FOR EDITOR PAGE///////////
$(document).ready(function () {
    // onclick for eyes
    //show items for all the eyes
    

    $('#eyesBtn').on('click', function (event) {
        event.preventDefault();
        console.log("Eyes button clicked");
        $("#eyesNav").removeClass("hide");
        $("#noseNav").addClass("hide");
        $("#mouthNav").addClass("hide");
    });

    //on click for nose
    //show items for nose
    $('#noseBtn').on('click', function (event) {
        event.preventDefault();
        console.log("Nose button clicked");
        $("#noseNav").removeClass("hide");
        $("#eyesNav").addClass("hide");
        $("#mouthNav").addClass("hide");
        

    });

    //on click for mouth
    //show items for mouth
    $('#mouthBtn').on('click', function (event) {
        event.preventDefault();
        console.log("Mouth button clicked");
        $("#mouthNav").removeClass("hide");
        $("#noseNav").addClass("hide");
        $("#eyesNav").addClass("hide");

    });

    //on click for save button
    $('#saveBtn').on('click', function (event) {
        event.preventDefault();
        console.log("Save button clicked");
        savePumpkin();

    });

    //on click for reset button
    $('#resetBtn').on('click', function (event) {
        event.preventDefault();
        console.log("Reset button clicked");
        resetPumpkin();

    });
  
})

eyesLoop();
noseLoop();
mouthLoop();
