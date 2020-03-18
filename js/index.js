(function() {

  // Select form 
  let form = document.querySelector('#message-form')
  
  // Setting submit event on form 
  form.addEventListener('submit', changeText);
 

  // Function gets executed when  submit 
  function changeText(e) {
    e.preventDefault();
    
    // Init my var  to document elements
   let inputField = document.getElementById('message');
   let outputText  = document.getElementsByClassName('message-content text-uppercase')[0];
   let showError= document.querySelector(".feedback");
  
   // Checking if empty string
   if( inputField.value === '')  {
    showError.classList.add('show');
   }else{
    showError.classList.remove('show');
    outputText.textContent = inputField.value;
    inputField.value = ""
   }
  }
})()
