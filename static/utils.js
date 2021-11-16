exports.AJAX = function (ways,url,isasync){
    let xhttp = new XMLHttpRequest();
    xhttp.open(`${ways}`,`${url}`,`${isasync}`)
    xhttp.send();
    console.log(xhttp);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         return this.responseText;
        }
    };
}