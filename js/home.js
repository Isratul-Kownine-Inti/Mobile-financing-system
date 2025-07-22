console.log("home.js");


document.getElementById("add-money-btn").addEventListener("click", function(event)
{
    event.preventDefault();
    console.log("button is clicked")

    const addMoneyInput = document.getElementById("amount").value;
    console.log(addMoneyInput);

    const pinNumberInput = document.getElementById("pin").value;
    console.log(pinNumberInput);


})
