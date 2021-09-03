document.getElementById('signup-button').addEventListener('click', function () {
    const email = document.getElementById('email')
    const userEmail = email.value;
    const firstName = document.getElementById('f-name')
    const userFname = firstName.value
    const lastName = document.getElementById('l-name')
    const userLname = lastName.value
    const pass = document.getElementById('pass')
    const password = pass.value
    // user pass
    const minLength = 1
    const maxLength = 30
    if (userEmail.length >= minLength ||userEmail.length <= maxLength 
        && userFname >= minLength  || userFname <= maxLength
         && userLname >= minLength || userLname <= maxLength
          && password >= minLength ||password <= maxLength  ) {
        window.location.href = 'insta.html'
    }
    else{
        console.log('wrong')
    }
})

