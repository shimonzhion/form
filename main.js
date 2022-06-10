function clickSubmit() {
  if (check_First_Last_Name() && checkUserAgeover18() && checkUserEmail() && checkPhoneNumber ()) {
    alert("true");
  
    return true;
  }
  alert("false");
  return false;
}

function check_First_Last_Name() {
  var nameRegex = /^[A-Za-z]*$/;
  if (nameRegex.test(first_name.value) && nameRegex.test(last_name.value)) {
    return true;
  }
  return false;
}

function  checkUserAgeover18 (){
    var userAge = new Date (Date_of_birth.value)
    var dateNow = new Date ().getFullYear()
    if(dateNow- userAge.getFullYear()>18){
        return true
    }
    return false
}
 function checkUserEmail(){
     var emailRegex = /^\S+@\S+\.\S+$/
     if (emailRegex.test(email.value)){
         return true
     }
    return false
 }
 function checkPhoneNumber (){
     var tenR
    if(phone.value[0]== 0 && phone.value[1]== 5 && phone.value[2]== 0){
        return true
    }
    return false
 }