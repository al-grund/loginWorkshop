
function pasuser(form) {
    if (form.id.value=="Joe") { 
    if (form.pass.value=="123") {              
    location="Welcome.html" 
    } else {
    alert("Invalid Password")
    }
    } else {  alert("Invalid UserID")
    }
    }