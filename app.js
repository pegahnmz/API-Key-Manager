let users =[
    {
        id:1,
        username:"pegah1",
        apikey:"gvhjjkhjkk",
        apisecret:"jhhygyjko"
    },
    {
        id:2,
        username:"pegah2",
        apikey:"gvhjjkhjkk",
        apisecret:"jhhygyjhlko"
    },
    {
        id:3,
        username:"pegah3",
        apikey:"gvhjjkhjkk",
        apisecret:"jhhygyjhko"
    },
    {
        id:4,
        username:"pegah4",
        apikey:"gvhjjkhjkk",
        apisecret:"jhhygyjhlko"
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
    if(!username.value || username.value===" "){
        toast.Show("username is empty");
    }
    else if(!apikey.value || apikey.value===" "){
        toast.Show("apikey is empty");
    }
    else if(!apisecret.value || apisecret.value===" "){
        toast.Show("api secret is empty");
    }else if(editing.on_edit === true){
        edit_element(editing.edit_id, username.value, apikey.value, apisecret.value);
        username.value="";
        apikey.value="";
        apisecret.value="";
    }
    else{
        addtotable(username.value, apikey.value, apisecret.value)
        username.value="";
        apikey.value="";
        apisecret.value="";
    }
    
})
function createuser(id,username,apikey,apisecret){
    const newuser={
        id:id,
        username:username,
        apikey:apikey,
        apisecret:apisecret
    }
    
    
    return newuser;

}

function addtotable(username,apikey,apisecret){
    const newuser = createuser((Date.now()),username,apikey,apisecret);
    users.push(newuser);
    renderAllUsers(newuser);
    
}

function renderAllUsers(){
    tbody.innerHTML="";
    for(let i=0; i<(users.length) ; i++){
        //renderUsers(users[i]);

        let newchild = document.createElement("tr")
         newchild.innerHTML=`
    
                                <td>${i+1}</td>
                                <td>${users[i].username}</td>
                                <td>${users[i].apikey}</td>
                                <td>${users[i].apisecret}</td>
                                <td class="btn-grp">
                                    <Button class="table-btn delete-btn" onclick="deleterow(${users[i].id})">Delete</Button>
                                    <button class="table-btn edit-btn" onclick="editrow(${users[i].id})" >Edit</button>
                                </td>
                            
                            `;
       tbody.append(newchild);
    }
}
/*
function renderUsers(user){
    let newchild = document.createElement("tr")
    
    newchild.innerHTML=`
    
                                <td>${user.id}</td>
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
*/

let editing={
    on_edit:false,
    edit_id:0
}


function editrow(ev){
    let temp = users.filter( x => x.id === ev)
    username.value = temp[0].username;
    apikey.value = temp[0].apikey;
    apisecret.value = temp[0].apisecret;
    editing.on_edit=true;
    editing.edit_id = ev;
}

function edit_element(id, username, apikey, apisecret){
    for(let i=0 ; i<users.length ; i++){
        if(users[i].id === id){
            users[i].username = username;
            users[i].apikey = apikey;
            users[i].apisecret = apisecret;
        }
    }
    renderAllUsers();
}

function deleterow(event){
     console.log(event)
    let temp = users.filter(x => x.id !== event)
    users = temp;
     renderAllUsers();
}


const toast = {
    init(){
        this.hideTimeout = null;
        this.element = document.createElement('div');
        this.element.className = 'toast';
        document.body.appendChild(this.element);
    },
    Show(message){
        clearTimeout(this.hideTimeout);
        this.element.textContent = message;
        this.element.className = 'toast toast-visible';
        this.hideTimeout = setTimeout(() => {
            this.element.classList.remove('toast-visible');
        },3000);
    }
}
document.addEventListener('DOMContentLoaded', ()=> toast.init())