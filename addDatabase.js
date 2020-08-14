const button = document.getElementById('register');
const fNameElement = document.getElementById('fname');
const lNameElement = document.getElementById('lname');
const emailElement = document.getElementById('email');
const passwordElement = document.getElementById('password');
const form = document.querySelector('form');
const Signup = document.getElementById('signup');
const body = document.querySelector('body');
const city = document.getElementById('city')

form.addEventListener('submit', e=>{
    e.preventDefault();
    const email = emailElement.value;
    const password = passwordElement.value;
    const fName = fNameElement.value;
    const lName = lNameElement.value;
    const City = city.value;

    if(document.getElementById('employe').checked)
    {
        const employe = {
            Email: email,
            LName: lName,
            FName: fName,
            Password: password,
            City: City
        }

        db
        .collection('Employes')
        .add(employe)
        .then(() => {
            console.log("Successfully added");
        })
        .catch(err => {
            console.log(err);
        });

        localStorage.setItem('Email', email);
        localStorage.setItem('LName', lName);
        localStorage.setItem('FName', fName);
        localStorage.setItem('City', City);
        localStorage.setItem('Type', 'Employe')
    }
    else if(document.getElementById('employer').checked) 
    {
        const employer = {
            Email: email,
            LName: lName,
            FName: fName,
            Password: password,
            City: City
        }

        db
        .collection('Employers')
        .add(employer)
        .then(() => {
            console.log("Successfully added");
        })
        .catch(err => {
            console.log(err);
        });
        localStorage.setItem('Email', email);
        localStorage.setItem('LName', lName);
        localStorage.setItem('FName', fName);
        localStorage.setItem('City', City);
        localStorage.setItem('Type', 'Employer')
        localStorage.setItem('ProfileSetup', 'False')
    }
    else
    {
        const employe = {
            Email: email,
            LName: lName,
            FName: fName,
            Password: password,
            City: City
        }

        db
        .collection('Employes')
        .add(employe)
        .then(() => {
            console.log("Successfully added");
        })
        .catch(err => {
            console.log(err);
        });

        localStorage.setItem('Email', email);
        localStorage.setItem('LName', lName);
        localStorage.setItem('FName', fName);
        localStorage.setItem('City', City);
        localStorage.setItem('Type', 'Employe')
    }

        Signup.classList.add("zoomOutUp");
        setTimeout(() => {
            
            if(document.getElementById('employer').checked)
            {
                location.replace('employer_profile.html');
            }
            else if(document.getElementById('employe').checked)
            {
                location.replace('employee_profile.html');
            }
        }, 900);
});

