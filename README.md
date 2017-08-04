### dumpZIPwithDICOMfiles   ![logo](https://www.radiologic.fr/demos/radiologic-32x32.png) 
The present apps dump the folders embedded in a ZIP file in a browser web page. Public demos are available at my website :   
* load a ZIP file from a remote server : [loadZIP.html](https://www.radiologic.fr/demos/loadZIP.html)
* read a ZIP file from your computer : [readZIP.html](https://www.radiologic.fr/demos/readZIP.html)

![loadZIP](https://github.com/mbarnig/dumpZIPwithDICOMfiles/blob/master/load_zip.png)  

Informations about the DICOM standard are available in my GitHub repository [dumpDICOMDIRarchive](https://github.com/mbarnig/dumpDICOMDIRarchive).

The loadZIP app uses a XMLHttpRequest to download the remote file. For security reasons, browsers restrict such downloads if the requested source is hosted in another domain. This demo server, hosted on [Amazon Web Services](https://aws.amazon.com/) (AWS), uses the [Cross Origin Resource Sharing](https://www.w3.org/TR/cors/) (CORS) protocol to allow cross-origin requests.

The great [JSZIP library](https://stuk.github.io/jszip/), developed by Stuart Knightley and David Duponchel, is used to extract the content of ZIP archives. The related javascript file [jszip.min.js](http://github.com/Stuk/jszip/zipball/master) is not included in this project, please download it from the [JSZIP GitHub](https://github.com/Stuk/jszip).

The present repository is related to the medical project [RadioLogic](https://www.radiologic.fr/index.html).
The demos and the related documentation have been created for my own needs.
The files have been validated with the [W3C Markup Validation Service](https://validator.w3.org/) and with [JSHint](http://jshint.com/), a Javascript Code Quality Tool.
The code has been tested with the following browsers :   
* Safari 10
* iOS 10.3.1
* Firefox 54
* Chrome 60
* IE 11
* Edge 38
* Android 6.0   

I think the code may be of interest to other developers.  
If you find it useful, you are welcome.

#### Links :   
https://github.com/victornpb/jszip-utils  
http://jsfiddle.net/dvLtdsr8/3/  
https://stackoverflow.com/questions/43721964/wrapping-js-promisies-into-a-function  
https://pusher.com/sessions/meetup/viennajs/zipping-files-fun
