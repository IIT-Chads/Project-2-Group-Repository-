function checkempty(){
	
  var fname = document.forms["contactForm"]["firstname"].value
  var lname = document.forms["contactForm"]["lastname"].value
  var phone = document.forms["contactForm"]["phone"].value
  var email = document.forms["contactForm"]["email"].value
  var address = document.forms["contactForm"]["address"].value
  
  if ((!fname) || (!lname) || (!phone) || (!email) || (!address) ) {
    alert("Please fill all the fields");
    return false;

  } else{
    alert("You are all signed up! We look forward to meeting you!")
  }
  
}