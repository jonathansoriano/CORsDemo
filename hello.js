$(document).ready(function() {
    // Code inside here waits for the HTML document to fully load before executing
    $.ajax({
        url: "http://localhost:8080/greetings" //makes an HTTP request to your Spring Boot API
    }).then(function(data, status, jqxhr) { //.then() handles the successful response from your API,data: Contains the JSON response from your Spring Boot API
       $('.greeting-id').append(data.id); //It expects an object with id and content properties
       $('.greeting-content').append(data.content); //.append() adds the received data to those HTML elements
       console.log(jqxhr);
    });
});