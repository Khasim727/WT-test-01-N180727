function validate(){
    var user=document.getElementById('user').value;
    var mobile=document.getElementById('mobile').value;
    var mp=/^([0-9]{4,4}-[0-9]{4,4}-[0-9]{4,4})|(987[0-9]{7,7})$/
    var p=/^F[a-zA-Z]{4,7}$/;
    if(!p.test(user))
    {
        return false
    }
    if(mobile.length==10)
    {
     if(!mp.test(mobile))
     {
        return false
     }
    }
    else 
    {
        return false
    }
    return true



}
