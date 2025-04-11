function validateForm(event) { 
    event.preventDefault();  
 
    const name = document.getElementById("name").value.trim(); 
    const email = document.getElementById("email").value.trim(); 
    const phone = document.getElementById("phone").value.trim(); 
    const destination = document.getElementById("destination").value; 
    const date = document.getElementById("date").value; 
    if (name === "" ) { 
      alert(" Please enter your full name."); 
      return false; 
    } 
    if (name.length < 3) {  
      alert(" Name must be at least 3 characters long.");  
      return false;  
    }  
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;   
    if (!email.match(emailPattern)) {  
    alert(" Invalid email address.");  
    return false;  
    }  
    if (phone.length !== 10 ) { 
    alert(" Please enter a valid 10-digit phone number."); 
    return false; 
    } 
     if (destination === "") { 
      alert(" Please select a destination."); 
      return false; 
    } 
    if (date === "") { 
      alert(" Please select a travel date."); 
      return false; 
    } 
    loadContent('thankyou');
    return true;
    
  }