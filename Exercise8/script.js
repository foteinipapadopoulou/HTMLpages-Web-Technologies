
var menu=document.querySelector(".menu");
function displayMenu(){
    menu.style.display="block";
}
function closeMenu(){
    menu.style.display="none";
}
var header=document.querySelector("h1");

header.addEventListener("mouseover",function(){
    header.style.fontSize="45px";
});
header.addEventListener("mouseleave",function(){
    header.style.fontSize="40px";
})

/*Displays a confirm popup box when reset button is clicked*/
var el=document.querySelector("input[type=reset]");
if(el){
    el.addEventListener("click", function(event){
        if(!confirm("Θέλετε να επαναφέρετε τη φόρμα επικοινωνίας;")){
            event.preventDefault();
           
        }else{
            deleteStyles();
        }
    });
}
/**Displays a confirm popup box when submit button is clicked */
var elsubmit=document.querySelector("input[type=submit]");
if(elsubmit){
    elsubmit.addEventListener("click", function(event){
        if(!checkForEmptyInputs()){
            if(!confirm("Θέλετε να αποστείλετε τη φόρμα επικοινωνίας;")){
                event.preventDefault();
            }
        }else{
            warningInputs();
            alert("Πρέπει να συμπληρώσετε όλα τα απαραίτητα πεδία");
            event.preventDefault();
        }
    });
}

var input=document.querySelectorAll("#contactform input[type=text],input[type=email]");


function deleteStyles(){
    for(let i = 0; i < input.length; i++){
        input[i].style.background="transparent";
        input[i].style.border="none";
    }
}

/**When typing in firstname input ,changing borders to green */
var firstname=document.getElementById("firstname");
if(firstname){
    firstname.addEventListener("keyup",function(){
        if(firstname.value!==""){
            firstname.style.border="1px solid green";
        }
    });
}
/**When typing in lastname input ,changing borders to green */
var lastname=document.getElementById("lastname");
if(lastname){
    lastname.addEventListener("keyup",function(){
        if(lastname.value!==""){
            lastname.style.border="1px solid green";
        }
    });
}

/**Checks if email,firstname or lastname is empty */
function checkForEmptyInputs(){
    let firstname=document.getElementById("firstname");
    let lastname=document.getElementById("lastname");
    let email=document.getElementById("email");
    return firstname.value==="" || lastname.value==="" || email.value==="";
}

/**Changes colors and background on input boxes when there's a warning */
function warningInputs(){
    let firstname=document.getElementById("firstname");
    if(firstname.value===""){
        firstname.style.background="rgb(255, 238, 206)";
        firstname.style.border="1px solid red";
    }
    let lastname=document.getElementById("lastname");
    if(lastname.value===""){
        lastname.style.background="rgb(255, 238, 206)";
        lastname.style.border="1px solid red";
    }
    let email=document.getElementById("email");
    if(email.value===""){
        email.style.background="rgb(255, 238, 206)";
        email.style.border="1px solid red";
    }
}

/**Checks if email is valid and displays a warning message*/
var email=document.querySelector("#contactform input[type=email]");
var displayWarningEmail=document.createElement("check-email");


if(email){
    document.getElementById("text-email").appendChild(displayWarningEmail);
    email.addEventListener("keyup",function(){
        let regex=/\S+@\S+\.\S+/;
        if(!regex.test(email.value)){
            email.style.border="1px solid red";
            email.style.background="rgb(255, 238, 206)";
            displayWarningEmail.display="block";
            displayWarningEmail.style.fontSize="80%";
            displayWarningEmail.style.color="red"
            displayWarningEmail.innerHTML="<br>Το email πρέπει να είναι στην ακόλουθη μορφή: somebody@something.com"
        }else{
            email.style.border="1px solid green";
            email.style.background="initial";
            displayWarningEmail.innerHTML="";
        }
    });
}