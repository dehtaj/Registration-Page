function loginValidation(){
    var fullname=document.myform.fullname.value;

    var pass=document.myform.password.value;

    var cpass=document.myform.cpassword.value;

    if(fullname == null || fullname==""){
        alert("Name cant be blank");
        return false;
        
    }else if(pass.length<6){
        alert("Password must be 6 character Long");
        return false;
    }else if(pass!=cpass){
        alert("Password not matched");
        return false;
    }
}
