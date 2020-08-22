const http = new easyHttp;

http.get('https://jsonplaceholder.typicode.com/posts1', function(error, response) {
    if (error) {
        console.log(error, response);
    } else {
        console.log(response);
    }
})