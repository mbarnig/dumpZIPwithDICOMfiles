function readZIP(event) {
	var file = event.target; 
    var reader = new FileReader();
    
	reader.onload = function(event) {
        var blob = new Blob([reader.result], { type: "application/zip" });                
        var elem = document.getElementById("bar");
		elem.style.width = '100%';
		elem.innerHTML = '100%';
        extractFilesFromZip(blob);
    }; // end onload
            
	reader.onerror = function(event) {
        alert("Reading Error");
    };  // end onerror
            
    reader.onprogress = function(event) {
        var elem = document.getElementById("bar"); 
        var width = 0;
		elem.innerHTML = width * 1 + '%';
        if (event.lengthComputable) {
            var percentComplete = event.loaded / event.total;
            width = parseInt(100 * percentComplete);
            elem.style.width = width + '%'; 
            elem.innerHTML = width * 1 + '%';
        } else {
            // Unable to compute progress information since the total size is unknown
            console.log("no progress indication available");
        }  // end if else length
    };  // end onprogress

    reader.readAsArrayBuffer(file.files[0]);
}  // end function readZIP(event)     
        
       