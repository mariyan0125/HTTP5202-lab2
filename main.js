window.onload = function() {
  //     MODAL  
    
  //Get the model element
  var modal = document.getElementById('simpleModal');
  //Get open modal button
  var modalBtn = document.getElementById('modalBtn');
  //Get the close button
  var closeBtn = document.getElementsByClassName('closeBtn')[0];
  
  //Listen for a click
  modalBtn.addEventListener('click', openModal);
  // Function to open modal
  function openModal(){
    modal.style.display = 'block';
  }
  
  // Listen for close click
  closeBtn.addEventListener('click', closeModal);
  // Function to close modal
  function closeModal(){
    modal.style.display = 'none';
  }
  // Listen for outside click
  window.addEventListener('click', clickOutside);
  // Function to close modal if outside click
  function clickOutside(e){
    if(e.target == modal){
      modal.style.display = 'none';
    }
  }
  
  
  //         FORM VALIDATION
    
  var formHandle = document.forms.contactUsForm;
  
    formHandle.onsubmit = processForm;
  
    function processForm() {
      var customerName = formHandle.c_Name.value;
      var customerPhone = formHandle.c_Phone.value;
      var customerEmail = formHandle.c_Email.value;
      
      if (customerName === "" || customerName === null || customerName === "Full Name") {
        var nameErrMsg = document.getElementById("errMsg");
        nameErrMsg.style.color = "red";
        nameErrMsg.innerHTML = "Enter your name please"
        formHandle.c_Name.focus();
        return false;
      }
  
      if (customerPhone === "" || customerPhone === null || customerPhone === "Phone Number") {
        var phoneErrMsg = document.getElementById("errMsgP");
        phoneErrMsg.style.color = "red";
        phoneErrMsg.innerHTML = "Please enter your phone";
        formHandle.c_Phone.focus();
        return false;
      }
      if (customerEmail === "" || customerEmail === null || customerEmail === "Email") {
        var emailErrMsg = document.getElementById("errMsgEm");
        emailErrMsg.innerHTML = "Please enter your email address";
        emailErrMsg.style.color = "red";
        formHandle.c_Email.focus();
        return false;
      }
      //validate if checkbox is checked
    
        var errMsgCons= document.getElementById('errMsgCons');
        var consent = document.getElementsByName('consent');
        var redFlag = false;
        for(var i = 0; i < consent.length; i++) {
        if(consent[i].checked == true) {
        redFlag=true;
        }
        }
        if(!redFlag) {
        errMsgCons.style.color="red";
        errMsgCons.innerHTML="Please select yes/no";
        return false;
        }
        
        // hide form and display thanks msg + change heading
    formHandle.style.display = "none";
    document.getElementById("ask").style.display = "none";
    document.getElementById("getInTHeading").innerHTML = "We're always glad to hear from you!";
    var customTh = document.getElementById("thanksCustomer");
    customTh.innerHTML = customerName;
    var thanksMsg = document.getElementById("thanks_msg");
     thanksMsg.style.display = "block";
    return false;
    }
    
  }
  