$('#add-user').on('click', function (event) {
  event.preventDefault();

  const newAccount = {
    username: $('#inputUser').val().trim(),
    email: $('#inputEmail').val().trim(),
    password: $('#inputPassword').val().trim()
  };
  // Make new account
  if (newAccount.password.length > 0 && newAccount.email.length > 0 && newAccount.username.length > 0) {
    $.ajax({
      type: 'POST',
      url: '/api/register',
      data: newAccount,
      success: (result) => {
        window.location.href = '/';
        console.log(result);
      },
      error: (xml, textStatus, errorThrown) => {
        $('#create-err-msg').empty('').text('**' + xml.responseJSON.error + '**');
      }
    });
  } else {
    $('#create-err-msg').empty('').text('**Please fill out entire form**');
  }
});

// Update User
$('#update-user').on('click', function (event) {
  event.preventDefault();

  const id = $(this).data('id');

  // capture All changes
  const changeUser = {
    username: $('#inputUpdateUser').val().trim(),
    email: $('#inputUpdateEmail').val().trim(),
    password: $('#inputUpdatePassword').val().trim()
  };

  $('#err-msg').empty('');
  if (changeUser.email.length > 0 && changeUser.password.length > 0) {
    $.ajax({
      type: 'PUT',
      url: `/api/user/${id}`,
      data: changeUser
    }).then((result) => {
      // Reload the page to get the updated list
      window.location.href = '/logout';
    });
  } else {
    $('#update-err-msg').empty('').text('**Please fill out entire form**');
  }
});

// DELETE   ***************************************************
$('#delete-user').on('click', function (event) {
  event.preventDefault();
  $('#err-msg').empty('');
  $('#delete-user-modal').modal('show');
});

// Confirm Delete
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
          // Reload the page to get the updated list
          window.location.href = '/logout';
        });
      } else {
        $('#err-msg').empty('').text('Wrong credentials!');
      }
    });
  } else {
    $('#err-msg').empty('').text('fill out entire form');
  }
});

// Login modal is now for registering, not logging in, nav
$('#register-modal').on('click', function (event) {
  event.preventDefault();
  $('#user-info').modal('show');
});

// Sign up link, dashboard
$('#sign-up-link').on('click', function (event) {
  event.preventDefault();
  $('#user-info').modal('show');
});

// Actual login
$('#login').on('click', function (event) {
  event.preventDefault();

  const user = {
    email: $('#email').val().trim(),
    password: $('#user_password').val().trim()
  };

  $.post('/api/login', user, (result) => {
    if (result.loggedIn) {
      $(document.location).attr('href', '/gallery');
    } else {
      $('#login-err-msg').empty('').text(result.error);
      $('#user-info').modal('hide');
    }
  });
});
