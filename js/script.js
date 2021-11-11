// links:
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/posts/{ID}
// https://jsonplaceholder.typicode.com/posts
const api_url = "https://jsonplaceholder.typicode.com/posts";
const api_url_post ="https://jsonplaceholder.typicode.com/posts/"

function getData() {
    fetch(api_url)
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw Error("something went wrong with the fetch request");
        }
    })
    .then(data => {
        console.log(data);
        var htmlANDdata = "";
        data.map(user => {
            htmlANDdata += `
            <tr id="fetched-data-tr-block">
                <td> <span id="userId-info">${user.userId}</span></td>
                <td> <span id="postId-info"><a href="./postdetails/postdetails.html" id="postId-info__raw-value">${user.id}</a></span></td>
                <td> <span id="title-info">${user.title}</span></td>
                <td> <span id="body-info">${user.body}</span></td>
            </tr>`
        })
       
        document.querySelector("#contents-table").insertAdjacentHTML("afterbegin", htmlANDdata);
    })

    .catch(errorMsg => {
        console.log(errorMsg)
    })

}



getData();


function linkData() {
    // UNFINISHED
    // the idea of this function is to get the HTML content of our JavaScript generated HTML
    // then convert it to a number and use the "api_url_post" variable url. Having the url
    // and the number we would then fetch the URL and add the number at the end so that the end
    // result would look like this if the user were to click on post ID 1:
    // "https://jsonplaceholder.typicode.com/posts/1"

    // this would let us fetch the exact URL of the post and provide us with the data that
    // corresponds to the post id instead of being provided with an array of various post details

    var htmlContent = document.getElementById("postId-info__raw-value").textContent;
    var htmlContentInt = parseInt(htmlContent, 10);
    console.log(htmlContentInt);
}
// linkData();



