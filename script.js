const firebaseConfig = {
  apiKey: "AIzaSyBmcovIJIXZ00mmhLskgpJpV8i2dsOykk8",
  authDomain: "soil-agent.firebaseapp.com",
  databaseURL: "https://soil-agent-default-rtdb.firebaseio.com",
  projectId: "soil-agent",
  storageBucket: "soil-agent.appspot.com",
  messagingSenderId: "384598497878",
  appId: "1:384598497878:web:d7c83bb8a580836b1bf9f7"
};
   //initailize firebase
   
   firebase.initializeApp(firebaseConfig); 
   
   //reference your firebase
   var soil_Agent=firebase.database().ref('soil Agent');
   document.getElementById("admin-panel").addEventListener('login',login);
   function login(e){
    e.preventDefault();
    var name=getElement
   }

   const getElementVal=(id)=>{
    return document.getElementById(id).value;
   }




   function login() {
  // Implement login functionality
  // Check credentials and redirect to admin or user page accordingly
  // For simplicity, let's assume username "admin" grants admin access
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username.toLowerCase() === "admin" && password === "password") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "user.html";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll('.step');
  let currentStep = 0;

  function scrollToCurrentStep() {
      steps[currentStep].scrollIntoView({ behavior: 'smooth' });
  }

  function handleScroll(event) {
      if (event.deltaY > 0 && currentStep < steps.length - 1) {
          // Scrolling down
          currentStep++;
      } else if (event.deltaY < 0 && currentStep > 0) {
          // Scrolling up
          currentStep--;
      }

      scrollToCurrentStep();
  }

  window.addEventListener('wheel', handleScroll);
  scrollToCurrentStep(); // Scroll to the first step on page load
});
