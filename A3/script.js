document.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("Text", event.target.innerHTML);
});
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

const checkAge = document.getElementById("check-age");
const ageBlur = (num) => {
  const n = num.value;
  if(n<1){
    checkAge.style.display = "inline";
  }
}
 const checkPhone = document.getElementById("check-phone");
  const numBlur = (pho) => {
    const p = pho.value;
    if(!p.match(/^[789]\d{9}$/g)){
      checkPhone.style.display = "inline";
    }
  }
  const onFocus = (el) => {
    switch (el.name) {
      case "Age": {
        checkAge.style.display = "none";
        break;
      }
      case "phone": {
        checkPhone.style.display = "none";
        break;
      }
      default: {
        break;
      }
    }
  };

function submitForm(){
  var name = document.getElementById("name").value;
localStorage.setItem("name", name);

var addr = document.getElementById("Address").value;
localStorage.setItem("address", addr);

var age = document.getElementById("Age").value;
localStorage.setItem("age", age);

var dob = document.getElementById("DOB").value;
localStorage.setItem("dob", dob);

var ele = document.getElementsByName('gender');
      for(i = 0; i < ele.length; i++) {
          if(ele[i].checked)
              localStorage.setItem("gender", ele[i].value);
      }

var marriage = document.getElementById("marriage").value;
localStorage.setItem("marriage", marriage);

var phone = document.getElementById("phone").value;
localStorage.setItem("phone", phone);

var addict = document.getElementById("addict").value;
localStorage.setItem("addict", addict);

window.open("details.html", "_blank");
}

function myReset(){
    document.getElementById("regform").reset();
}
