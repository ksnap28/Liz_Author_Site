/* Read the contents of a text file */
function readTextFile(file) {

    var file_text = '';
    var rawFile = new XMLHttpRequest();

    file = file + '?_=' + new Date().getTime(); //prevents caching
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                file_text = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);

    return(file_text)
}
