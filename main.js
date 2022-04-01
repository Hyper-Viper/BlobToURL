function blobit() {
    xhr = new XMLHttpRequest();
    xhr.open("GET", "0.mp4", true);
    xhr.responseType = "blob";
    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            blob = new Blob([this.response], {type:"video/mp4"});
            blob_url = URL.createObjectURL(blob)
            console.log(blob_url);
            document.getElementById("vid").appendChild(document.createElement("source"))
            .src = blob_url;
            document.body.appendChild(a = document.createElement("a"))
            .innerHTML = "LINK"
            a.href = blob_url;
        }
        else {
            return null;
        }
    }
    xhr.send(null);
}