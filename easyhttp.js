function easyHttp() {
    this.http = new XMLHttpRequest();
}
// GET
easyHttp.prototype.get = function(url, callback) {

    const self = this.http;
    self.open('GET', url, true);
    self.onload = function() {
        callback(null, self.responseText);
    }
    self.send();
}

// POST
easyHttp.prototype.post = function(url, callback, data) {

    const self = this.http;
    self.open('POST', url, true);
    self.setRequestHeader('Content-type', 'application/json');
    self.onload = function() {
        callback(null, self.responseText);
    }

    self.send(JSON.stringify(data));
}

// PUT 
easyHttp.prototype.put = function(url, callback, data) {
    const self = this.http;
    self.open('PUT', url, true);
    self.setRequestHeader('Content-type', 'application/json');
    self.onload = function() {
        callback(null, self.responseText);
    }

    self.send(JSON.stringify(data));
}

// Delete
easyHttp.prototype.delete = function(url, callback) {
    const self = this.http;
    self.open('DELETE', url, true);
    self.setRequestHeader('Content-type', 'application/json');
    self.onload = function() {
        callback(null, 'deleted');
    }

    self.send();
}