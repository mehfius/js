function fileUploadFigure(result,data){

  Object.entries(data).forEach(([key, value]) => {

    var ext = value.filename.split('.').pop();

    switch(ext) {

      case "jpg": addUploadFiles(result,value);break;
      case "pdf": addUploadFilesPDF(result,value.filename);break;
      case "png": addUploadFilesPNG(result,value.filename);break;
      case "mp4": addUploadFilesMP4(result,value.filename);break;
    } 

  });

}