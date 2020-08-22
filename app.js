const http = new easyHttp;

http.get('https://jsonplaceholder.typicode.com/posts', function(error, response) {
    if (error) {
        console.log(error, response);
    } else {
        console.log(response);
    }
})

const data = {

    title: "tit",
    body: "this is body "
}

http.post('https://jsonplaceholder.typicode.com/posts', function(error, response, data) {
    if (error) {
        console.log(error, response);
    } else {
        console.log(response);
    }
})
http.put('https://jsonplaceholder.typicode.com/posts/1', function(error, response, data) {
    if (error) {
        console.log(error, response);
    } else {
        console.log(response);
    }
})

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response) {
    if (error) {
        console.log(error, response);
    } else {
        console.log(response);
    }
})