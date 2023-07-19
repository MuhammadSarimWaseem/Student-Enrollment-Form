function names() {
  var name = document.getElementById("name").value;
  var result1 = document.getElementById("result1");
  result1.innerHTML = name;
}

function emails() {
  var email = document.getElementById("email").value;
  var result2 = document.getElementById("result2");
  result2.innerHTML = email;
}

function websites() {
  var website = document.getElementById("website").value;
  var result3 = document.getElementById("result3");
  result3.innerHTML = website;
}

function genders() {
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  var result4 = document.getElementById("result4");
  var result6 = document.getElementById("result6");
  if (male.checked == true) {
    result4.innerHTML = "Male";
    result6.innerHTML = '<img src="https://onlinemrp.dgip.gov.pk/photoCheck/blank.jpg" />';

  } else if (female.checked == true) {
    result4.innerHTML = "Female";
    result6.innerHTML = '<img src="https://t4.ftcdn.net/jpg/01/40/46/19/360_F_140461947_tWo9D0W8QQnrhzhCXJbDHIXblMV9BTZv.jpg" />';

  }
}

function skills() {
  var react = document.getElementById("react").checked;
  var angular = document.getElementById("angular").checked;
  var vue = document.getElementById("vue").checked;
  var result5 = document.getElementById("result5");

  if (react && !angular && !vue) {
    result5.innerHTML = "React";
  } else if (!react && angular && !vue) {
    result5.innerHTML = "Angular";
  } else if (!react && !angular && vue) {
    result5.innerHTML = "Vue";
  } else if (react && angular && !vue) {
    result5.innerHTML = "React, Angular";
  } else if (!react && angular && vue) {
    result5.innerHTML = "Angular, Vue";
  } else if (react && !angular && vue) {
    result5.innerHTML = "React, Vue";
  } else if (react && angular && vue) {
    result5.innerHTML = "React, Angular, Vue";
  } else {
    result5.innerHTML = "";
  }
}
