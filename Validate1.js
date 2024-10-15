function loginValidation(){

    var username=document.myform.username.value;

   
    var pass=document.myform.password.value;


    if(username == null || username==""){
        alert("Name cant be blank");
        return false;
        
    }else if(pass.length<6){
        alert("Password must be 6 character Long");
        return false;
   
    }
}
