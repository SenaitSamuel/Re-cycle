// Form validation code will come here. 
function validateForm() 
{ 
     if( document.myForm.firstName.value == "" ) 
   { 
     alert( "Please provide your first name!" ); 
     document.myForm.firstName.focus() ; 
         return false; 
   }
    
     if( document.myForm.lastName.value == "" ) 
   { 
     alert( "Please provide your last name!" ); 
     document.myForm.lastName.focus() ; 
         return false; 
   }
  
     if( document.myForm.phoneNumber.value == "" || 
           isNaN( document.myForm.phoneNumber.value ))
   { 
     alert( "Please provide a Phone Number " ); 
     document.myForm.phoneNumber.focus() ; 
         return false; 
   }
   
     if (document.myForm.eMail.value === ""|| 
         (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) ;
   { 
     alert( "Please provide your Email!" ); 
     document.myForm.eMail.focus() ; 
         return false; 
    } 
   
   
} 