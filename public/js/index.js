document.getElementById("footer-current-year").innerHTML = new Date().getFullYear();

today = new Date();
var enLabel = document.getElementById("x-year-en");
var krLabel = document.getElementById("x-year-kr");
if (today < new Date(2022, 06, 15)) {
  enLabel.innerHTML = "first-year";
  krLabel.innerHTML = "1";
} else if (today < new Date(2023, 06, 15)) {
  enLabel.innerHTML = "second-year";
  krLabel.innerHTML = "2";
} else if (today < new Date(2024, 06, 15)) {
  enLabel.innerHTML = "third-year";
  krLabel.innerHTML = "3";
} else {
  enLabel.innerHTML = "fourth-year";
  krLabel.innerHTML = "4";
}

function toggleAboutLanguage(checkbox) {
  var on = document.getElementsByClassName("en");
  var off = document.getElementsByClassName("kr");
  if (checkbox.checked) {
    off = document.getElementsByClassName("en");
    on = document.getElementsByClassName("kr");
  }
  for (var i = 0; i < off.length; i++)
    off[i].style.display = "none";
  for (var i = 0; i < on.length; i++)
    on[i].style.display = "block";
  return true;
}

AOS.init({ once: true, });
