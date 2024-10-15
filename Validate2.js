function loginValidation(){
   
    var name=document.myform.name.value;

   
    if(name == null ||name==""){
        alert("Name cant be blank");
        return false;
        
    }
}
