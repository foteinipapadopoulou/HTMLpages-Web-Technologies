/*Change background-image on header depending the day */
function changeBackgroundPerDay(){
    
    let d=new Date();
    let day=d.getDay();
    let container=document.querySelector("header");
    let datetext=document.getElementById("date");
    datetext.style.textAlign="right";
    datetext.style.paddingRight= "10px";
    datetext.style.display="inline";
    datetext.innerHTML=d.toLocaleDateString();
    
    console.log(d.getDay());
   
    if(day===0){
        container.style.background="url(images/ai-background.jpg) no-repeat";
        container.style.backgroundSize="100% 100%";
        
    }else if(day===1){
        container.style.background="url(images/ai-background-2.jpg) no-repeat";
        
    }else if(day===2){
        container.style.background="url(images/ai-background-3.jpg) no-repeat";
        container.style.backgroundSize="100% 100%";
        
    }else if(day===3){
        container.style.background="url(images/ai-background-5.jpg) no-repeat ";
        container.style.backgroundSize="100% 100%";
        
    }else if (day===4){
        container.style.background="url(images/ai-background-6.jpg) no-repeat";
        container.style.backgroundSize="100% 100%";
        
    }else if (day===5){
        container.style.background="url(images/background-7.jpg) no-repeat";
        container.style.backgroundSize="100%";
        
    }else if(day===6){
        
       container.style.background="url(images/ai-microsoft.jpg) no-repeat";
       container.style.backgroundSize="100% 100%";
             
    }
}

changeBackgroundPerDay();

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

/**Checks if email,firstname or lastname is empty */
function checkForEmptyInputs(){
    let firstname=document.getElementById("firstname");
    let lastname=document.getElementById("lastname");
    let email=document.getElementById("email");
    return firstname.value==="" || lastname.value==="" || email.value==="";
}

/**Displays the last time the document was modified */
document.getElementById("date-modified").innerHTML="Tελευταία ενημέρωση σελίδας: "+new Date(document.lastModified).toLocaleDateString();

/**Make every lowercase letter to uppercase in input field */
var input=document.querySelectorAll("#contactform input[type=text]");
if(input){
    inputToUppercase();
}

function inputToUppercase(){
    for(let i = 0; i < input.length; i++){
        input[i].addEventListener("keyup",function(event){
            input[i].value=input[i].value.toUpperCase();
        });
    }
}
var allinputs=document.querySelectorAll("#contactform input[type=text],input[type=email]");

function deleteStyles(){
    for(let i = 0; i < input.length; i++){
        allinputs[i].style.background="none";
        allinputs[i].style.border="none";
        allinputs[i].style.borderBottom="1px solid #1089ff";
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
            
            displayWarningEmail.style.fontSize="80%";
            displayWarningEmail.style.textDecoration="underline";
            displayWarningEmail.innerHTML="Το email πρέπει να είναι στην ακόλουθη μορφή: somebody@something.com"
        }else{
            email.style.border="1px solid green";
            email.style.background="initial";
            displayWarningEmail.innerHTML="";
        }
    });
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


/**Alters the date area to time when mouse enter the date or leave  */
var datetext=document.getElementById("date");
datetext.addEventListener("mouseenter",function (){
    datetext.innerHTML=new Date().toLocaleTimeString();
});
datetext.addEventListener("mouseleave",function(){
    datetext.innerHTML=new Date().toLocaleDateString();
});
