// console.log("hello from cashout")

document.getElementById("cash-out-btn").addEventListener("click", function(event)
{  
    event.preventDefault();
    // console.log("cash out button clicked");

    const cashOutInput = document.getElementById("cash-out-amount").value;
    console.log(cashOutInput);

    const cashOutPinNumber = document.getElementById("cash-out-pin").value;
    console.log(cashOutPinNumber)

    if(cashOutPinNumber === "2345")
    {
        console.log("your money is reducing");
        
        const balance = document.getElementById("current-balance").innerText;

        const currentBalance = parseFloat(balance);
        const cashOutAmount = parseFloat(cashOutInput);

        const remainingBalance = currentBalance - cashOutAmount;
        console.log(remainingBalance);
        // console.log(balance);

        // document.getElementById("current-balance").innerText = remainingBalance;
        balance.innerText = remainingBalance
    } 
    else
    {
        alert("Failed to cash out. Try again!");
    }
})