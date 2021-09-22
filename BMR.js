var little = document.getElementById("little");
var light = document.getElementById("light");
var moderate = document.getElementById("moderate");
var very = document.getElementById("very");
var sup = document.getElementById("super");



function CalBMRnTEEWomen()
{
    var age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var BMR = 655.1 + ( 9.563 * weight ) + ( 1.850 * height ) - ( 4.676 * age );
    var TEE;
    if (little.checked || light.checked)
    {
        TEE = BMR * 1.53;
    }
    else if (moderate.checked || very.checked)
    {
        TEE = BMR * 1.76;
    }
    else if (sup.checked)
    {
        TEE = BMR * 2.25;
    }
    document.write(`Your BMR is ${BMR} and your TEE is ${TEE}.`);
}
function CalcBMRnTEEMen()
{
    var age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var BMR = 66.5 + ( 13.75 * weight ) + ( 5.003 * height ) - ( 6.755 * age );
    var TEE;
    if (little.checked || light.checked)
    {
        TEE = BMR * 1.53;
    }
    else if (moderate.checked || very.checked)
    {
        TEE = BMR * 1.76;
    }
    else if (sup.checked)
    {
        TEE = BMR * 2.25;
    }
    document.write(`Your BMR is ${BMR} and your TEE is ${TEE}.`);
}
function CheckButton() {
    var maleButton = document.getElementById("male");
    var femaleButton = document.getElementById("female");
    if (maleButton.checked)
    {
        CalcBMRnTEEMen();
    }
    else if (femaleButton.checked)
    {
        CalBMRnTEEWomen();
    }
    else
    {
        alert("Please select your gender.")
    }
}



document.getElementById("submit").addEventListener("click", CheckButton, false);
