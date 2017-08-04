var request = new window.XMLHttpRequest();
request.responseType = "arraybuffer";

function cancel() {
	request.abort();
}  // end function cancel()

function startDownload() {
	document.getElementById("cancelButton").disabled = false;
    var elem = document.getElementById("bar"); 
	elem.style.width = '4%'; 
	elem.innerHTML = '&nbsp;1%';
    request.addEventListener("progress", updateProgress);
    request.addEventListener("load", transferComplete);
    request.addEventListener("error", transferFailed);
    request.addEventListener("abort", transferCanceled);
	request.open("GET", "https://www.radiologic.fr/dicom/spine_1.zip");
    request.send();
    
	// show progress on transfers from the server to the client (downloads)
    function updateProgress (event) {
        var elem = document.getElementById("bar"); 
        var width = 0;
        if (event.lengthComputable) {
            var percentComplete = event.loaded / event.total;
            width = parseInt(100 * percentComplete);
            elem.style.width = Math.max(4, width) + '%'; 
            elem.innerHTML = '&nbsp;' + Math.max(1, width) + '%';
        } else {
			// Unable to compute progress information since the total size is unknown
            console.log("no progress indication available");
        }  // end if else length
    }  // end function updateProgress (event)   
        
    function transferComplete(event) {
		document.getElementById("cancelButton").disabled = true;
        console.log("The transfer is complete.");
		// get binary data as response
        if(this.status == 200) {
			// var blob = new Blob([this.response], { type: "application/zip" });
			var blob = new Blob([this.response], { type: "blob" });
            extractFilesFromZip(blob);
            }  // end if status
    } // end function transferComplete(event)
        
    function transferFailed(event) {
        console.log("An error occurred while transferring the file.");
    }  // end function transferFailed(event)
        
    function transferCanceled(event) {
        alert("The transfer has been canceled by the user.");
    } // end function transferCanceled(event)
        
} // end function startDownlaod
