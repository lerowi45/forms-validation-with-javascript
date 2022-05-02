/*NB: The radio button is not validated

/*validate First name*/
function validateFname() {
var regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
var firstName = document.getElementById("firstname").value;
if(firstName.length == "") {
    document.getElementById("firstNamePrompt").style.color = "red";
    document.getElementById("firstNamePrompt").innerHTML = "Please enter your first name";
    return false;
}
if(firstName.length == 1) {
    document.getElementById("firstNamePrompt").style.color = "red";
    document.getElementById("firstNamePrompt").innerHTML = "Please enter between 1-31 characters";
    return false;
} else {
    if(regex.test(firstName)) {
    document.getElementById("firstNamePrompt").style.color = "green";
    document.getElementById("firstNamePrompt").innerHTML = "valid";
    return true;
    } else {
       document.getElementById("firstNamePrompt").style.color = "red";
       document.getElementById("firstNamePrompt").innerHTML = "you can only use letters, periods(\'.\'), and hyphens(-) in your name";
       return false;
    } 
}
}

/*validate Last name*/
function validateLname() {
regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
var lastName = document.getElementById("lastname").value;
if(lastName.length == "") {
    document.getElementById("lastNamePrompt").style.color = "red";
    document.getElementById("lastNamePrompt").innerHTML = "Please enter your last name";
    return false;
}
if(lastName.length == 1) {
    document.getElementById("lastNamePrompt").style.color = "red";
    document.getElementById("lastNamePrompt").innerHTML = "Please enter between 1-31 characters";
    return false;
} else {
    if(regex.test(lastName)) {
    document.getElementById("lastNamePrompt").style.color = "green";
    document.getElementById("lastNamePrompt").innerHTML = "valid";
    return true;
    } else {
       document.getElementById("lastNamePrompt").style.color = "red";
       document.getElementById("lastNamePrompt").innerHTML = "you can only use letters, periods(\'.\'), and hyphens(-) in your name";
       return false;
    } 
}
}

/*validate Email*/
function validateEmail() {
var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
var email = document.getElementById("email").value;
if(email.length == "") {
    document.getElementById("emailPrompt").style.color = "red";
    document.getElementById("emailPrompt").innerHTML = "Please enter your email";
    return false;
}
if(regex.test(email)) {
    document.getElementById("emailPrompt").style.color = "green";
    document.getElementById("emailPrompt").innerHTML = "valid";
    return true;
} else {
    document.getElementById("emailPrompt").style.color = "red";
    document.getElementById("emailPrompt").innerHTML = "Please enter a valid email:<br>(john@example.com)";
    return false;
}
}

/*confirm Email*/
function confirmEmail() {
var email = document.getElementById("email").value;
var confirmEmail = document.getElementById("confirmemail").value;
if(confirmEmail.length == "") {
    document.getElementById("confirmEmailPrompt").style.color = "red";
    document.getElementById("confirmEmailPrompt").innerHTML = "Please confirm your email";
    return false;
}
if(email === confirmEmail) {
    document.getElementById("confirmEmailPrompt").style.color = "green";
    document.getElementById("confirmEmailPrompt").innerHTML = "valid";
    return true;
} else {
    document.getElementById("confirmEmailPrompt").style.color = "red";
    document.getElementById("confirmEmailPrompt").innerHTML = "Emails do not match";
    return false;
}
}
    
/*validate Password:
Minimum eight characters, at least one uppercase letter,
one lowercase letter, one number and one special character*/
function validatePassword() {
var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
var password = document.getElementById("password").value;
if(password.length == "") {
    document.getElementById("passwordPrompt").style.color = "red";
    document.getElementById("passwordPrompt").innerHTML = "Please create your password";
    return false;
}
if(regex.test(password)) {
    document.getElementById("passwordPrompt").style.color = "green";
    document.getElementById("passwordPrompt").innerHTML = "valid";
    return true;
} else {
    document.getElementById("passwordPrompt").style.color = "red";
    document.getElementById("passwordPrompt").innerHTML = "Your Password must have:<p><ul><li>8 or more characters</li><li>upper & lowercase letters</li><li>at least one number</li><li>at least one symbol</li></ul></p>";
    return false;
}
}

/*confirm Password*/
function confirmPassword() {
var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
var password = document.getElementById("password").value;
var confirmPassword = document.getElementById("confirmpassword").value;
if(confirmPassword.length == "") {
    document.getElementById("confirmPasswordPrompt").style.color = "red";
    document.getElementById("confirmPasswordPrompt").innerHTML = "Please confirm your password";
    return false;
}
if(password === confirmPassword) {
    document.getElementById("confirmPasswordPrompt").style.color = "green";
    document.getElementById("confirmPasswordPrompt").innerHTML = "valid";
    return true;
} else {
    document.getElementById("confirmPasswordPrompt").style.color = "red";
    document.getElementById("confirmPasswordPrompt").innerHTML = "passwords do not match";
    return false;
}
}

/*Message to user after submission*/
function submitMessage() {
var firstName = document.getElementById("firstname").value;
var lastName = document.getElementById("lastname").value;
var fullName = firstName + " " + lastName;
var message = "Thank you, <b><i>" + fullName + "</i></b> for joining the army.<br> Together, let\'s populate heaven.";
document.getElementById("submitmessage").innerHTML = message;
}

/*Display form values*/
function formDetails() {
var formElements = document.getElementById("form").elements; 
var formData = "";
for(i = 0; i < formElements.length; i++) {
    formData += "<b>Type</b> " + formElements[i].type + "&nbsp;&nbsp;";
    formData += "<b>Name</b> " + formElements[i].name + "&nbsp;&nbsp;";
    formData += "<b>Value</b> " + formElements[i].value + "&nbsp;&nbsp;";
    formData += "<br>";
    document.getElementById("formdetails").innerHTML = formData;
}
}
/*end of script*/