document.getElementById('login-button').addEventListener('click', function () {
    const email = document.getElementById('email')
    const userEmail = email.value;
    const pass = document.getElementById('pass')
    const password = pass.value
    // user pass
    const minLength = 1
    const maxLength = 30
    if (userEmail.length >= minLength ||userEmail.length <= maxLength 
     
          && password >= minLength ||password <= maxLength  ) {
        window.location.href = 'insta.html'
    }
    else{
        console.log('wrong')
    }
})