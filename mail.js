  const firebaseConfig = {
    apiKey: "AIzaSyAu5QO50hIbqK1e1uzrccf39t3MjqaXTLg",
    authDomain: "contactform-2c612.firebaseapp.com",
    databaseURL: "https://contactform-2c612-default-rtdb.firebaseio.com",
    projectId: "contactform-2c612",
    storageBucket: "contactform-2c612.appspot.com",
    messagingSenderId: "559872764537",
    appId: "1:559872764537:web:ec9716dc600a79930b82a8"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
