// console.log("hello from toggle")

// show cash out form and hide add money form 

document.getElementById("show-cash-out-btn").addEventListener("click", function()
{
    const cashOutFormContainer = document.getElementById("cash-out-form");
    cashOutFormContainer.classList.remove("hidden");
    
    document.getElementById("add-money-form").classList.add("hidden");
});

document.getElementById("show-add-money-btn").addEventListener("click", function()
{
    const addMoneyContainer = document.getElementById("add-money-form");
    addMoneyContainer.classList.remove("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
})


