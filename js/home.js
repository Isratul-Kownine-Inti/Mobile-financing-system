console.log("home.js");


document.getElementById("add-money-btn").addEventListener("click", function(event)
{
    event.preventDefault();
    console.log("button is clicked")

    const addMoneyInput = document.getElementById("amount").value;
    console.log(addMoneyInput);

    const pinNumberInput = document.getElementById("pin").value;
    console.log(pinNumberInput);

    if(pinNumberInput === "2345")
    {
        console.log("adding money to your balance");
        const balance = document.getElementById("current-balance").innerText;
        console.log(balance);

       const currentBalance = parseFloat(balance);
       const addMoneyAmount = parseFloat(addMoneyInput)
        const updatedBalance = currentBalance + addMoneyAmount;
        console.log(updatedBalance);

       document.getElementById("current-balance").innerText = updatedBalance;
    }
    else
    {
        alert("something is wrong!");
    }


})
