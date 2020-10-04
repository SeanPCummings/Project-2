$('#add-user').on('click', function (event) {
  event.preventDefault();

  const newAccount = {
    // firstName: $('#inputFirst').val().trim(),
    // lastName: $('#inputLast').val().trim(),
    email: $('#inputEmail').val().trim(),
    password: $('#inputPassword').val().trim()
  };
  // in case we want to keep first and last name add && newAccount.lastName.length > 0 && newAccount.firstName.length > 0
  if (newAccount.password.length > 0 && newAccount.email.length > 0 && newAccount.password.length > 0) {
    $.ajax({
      type: 'POST',
      url: '/api/register',
      data: newAccount
    }).then(() => {
      window.location.href = '/';
    });
  } else {
    console.log('**Please fill out entire form**');
    $('#create-err-msg').empty('').text('**Please fill out entire form**');
  }
});

$('#update-user').on('click', function (event) {
  event.preventDefault();

  const id = $(this).data('id');

  // capture All changes
  const changeUser = {
    // firstName: $('#inputFirst').val().trim(),
    // lastName: $('#inputLast').val().trim(),
    email: $('#inputEmail').val().trim(),
    password: $('#inputPassword').val().trim()
  };
  $('#err-msg').empty('');
  // $('#change-user-modal').modal('show');
  console.log(changeUser);

  if (changeUser.password.length > 0 && changeUser.email.length > 0 && changeUser.password.length > 0 && changeUser.lastName.length > 0 && changeUser.firstName.length > 0) {
    $.ajax({
      type: 'PUT',
      url: `/api/user/${id}`,
      data: changeUser
    }).then((result) => {
      console.log('Updated user:', result);
      // Reload the page to get the updated list
      window.location.href = '/logout';
    });
  } else {
    console.log('**Please fill out entire form**');
    $('#update-err-msg').empty('').text('**Please fill out entire form**');
  }
});

// DELETE   ***************************************************
$('#delete-user').on('click', function (event) {
  event.preventDefault();
  $('#err-msg').empty('');
  $('#delete-user-modal').modal('show');
});

$('#confirm-delete').on('click', function (event) {
  event.preventDefault();

  const id = $(this).data('id');

  const deleteUser = {
    email: $('#userEmail').val().trim(),
    password: $('#userPassword').val().trim()
  };

  if (deleteUser.email.length > 0 && deleteUser.password.length > 0) {
    $.ajax({
      type: 'POST',
      url: '/api/user/confirm',
      data: deleteUser
    }).then((result) => {
      if (result) {
        $.ajax(`/api/user/${id}`, {
          type: 'DELETE'
        }).then(() => {
          console.log('Deleted user', deleteUser);
          // Reload the page to get the updated list
          window.location.href = '/logout';
        });
      } else {
        $('#err-msg').empty('').text('Wrong credentials!');
      }
    });
  } else {
    console.log('fill out entire form');
    $('#err-msg').empty('').text('fill out entire form');
  }
});

$('#register').on('click', function (event) {
  event.preventDefault();
  window.location.href = '/register';
});

$('#login-modal').on('click', function (event) {
  event.preventDefault();
  $('#user-info').modal('show');
});

$('#go-home').on('click', function (event) {
  event.preventDefault();
  window.location.href = '/';
});

$('#login').on('click', function (event) {
  event.preventDefault();

  const user = {
    email: $('#email').val().trim(),
    password: $('#user_password').val().trim()
  };

  $.post('/api/login', user, (result) => {
    // console.log(result);
    if (result.loggedIn) {
      $(document.location).attr('href', '/dashboard');
    } else {
      $('#login-err-msg').empty('').text(result.error);
      $('#user-info').modal('hide');
    }
  });
});

// button example
$('.editorBtns').on('click', function (event) {
  event.preventDefault();

  console.log('Face stencil generated');
  const eyes = 'm 30.163082,39.448378 c -3.961086,1.06e-4 -7.172211,3.211228 -7.172104,7.172314 -1.07e-4,3.961192 3.211018,7.172314 7.172104,7.17242 1.90224,0 3.726604,-0.755679 5.071619,-2.100697 1.345119,-1.345117 2.100697,-3.169478 2.100697,-5.071723 1.06e-4,-1.902238 -0.755578,-3.726492 -2.100697,-5.071617 -1.345015,-1.34501 -3.169379,-2.100697 -5.071619,-2.100697 z m 38.451692,0 c -1.902241,0 -3.726498,0.755687 -5.071618,2.100697 -1.345014,1.345125 -2.100698,3.169379 -2.100698,5.071617 0,1.902245 0.755684,3.726606 2.100698,5.071723 1.34512,1.345018 3.169377,2.100697 5.071618,2.100697 3.961192,-1.06e-4 7.17221,-3.211228 7.17221,-7.17242 0,-3.961086 -3.211018,-7.172208 -7.17221,-7.172314 z';

  const nose = 'm 49.289006,52.775781 c -1.830363,1.352183 -3.560814,4.726258 -3.666764,6.951195 l 3.720379,-2.377107 c 0,0 1.929466,1.58011 3.802032,2.271158 0,0 -1.045611,-5.426437 -3.855647,-6.845246 z';

  const mouth = 'm 24.768169,65.96555 c 0,0 4.343927,13.031779 14.515073,16.210261 l 3.28443,-3.60228 3.70823,4.767724 3.92013,-5.085572 3.602281,4.661774 3.178483,-4.979622 3.81418,3.49633 c 0,0 11.760384,-4.767724 13.243673,-18.117351 l -5.297471,4.873674 -4.555825,-3.814179 -3.49633,6.462914 -4.873675,-4.449875 -4.661774,5.721268 -4.979625,-5.615319 -5.297471,4.979623 -4.873674,-5.403421 -3.920128,4.237977 z';

  $('#eyespath').attr('d', eyes);
  $('#nosepath').attr('d', nose);
  $('#mouthpath').attr('d', mouth);
});

// GET /api/mouth/:id will do for eyes and nose
// button click, button has the database id of face part
