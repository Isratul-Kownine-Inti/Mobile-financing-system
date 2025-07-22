// console.log("from login js");

//set the event listener
document.getElementById("login-button").addEventListener("click",function(event)
{   
    //prevent the browser's default behaviour (prevent reloading browser)
    event.preventDefault();
    console.log("login button clicked")

    //get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;

    
      console.log(phoneNumber, pinNumber);

    if(phoneNumber==="5" && pinNumber==="1234")
    {
        console.log("you are logged in")
        window.location.href = "/home.html";
    } 

    else
    {
        alert("something is wrong!")
    }

})