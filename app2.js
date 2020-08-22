const http = new easyhttp3;
const url = 'https://jsonplaceholder.typicode.com/users';

// Get
/*
http.get(url)
    .then(res => console.log(res))
    .catch(err => console.log(err));
*/
const data = {
        name: "yasser",
        username: "Braat",
        email: "yass@april.biz"
    }
    /*
    // Post
http.post(url, data)
    .then(res => console.log(res))
    .catch(err => console.log(err));

    // Put 
http.put(url + '/1', data)
    .then(res => console.log(res))
    .catch(err => console.log(err));
*/
    // Delete
http.delete(url + '/1')
    .then(res => console.log(res))
    .catch(err => console.log(err));