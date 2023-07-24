function enrollStudent() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var website = document.getElementById("website").value;

  var gender;
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  if (male.checked) {
    gender = "Male";
  } else if (female.checked) {
    gender = "Female";
  } else {
    gender = "";
  }

  var skills = [];
  var react = document.getElementById("react");
  var angular = document.getElementById("angular");
  var vue = document.getElementById("vue");
  if (react.checked) {
    skills.push("React");
  }
  if (angular.checked) {
    skills.push("Angular");
  }
  if (vue.checked) {
    skills.push("Vue");
  }

  displayEnrolledStudent(name, email, website, gender, skills);
}

function displayEnrolledStudent(name, email, website, gender, skills) {
  var resultName = document.getElementById("result-name");
  var resultEmail = document.getElementById("result-email");
  var resultWebsite = document.getElementById("result-website");
  var resultGender = document.getElementById("result-gender");
  var resultSkills = document.getElementById("result-skills");
  var resultImage = document.getElementById("result-image");

  resultName.textContent = name;
  resultEmail.textContent = email;
  resultWebsite.textContent = website;
  resultGender.textContent = gender;
  resultSkills.textContent = skills.join(", ");

  if (gender === "Male") {
    resultImage.innerHTML =
      '<img src="https://onlinemrp.dgip.gov.pk/photoCheck/blank.jpg" alt="Male Image" />';
  } else if (gender === "Female") {
    resultImage.innerHTML =
      '<img src="https://t4.ftcdn.net/jpg/01/40/46/19/360_F_140461947_tWo9D0W8QQnrhzhCXJbDHIXblMV9BTZv.jpg" alt="Female Image" />';
  } else {
    resultImage.innerHTML = "";
  }
}
