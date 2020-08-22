function easyHttp() {
    this.http = new XMLHttpRequest();
}

easyHttp.prototype.get = function(url, callback) {

    const self = this.http;
    self.open('GET', url, true);
    self.onload = function() {
        if (self.status === 200) {
            callback(null, self.responseText);
        } else {
            callback('error', self.status);
        }
    }
    self.send();
}