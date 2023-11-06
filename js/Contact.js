// Get the error elements
var emailError = document.getElementById('email-error');
var nameError = document.getElementById('name-error');
var messageError = document.getElementById('message-error');

// Validate the name
function validateName(){
   // Get the name value
  var name = document.getElementById('name').value;

  // Check if the name is empty
  if(name.length == 0){
    nameError.innerHTML = 'Name is required!';
    return false;
  }
  // Check if the name matches the required format
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Write full name!';
    return false;
  }
  // Set the name error message to indicate success
  nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

// Validate the email
function validateEmail(){
  // Get the email value
  var email = document.getElementById('email').value;

   // Check if the email is empty
  if(email.length == 0){
    emailError.innerHTML = 'Email is required!';
    return false;
  }
   // Check if the email matches the required format
  if(!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
    emailError.innerHTML = 'Email Invalid!';
    return false;
  }
  // Set the email error message to indicate success
  emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

// Validate the message
function validateMessage(){
  // Get the message value
  var message = document.getElementById('message').value;
  // Get the required number of characters
  var required = 30;
  // Calculate the number of characters left
  var left = required - message.length;

  // Check if the message is too short
  if(left > 0){
    messageError.innerHTML = left + ' more characters required!';
    return false;
  }
  // Set the message error message to indicate success
  messageError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

// Validate the form
function validateForm(){
  if(!validateName() || !validateEmail() || !validateMessage()){
    alert('Please fix error to submit.')
  }
}

/*animation footer*/
VanillaTilt.init(document.querySelectorAll(".sci li a"), {
  max: 30,
  speed: 400,
  glare:true,
  "max-glare":1,
});

/*tooltip*/
tippy('.facebook',{
  content:"Facebook",
  placement:'bottom'
})

tippy('.twitter',{
  content:"Twitter",
  placement:'bottom'
})

tippy('.youtube',{
  content:"Youtube",
  placement:'bottom'
})

tippy('.instagram',{
  content:"Instagram",
  placement:'bottom'
})

/* keydown*/
document.addEventListener('keydown', (event) => {
  const key = event.key;

  switch (key) {
    case '1':
      // Переключиться на раздел Home
      window.location.href = 'index.html';
      break;
    case '2':
      // Переключиться на раздел Attractions
      window.location.href = 'Attractions.html';
      break;
    case '3':
      // Переключиться на раздел Food
      window.location.href = 'Food.html';
      break;
    case '4':
      // Переключиться на раздел Team
      window.location.href = 'Team.html';
      break;
    case '5':
      // Переключиться на раздел Contact
      window.location.href = 'Contact.html';
      break;
    case '6':
      // Переключиться на раздел Contact
      window.location.href = 'Game.html';
      break;
    default:
      break;
  }
});