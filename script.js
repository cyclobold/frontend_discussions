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

const getUsersBtn = document.querySelector("#get-users-btn");

getUsersBtn.onclick = function(){

    axios.get("http://localhost:3000/get-users?email=jane@email.com").then((feedback) =>{
            //
            users = feedback.data;
            console.log(feedback);

            tableCode = `<table>
                            <thead>
                                <th>First name</th>
                                <th>Other name</th>
                                <th>Email</th>
                            </thead>
                            <tbody>
                            `;
            for(let i = 0; i < users.length; i++){

                tableCode += `<tr>
                                    <td>${users[i]['firstname']}</td>
                                    <td>${users[i]['othername']}</td>
                                    <td>${users[i]['email']}</td>
                              </tr>`

            }


            tableCode += `</tbody></table>`;

            document.querySelector("#users-area").innerHTML = tableCode;

        })    


}

