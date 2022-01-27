const sum = (a, b, c) => {
  document.getElementById("FirstNumber").innerHTML = a;
  document.getElementById("SecondNumber").innerHTML = b;
  document.getElementById("ThirdNumber").innerHTML = c;
  const result1 = a + b + c;
  document.getElementById("Result1").innerHTML = result1;
  console.log("The sum is:" + result1);
};

sum(5, 6, 7);

const subtraction = (d, e, f) => {
  document.getElementById("ForthNumber").innerHTML = d;
  document.getElementById("FifthNumber").innerHTML = e;
  document.getElementById("SixthNumber").innerHTML = f;
  const result = d - e - f;
  document.getElementById("Result2").innerHTML = result;
};

subtraction(5, 6, 7);
