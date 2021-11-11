
const formElement = document.querySelector("form");
formElement.addEventListener("submit", (e) => {
    e.preventDefault(); //prevents form from submitting to the action attribute
    const formData = new FormData(formElement); 
    const formDataSerialized = Object.fromEntries(formData); // get what we stored in the form. Basically converts it to json format so it would be sent during the POST request

    fetch(api_url, {
        method: "POST",
        body: JSON.stringify(formDataSerialized),
        headers: {
            "Content-type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((response) =>{
        console.log(response);
        alert("Data has been sent. Check console")
    }) 
})