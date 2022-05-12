    const contactForm = document.querySelector("#contactForm");

        const nameInput  = document.querySelector("#fullName");
        const emailInput = document.querySelector("#vEmail");
        const phoneInput = document.querySelector("#vPhone");
        const msgArea    = document.querySelector("#vMsg");


        nameInput.addEventListener("blur", function(){
            const regExp = /^[a-zA-Z ]{2,200}$/;
    
            if(!regExp.test(nameInput.value))
            {
                nameInput.classList.add("is-invalid");
            } else {
                nameInput.classList.remove("is-invalid");
                nameInput.classList.add("is-valid");
            }
        });


        emailInput.addEventListener("blur", function(){
            const regExp = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
            if(!regExp.test(emailInput.value))
            {
                emailInput.classList.add("is-invalid");
            } else {
                emailInput.classList.remove("is-invalid");
                emailInput.classList.add("is-valid");
            }
        });


        phoneInput.addEventListener("blur", function(){
            const regExp = /^\(?\d{4}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
    
            if(!regExp.test(phoneInput.value))
            {
                phoneInput.classList.add("is-invalid");
            } else {
                phoneInput.classList.remove("is-invalid");
                phoneInput.classList.add("is-valid");
            }
        });


        msgArea.addEventListener("blur", function(){

            if(msgArea.value == "" || msgArea.value.length < 2)
            {
                msgArea.classList.add("is-invalid");
            } else {
                msgArea.classList.remove("is-invalid");
                msgArea.classList.add("is-valid");
            }
        });
        
    contactForm.addEventListener("submit", (e)=>{
        //prevent default submit action
        e.preventDefault();
        
        //disable submit button 
        const contactFormBtn = document.querySelector("#contactFormBtn")
        contactFormBtn.setAttribute("disabled", true)

        //add a spinner to the submit button
        contactFormBtn.innerHTML = `<div class="spinner-border"><span class="visually-hidden">Loading...</span></div>`;
        
        //show alert
        setTimeout(showAlert, 1500);
        
        //remove is-valid classes from the form inputs, reset form and enable submit button
        nameInput.classList.remove("is-valid");
        emailInput.classList.remove("is-valid");
        phoneInput.classList.remove("is-valid");
        msgArea.classList.remove("is-valid");
        contactForm.reset();
        contactFormBtn.disabled = false;
    });

    function showAlert(){
        document.querySelector("#response").innerHTML = `
            <div class="alert alert-success">
                Your message has been sent! we will send you a reply shortly.
            </div>
            `;
        contactFormBtn.innerHTML = "Send Message";
        //set time out
        setTimeout(()=>{
            document.querySelector("#response").innerHTML = "";
        }, 3000);
    }