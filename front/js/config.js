let endpoint = "http://www.mocky.io/v2/5a9e83f43000003400234cac";
let STATUS_OK = 200;

let ajax = new XMLHttpRequest();
ajax.open("POST", endpoint, true);
ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
