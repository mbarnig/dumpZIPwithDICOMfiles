function extractFilesFromZip(archive) {
    var output = "<h2>List of folders in ZIP Archive</h2><ul>";
    var zip = new JSZip();
    zip.loadAsync(archive).then(function (dicomFiles) { 
        for (var j in dicomFiles.files) {
            if (dicomFiles.files[j].dir) {    // directory ?                  
                output += "<li>" + dicomFiles.files[j].name + "</li>";    
            }  // end if dir                      
        }  // end for j
        output += "</ul>";
        var content = document.getElementById("content");
        content.innerHTML = output;                              
    }); // end loadAsync
}  // end function extractFilesFromZip(archive)        