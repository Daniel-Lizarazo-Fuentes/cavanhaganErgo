function calculate() {
  //get all values from the form and make them floats (kind of number) and string for 5000m which needs to be parsed back into normal numbers
  let age = parseFloat(document.getElementById("user_Age").value);
  let weight = parseFloat(document.getElementById("user_Weight").value);
  let arm_span = parseFloat(document.getElementById("arm_span").value);
  let m100 = parseFloat(document.getElementById("m100").value);
  let m5000_String = document.getElementById("m5000").value.split(":");
  let m5000 = parseFloat(m5000_String[0]) * 60 + parseFloat(m5000_String[1]);

  let result2000 = -1;
  result2000 =
    219.367 +
    0.198 * m5000 +
    5.162 * m100 -
    0.539 * weight +
    0.308 * age -
    0.419 * arm_span;
  let result2000scull = 140.928 + 0.777 * result2000;
  let valuesScull = parseTime(result2000scull);
  let values = parseTime(result2000);
  

  let finalResult = (document.getElementById("display").innerHTML =
    "Your estimated time for 2,000m ergometer is: " +
    values.hr +
    values.min +
    values.sec +
    "<br><br>Predicted 2,000m single scull time: " +
    valuesScull.hr +
    valuesScull.min +
    valuesScull.sec);
}

function parseTime(TimeSeconds) {
  let hours = Number(Math.trunc(TimeSeconds / 3600, 0)) + " hour(s) and ";
  TimeSeconds = TimeSeconds % 3600;
  let minutes = Number(Math.trunc(TimeSeconds / 60, 0)) + " minute(s) and ";
  TimeSeconds = TimeSeconds % 60;
  let seconds = Number(Math.trunc(TimeSeconds, 0));
  TimeSeconds = TimeSeconds % 1;

  let miliSeconds = Number(Math.trunc(TimeSeconds * 1000, 0));

  if (miliSeconds >= 500) {
    seconds++;
  }
  seconds = seconds + " second(s)";
  return {
    hr: hours,
    min: minutes,
    sec: seconds,
  };
}

//rounding function
function round(num, dec) {
  const [sv, ev] = num.toString().split("e");
  return Number(
    Number(Math.round(parseFloat(sv + "e" + dec)) + "e-" + dec) +
      "e" +
      (ev || 0)
  );
}

//function to get the value of the male/female/other
function getRadioVal(form, name) {
  var val;
  // get list of radio buttons with specified name
  var radios = form.elements[name];

  // loop through list of radio buttons
  for (var i = 0, len = radios.length; i < len; i++) {
    if (radios[i].checked) {
      // radio checked?
      val = radios[i].value; // if so, hold its value in val
      break; // and break out of for loop
    }
  }
  return val; // return value of checked radio or undefined if none checked
}
