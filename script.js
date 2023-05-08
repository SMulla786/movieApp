// Load existing registrations from local storage
const existingRegistrations = JSON.parse(
  localStorage.getItem("registrations")
) || [
  {
    id: 1,
    name: "Mulla Suhel Faiyyaj",
    age: 22,
    username: "Smulla786",
    password: "Suhel@123",
  },
];
let lastId = existingRegistrations.length
  ? existingRegistrations[existingRegistrations.length - 1].id
  : 0;

// Handle form submission
var arr = [
  "https://m.media-amazon.com/images/I/81KJ-sK0YpS._SY879_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_.jpg",
];
const btn = document.getElementById("registerBtn");
btn.onclick = function () {
  // Create new registration object with unique ID
  const newRegistration = {
    id: ++lastId,
    name: document.getElementsByName("name")[0].value,
    age: document.getElementsByName("age")[0].value,
    username: document.getElementsByName("username")[0].value,
    password: document.getElementsByName("password")[0].value,
  };

  // Add new registration to existing registrations and save to local storage
  existingRegistrations.push(newRegistration);
  localStorage.setItem("registrations", JSON.stringify(existingRegistrations));

  // Clear form

  console.log("New registration:", newRegistration);
  console.log("All registrations:", existingRegistrations);
};
function checkUsername(username) {
  // Get the list of registered users from local storage

  // Check if the username already exists in the list
  for (let i = 0; i < existingRegistrations.length; i++) {
    if (existingRegistrations[i].username === username) {
      alert("username already exist");
      document.getElementsByName("username")[0].value = "";
      return true; // Username already exists
    }
  }

  return false; // Username does not exist
}
document.getElementsByName("username")[0].addEventListener("blur", () => {
  // if (checkUsername(document.getElementsByName("username")[0].value)) {
  //   alert("Username already exist");
  // } else {
  //   event.target.setCustomValidity("");
  // }
  checkUsername(document.getElementsByName("username")[0].value);
});
const signInBtn = document.getElementById("signInBtn");
signInBtn.onclick = function () {
  const username = document.getElementsByName("signInUsername")[0].value;
  const password = document.getElementsByName("signInPassword")[0].value;

  // Check if the entered username and password match with an existing registration
  const matchedRegistration = existingRegistrations.find(
    (registration) =>
      registration.username === username && registration.password === password
  );

  if (matchedRegistration) {
    alert(`Welcome ${matchedRegistration.name} !`);
    // Clear sign-in form
    document.getElementById("signInForm").reset();
  } else {
    alert("Invalid username or password!");
  }
};
