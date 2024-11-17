//your JS code here. If required.
document.getElementById("compareBtn").addEventListener("click", function () {
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");

    // Convert inputs to numbers
    num1 = Number(num1);
    num2 = Number(num2);

    // Compare and display the result
    let areEqual = num1 === num2;
    alert("Are the numbers equal? " + areEqual);
});
