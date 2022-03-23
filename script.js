const registrationForm = document.querySelector("#registration-form");

registrationForm.addEventListener("submit", function(e){
    e.preventDefault();
    
    email = this.email.value.trim();
    password = this.password.value.trim();

    if(email.length > 0 && password.length > 0){

        const params = {
            userEmail: email,
            userPassword: password
        }

        axios.post("http://localhost:3000/submit-registration", params).then((feedback) =>{
            //
            console.log(feedback);

        })

    }










})

