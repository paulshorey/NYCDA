function calc() {

	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var symbol =(document.getElementById("symbol").value);

  if (symbol == "+")	{
      document.getElementById("result").value = num1 + num2;
   } else if (symbol == "-")	{
      document.getElementById("result").value = num1 - num2;
   } else if (symbol == "*")	{
      document.getElementById("result").value = num1 * num2;
   } else if (symbol == "/")	{
      document.getElementById("result").value = num1 / num2;
   } else {
      alert("Not Valid Input!");
   }
  } 