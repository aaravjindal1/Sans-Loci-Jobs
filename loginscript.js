const emailText = document.getElementById('email');
const passwordText = document.getElementById('password');
const button = document.getElementById('register');
const signup = document.getElementById('signup');

button.addEventListener('click', e => {
    email = emailText.value;
    password = passwordText.value;
    var match = 0;

    db
        .collection('Employers')
        .get()
        .then(snapshot => {
            snapshot.docs.forEach(doc => {
                Realemail = doc.Email;
                Realpassword = doc.Password;
                if(email.equals(Realemail) && password.equals(Realpassword))
                {
                    match = 1;
                    console.log(Realemail);
                console.log(Realpassword);
                }
            });
        })
        .catch(err => console.log(err));

    db
    .collection('Employes')
    .get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => {
            Realemail = doc.Email;
            Realpassword = doc.Password;
            if(email.equals(Realemail) && password.equals(Realpassword))
            {
                match = 2;
                console.log(Realemail);
                console.log(Realpassword);
            }
        });
    })
   .catch(err => console.log(err));

   if(match == 0)
   {
        alert('You password or email is wrong');
        signup.classList.add('shake');
        setTimeout(() => {
            signup.classList.remove('shake');
            // location.reload();
        }, 900);
   }
   else if(match == 1)
   {
       location.replace('Employerhome.html');
   }
   else if(match == 2)
   {
       location.replace('EmployeHome.html');
   }
});