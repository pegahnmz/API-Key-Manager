let users =[
    {
        number:1,
        username:"pegah",
        apikey:"gvhjjkhjkk",
        apisecret:"jhhygyjh*****lko"
    },
    {
        number:2,
        username:"pegah",
        apikey:"gvhjjkhjkk",
        apisecret:"jhhygyjh*****lko"
    },
    {
        number:3,
        username:"pegah",
        apikey:"gvhjjkhjkk",
        apisecret:"jhhygyjh*****lko"
    },
    {
        number:4,
        username:"pegah",
        apikey:"gvhjjkhjkk",
        apisecret:"jhhygyjh*****lko"
    }
]



const username = document.querySelector("#username");
const apisecret = document.querySelector("#apisecret");
const apikey = document.querySelector("#apikey");
const submitbtn = document.querySelector("#submitbtn");
const form = document.querySelector("#form");
const tbody = document.querySelector("#tbody");

renderAllUsers();


form.addEventListener("submit", function(event){
    event.preventDefault();
    if(!username.value){
        alert("username is empty");
    }
    else if(!apikey.value){
        alert("apikey is empty");
    }
    else if(!apisecret.value){
        alert("api secret is empty");
    }else{
        addtotable(username.value, apikey.value, apisecret.value)
    }
    
})
function createuser(number,username,apikey,apisecret){
    const newuser={
        number:number,
        username:username,
        apikey:apikey,
        apisecret:apisecret
    }
    
    
    return newuser;

}

function addtotable(username,apikey,apisecret){
    const newuser = createuser((users.length+1),username,apikey,apisecret);
    users.push(newuser);
    renderUsers(newuser);
    
}

function renderAllUsers(){
    tbody.innerHTML="";
    for(let i=0; i<(users.length) ; i++){
        renderUsers(users[i]);
    }
}

function renderUsers(user){
    let newchild = document.createElement("tr")
    newchild.innerHTML=`
    
                                <td>${user.number}</td>
                                <td>${user.username}</td>
                                <td>${user.apikey}</td>
                                <td>${user.apisecret}</td>
                                <td class="btn-grp">
                                    <Button class="table-btn delete-btn" onclick="deleterow(event)">Delete</Button>
                                    <button class="table-btn edit-btn" id="editbtn">Edit</button>
                                </td>
                            
    `;
    tbody.append(newchild);
}







function deleterow(event){
     //event.target.parentElement.parentElement.firstElementChild.nextElementSibling
     
     let number_d = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
     const username_d = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
     const apikey_d = event.target.parentElement.previousElementSibling.previousElementSibling.innerHTML;
     const apisecret_d = event.target.parentElement.previousElementSibling.innerHTML;
     number_d =parseInt(number_d);
     const deleteitem =`number,${number_d},username,${username_d},apikey,${apikey_d},apisecret,${apisecret_d}`
    //console.log(deleteitem)
     const v = users.filter(function(ele){
       //  console.log(Object.entries(ele).toString())
        return Object.entries(ele).toString() !== deleteitem;
         
       // return ele !== deleteitem;
    });
    users = v;
     renderAllUsers();
}
