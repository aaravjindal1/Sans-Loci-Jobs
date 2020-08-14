const update = document.getElementById('register');
const nameText = document.getElementById('Cname');
const JobDText = document.getElementById('jobD');
const reqText = document.getElementById('require');
const phoneNumText = document.getElementById('phoneNum');
const emailText = document.getElementById('email');
const backButton = document.getElementById('back');
const Signup = document.getElementById('signup');

update.addEventListener('click', e=>{
  e.preventDefault();
  const name = nameText.value;
  const jobD = JobDText.value;
  const requirement = reqText.value;
  const phoneNum = phoneNumText.value;
  const email = emailText.value;
  var availablity = "";

  job = {
    name: name,
    jobD: jobD,
    requirement: requirement,
    phoneNum: phoneNum,
    email: email
  }

  db
        .collection('Job_Descript')
        .add(job)
        .then(() => {
            console.log("Successfully added");
        })
        .catch(err => {
            console.log(err);
        });

        Signup.classList.add("zoomOut");
        setTimeout(() => {
          location.replace('Employerhome.html');
        }, 900)
});

backButton.addEventListener('click', e=>{
  e.preventDefault();
  location.replace('Employerhome.html');
});