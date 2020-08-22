class easyhttp3 {
    // Get
    async get(url) {
            const response = await fetch(url);
            const resData = await response.json();
            return resData;
        }
        // Post
    async post(url, data) {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const resData = await response.json();
            return resData;
        }
        // Put
    async put(url, data) {
            const respnose = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const resData = respnose.json();
            return resData;
        }
        // Delete
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const resData = await 'Deleted'
        return resData;
    }
}